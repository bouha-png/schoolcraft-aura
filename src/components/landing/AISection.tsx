import { Pen, GraduationCap, CalendarClock, MessageCircle, Search } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import sectionAi from '@/assets/section-ai.jpg';

const aiSystems = [
  { icon: Pen, title: 'Création de contenu IA', description: 'Leçons, exercices, évaluations — générés en minutes.', badge: 'Enseignants' },
  { icon: GraduationCap, title: 'AI Tutor personnalisé', description: "Parcours adaptatifs, simulations d'examens calibrées.", badge: 'Élèves' },
  { icon: CalendarClock, title: 'Emploi du temps IA', description: 'Contraintes et disponibilités — résolu en minutes.', badge: 'Administration' },
  { icon: MessageCircle, title: "Syn'IA — Assistant", description: 'Chatbot contextuel dans chaque module.', badge: 'Tous' },
  { icon: Search, title: 'Knowledge Engine', description: 'Recherche sémantique et intelligence connectée.', badge: 'Plateforme' },
];

const AISection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="ai" className="section-padding bg-background">
      <div ref={ref} className="section-container">
        {/* Image + text side by side */}
        <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center reveal ${visible ? 'visible' : ''}`}>
          {/* Text + list */}
          <div>
            <p className="text-overline mb-4">INTELLIGENCE ARTIFICIELLE</p>
            <h2 className="text-section mb-6">
              L'IA qui travaille <span className="text-gradient">à chaque niveau.</span>
            </h2>
            <p className="text-body-lg mb-10">
              Cinq systèmes d'IA intégrés nativement dans chaque couche de Synapse.
            </p>

            <div className="space-y-5">
              {aiSystems.map((system, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 reveal ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: visible ? `${(i + 1) * 0.1}s` : '0s' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'var(--gradient-soft)' }}
                  >
                    <system.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-display text-base font-semibold text-foreground">{system.title}</h3>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold text-primary" style={{ background: 'var(--gradient-soft)' }}>
                        {system.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{system.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="feature-image aspect-square">
            <img
              src={sectionAi}
              alt="Enseignante utilisant l'intelligence artificielle de Synapse"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
