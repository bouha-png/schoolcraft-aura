import { Zap, Video, PlayCircle, Link } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import sectionContinuity from '@/assets/section-continuity.jpg';

const cards = [
  { icon: Zap, title: 'Basculement instantané', description: "Du présentiel au distanciel en un clic." },
  { icon: Video, title: 'Cours en direct', description: 'BigBlueButton et Jitsi intégrés.' },
  { icon: PlayCircle, title: 'Sessions enregistrées', description: 'Les élèves rattrapent à leur rythme.' },
  { icon: Link, title: "Connecté à l'écosystème", description: "Le distanciel fait partie du système." },
];

const Continuity = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section-padding surface-alt">
      <div ref={ref} className="section-container">
        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center reveal ${visible ? 'visible' : ''}`}>
          {/* Image */}
          <div className="feature-image aspect-[4/3]">
            <img
              src={sectionContinuity}
              alt="Élève suivant un cours à distance"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-overline mb-4">CONTINUITÉ PÉDAGOGIQUE</p>
            <h2 className="text-section mb-6 text-foreground">
              La scolarité <span className="text-gradient">ne s'arrête jamais.</span>
            </h2>
            <p className="text-body mb-10">
              Maladie prolongée, situation familiale, crise sanitaire — l'enseignement hybride est intégré nativement.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className={`card-elevated p-5 reveal ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: visible ? `${(i + 1) * 0.1}s` : '0s' }}
                >
                  <card.icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-display text-sm font-semibold text-foreground mb-1">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Continuity;
