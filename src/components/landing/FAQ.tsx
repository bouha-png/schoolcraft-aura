import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section className="section-padding surface-alt">
      <div ref={ref} className="section-container">
        <div className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-overline mb-4">{t.faq.overline}</p>
          <h2 className="text-section">{t.faq.title} <span className="text-gradient">{t.faq.titleHighlight}</span></h2>
        </div>
        <div className="max-w-[720px] mx-auto">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border-b border-border reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: visible ? `${i * 0.05}s` : '0s' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                >
                  <span className="font-display text-lg font-medium text-foreground">{item.q}</span>
                  <span className="shrink-0 text-muted-foreground">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    transitionTimingFunction: 'var(--ease-apple)',
                  }}
                >
                  <p className="pb-5 text-base text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
