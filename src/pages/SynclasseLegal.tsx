import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { synclasseLegal, type LegalDoc, type LegalSection } from '@/i18n/synclasseLegal';

// Render one body line with minimal markup
const renderInline = (text: string) => {
  // Links [text](url)
  const parts: (string | JSX.Element)[] = [];
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = linkRe.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a key={`l-${key++}`} href={match[2]} className="text-primary hover:underline break-words">
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  // Bold **text**
  const finalParts: (string | JSX.Element)[] = [];
  parts.forEach((part, i) => {
    if (typeof part !== 'string') {
      finalParts.push(part);
      return;
    }
    const segs = part.split(/(\*\*[^*]+\*\*)/g);
    segs.forEach((seg, j) => {
      if (seg.startsWith('**') && seg.endsWith('**')) {
        finalParts.push(<strong key={`b-${i}-${j}`}>{seg.slice(2, -2)}</strong>);
      } else if (seg) {
        finalParts.push(seg);
      }
    });
  });
  return finalParts;
};

const renderBody = (lines: string[]) => {
  const out: JSX.Element[] = [];
  let listBuffer: string[] = [];
  let idx = 0;
  const flushList = () => {
    if (listBuffer.length) {
      out.push(
        <ul key={`ul-${idx++}`} className="list-disc pl-6 space-y-1.5 my-3">
          {listBuffer.map((li, i) => (
            <li key={i} className="leading-relaxed">{renderInline(li)}</li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };
  lines.forEach((raw) => {
    if (raw.startsWith('- ')) {
      listBuffer.push(raw.slice(2));
    } else if (raw.startsWith('> ')) {
      flushList();
      out.push(
        <div
          key={`hl-${idx++}`}
          className="my-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4 text-[15px] leading-relaxed"
        >
          {renderInline(raw.slice(2))}
        </div>
      );
    } else {
      flushList();
      out.push(
        <p key={`p-${idx++}`} className="leading-relaxed my-3">
          {renderInline(raw)}
        </p>
      );
    }
  });
  flushList();
  return out;
};

const DocView = ({ doc, dir }: { doc: LegalDoc; dir: 'ltr' | 'rtl' }) => (
  <article>
    <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1a1a2e] leading-tight mb-2 text-balance">
      {doc.title}
    </h1>
    <p className="text-sm text-muted-foreground mb-6">{doc.meta}</p>

    <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4 mb-8 text-[15px] leading-relaxed">
      {doc.intro}
    </div>

    <nav className="rounded-lg border border-border bg-muted/40 p-5 mb-10" aria-label={doc.tocTitle}>
      <div className="font-display font-semibold text-sm uppercase tracking-wide mb-3 text-[#1a1a2e]">
        {doc.tocTitle}
      </div>
      <ol className={`grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm ${dir === 'rtl' ? 'pr-5' : 'pl-5'} list-decimal`}>
        {doc.sections.map((s: LegalSection) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="text-primary hover:underline">
              {s.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>

    <div className="space-y-10 text-[15.5px] text-[#1d2533]">
      {doc.sections.map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-24">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1a1a2e] mb-3 flex items-baseline gap-3">
            <span className="text-primary text-sm font-mono tracking-wider">{s.num}</span>
            <span>{s.title}</span>
          </h2>
          {renderBody(s.body)}
        </section>
      ))}
    </div>
  </article>
);

const SynclasseLegal = () => {
  const { lang, t } = useLanguage();
  const location = useLocation();
  const initialTab: 'privacy' | 'terms' =
    location.pathname.includes('terms') || location.pathname.includes('cgu-synclasse')
      ? 'terms'
      : 'privacy';
  const [tab, setTab] = useState<'privacy' | 'terms'>(initialTab);
  const content = useMemo(() => synclasseLegal[lang], [lang]);

  useEffect(() => {
    document.title = `Syn'Classe — ${tab === 'privacy' ? content.tabPrivacy : content.tabTerms} | Scanditek`;
  }, [tab, content]);

  return (
    <div className="min-h-screen bg-background" dir={t.dir}>
      {/* Header band */}
      <header className="bg-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition mb-5"
          >
            <ArrowLeft className={`w-4 h-4 ${t.dir === 'rtl' ? 'rotate-180' : ''}`} /> {content.back}
          </Link>
          <div className="font-display font-bold text-2xl">{content.header}</div>
          <div className="text-xs uppercase tracking-[0.12em] text-white/50 mt-1">
            {content.subtitle}
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 flex gap-1 overflow-x-auto">
          {(['privacy', 'terms'] as const).map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`py-3.5 px-4 sm:px-5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                tab === key
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {key === 'privacy' ? content.tabPrivacy : content.tabTerms}
            </button>
          ))}
        </div>
      </div>

      {/* Doc */}
      <main className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <DocView doc={tab === 'privacy' ? content.privacy : content.terms} dir={t.dir} />
      </main>

      <footer className="max-w-3xl mx-auto px-5 sm:px-8 pb-12 pt-6 border-t border-border text-xs text-muted-foreground">
        {content.footer}
      </footer>
    </div>
  );
};

export default SynclasseLegal;
