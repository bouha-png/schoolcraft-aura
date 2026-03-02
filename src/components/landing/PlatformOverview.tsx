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
    <section id="platform" className="section-padding surface-alt">
      <div ref={ref} className="section-container">
        <div className={`text-center max-w-[680px] mx-auto mb-12 md:mb-16 reveal ${visible ? 'visible' : ''}`}>
          <h2 className="text-section mb-6">
            Une intelligence de bout en bout.
          </h2>
          <p className="text-body-lg">
            Synapse n'est pas un assemblage d'outils. C'est un écosystème intelligent — où chaque module, chaque donnée, chaque interaction alimente une vision unifiée de votre établissement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`card-elevated p-10 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: visible ? `${i * 0.15}s` : '0s' }}
            >
              <card.icon className="w-7 h-7 text-primary mb-5" />
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
