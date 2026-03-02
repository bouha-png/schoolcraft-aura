import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
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
  overline: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const tabs: ModuleTab[] = [
  {
    id: 'academie', label: 'Académie', overline: 'ACADÉMIE',
    title: 'Le cœur pédagogique de votre établissement.',
    description: "Programmes, cours, évaluations, suivi de progression — pilotés par l'intelligence artificielle.",
    features: ['Structure des programmes & niveaux', 'LMS & apprentissage en ligne', 'AI Tutor personnalisé par élève', 'Emploi du temps intelligent'],
    image: moduleAcademie,
  },
  {
    id: 'finance', label: 'Finance', overline: 'FINANCE',
    title: 'Transparence et maîtrise financière totale.',
    description: 'Facturation, encaissements, suivi budgétaire — en temps réel.',
    features: ['Facturation automatique', 'Paiements & rappels intelligents', 'Reporting financier & prévisions'],
    image: moduleFinance,
  },
  {
    id: 'rh', label: 'RH & Paie', overline: 'RH & PAIE',
    title: "Vos collaborateurs, au centre de l'attention.",
    description: 'Recrutement, gestion administrative, paie, formation — un espace complet.',
    features: ['Gestion du personnel', 'Paie automatisée', 'Pointage biométrique', 'Congés & formation continue'],
    image: moduleRh,
  },
  {
    id: 'communication', label: 'Communication', overline: 'COMMUNICATION',
    title: 'Chaque conversation, au bon endroit.',
    description: 'Chat, email, visioconférence, calendrier — fluide et centralisé.',
    features: ['Chat & messagerie instantanée', 'Visioconférence intégrée (BBB & Jitsi)', 'Email & notifications intelligentes', 'Calendrier partagé'],
    image: moduleCommunication,
  },
  {
    id: 'operations', label: 'Opérations', overline: 'OPÉRATIONS',
    title: 'La logistique scolaire, simplifiée.',
    description: 'Transport, restauration, activités parascolaires, stockage cloud.',
    features: ['Transport & GPS temps réel', 'Cantine & allergies', 'Activités parascolaires', 'Drive sécurisé'],
    image: moduleOperations,
  },
  {
    id: 'portails', label: 'Portails', overline: 'PORTAILS',
    title: 'Chaque acteur accède à son univers.',
    description: "Un portail adapté à chaque rôle, au bon niveau d'information.",
    features: ['Portail parents', 'Espace élève & AI Tutor', 'Portail personnel', 'Mon Portail individuel'],
    image: modulePortails,
  },
  {
    id: 'admin', label: 'Administration', overline: 'ADMINISTRATION',
    title: "L'ossature technique de votre plateforme.",
    description: 'Configuration, gestion des organisations, intégrations, sécurité.',
    features: ['Console Super Admin', 'Rôles & permissions granulaires', 'API Gateway & webhooks', 'Authentification multi-facteurs'],
    image: moduleAdmin,
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
        <div className={`text-center mb-12 md:mb-16 reveal ${visible ? 'visible' : ''}`}>
          <p className="text-overline mb-4">MODULES</p>
          <h2 className="text-section">
            Tout ce dont votre établissement <span className="text-gradient">a besoin.</span>
          </h2>
        </div>

        {/* Modern pill tab bar */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <div className="flex overflow-x-auto gap-2 justify-start md:justify-center pb-4 mb-10 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(i)}
                className={`shrink-0 px-6 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 ${
                  i === activeTab
                    ? 'text-primary-foreground shadow-lg'
                    : 'text-muted-foreground bg-secondary hover:text-foreground hover:bg-muted'
                }`}
                style={i === activeTab ? { background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-btn)' } : {}}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content: large image card with overlaid text */}
          <div
            className={`relative rounded-3xl overflow-hidden transition-opacity duration-200 ${
              fading ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-apple)' }}
          >
            {/* Large image */}
            <div className="relative aspect-[16/9] md:aspect-[2.4/1]">
              <img
                src={current.image}
                alt={current.label}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

              {/* Text content overlaid on image */}
              <div className="absolute inset-0 flex items-center">
                <div className="p-8 md:p-16 max-w-xl">
                  <p className="text-xs font-semibold tracking-[0.12em] uppercase text-primary-foreground/70 mb-3">
                    {current.overline}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-white/70 text-base md:text-lg mb-6 leading-relaxed">
                    {current.description}
                  </p>
                  <ul className="space-y-2.5">
                    {current.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-sm md:text-base text-white/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Module card grid below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6">
            {tabs.slice(0, 4).map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(i)}
                className={`group relative rounded-2xl overflow-hidden aspect-[3/2] transition-all duration-300 ${
                  i === activeTab ? 'ring-2 ring-primary ring-offset-2' : ''
                }`}
              >
                <img src={tab.image} alt={tab.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
