import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

const metrics = [
  { value: 50, suffix: '+', label: 'établissements' },
  { value: 10000, suffix: '+', label: 'élèves' },
  { value: 34, suffix: '', label: 'modules' },
  { value: 5, suffix: '', label: "systèmes IA" },
];

const SocialProof = () => {
  const { ref, visible } = useScrollReveal(0.3);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div ref={ref} className={`section-container reveal ${visible ? 'visible' : ''}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {metrics.map((m, i) => (
            <MetricItem key={i} metric={m} active={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

function MetricItem({ metric, active }: { metric: typeof metrics[0]; active: boolean }) {
  const count = useCountUp(metric.value, active);
  const display = metric.value >= 10000
    ? `${Math.round(count / 1000)} 000${metric.suffix}`
    : `${count}${metric.suffix}`;

  return (
    <div className="text-center py-6 md:py-8 rounded-2xl" style={{ background: 'var(--gradient-soft)' }}>
      <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
        {display}
      </p>
      <p className="text-caption">{metric.label}</p>
    </div>
  );
}

export default SocialProof;
