import { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import moduleAcademie from '@/assets/module-academie.jpg';
import moduleFinance from '@/assets/module-finance.jpg';
import moduleRh from '@/assets/module-rh.jpg';
import moduleCommunication from '@/assets/module-communication.jpg';
import moduleOperations from '@/assets/module-operations.jpg';
import modulePortails from '@/assets/module-portails.jpg';
import moduleAdmin from '@/assets/module-admin.jpg';

interface ModuleCard {
  id: string;
  label: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const modules: ModuleCard[] = [
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

const ModuleCardComponent = ({ module }: { module: ModuleCard }) => (
  <div className="rounded-2xl overflow-hidden border border-border/50 bg-muted/30 h-full flex flex-col">
    <div className="relative">
      <img
        src={module.image}
        alt={module.label}
        className="w-full aspect-[16/10] object-cover"
      />
    </div>
    <div className="p-5 sm:p-6 flex flex-col flex-1">
      <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{module.label}</span>
      <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 leading-tight tracking-tight">
        {module.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {module.description}
      </p>
      <ul className="space-y-1.5 mt-auto">
        {module.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="text-sm text-foreground">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Modules = () => {
  const { ref, visible } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    // Scroll by roughly one card width
    const cardWidth = el.querySelector<HTMLElement>(':scope > div')?.offsetWidth || 400;
    el.scrollBy({ left: direction === 'right' ? cardWidth : -cardWidth, behavior: 'smooth' });
  };

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

        <div className={`relative reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          {/* Navigation arrows */}
          <button
            onClick={() => scroll('left')}
            className={`hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full border border-border bg-background shadow-md transition-opacity duration-300 ${
              canScrollLeft ? 'opacity-100 hover:bg-muted' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full border border-border bg-background shadow-md transition-opacity duration-300 ${
              canScrollRight ? 'opacity-100 hover:bg-muted' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-hide"
          >
            {modules.map((module) => (
              <div
                key={module.id}
                className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[calc(50%-10px)] snap-start"
              >
                <ModuleCardComponent module={module} />
              </div>
            ))}
          </div>

          {/* Scroll indicator dots */}
          <div className="flex justify-center gap-1.5 mt-6 md:hidden">
            {modules.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-border" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
