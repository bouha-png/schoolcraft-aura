import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';
import sectionAdoption from '@/assets/section-adoption.jpg';

const Adoption = () => {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="section-container">
        {/* Header */}
        <div className={`text-center mb-6 md:mb-12 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-overline mb-4">{t.adoption.overline}</p>
          <h2 className="text-section mb-4">
            {t.adoption.title} <span className="text-gradient">{t.adoption.titleHighlight}</span>
          </h2>
        </div>

        {/* Mobile image - between title and subtitle */}
        <div className={`md:hidden rounded-2xl overflow-hidden shadow-xl mb-6 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.05s' }}>
          <img
            src={sectionAdoption}
            alt={t.adoption.imgAlt}
            className="w-full object-cover aspect-[16/9]"
          />
        </div>

        {/* Subtitle */}
        <div className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <p className="text-body-lg max-w-[600px] mx-auto">
            {t.adoption.subtitle}
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          {/* Desktop image */}
          <div className="hidden md:block relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={sectionAdoption}
              alt={t.adoption.imgAlt}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {t.adoption.steps.map((step, i) => (
              <div
                key={i}
                className={`flex gap-5 reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: visible ? `${0.2 + (i + 1) * 0.15}s` : '0s' }}
              >
                <span className="font-display text-4xl font-bold text-gradient shrink-0 leading-none">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adoption;
