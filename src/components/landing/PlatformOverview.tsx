import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';
import diffAi from '@/assets/diff-ai.jpg';
import diffModules from '@/assets/diff-modules.jpg';
import diffUsers from '@/assets/diff-users.jpg';
import diffFormation from '@/assets/diff-formation.jpg';

const images = [diffAi, diffModules, diffUsers, diffFormation];

const PlatformOverview = () => {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="platform" className="section-padding bg-background">
      <div ref={ref} className="section-container">
        <div className={`text-center mb-16 md:mb-24 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-overline mb-4">{t.platform.overline}</p>
          <h2 className="text-section mb-6">
            {t.platform.title} <span className="text-gradient">{t.platform.titleHighlight}</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            {t.platform.subtitle}
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {t.platform.cards.map((card, i) => (
            <div
              key={i}
              className={`max-w-4xl mx-auto reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: visible ? `${(i + 1) * 0.15}s` : '0s' }}
            >
              {/* Overline + Title */}
              <div className="text-center mb-8">
                <p className="text-overline mb-3">{card.overline}</p>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight tracking-tight">
                  {card.title}
                </h3>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
                <img
                  src={images[i]}
                  alt={card.title}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>

              {/* Value + Description */}
              <div className="text-center max-w-2xl mx-auto">
                <p
                  className="inline-block text-lg md:text-xl font-semibold mb-3 bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--gradient-cta)' }}
                >
                  {card.value}
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
