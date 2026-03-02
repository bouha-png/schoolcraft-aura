import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';
import diffAi from '@/assets/diff-ai.jpg';
import diffModules from '@/assets/diff-modules.jpg';
import diffUsers from '@/assets/diff-users.jpg';

const images = [diffAi, diffModules, diffUsers];

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
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: visible ? `${(i + 1) * 0.15}s` : '0s' }}
            >
              <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={images[i]}
                    alt={card.title}
                    className="w-full aspect-[16/9] object-cover"
                  />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="text-overline mb-3">{card.overline}</p>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 leading-tight tracking-tight">
                  {card.title}
                </h3>
                <p
                  className="inline-block text-lg md:text-xl font-semibold mb-4 bg-clip-text text-transparent"
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
