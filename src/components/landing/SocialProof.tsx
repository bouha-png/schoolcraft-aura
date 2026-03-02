import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { useLanguage } from '@/i18n/LanguageContext';

const values = [50, 10000, 7, 5];

const SocialProof = () => {
  const { ref, visible } = useScrollReveal(0.3);
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div ref={ref} className={`section-container reveal ${visible ? 'visible' : ''}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {t.social.metrics.map((m, i) => (
            <MetricItem key={i} value={values[i]} suffix={m.suffix} label={m.label} active={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

function MetricItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, active);
  const display = value >= 10000
    ? `${Math.round(count / 1000)} 000${suffix}`
    : `${count}${suffix}`;

  return (
    <div className="text-center py-6 md:py-8 rounded-2xl" style={{ background: 'var(--gradient-soft)' }}>
      <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
        {display}
      </p>
      <p className="text-caption">{label}</p>
    </div>
  );
}

export default SocialProof;
