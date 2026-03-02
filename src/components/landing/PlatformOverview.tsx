import { Sparkles, Layers, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

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
    <section id="platform" className="section-padding section-mesh relative">
      <div ref={ref} className="section-container relative z-10">
        <div className={`text-center max-w-[680px] mx-auto mb-12 md:mb-20 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-overline mb-4">LA PLATEFORME</p>
          <h2 className="text-section mb-6">
            Une intelligence <span className="text-gradient">de bout en bout.</span>
          </h2>
          <p className="text-body-lg">
            Synapse n'est pas un assemblage d'outils. C'est un écosystème intelligent — où chaque module, chaque donnée, chaque interaction alimente une vision unifiée de votre établissement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`card-glass p-10 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: visible ? `${i * 0.15}s` : '0s' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: 'var(--gradient-card)' }}>
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
