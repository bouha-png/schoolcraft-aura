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
    <section className="py-20 md:py-20 bg-background">
      <div
        ref={ref}
        className={`section-container reveal ${visible ? 'visible' : ''}`}
      >
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
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
    <div className="flex items-center gap-8">
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">
          {display}
        </p>
        <p className="text-caption mt-1">{metric.label}</p>
      </div>
    </div>
  );
}

export default SocialProof;
