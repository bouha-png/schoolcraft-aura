import heroSchool from '@/assets/hero-school.jpg';
import { useLanguage } from '@/i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroSchool}
          alt={t.hero.imgAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.65) 40%, rgba(255,255,255,0.35) 70%, rgba(255,255,255,0.75) 100%)',
          }}
        />
      </div>

      <div className="section-container relative z-10 pt-[120px] pb-[60px] md:pt-[140px] md:pb-[80px]">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-overline hero-animate hero-delay-1 mb-5">
            {t.hero.overline}
          </p>
          <h1 className="text-display hero-animate hero-delay-1 mb-6">
            {t.hero.title1}
            <br />
            <span className="text-gradient">{t.hero.titleHighlight}</span>
          </h1>
          <p className="text-body-lg hero-animate hero-delay-2 mb-10 max-w-[520px] text-foreground font-medium" style={{ textShadow: '0 1px 8px rgba(255,255,255,0.8)' }}>
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 hero-animate hero-delay-3">
            <a href="#demo" className="btn-primary w-full sm:w-auto">
              {t.hero.cta}
            </a>
            <a href="#platform" className="btn-text">
              {t.hero.discover} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
