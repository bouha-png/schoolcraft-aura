import { Pen, GraduationCap, CalendarClock, MessageCircle, Search } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const aiSystems = [
  {
    icon: Pen,
    title: 'Création de contenu IA',
    description: 'Leçons, exercices, évaluations, ressources pédagogiques — générés en minutes, pas en heures.',
    badge: 'Enseignants',
  },
  {
    icon: GraduationCap,
    title: 'AI Tutor personnalisé',
    description: "Diagnostic de compétences, parcours adaptatifs, simulations d'examens calibrées par élève.",
    badge: 'Élèves',
  },
  {
    icon: CalendarClock,
    title: 'Emploi du temps IA',
    description: 'Contraintes, disponibilités, salles — résolu en minutes. Pas en jours.',
    badge: 'Administration',
  },
  {
    icon: MessageCircle,
    title: "Syn'IA — Assistant conversationnel",
    description: 'Chatbot contextuel dans chaque module. Questions, automatisation, aide instantanée.',
    badge: 'Tous',
  },
  {
    icon: Search,
    title: 'Knowledge Engine',
    description: 'Recherche sémantique, OCR, embeddings vectoriels. Intelligence connectée à vos données.',
    badge: 'Plateforme',
  },
];

const AISection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="ai" className="section-padding surface-alt">
      <div ref={ref} className="section-container">
        <div className={`text-center max-w-[680px] mx-auto mb-16 reveal ${visible ? 'visible' : ''}`}>
          <h2 className="text-section mb-6">
            L'IA qui travaille à chaque niveau.
          </h2>
          <p className="text-body-lg">
            Cinq systèmes d'intelligence artificielle, intégrés nativement dans chaque couche de Synapse.
          </p>
        </div>

        <div className="max-w-[900px] mx-auto">
          {aiSystems.map((system, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 py-6 reveal ${visible ? 'visible' : ''} ${
                i < aiSystems.length - 1 ? 'border-b border-border' : ''
              }`}
              style={{ transitionDelay: visible ? `${i * 0.12}s` : '0s' }}
            >
              <div className="w-12 h-12 rounded-full bg-purple-tint flex items-center justify-center shrink-0">
                <system.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {system.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {system.description}
                </p>
              </div>
              <span className="self-start sm:self-center shrink-0 px-3 py-1 rounded-full bg-purple-tint text-primary text-xs font-medium">
                {system.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
