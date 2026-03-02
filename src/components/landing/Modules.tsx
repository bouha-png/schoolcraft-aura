import { useState, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronRight } from 'lucide-react';
import moduleAcademie from '@/assets/module-academie.jpg';
import moduleFinance from '@/assets/module-finance.jpg';
import moduleRh from '@/assets/module-rh.jpg';
import moduleCommunication from '@/assets/module-communication.jpg';
import moduleOperations from '@/assets/module-operations.jpg';
import modulePortails from '@/assets/module-portails.jpg';
import moduleAdmin from '@/assets/module-admin.jpg';

interface ModuleTab {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const tabs: ModuleTab[] = [
  {
    id: 'academie', label: 'Académie',
    title: 'Le cœur pédagogique de votre établissement.',
    description: "Programmes, cours, évaluations, suivi de progression — pilotés par l'IA.",
    features: ['Programmes & niveaux', 'LMS intégré', 'AI Tutor personnalisé', 'Emploi du temps intelligent'],
    image: moduleAcademie,
  },
  {
    id: 'finance', label: 'Finance',
    title: 'Transparence et maîtrise financière.',
    description: 'Facturation, encaissements, suivi budgétaire — en temps réel.',
    features: ['Facturation automatique', 'Paiements & rappels', 'Reporting & prévisions'],
    image: moduleFinance,
  },
  {
    id: 'rh', label: 'RH & Paie',
    title: "Vos collaborateurs, au centre de l'attention.",
    description: 'Recrutement, gestion administrative, paie, formation.',
    features: ['Gestion du personnel', 'Paie automatisée', 'Pointage biométrique', 'Congés & formation'],
    image: moduleRh,
  },
  {
    id: 'communication', label: 'Communication',
    title: 'Chaque conversation, au bon endroit.',
    description: 'Chat, email, visioconférence, calendrier — centralisé.',
    features: ['Messagerie instantanée', 'Visioconférence intégrée', 'Notifications intelligentes', 'Calendrier partagé'],
    image: moduleCommunication,
  },
  {
    id: 'operations', label: 'Opérations',
    title: 'La logistique scolaire, simplifiée.',
    description: 'Transport, restauration, activités parascolaires.',
    features: ['Transport & GPS', 'Cantine & allergies', 'Activités parascolaires', 'Drive sécurisé'],
    image: moduleOperations,
  },
  {
    id: 'portails', label: 'Portails',
    title: 'Chaque acteur accède à son univers.',
    description: "Un portail adapté à chaque rôle.",
    features: ['Portail parents', 'Espace élève', 'Portail personnel', 'Mon Portail individuel'],
    image: modulePortails,
  },
  {
    id: 'admin', label: 'Administration',
    title: "L'ossature technique de votre plateforme.",
    description: 'Configuration, organisations, intégrations, sécurité.',
    features: ['Console Super Admin', 'Rôles & permissions', 'API Gateway', 'Auth multi-facteurs'],
    image: moduleAdmin,
  },
];

const Modules = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fading, setFading] = useState(false);
  const { ref, visible } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setFading(true);
    setTimeout(() => {
      setActiveTab(index);
      setFading(false);
    }, 200);
  };

  const current = tabs[activeTab];

  return (
    <section id="modules" className="section-padding bg-background">
      <div ref={ref} className="section-container">
        <div className={`text-center mb-12 md:mb-16 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-overline mb-4">34 MODULES</p>
          <h2 className="text-section mb-4">
            Tout ce dont votre établissement <span className="text-gradient">a besoin.</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto text-muted-foreground">
            Sept univers. Une seule plateforme. Explorez chaque dimension.
          </p>
        </div>

        {/* Scrollable tab bar */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-2 justify-start md:justify-center pb-4 mb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide"
          >
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(i)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  i === activeTab
                    ? 'bg-foreground text-background border-foreground shadow-lg'
                    : 'text-muted-foreground border-border hover:text-foreground hover:border-foreground/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Bento-style content card */}
          <div
            className={`transition-all duration-300 ${fading ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}
            style={{ transitionTimingFunction: 'var(--ease-apple)' }}
          >
            <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-muted/30 border border-border/50">
              {/* Image */}
              <div className="relative">
                <img
                  src={current.image}
                  alt={current.label}
                  className="w-full h-full object-cover aspect-[4/3] md:aspect-auto md:min-h-[400px]"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-3 leading-tight tracking-tight">
                  {current.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 leading-relaxed">
                  {current.description}
                </p>
                <ul className="space-y-2.5">
                  {current.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm sm:text-base text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
