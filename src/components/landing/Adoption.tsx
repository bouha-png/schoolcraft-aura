import { useScrollReveal } from '@/hooks/useScrollReveal';
import sectionAdoption from '@/assets/section-adoption.jpg';

const steps = [
  { number: '01', title: 'Onboarding structuré', description: 'Formation personnalisée par rôle. Chaque utilisateur maîtrise ses fonctions dès le premier jour.' },
  { number: '02', title: 'Conduite du changement', description: 'Professionnels certifiés. Transformation organisationnelle, pas du support technique.' },
  { number: '03', title: 'Optimisation continue', description: "Revues régulières, nouvelles fonctionnalités, mesure de l'adoption." },
];

const Adoption = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="section-container">
        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center reveal ${visible ? 'visible' : ''}`}>
          {/* Text */}
          <div>
            <p className="text-overline mb-4">ACCOMPAGNEMENT</p>
            <h2 className="text-section mb-6">
              L'adoption est <span className="text-gradient">notre responsabilité.</span>
            </h2>
            <p className="text-body-lg mb-10">
              Le principal facteur d'échec n'est pas le logiciel — c'est la résistance au changement.
            </p>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex gap-5 reveal ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: visible ? `${(i + 1) * 0.15}s` : '0s' }}
                >
                  <span className="font-display text-4xl font-bold text-gradient shrink-0 leading-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="feature-image aspect-square">
            <img
              src={sectionAdoption}
              alt="Équipe travaillant sur le déploiement de Synapse"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adoption;
