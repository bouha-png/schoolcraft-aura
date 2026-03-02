import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import synapseLogo from '@/assets/synapse-logo.png';
import { useLanguage } from '@/i18n/LanguageContext';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { label: t.nav.platform, href: '#platform' },
    { label: t.nav.modules, href: '#modules' },
    { label: t.nav.ai, href: '#ai' },
    { label: t.nav.pricing, href: '#pricing' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'fr' ? 'ar' : 'fr');

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[56px] flex items-center nav-glass transition-all duration-300 ${
          scrolled ? 'border-b border-border shadow-sm' : 'border-b border-transparent'
        }`}
      >
        <div className="section-container w-full flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-xl text-gradient">
            <img src={synapseLogo} alt="Synapse Education" className="w-7 h-7 object-contain" />
            Synapse Education
          </a>
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
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 h-9 px-3 rounded-full text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 border border-border/50 hover:border-primary/30"
            >
              <Globe className="w-4 h-4" />
              {lang === 'fr' ? 'العربية' : 'Français'}
            </button>
            <a
              href="#demo"
              className="inline-flex items-center h-9 px-5 rounded-full text-sm font-semibold text-primary-foreground transition-all duration-200"
              style={{ background: 'var(--gradient-cta)', boxShadow: '0 2px 10px rgba(119,47,159,0.2)' }}
            >
              {t.nav.cta}
            </a>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label={t.nav.openMenu}
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col">
          <div className="h-[56px] flex items-center justify-between px-6 shrink-0">
            <span className="flex items-center gap-2 font-display font-bold text-xl text-gradient">
              <img src={synapseLogo} alt="Synapse Education" className="w-7 h-7 object-contain" />
              Synapse Education
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
            <button
              onClick={() => { toggleLang(); setMobileOpen(false); }}
              className="flex items-center gap-2 text-lg font-medium text-foreground/70"
            >
              <Globe className="w-5 h-5" />
              {lang === 'fr' ? 'العربية' : 'Français'}
            </button>
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
