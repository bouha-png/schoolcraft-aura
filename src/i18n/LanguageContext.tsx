import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import fr from './fr';
import ar from './ar';
import no from './no';
import en from './en';

type Lang = 'fr' | 'ar' | 'no' | 'en';
type Translations = {
  dir: 'ltr' | 'rtl';
  nav: typeof fr.nav;
  contact: typeof fr.contact;
  hero: typeof fr.hero;
  social: { metrics: { suffix: string; label: string }[] };
  platform: { overline: string; title: string; titleHighlight: string; subtitle: string; cards: { overline: string; title: string; value: string; description: string }[] };
  modules: { overline: string; title: string; titleHighlight: string; subtitle: string; swipeHint: string; goToModule: string; items: { label: string; title: string; description: string; features: string[] }[] };
  portals: { overline: string; title: string; titleHighlight: string; subtitle: string; imgAlt: string; roles: { title: string; description: string; icon: string }[]; features: { title: string; description: string }[] };
  ai: { overline: string; title: string; titleHighlight: string; subtitleShort: string; subtitle: string; systems: { title: string; description: string; badge: string }[] };
  continuity: { overline: string; title: string; titleHighlight: string; subtitle: string; imgAlt: string; cards: { title: string; description: string }[] };
  adoption: { overline: string; title: string; titleHighlight: string; subtitle: string; imgAlt: string; steps: { number: string; title: string; description: string }[] };
  scanditek: { overline: string; title: string; titleHighlight: string; description: string; quote: string; values: { title: string; description: string }[] };
  pricing: { overline: string; title: string; titleHighlight: string; subtitle: string; ctaTitle: string; ctaDescription: string; ctaButton: string };
  finalCta: { overline: string; title: string; titleHighlight: string; subtitle: string; cta: string };
  footer: { tagline: string; sections: Record<string, string[]>; copyright: string };
};

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {},
  t: fr,
});

const translations: Record<Lang, Translations> = { fr, ar, no, en };

const defaultLang: Lang = 'fr';
const isLang = (value: string | null): value is Lang => value === 'fr' || value === 'ar' || value === 'no' || value === 'en';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const savedLang = localStorage.getItem('synapse-lang');
    if (isLang(savedLang)) return savedLang;
    localStorage.removeItem('synapse-lang');
    return defaultLang;
  });

  const t = translations[lang] ?? fr;

  useEffect(() => {
    localStorage.setItem('synapse-lang', lang);
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
