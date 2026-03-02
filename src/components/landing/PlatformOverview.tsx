import { useScrollReveal } from '@/hooks/useScrollReveal';
import diffAi from '@/assets/diff-ai.jpg';
import diffModules from '@/assets/diff-modules.jpg';
import diffUsers from '@/assets/diff-users.jpg';

const cards = [
  {
    image: diffAi,
    title: 'IA intégrée nativement',
    description: "Cinq systèmes d'intelligence artificielle embarqués dans chaque couche de la plateforme.",
  },
  {
    image: diffModules,
    title: '34 modules unifiés',
    description: 'Académie, finances, RH, communication, opérations — une seule source de vérité.',
  },
  {
    image: diffUsers,
    title: 'Chaque acteur, son espace',
    description: "Direction, enseignants, personnel, parents, élèves — au bon niveau d'accès.",
  },
];

const PlatformOverview = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="platform" className="section-padding surface-alt">
      <div ref={ref} className="section-container">
        <div className={`text-center mb-12 md:mb-20 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-overline mb-4">LA PLATEFORME</p>
          <h2 className="text-section mb-6">
            Une intelligence <span className="text-gradient">de bout en bout.</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Synapse n'est pas un assemblage d'outils. C'est un écosystème intelligent — où chaque module, chaque donnée, chaque interaction alimente une vision unifiée de votre établissement.
          </p>
        </div>

        {/* Image-driven cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`group relative rounded-3xl overflow-hidden reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: visible ? `${(i + 1) * 0.15}s` : '0s' }}
            >
              {/* Image */}
              <div className="aspect-[4/5] md:aspect-[3/4]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
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
