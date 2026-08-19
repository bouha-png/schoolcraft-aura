import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import portalChoice from '@/i18n/portalChoice';
import educationAsset from '@/assets/portal-education-v2.png.asset.json';
import associationsAsset from '@/assets/portal-associations-v2.png.asset.json';
import scanditekLogo from '@/assets/scanditek-logo.png.asset.json';

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

  const legal = {
    privacy: lang === 'no' ? 'Personvern' : lang === 'en' ? 'Privacy' : lang === 'ar' ? 'الخصوصية' : 'Confidentialité',
    terms: lang === 'no' ? 'Vilkår' : lang === 'en' ? 'Terms' : lang === 'ar' ? 'الشروط' : 'CGU',
    synclasse: lang === 'ar' ? "سين'كلاس قانوني" : "Syn'Classe " + (lang === 'no' ? 'juridisk' : lang === 'fr' ? 'légal' : 'legal'),
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: 'linear-gradient(160deg, #070b1e 0%, #10123a 45%, #1d1150 100%)' }}
    >
      {/* Brand ambience */}
      <div className="pointer-events-none absolute -top-40 -left-32 w-[620px] h-[620px] rounded-full blur-[140px] opacity-50 bg-[#4b2ecc] portal-drift" />
      <div className="pointer-events-none absolute -bottom-52 -right-32 w-[680px] h-[680px] rounded-full blur-[150px] opacity-40 bg-[#772F9F] portal-drift-alt" />
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

      {/* Header: brand + language switcher */}
      <header className="relative z-10 flex items-center justify-between gap-4 px-5 pt-5 md:px-12 md:pt-8 hero-animate hero-delay-1">
        <div className="flex items-center gap-3">
          <img
            src={scanditekLogo.url}
            alt="ScandiTek"
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover portal-float"
            style={{ boxShadow: '0 12px 30px -12px rgba(119,47,159,0.9)' }}
          />
          <div className="leading-tight">
            <p className="font-display font-bold text-sm md:text-base text-white tracking-wide">ScandiTek</p>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-white/40">Future Technology</p>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 backdrop-blur px-1.5 py-1">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-2.5 md:px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                lang === l.code ? 'bg-primary text-primary-foreground' : 'text-white/60 hover:text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col justify-center section-container py-10 md:py-14">
        <div className={`text-center max-w-2xl mx-auto mb-10 md:mb-14 ${isRtl ? 'rtl' : ''}`}>
          <p className="text-overline mb-4 text-[#b79bff] hero-animate hero-delay-1">{c.overline}</p>
          <h1 className="text-section mb-5 !text-white hero-animate hero-delay-2">
            {c.title}{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(100deg,#a78bfa,#e0c3fc,#7c5cff)' }}
            >
              {c.titleHighlight}
            </span>
          </h1>
          <p className="text-body-lg !text-white/65 hero-animate hero-delay-3">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 max-w-5xl w-full mx-auto">
          {/* Education */}
          <Link
            to="/education"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hero-animate hero-delay-3"
            style={{ boxShadow: '0 30px 80px -30px rgba(0,0,0,0.9)' }}
          >
            <div className="relative aspect-[3/5] sm:aspect-[3/4] overflow-hidden portal-sheen">
              <img
                src={educationAsset.url}
                alt={c.education.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(7,11,30,0) 30%, rgba(7,11,30,0.45) 60%, rgba(7,11,30,0.85) 100%)' }}
              />
              <div className={`absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                <p className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c4aaff] mb-1.5 sm:mb-2">
                  {c.education.tagline}
                </p>
                <h2 className="font-display text-base sm:text-2xl md:text-[1.75rem] font-bold text-white mb-1.5 sm:mb-3 leading-tight">
                  {c.education.name}
                </h2>
                <p className="hidden sm:block text-sm leading-relaxed text-white/70 mb-6">{c.education.description}</p>
                <span
                  className="inline-flex items-center gap-1.5 sm:gap-2 h-8 sm:h-11 px-3.5 sm:px-6 rounded-full text-[10px] sm:text-sm font-semibold whitespace-nowrap text-primary-foreground transition-all duration-300 group-hover:gap-3"
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
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hero-animate hero-delay-3"
            style={{ boxShadow: '0 30px 80px -30px rgba(0,0,0,0.9)' }}
          >
            <span className="absolute z-20 top-3 sm:top-5 ltr:right-3 sm:ltr:right-5 rtl:left-3 sm:rtl:left-5 text-[9px] sm:text-[11px] font-semibold tracking-wide uppercase px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/15 text-white backdrop-blur">
              {c.association.badge}
            </span>
            <div className="relative aspect-[3/5] sm:aspect-[3/4] overflow-hidden portal-sheen">
              <img
                src={associationsAsset.url}
                alt={c.association.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(7,11,30,0) 30%, rgba(7,11,30,0.45) 60%, rgba(7,11,30,0.85) 100%)' }}
              />
              <div className={`absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                <p className="text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c4aaff] mb-1.5 sm:mb-2">
                  {c.association.tagline}
                </p>
                <h2 className="font-display text-base sm:text-2xl md:text-[1.75rem] font-bold text-white mb-1.5 sm:mb-3 leading-tight">
                  {c.association.name}
                </h2>
                <p className="hidden sm:block text-sm leading-relaxed text-white/70 mb-6">{c.association.description}</p>
                <span className="inline-flex items-center gap-1.5 sm:gap-2 h-8 sm:h-11 px-3.5 sm:px-6 rounded-full text-[10px] sm:text-sm font-semibold whitespace-nowrap border border-white/25 text-white/60">
                  {c.association.cta}
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-white/[0.03] backdrop-blur-sm">
        <div className="section-container py-8 md:py-10">
          <div className={`grid gap-6 md:grid-cols-3 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="flex items-start gap-3">
              <img src={scanditekLogo.url} alt="ScandiTek" className="w-9 h-9 rounded-lg object-cover shrink-0" />
              <div>
                <p className="font-display font-bold text-sm text-white">ScandiTek</p>
                <p className="text-xs text-white/45 leading-relaxed mt-1">{c.footer}</p>
              </div>
            </div>

            <div className="space-y-2">
              <a href="mailto:contact@scanditek.ma" className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 shrink-0" /> contact@scanditek.ma
              </a>
              <a href="tel:+212614615816" className="flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 shrink-0" /> +212 6 14 61 58 16
              </a>
            </div>

            <div className="space-y-2">
              <p className="flex items-center gap-2 text-sm text-white/55">
                <MapPin className="w-3.5 h-3.5 shrink-0" /> Technopark, Casablanca, Maroc
              </p>
              <p className="flex items-center gap-2 text-sm text-white/55">
                <MapPin className="w-3.5 h-3.5 shrink-0" /> Oslo, Norway
              </p>
            </div>
          </div>

          <div className="mt-7 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/35">© {new Date().getFullYear()} ScandiTek. Synapse Education · Synapse Associations</p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
              <Link to="/confidentialite" className="text-white/50 hover:text-white transition-colors">{legal.privacy}</Link>
              <Link to="/cgu" className="text-white/50 hover:text-white transition-colors">{legal.terms}</Link>
              <Link to="/synclasse-legal" className="text-white/50 hover:text-white transition-colors">{legal.synclasse}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortalChoice;
