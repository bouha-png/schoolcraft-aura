import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import portalChoice from '@/i18n/portalChoice';
import synapseLogo from '@/assets/synapse-logo.png';
import associationAsset from '@/assets/synapse-association.png.asset.json';

const languages = [
  { code: 'fr' as const, label: 'FR' },
  { code: 'ar' as const, label: 'AR' },
  { code: 'no' as const, label: 'NO' },
  { code: 'en' as const, label: 'EN' },
];

const PortalChoice = () => {
  const { lang, setLang } = useLanguage();
  const c = portalChoice[lang] ?? portalChoice.fr;
  const isRtl = lang === 'ar';

  return (
    <div className="relative min-h-screen overflow-hidden bg-background flex flex-col">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'var(--gradient-soft)' }}
      />
      <div className="pointer-events-none absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-40 bg-primary/25" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 w-[560px] h-[560px] rounded-full blur-3xl opacity-30 bg-accent/20" />

      {/* Language switcher */}
      <div className="relative z-10 flex justify-end px-6 pt-6 md:px-12">
        <div className="flex items-center gap-1 rounded-full border border-border/60 bg-background/70 backdrop-blur px-1.5 py-1 shadow-sm">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                lang === l.code
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground/60 hover:text-primary'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <main className="relative z-10 flex-1 flex flex-col justify-center section-container py-10 md:py-16">
        <div className={`text-center max-w-2xl mx-auto mb-12 md:mb-16 ${isRtl ? 'rtl' : ''}`}>
          <p className="text-overline mb-4">{c.overline}</p>
          <h1 className="text-section mb-5">
            {c.title} <span className="text-gradient">{c.titleHighlight}</span>
          </h1>
          <p className="text-body-lg">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl w-full mx-auto">
          {/* Education */}
          <Link
            to="/education"
            className="group relative flex flex-col items-center text-center rounded-3xl border border-border/70 bg-background/80 backdrop-blur-xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-1.5"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'var(--gradient-soft)' }}
            />
            <div className="relative">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-secondary/60 flex items-center justify-center mb-7 mx-auto overflow-hidden">
                <img src={synapseLogo} alt="Synapse Education" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
              </div>
              <h2 className="font-display text-2xl md:text-[1.75rem] font-bold text-foreground mb-2">
                {c.education.name}
              </h2>
              <p className="text-overline mb-4">{c.education.tagline}</p>
              <p className="text-body mb-8">{c.education.description}</p>
              <span
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full text-sm font-semibold text-primary-foreground transition-transform duration-300 group-hover:gap-3"
                style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-btn)' }}
              >
                {c.education.cta}
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </span>
            </div>
          </Link>

          {/* Associations */}
          <div
            className="group relative flex flex-col items-center text-center rounded-3xl border border-border/70 bg-background/80 backdrop-blur-xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-1.5"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <span className="absolute top-5 ltr:right-5 rtl:left-5 text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-secondary text-muted-foreground">
              {c.association.badge}
            </span>
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center mb-7 mx-auto overflow-hidden">
              <img
                src={associationAsset.url}
                alt={c.association.name}
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <h2 className="font-display text-2xl md:text-[1.75rem] font-bold text-foreground mb-2">
              {c.association.name}
            </h2>
            <p className="text-overline mb-4">{c.association.tagline}</p>
            <p className="text-body mb-8">{c.association.description}</p>
            <span className="inline-flex items-center gap-2 h-11 px-6 rounded-full text-sm font-semibold border border-border text-foreground/50">
              {c.association.cta}
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </span>
          </div>
        </div>
      </main>

      <footer className="relative z-10 py-8 text-center">
        <p className="text-caption">{c.footer}</p>
      </footer>
    </div>
  );
};

export default PortalChoice;
