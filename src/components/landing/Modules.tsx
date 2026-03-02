import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ModuleTab {
  id: string;
  label: string;
  overline: string;
  title: string;
  description: string;
  features: string[];
}

const tabs: ModuleTab[] = [
  {
    id: 'academie',
    label: 'Académie',
    overline: 'ACADÉMIE',
    title: 'Le cœur pédagogique de votre établissement.',
    description: "Programmes, cours, évaluations, suivi de progression — pilotés par l'intelligence artificielle.",
    features: ['Structure des programmes & niveaux', 'LMS & apprentissage en ligne', 'AI Tutor personnalisé par élève', 'Emploi du temps intelligent'],
  },
  {
    id: 'finance',
    label: 'Finance',
    overline: 'FINANCE',
    title: 'Transparence et maîtrise financière totale.',
    description: 'Facturation, encaissements, suivi budgétaire — en temps réel.',
    features: ['Facturation automatique', 'Paiements & rappels intelligents', 'Reporting financier & prévisions'],
  },
  {
    id: 'rh',
    label: 'RH & Paie',
    overline: 'RH & PAIE',
    title: "Vos collaborateurs, au centre de l'attention.",
    description: 'Recrutement, gestion administrative, paie, formation — un espace complet.',
    features: ['Gestion du personnel', 'Paie automatisée', 'Pointage biométrique', 'Congés & formation continue'],
  },
  {
    id: 'communication',
    label: 'Communication',
    overline: 'COMMUNICATION',
    title: 'Chaque conversation, au bon endroit.',
    description: 'Chat, email, visioconférence, calendrier — fluide et centralisé.',
    features: ['Chat & messagerie instantanée', 'Visioconférence intégrée (BBB & Jitsi)', 'Email & notifications intelligentes', 'Calendrier partagé'],
  },
  {
    id: 'operations',
    label: 'Opérations',
    overline: 'OPÉRATIONS',
    title: 'La logistique scolaire, simplifiée.',
    description: 'Transport, restauration, activités parascolaires, stockage cloud.',
    features: ['Transport & GPS temps réel', 'Cantine & allergies', 'Activités parascolaires', 'Drive sécurisé'],
  },
  {
    id: 'portails',
    label: 'Portails',
    overline: 'PORTAILS',
    title: 'Chaque acteur accède à son univers.',
    description: "Un portail adapté à chaque rôle, au bon niveau d'information.",
    features: ['Portail parents', 'Espace élève & AI Tutor', 'Portail personnel', 'Mon Portail individuel'],
  },
  {
    id: 'admin',
    label: 'Administration',
    overline: 'ADMINISTRATION',
    title: 'L\'ossature technique de votre plateforme.',
    description: 'Configuration, gestion des organisations, intégrations, sécurité.',
    features: ['Console Super Admin', 'Rôles & permissions granulaires', 'API Gateway & webhooks', 'Authentification multi-facteurs'],
  },
];

const Modules = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fading, setFading] = useState(false);
  const { ref, visible } = useScrollReveal();

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setFading(true);
    setTimeout(() => {
      setActiveTab(index);
      setFading(false);
    }, 150);
  };

  const current = tabs[activeTab];

  return (
    <section id="modules" className="section-padding bg-background">
      <div ref={ref} className="section-container">
        <div className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`}>
          <h2 className="text-section">
            Tout ce dont votre établissement a besoin.
          </h2>
        </div>

        {/* Tab bar */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <div className="flex overflow-x-auto gap-1 justify-start md:justify-center pb-px border-b border-border mb-10 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(i)}
                className={`shrink-0 px-5 py-3 text-[15px] font-medium transition-colors duration-200 border-b-2 -mb-px ${
                  i === activeTab
                    ? 'text-foreground font-semibold border-primary'
                    : 'text-muted-foreground border-transparent hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div
            className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center transition-opacity duration-200 ${
              fading ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-apple)' }}
          >
            {/* Text */}
            <div>
              <p className="text-overline text-xs mb-4">{current.overline}</p>
              <h3 className="text-subsection mb-4">{current.title}</h3>
              <p className="text-body mb-8">{current.description}</p>
              <ul className="space-y-3">
                {current.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-px bg-primary mt-3 shrink-0" />
                    <span className="text-base text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mockup placeholder */}
            <div className="rounded-xl bg-secondary aspect-[4/3] flex items-center justify-center border border-border">
              <span className="text-muted-foreground font-display font-medium text-lg">
                {current.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
