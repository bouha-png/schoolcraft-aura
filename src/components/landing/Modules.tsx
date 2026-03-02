import { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import moduleAcademie from '@/assets/module-academie.jpg';
import moduleFinance from '@/assets/module-finance.jpg';
import moduleRh from '@/assets/module-rh.jpg';
import moduleCommunication from '@/assets/module-communication.jpg';
import moduleOperations from '@/assets/module-operations.jpg';
import modulePortails from '@/assets/module-portails.jpg';
import moduleAdmin from '@/assets/module-admin.jpg';

const moduleImages = [moduleAcademie, moduleFinance, moduleRh, moduleCommunication, moduleOperations, modulePortails, moduleAdmin];

const Modules = () => {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    const cardWidth = el.querySelector<HTMLElement>(':scope > div')?.offsetWidth || 400;
    const gap = 20;
    const index = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, t.modules.items.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(':scope > div')?.offsetWidth || 400;
    el.scrollBy({ left: direction === 'right' ? cardWidth : -cardWidth, behavior: 'smooth' });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(':scope > div')?.offsetWidth || 400;
    const gap = 20;
    el.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
  };

  return (
    <section id="modules" className="section-padding bg-background">
      <div ref={ref} className="section-container">
        <div className={`text-center mb-12 md:mb-16 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-overline mb-4">{t.modules.overline}</p>
          <h2 className="text-section mb-4">
            {t.modules.title} <span className="text-gradient">{t.modules.titleHighlight}</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto text-muted-foreground">
            {t.modules.subtitle}
          </p>
        </div>

        <div className={`relative reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <button
            onClick={() => scroll('left')}
            className={`hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full border border-border bg-background shadow-md transition-opacity duration-300 ${
              canScrollLeft ? 'opacity-100 hover:bg-muted' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full border border-border bg-background shadow-md transition-opacity duration-300 ${
              canScrollRight ? 'opacity-100 hover:bg-muted' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-4 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-[5] pointer-events-none" />
          )}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-4 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-[5] pointer-events-none" />
          )}

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide"
          >
            {t.modules.items.map((module, i) => (
              <div
                key={i}
                className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[calc(50%-10px)] snap-start"
              >
                <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/30 h-full flex flex-col">
                  <div className="relative">
                    <img
                      src={moduleImages[i]}
                      alt={module.label}
                      className="w-full aspect-[16/10] object-cover"
                    />
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{module.label}</span>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 leading-tight tracking-tight">
                      {module.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {module.description}
                    </p>
                    <ul className="space-y-1.5 mt-auto">
                      {module.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-sm text-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-2 md:hidden flex items-center justify-center gap-1.5">
            <ChevronLeft className="w-3 h-3" />
            {t.modules.swipeHint}
            <ChevronRight className="w-3 h-3" />
          </p>

          <div className="flex justify-center gap-2 mt-4">
            {t.modules.items.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 h-2 bg-primary'
                    : 'w-2 h-2 bg-border hover:bg-muted-foreground/40'
                }`}
                aria-label={`${t.modules.goToModule} ${i + 1}`}
              />
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-3 font-medium">
            {activeIndex + 1} / {t.modules.items.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modules;
