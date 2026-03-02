import { Shield, Target, Globe, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/i18n/LanguageContext';

const valueIcons = [Shield, Target, Globe, CheckCircle];

const ScandiTek = () => {
  const { ref, visible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section className="section-padding surface-alt">
      <div ref={ref} className="section-container">
        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <div>
            <p className="text-overline mb-4">{t.scanditek.overline}</p>
            <h2 className="text-section mb-6">
              {t.scanditek.title} <span className="text-gradient">{t.scanditek.titleHighlight}</span>
            </h2>
            <p className="text-body-lg mb-6">
              {t.scanditek.description}
            </p>
            <p className="text-lg italic text-primary font-display">
              {t.scanditek.quote}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {t.scanditek.values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <div
                  key={i}
                  className={`card-elevated p-6 text-center reveal ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: visible ? `${i * 0.12}s` : '0s' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: 'var(--gradient-soft)' }}>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">{v.title}</h3>
                  <p className="text-xs text-muted-foreground">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScandiTek;
