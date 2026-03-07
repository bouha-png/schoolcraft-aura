import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import synapseLogo from '@/assets/synapse-logo.png';
import { useLanguage } from '@/i18n/LanguageContext';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langDesktopRef = useRef<HTMLDivElement>(null);
  const langMobileRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { label: t.nav.platform, href: '#platform' },
    { label: t.nav.modules, href: '#modules' },
    { label: t.nav.ai, href: '#ai' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        langDesktopRef.current && !langDesktopRef.current.contains(e.target as Node) &&
        langMobileRef.current && !langMobileRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
      if (
        !langDesktopRef.current && langMobileRef.current && !langMobileRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
      if (
        langDesktopRef.current && !langDesktopRef.current.contains(e.target as Node) && !langMobileRef.current
      ) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const languages = [
    { code: 'fr' as const, label: 'Français', flag: '🇫🇷' },
    { code: 'ar' as const, label: 'العربية', flag: '🇲🇦' },
    { code: 'no' as const, label: 'Norsk', flag: '🇳🇴' },
    { code: 'en' as const, label: 'English', flag: '🇬🇧' },
  ];

  const currentLang = languages.find((l) => l.code === lang)!;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[56px] flex items-center nav-glass transition-all duration-300 ${
          scrolled ? 'border-b border-border shadow-sm' : 'border-b border-transparent'
        }`}
      >
        <div className="section-container w-full flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={synapseLogo} alt="Synapse Education" className="w-7 h-7 object-contain" />
            <span className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg text-gradient">Synapse</span>
              <span className="font-display font-light text-[10px] text-foreground/50 tracking-[0.08em]">Education</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/70 font-medium hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 h-9 px-3 rounded-full text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 border border-border/50 hover:border-primary/30"
              >
                <span className="text-base leading-none">{currentLang.flag}</span>
                <span>{currentLang.label}</span>
              </button>
              {langOpen && (
                <div className="absolute top-full mt-1 ltr:right-0 rtl:left-0 bg-background border border-border rounded-xl shadow-lg overflow-hidden min-w-[140px]">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                        lang === l.code
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-foreground/70 hover:bg-muted'
                      }`}
                    >
                      <span className="text-base leading-none">{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#demo"
              className="inline-flex items-center h-9 px-5 rounded-full text-sm font-semibold text-primary-foreground transition-all duration-200"
              style={{ background: 'var(--gradient-cta)', boxShadow: '0 2px 10px rgba(119,47,159,0.2)' }}
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile: language + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 h-9 px-2.5 rounded-full text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 border border-border/50"
              >
                <span className="text-base leading-none">{currentLang.flag}</span>
              </button>
              {langOpen && (
                <div className="absolute top-full mt-1 ltr:right-0 rtl:left-0 bg-background border border-border rounded-xl shadow-lg overflow-hidden min-w-[140px] z-[70]">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                        lang === l.code
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-foreground/70 hover:bg-muted'
                      }`}
                    >
                      <span className="text-base leading-none">{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="p-2"
              onClick={() => setMobileOpen(true)}
              aria-label={t.nav.openMenu}
            >
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col">
          <div className="h-[56px] flex items-center justify-between px-6 shrink-0">
            <span className="flex items-center gap-2">
              <img src={synapseLogo} alt="Synapse Education" className="w-7 h-7 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg text-gradient">Synapse</span>
                <span className="font-display font-light text-[10px] text-foreground/50 tracking-[0.08em]">Education</span>
              </span>
            </span>
            <button onClick={() => setMobileOpen(false)} aria-label={t.nav.closeMenu}>
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-display font-semibold text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a href="#demo" onClick={() => setMobileOpen(false)} className="btn-primary mt-4">
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
