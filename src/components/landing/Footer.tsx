import { useLanguage } from '@/i18n/LanguageContext';

const Footer = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="bg-foreground text-muted-foreground pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <p className="font-display font-bold text-xl text-background mb-3">
              Synapse Education
            </p>
            <p className="text-sm leading-relaxed opacity-60">
              {t.footer.tagline}
            </p>
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
