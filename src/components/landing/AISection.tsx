import { Pen, GraduationCap, CalendarClock, MessageCircle, Search } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';


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
            <h2 className="text-section mb-6 text-foreground">
              L'IA qui travaille <span className="text-gradient">pour vous.</span>
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

          {/* Phone mockup with video */}
          <div className="flex items-center justify-center">
            <div className="relative mx-auto" style={{ width: '280px' }}>
              {/* Phone frame */}
              <div className="relative rounded-[2.5rem] border-[6px] border-foreground/90 bg-foreground/90 shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/90 rounded-b-2xl z-10" />
                {/* Screen */}
                <div className="rounded-[2rem] overflow-hidden bg-black">
                  <video
                    src="/videos/ai-demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  />
                </div>
              </div>
              {/* Side button */}
              <div className="absolute top-24 -right-[8px] w-[3px] h-12 bg-foreground/90 rounded-r-sm" />
              <div className="absolute top-20 -left-[8px] w-[3px] h-8 bg-foreground/90 rounded-l-sm" />
              <div className="absolute top-32 -left-[8px] w-[3px] h-8 bg-foreground/90 rounded-l-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
