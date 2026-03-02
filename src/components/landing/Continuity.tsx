import { Zap, Video, PlayCircle, Link } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';
import sectionContinuity from '@/assets/section-continuity.jpg';

const cardIcons = [Zap, Video, PlayCircle, Link];

const Continuity = () => {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section className="section-padding surface-alt">
      <div ref={ref} className="section-container">
        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center reveal ${visible ? 'visible' : ''}`}>
          <div className="feature-image aspect-[4/3]">
            <img
              src={sectionContinuity}
              alt={t.continuity.imgAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-overline mb-4">{t.continuity.overline}</p>
            <h2 className="text-section mb-6 text-foreground">
              {t.continuity.title} <span className="text-gradient">{t.continuity.titleHighlight}</span>
            </h2>
            <p className="text-body mb-10">
              {t.continuity.subtitle}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {t.continuity.cards.map((card, i) => {
                const Icon = cardIcons[i];
                return (
                  <div
                    key={i}
                    className={`card-elevated p-5 reveal ${visible ? 'visible' : ''}`}
                    style={{ transitionDelay: visible ? `${(i + 1) * 0.1}s` : '0s' }}
                  >
                    <Icon className="w-5 h-5 text-primary mb-3" />
                    <h3 className="font-display text-sm font-semibold text-foreground mb-1">{card.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Continuity;
