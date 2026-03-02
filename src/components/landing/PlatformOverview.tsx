import { useScrollReveal } from '@/hooks/useScrollReveal';
import diffAi from '@/assets/diff-ai.jpg';
import diffModules from '@/assets/diff-modules.jpg';
import diffUsers from '@/assets/diff-users.jpg';

const cards = [
  {
    image: diffAi,
    overline: 'INTELLIGENCE ARTIFICIELLE',
    title: "L'IA qui travaille pour vous — pas l'inverse.",
    value: 'Gagnez des heures chaque semaine.',
    description:
      "Création de cours, correction, emplois du temps, tutorat personnalisé — cinq systèmes d'IA intégrés nativement dans chaque couche de la plateforme. Vos équipes se concentrent sur l'essentiel : les élèves.",
  },
  {
    image: diffModules,
    overline: 'TOUT-EN-UN',
    title: 'Un seul système. Zéro friction.',
    value: 'Éliminez la complexité et les coûts cachés.',
    description:
      "34 modules unifiés — académie, finances, RH, communication, opérations — dans une seule plateforme. Fini les intégrations fragiles, les données en silos et les abonnements qui s'accumulent.",
  },
  {
    image: diffUsers,
    overline: 'CONTINUITÉ PÉDAGOGIQUE',
    title: "L'enseignement ne s'arrête jamais.",
    value: "Protégez la scolarité, quoi qu'il arrive.",
    description:
      "Chaque session planifiée est prête pour le présentiel et le distanciel. Crise sanitaire, absence prolongée, situation familiale — basculez en un clic. Aucun jour de cours perdu.",
  },
];

const PlatformOverview = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="platform" className="section-padding bg-background">
      <div ref={ref} className="section-container">
        <div className={`text-center mb-16 md:mb-24 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-overline mb-4">CE QUI NOUS DIFFÉRENCIE</p>
          <h2 className="text-section mb-6">
            Trois raisons de choisir <span className="text-gradient">Synapse.</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Ce n'est pas juste un logiciel scolaire. C'est un avantage stratégique pour votre établissement.
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: visible ? `${(i + 1) * 0.15}s` : '0s' }}
            >
              {/* Image — alternates side */}
              <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full aspect-[16/9] object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="text-overline mb-3">{card.overline}</p>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 leading-tight tracking-tight">
                  {card.title}
                </h3>
                <p
                  className="inline-block text-lg md:text-xl font-semibold mb-4 bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--gradient-cta)' }}
                >
                  {card.value}
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
