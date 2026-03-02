import { useLanguage } from '@/i18n/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="bg-foreground text-muted-foreground pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="mb-3">
              <p className="font-display font-bold text-xl text-background">Synapse</p>
              <p className="font-display font-light text-xs text-background/40 tracking-[0.08em]">Education</p>
            </div>
            <p className="text-sm leading-relaxed opacity-60 mb-5">
              {t.footer.tagline}
            </p>
            <div className="space-y-2.5">
              <a href="mailto:contact@scanditek.ma" className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity">
                <Mail className="w-3.5 h-3.5 shrink-0" /> contact@scanditek.ma
              </a>
              <a href="tel:+2120614615816" className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity">
                <Phone className="w-3.5 h-3.5 shrink-0" /> 06 14 61 58 16
              </a>
              <div className="flex items-start gap-2 text-sm opacity-60">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Technopark, Casablanca, Maroc</span>
              </div>
              <div className="flex items-start gap-2 text-sm opacity-60">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Oslo, Norway</span>
              </div>
            </div>
          </div>
          {Object.entries(t.footer.sections).map(([title, links]) => (
            <div key={title}>
              <p className="font-display font-semibold text-sm text-background mb-4 uppercase tracking-wide">
                {title}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            {t.footer.copyright}
          </p>
          <div className="flex gap-4 text-xs">
            <button
              onClick={() => setLang('fr')}
              className={`transition-opacity ${lang === 'fr' ? 'opacity-100 font-semibold text-background' : 'opacity-50 hover:opacity-100'}`}
            >
              FR
            </button>
            <button
              onClick={() => setLang('ar')}
              className={`transition-opacity ${lang === 'ar' ? 'opacity-100 font-semibold text-background' : 'opacity-50 hover:opacity-100'}`}
            >
              AR
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
