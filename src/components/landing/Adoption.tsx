import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';
import sectionAdoption from '@/assets/section-adoption.jpg';

const Adoption = () => {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="section-container">
        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center reveal ${visible ? 'visible' : ''}`}>
          <div>
            <p className="text-overline mb-4">{t.adoption.overline}</p>
            <h2 className="text-section mb-6">
              {t.adoption.title} <span className="text-gradient">{t.adoption.titleHighlight}</span>
            </h2>
            <p className="text-body-lg mb-10">
              {t.adoption.subtitle}
            </p>
            <div className="space-y-8">
              {t.adoption.steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex gap-5 reveal ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: visible ? `${(i + 1) * 0.15}s` : '0s' }}
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
          <div className="feature-image aspect-square">
            <img
              src={sectionAdoption}
              alt={t.adoption.imgAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adoption;
