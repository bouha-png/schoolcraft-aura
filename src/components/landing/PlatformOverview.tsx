import { Sparkles, Layers, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import heroDashboard from '@/assets/hero-dashboard.png';

const cards = [
  {
    icon: Sparkles,
    title: 'IA intégrée nativement',
    description: "Cinq systèmes d'intelligence artificielle embarqués dans chaque couche de la plateforme.",
  },
  {
    icon: Layers,
    title: '34 modules unifiés',
    description: 'Académie, finances, RH, communication, opérations — une seule source de vérité.',
  },
  {
    icon: Users,
    title: 'Chaque acteur, son espace',
    description: "Direction, enseignants, personnel, parents, élèves — au bon niveau d'accès.",
  },
];

const PlatformOverview = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="platform" className="section-padding bg-background">
      <div ref={ref} className="section-container">
        {/* Image + Text side by side */}
        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 reveal ${visible ? 'visible' : ''}`}>
          <div className="feature-image aspect-[4/3]">
            <img
              src={heroDashboard}
              alt="Tableau de bord Synapse Education"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-overline mb-4">LA PLATEFORME</p>
            <h2 className="text-section mb-6">
              Une intelligence <span className="text-gradient">de bout en bout.</span>
            </h2>
            <p className="text-body-lg">
              Synapse n'est pas un assemblage d'outils. C'est un écosystème intelligent — où chaque module, chaque donnée, chaque interaction alimente une vision unifiée de votre établissement.
            </p>
          </div>
        </div>

        {/* Three cards below */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`card-elevated p-8 md:p-10 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: visible ? `${(i + 1) * 0.15}s` : '0s' }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: 'var(--gradient-soft)' }}
              >
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
