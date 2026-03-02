import { Pen, GraduationCap, CalendarClock, MessageCircle, Search, BarChart3, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';

const icons = [Pen, GraduationCap, CalendarClock, MessageCircle, Search, BarChart3];

const AISection = () => {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="ai" className="section-padding bg-background !pt-0">
      <div ref={ref} className="section-container">
        {/* Header */}
        <div className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-overline mb-4">{t.ai.overline}</p>
          <h2 className="text-section mb-4 text-foreground">
            {t.ai.title} <span className="text-gradient">{t.ai.titleHighlight}</span>
          </h2>
        </div>

        {/* Phone mockup centered */}
        <div className={`flex justify-center mb-12 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <div className="relative mx-auto w-[180px] md:w-[280px]">
            <div className="relative rounded-[2rem] md:rounded-[2.5rem] border-[4px] md:border-[6px] border-foreground/90 bg-foreground/90 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-28 h-4 md:h-6 bg-foreground/90 rounded-b-xl md:rounded-b-2xl z-10" />
              <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-black">
                <video
                  src="/videos/ai-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute top-16 md:top-24 -right-[6px] md:-right-[8px] w-[2px] md:w-[3px] h-8 md:h-12 bg-foreground/90 rounded-r-sm" />
            <div className="absolute top-12 md:top-20 -left-[6px] md:-left-[8px] w-[2px] md:w-[3px] h-6 md:h-8 bg-foreground/90 rounded-l-sm" />
            <div className="absolute top-20 md:top-32 -left-[6px] md:-left-[8px] w-[2px] md:w-[3px] h-6 md:h-8 bg-foreground/90 rounded-l-sm" />
          </div>
        </div>

        {/* Subtitle as styled heading */}
        <div className={`text-center max-w-[700px] mx-auto mb-12 reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-snug">
            <span className="md:hidden">{t.ai.subtitleShort}</span>
            <span className="hidden md:inline">{t.ai.subtitle}</span>
          </h3>
        </div>

        {/* Systems grid */}
        <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {t.ai.systems.map((system, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className={`card-elevated p-5 relative overflow-hidden reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: visible ? `${0.2 + i * 0.08}s` : '0s' }}
              >
                <span className="absolute top-3 ltr:left-3 rtl:right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide text-primary-foreground" style={{ background: 'var(--gradient-cta)' }}>
                  <Sparkles className="w-3 h-3" />
                  IA
                </span>
                <div className="flex items-center gap-2 mb-3 mt-1">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'var(--gradient-soft)' }}
                  >
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-primary" style={{ background: 'var(--gradient-soft)' }}>
                    {system.badge}
                  </span>
                </div>
                <h5 className="font-display text-sm font-semibold text-foreground mb-1">{system.title}</h5>
                <p className="text-xs text-muted-foreground leading-relaxed">{system.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AISection;
