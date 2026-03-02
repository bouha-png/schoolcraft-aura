import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Onboarding structuré',
    description: 'Formation personnalisée par rôle. Chaque utilisateur maîtrise ses fonctions dès le premier jour.',
  },
  {
    number: '02',
    title: 'Conduite du changement',
    description: 'Professionnels certifiés. Transformation organisationnelle, pas du support technique.',
  },
  {
    number: '03',
    title: 'Optimisation continue',
    description: "Revues régulières, nouvelles fonctionnalités, mesure de l'adoption. Évolution permanente.",
  },
];

const Adoption = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section-padding surface-alt">
      <div ref={ref} className="section-container">
        <div className={`text-center max-w-[680px] mx-auto mb-16 reveal ${visible ? 'visible' : ''}`}>
          <h2 className="text-section mb-6">
            L'adoption est notre responsabilité.
          </h2>
          <p className="text-body-lg">
            Le principal facteur d'échec n'est pas le logiciel — c'est la résistance au changement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[32px] left-[16.66%] right-[16.66%] h-px border-t border-dashed border-border" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`text-center reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: visible ? `${i * 0.15}s` : '0s' }}
            >
              <p className="font-display text-6xl font-bold text-primary mb-4 relative">
                {step.number}
              </p>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adoption;
