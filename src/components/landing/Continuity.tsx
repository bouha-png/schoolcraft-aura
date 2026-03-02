import { Zap, Video, PlayCircle, Link } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const cards = [
  {
    icon: Zap,
    title: 'Basculement instantané',
    description: "Du présentiel au distanciel en un clic — cours, emploi du temps, suivi.",
  },
  {
    icon: Video,
    title: 'Cours interactifs en direct',
    description: 'BigBlueButton et Jitsi intégrés. Vidéo, audio, tableau blanc partagé.',
  },
  {
    icon: PlayCircle,
    title: 'Sessions enregistrées',
    description: 'Chaque cours est capturé. Les élèves rattrapent à leur rythme.',
  },
  {
    icon: Link,
    title: "Connecté à l'écosystème",
    description: "Notes, absences, app parents — le distanciel fait partie du même système.",
  },
];

const Continuity = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="section-container">
        <div className={`text-center max-w-[680px] mx-auto mb-12 md:mb-16 reveal ${visible ? 'visible' : ''}`}>
          <h2 className="text-section mb-6">
            Quand un élève ne peut pas être en classe, sa scolarité continue.
          </h2>
          <p className="text-body-lg">
            Maladie prolongée. Situation familiale. Crise sanitaire.
            L'enseignement hybride est intégré nativement — une capacité permanente, pas un mode de crise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`card-elevated p-8 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: visible ? `${i * 0.12}s` : '0s' }}
            >
              <card.icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
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

export default Continuity;
