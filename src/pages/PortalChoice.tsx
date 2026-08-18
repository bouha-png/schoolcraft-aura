import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import portalChoice from '@/i18n/portalChoice';
import educationAsset from '@/assets/portal-education.png.asset.json';
import associationsAsset from '@/assets/portal-associations.png.asset.json';

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
    <div
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: 'linear-gradient(160deg, #070b1e 0%, #10123a 45%, #1d1150 100%)' }}
    >
      {/* Brand ambience */}
      <div className="pointer-events-none absolute -top-40 -left-32 w-[620px] h-[620px] rounded-full blur-[140px] opacity-50 bg-[#4b2ecc]" />
      <div className="pointer-events-none absolute -bottom-52 -right-32 w-[680px] h-[680px] rounded-full blur-[150px] opacity-40 bg-[#772F9F]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black, transparent 75%)',
        }}
      />

      {/* Language switcher */}
      <div className="relative z-10 flex justify-end px-6 pt-6 md:px-12">
        <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 backdrop-blur px-1.5 py-1">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                lang === l.code ? 'bg-primary text-primary-foreground' : 'text-white/60 hover:text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <main className="relative z-10 flex-1 flex flex-col justify-center section-container py-10 md:py-16">
        <div className={`text-center max-w-2xl mx-auto mb-10 md:mb-14 ${isRtl ? 'rtl' : ''}`}>
          <p className="text-overline mb-4 text-[#b79bff]">{c.overline}</p>
          <h1 className="text-section mb-5 !text-white">
            {c.title}{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(100deg,#a78bfa,#e0c3fc,#7c5cff)' }}
            >
              {c.titleHighlight}
            </span>
          </h1>
          <p className="text-body-lg !text-white/65">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl w-full mx-auto">
          {/* Education */}
          <Link
            to="/education"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/25"
            style={{ boxShadow: '0 30px 80px -30px rgba(0,0,0,0.9)' }}
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
              <img
                src={educationAsset.url}
                alt={c.education.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(7,11,30,0) 35%, rgba(7,11,30,0.85) 78%, rgba(7,11,30,0.97) 100%)' }}
              />
              <div className={`absolute inset-x-0 bottom-0 p-6 md:p-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b79bff] mb-2">
                  {c.education.tagline}
                </p>
                <h2 className="font-display text-2xl md:text-[1.75rem] font-bold text-white mb-3">
                  {c.education.name}
                </h2>
                <p className="text-sm leading-relaxed text-white/70 mb-6">{c.education.description}</p>
                <span
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-full text-sm font-semibold text-primary-foreground transition-all duration-300 group-hover:gap-3"
                  style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-btn)' }}
                >
                  {c.education.cta}
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </span>
              </div>
            </div>
          </Link>

          {/* Associations */}
          <div
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
            style={{ boxShadow: '0 30px 80px -30px rgba(0,0,0,0.9)' }}
          >
            <span className="absolute z-20 top-5 ltr:right-5 rtl:left-5 text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-white/15 text-white backdrop-blur">
              {c.association.badge}
            </span>
            <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
              <img
                src={associationsAsset.url}
                alt={c.association.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(7,11,30,0) 35%, rgba(7,11,30,0.85) 78%, rgba(7,11,30,0.97) 100%)' }}
              />
              <div className={`absolute inset-x-0 bottom-0 p-6 md:p-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b79bff] mb-2">
                  {c.association.tagline}
                </p>
                <h2 className="font-display text-2xl md:text-[1.75rem] font-bold text-white mb-3">
                  {c.association.name}
                </h2>
                <p className="text-sm leading-relaxed text-white/70 mb-6">{c.association.description}</p>
                <span className="inline-flex items-center gap-2 h-11 px-6 rounded-full text-sm font-semibold border border-white/25 text-white/60">
                  {c.association.cta}
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 py-8 text-center">
        <p className="text-caption !text-white/45">{c.footer}</p>
      </footer>
    </div>
  );
};

export default PortalChoice;
