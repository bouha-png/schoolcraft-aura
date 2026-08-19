import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import portalChoice from '@/i18n/portalChoice';
import educationAsset from '@/assets/portal-education-v2.png.asset.json';
import associationsAsset from '@/assets/portal-associations-v2.png.asset.json';
import scanditekLogo from '@/assets/scanditek-logo.png.asset.json';

const languages = [
  { code: 'fr' as const, label: 'Français', short: 'FR', flag: '🇫🇷' },
  { code: 'ar' as const, label: 'العربية', short: 'AR', flag: '🇲🇦' },
  { code: 'no' as const, label: 'Norsk', short: 'NO', flag: '🇳🇴' },
  { code: 'en' as const, label: 'English', short: 'EN', flag: '🇬🇧' },
];

const PortalChoice = () => {
  const { lang, setLang } = useLanguage();
  const c = portalChoice[lang] ?? portalChoice.fr;
  const isRtl = lang === 'ar';
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const currentLang = languages.find((l) => l.code === lang) ?? languages[0];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!langRef.current?.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);


  const legal = {
    privacy: lang === 'no' ? 'Personvern' : lang === 'en' ? 'Privacy' : lang === 'ar' ? 'الخصوصية' : 'Confidentialité',
    terms: lang === 'no' ? 'Vilkår' : lang === 'en' ? 'Terms' : lang === 'ar' ? 'الشروط' : 'CGU',
    synclasse: lang === 'ar' ? "سين'كلاس قانوني" : "Syn'Classe " + (lang === 'no' ? 'juridisk' : lang === 'fr' ? 'légal' : 'legal'),
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{
        background:
          'radial-gradient(ellipse 90% 70% at 0% 0%, #020205 0%, #03030a 22%, #050311 40%, #0a0a24 65%, #1d1150 100%)',
      }}
    >
      {/* Brand ambience — deep, dark upper-left to match ScandiTek logo background */}
      <div className="pointer-events-none absolute -top-48 -left-40 w-[720px] h-[720px] rounded-full blur-[160px] opacity-[0.22] bg-[#1a103c]" />
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
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-2xl overflow-hidden portal-float shrink-0 bg-transparent">
            <img
              src={scanditekLogo.url}
              alt="ScandiTek"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <p className="font-display font-bold text-sm md:text-base text-white tracking-wide">ScandiTek</p>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-white/40">Future Technology</p>
          </div>
        </div>

        <div ref={langRef} className="relative">
          <button
            onClick={() => setLangOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={langOpen}
            className="flex items-center gap-1.5 h-9 px-3 rounded-full border border-white/15 bg-white/5 backdrop-blur text-xs font-semibold text-white/80 hover:text-white hover:border-white/30 transition-colors"
          >
            <span className="text-base leading-none">{currentLang.flag}</span>
            <span className="hidden sm:inline">{currentLang.label}</span>
            <span className="sm:hidden">{currentLang.short}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
          </button>
          {langOpen && (
            <div className="absolute top-full mt-2 ltr:right-0 rtl:left-0 min-w-[150px] rounded-xl border border-white/15 bg-[#0d0a1c]/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setLangOpen(false); }}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                    lang === l.code ? 'bg-primary/25 text-white font-semibold' : 'text-white/70 hover:bg-white/10'
                  }`}
                >
                  <span className="text-base leading-none">{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
          )}
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
          <p className="text-[15px] leading-relaxed sm:text-body-lg !text-white/65 hero-animate hero-delay-3">{c.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 max-w-5xl w-full mx-auto">
          {/* Education */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <p
              className={`text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#c4aaff] hero-animate hero-delay-3 ${
                isRtl ? 'text-right' : 'text-left'
              }`}
            >
              {c.educationTitle}
            </p>
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
                <div className={`absolute inset-x-0 bottom-0 p-3 sm:p-6 md:p-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <p className="text-[8px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c4aaff] mb-1 sm:mb-2 truncate">
                    {c.education.tagline}
                  </p>
                  <h2 className="font-display font-bold text-white mb-2 sm:mb-3 leading-[1.15]">
                    <span className="block text-[11px] sm:text-base font-medium text-white/60 tracking-wide">Synapse</span>
                    <span className="block text-lg sm:text-2xl md:text-[1.75rem]">{c.education.shortName}</span>
                  </h2>
                  <p className="hidden sm:block text-sm leading-relaxed text-white/70 mb-6">{c.education.description}</p>
                  <span
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 h-8 sm:h-11 px-3 sm:px-6 rounded-full text-[11px] sm:text-sm font-semibold whitespace-nowrap text-primary-foreground transition-all duration-300 group-hover:gap-3"
                    style={{ background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-btn)' }}
                  >
                    <span className="sm:hidden">{c.education.ctaShort}</span>
                    <span className="hidden sm:inline">{c.education.cta}</span>
                    <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Associations */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <p
              className={`text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#c4aaff] hero-animate hero-delay-3 ${
                isRtl ? 'text-right' : 'text-left'
              }`}
            >
              {c.associationTitle}
            </p>
            <div
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hero-animate hero-delay-3"
              style={{ boxShadow: '0 30px 80px -30px rgba(0,0,0,0.9)' }}
            >
              <span className="absolute z-20 top-2.5 sm:top-5 ltr:right-2.5 sm:ltr:right-5 rtl:left-2.5 sm:rtl:left-5 text-[8px] sm:text-[11px] font-semibold tracking-wide uppercase px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/15 text-white backdrop-blur border border-white/15">
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
                <div className={`absolute inset-x-0 bottom-0 p-3 sm:p-6 md:p-8 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <p className="text-[8px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c4aaff] mb-1 sm:mb-2 truncate">
                    {c.association.tagline}
                  </p>
                  <h2 className="font-display font-bold text-white mb-2 sm:mb-3 leading-[1.15]">
                    <span className="block text-[11px] sm:text-base font-medium text-white/60 tracking-wide">Synapse</span>
                    <span className="block text-lg sm:text-2xl md:text-[1.75rem]">{c.association.shortName}</span>
                  </h2>
                  <p className="hidden sm:block text-sm leading-relaxed text-white/70 mb-6">{c.association.description}</p>
                  <span className="inline-flex items-center justify-center gap-1.5 sm:gap-2 h-8 sm:h-11 px-3 sm:px-6 rounded-full text-[11px] sm:text-sm font-semibold whitespace-nowrap border border-white/25 text-white/60">
                    <span className="sm:hidden">{c.association.ctaShort}</span>
                    <span className="hidden sm:inline">{c.association.cta}</span>
                    <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer
        className="relative z-10 border-t border-white/10"
        style={{ background: 'linear-gradient(180deg, #0a0514 0%, #120820 50%, #1a0d2e 100%)' }}
      >
        <div className="section-container py-8 md:py-10">
          <div className={`grid gap-6 md:grid-cols-3 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="flex items-start gap-3">
              <div className="relative w-11 h-11 md:w-14 md:h-14 rounded-2xl overflow-hidden shrink-0 bg-transparent">
                <img src={scanditekLogo.url} alt="ScandiTek" className="absolute inset-0 w-full h-full object-cover" />
              </div>
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
