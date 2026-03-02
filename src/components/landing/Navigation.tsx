import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Plateforme', href: '#platform' },
  { label: 'Modules', href: '#modules' },
  { label: 'Intelligence IA', href: '#ai' },
  { label: 'Tarifs', href: '#pricing' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[52px] flex items-center nav-glass transition-[border-color] duration-300 ${
          scrolled ? 'border-b border-border' : 'border-b border-transparent'
        }`}
      >
        <div className="section-container w-full flex items-center justify-between">
          <a href="#" className="font-display font-bold text-xl text-primary">
            Synapse
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground font-normal hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#demo"
            className="hidden md:inline-flex items-center h-9 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-[hsl(var(--purple-hover))] transition-colors duration-200"
          >
            Demander une démo
          </a>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col">
          <div className="h-[52px] flex items-center justify-between px-6 shrink-0">
            <span className="font-display font-bold text-xl text-primary">Synapse</span>
            <button onClick={() => setMobileOpen(false)} aria-label="Fermer le menu">
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
            <a
              href="#demo"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4"
            >
              Demander une démo
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
