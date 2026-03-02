const fr = {
  dir: 'ltr' as const,
  // Navigation
  nav: {
    platform: 'Plateforme',
    modules: 'Modules',
    ai: 'Intelligence IA',
    pricing: 'Tarifs',
    cta: 'Demander une démo',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  // Hero
  hero: {
    overline: 'SYNAPSE EDUCATION',
    title1: 'Logiciel de gestion scolaire',
    titleHighlight: 'tout-en-un.',
    subtitle: "Plateforme tout-en-un pour piloter la gestion quotidienne de votre établissement scolaire. 34 modules, 5 systèmes d'IA, un espace dédié pour chaque acteur.",
    cta: 'Demander une démo',
    discover: 'Découvrir la plateforme',
    imgAlt: 'Élèves utilisant la technologie dans une salle de classe moderne',
  },
  // Social Proof
  social: {
    metrics: [
      { suffix: '+', label: 'établissements' },
      { suffix: '+', label: 'élèves' },
      { suffix: '', label: 'modules' },
      { suffix: '', label: "systèmes IA" },
    ],
  },
  // Platform Overview
  platform: {
    overline: 'CE QUI NOUS DIFFÉRENCIE',
    title: 'Trois raisons de choisir',
    titleHighlight: 'Synapse.',
    subtitle: "Bien plus qu'un simple outil administratif : une solution tout-en-un qui centralise l'ensemble des besoins de votre établissement.",
    cards: [
      {
        overline: 'INTELLIGENCE ARTIFICIELLE',
        title: "L'IA qui travaille pour vous — pas l'inverse.",
        value: 'Gagnez des heures chaque semaine.',
        description: "Création de cours, correction, emplois du temps, suivi pédagogique — cinq systèmes d'IA intégrés nativement dans chaque couche de la plateforme. Vos équipes se concentrent sur l'essentiel : les élèves.",
      },
      {
        overline: 'TOUT-EN-UN',
        title: 'Un seul système. Zéro friction.',
        value: 'Simplifiez la gestion quotidienne.',
        description: "34 modules — vie scolaire, finances, RH, communication, opérations — dans une seule plateforme. Fini les outils éparpillés et les abonnements qui s'accumulent.",
      },
      {
        overline: 'CONTINUITÉ PÉDAGOGIQUE',
        title: "L'enseignement ne s'arrête jamais.",
        value: "Protégez la scolarité, quoi qu'il arrive.",
        description: "Chaque session planifiée est prête pour le présentiel et le distanciel. Crise sanitaire, absence prolongée, situation familiale — basculez en un clic. Aucun jour de cours perdu.",
      },
    ],
  },
  // Modules
  modules: {
    overline: '34 MODULES',
    title: 'Tout ce dont votre établissement',
    titleHighlight: 'a besoin.',
    subtitle: 'Sept univers. Une seule plateforme. Explorez chaque dimension.',
    swipeHint: 'Swipez pour explorer les modules',
    goToModule: 'Aller au module',
    items: [
      {
        label: 'Académie',
        title: 'Le cœur pédagogique de votre établissement.',
        description: "Vie scolaire, suivi pédagogique, évaluations, progression — pilotés par l'IA.",
        features: ['Programmes & niveaux', 'E-learning intégré', 'Suivi pédagogique IA', 'Emplois du temps intelligents'],
      },
      {
        label: 'Finance',
        title: 'Transparence et maîtrise financière.',
        description: 'Facturation, revenus & dépenses, suivi budgétaire — en temps réel.',
        features: ['Facturation automatique', 'Paiements & échéancier', 'Reporting & prévisions'],
      },
      {
        label: 'RH & Paie',
        title: "Vos collaborateurs, au centre de l'attention.",
        description: 'Gérez plus facilement vos employés et leurs temps.',
        features: ['Gestion du personnel', 'Paie automatisée', 'Pointage & présence', 'Congés & formation'],
      },
      {
        label: 'Communication',
        title: 'Chaque conversation, au bon endroit.',
        description: 'Maîtrisez et centralisez les communications avec les familles.',
        features: ['Messagerie & e-mailing', 'Visioconférence intégrée', 'Notifications intelligentes', 'Calendrier partagé'],
      },
      {
        label: 'Opérations',
        title: 'La logistique scolaire, simplifiée.',
        description: 'Transport, cantine, périscolaire, garderie.',
        features: ['Transport & GPS', 'Cantine & périscolaire', 'Activités parascolaires', 'Documents & partages'],
      },
      {
        label: 'Portails',
        title: 'Chaque acteur accède à son univers.',
        description: "Un espace dédié pour chaque utilisateur.",
        features: ['Portail parents & tuteurs', 'Espace élève', 'Espace enseignant', 'Administration'],
      },
      {
        label: 'Administration',
        title: "L'ossature technique de votre plateforme.",
        description: 'Configuration, organisations, intégrations, sécurité.',
        features: ['Console Super Admin', 'Rôles & permissions', 'API Gateway', 'Auth multi-facteurs'],
      },
    ],
  },
  // AI Section
  ai: {
    overline: 'INTELLIGENCE ARTIFICIELLE',
    title: "L'IA qui travaille",
    titleHighlight: 'pour vous.',
    subtitle: "Cinq systèmes d'IA intégrés nativement dans chaque couche de Synapse.",
    systems: [
      { title: 'Création de contenu IA', description: 'Leçons, exercices, évaluations — générés en minutes.', badge: 'Enseignants' },
      { title: 'AI Tutor personnalisé', description: "Parcours adaptatifs, simulations d'examens calibrées.", badge: 'Élèves' },
      { title: 'Emploi du temps IA', description: 'Contraintes et disponibilités — résolu en minutes.', badge: 'Administration' },
      { title: "Syn'IA — Assistant", description: 'Chatbot contextuel dans chaque module.', badge: 'Tous' },
      { title: 'Knowledge Engine', description: 'Recherche sémantique et intelligence connectée.', badge: 'Plateforme' },
    ],
  },
  // Continuity
  continuity: {
    overline: 'CONTINUITÉ PÉDAGOGIQUE',
    title: 'La scolarité',
    titleHighlight: "ne s'arrête jamais.",
    subtitle: "Maladie prolongée, situation familiale, crise sanitaire — l'enseignement hybride est intégré nativement.",
    imgAlt: 'Élève suivant un cours à distance',
    cards: [
      { title: 'Basculement instantané', description: "Du présentiel au distanciel en un clic." },
      { title: 'Cours en direct', description: 'BigBlueButton et Jitsi intégrés.' },
      { title: 'Sessions enregistrées', description: 'Les élèves rattrapent à leur rythme.' },
      { title: "Connecté à l'écosystème", description: "Le distanciel fait partie du système." },
    ],
  },
  // Adoption
  adoption: {
    overline: 'ACCOMPAGNEMENT',
    title: "L'adoption est",
    titleHighlight: 'notre responsabilité.',
    subtitle: "Le principal facteur d'échec n'est pas le logiciel — c'est la résistance au changement.",
    imgAlt: 'Équipe travaillant sur le déploiement de Synapse',
    steps: [
      { number: '01', title: 'Onboarding structuré', description: 'Formation personnalisée par rôle. Chaque utilisateur maîtrise ses fonctions dès le premier jour.' },
      { number: '02', title: 'Conduite du changement', description: 'Professionnels certifiés. Transformation organisationnelle, pas du support technique.' },
      { number: '03', title: 'Optimisation continue', description: "Revues régulières, nouvelles fonctionnalités, mesure de l'adoption." },
    ],
  },
  // ScandiTek
  scanditek: {
    overline: 'QUI SOMMES-NOUS',
    title: 'Qui est',
    titleHighlight: 'ScandiTek.',
    description: "Plus de deux décennies d'expertise en IT, télécom, développement produit, conduite du changement et enseignement à distance — en provenance de Norvège.",
    quote: '"Précision scandinave, adaptée aux réalités du secteur éducatif privé au Maroc."',
    values: [
      { title: 'Sécurité', description: 'Protection des données de niveau scandinave.' },
      { title: 'Précision', description: 'Chaque fonctionnalité résout un problème spécifique.' },
      { title: 'Adaptabilité', description: 'Besoins locaux, architecture internationale.' },
      { title: 'Responsabilité', description: 'Nous assumons le résultat complet.' },
    ],
  },
  // Pricing
  pricing: {
    overline: 'TARIFS',
    title: 'Un tarif adapté à',
    titleHighlight: 'vos besoins.',
    subtitle: "Chaque établissement est unique. Nous analysons vos besoins, votre taille et vos objectifs pour construire l'offre qui vous correspond exactement — sans compromis.",
    ctaTitle: 'Demandez votre offre sur mesure',
    ctaDescription: "Notre équipe vous accompagne pour définir la configuration idéale — modules, nombre d'utilisateurs, intégrations et accompagnement.",
    ctaButton: 'Nous contacter',
  },
  // FAQ
  faq: {
    overline: 'FAQ',
    title: 'Questions',
    titleHighlight: 'fréquentes.',
    items: [
      { q: 'Combien de temps prend le déploiement ?', a: "Selon la taille de votre établissement scolaire, le déploiement complet prend entre 2 et 6 semaines, incluant la formation de vos équipes." },
      { q: 'Comment se passe la migration des données ?', a: 'Notre équipe prend en charge la migration complète : données élèves, historique financier, emplois du temps. Aucune perte de données.' },
      { q: 'Quelle formation est incluse ?', a: 'Chaque plan inclut un onboarding structuré par rôle. Direction, enseignants, personnel administratif — chacun reçoit une formation adaptée.' },
      { q: 'Les données sont-elles sécurisées ?', a: 'Standards scandinaves de protection des données. Hébergement sécurisé, chiffrement de bout en bout, authentification multi-facteurs.' },
      { q: 'Quelles langues sont supportées ?', a: 'Français, arabe (avec support RTL natif) et anglais. Basculement instantané entre les langues.' },
      { q: 'Synapse est-il compatible avec MASSAR ?', a: "Oui. Export des données et bulletins au format MASSAR. Intégration avec les exigences du ministère de l'éducation." },
      { q: "Y a-t-il une application mobile ?", a: "L'ensemble de la plateforme est responsive et accessible depuis tout appareil. Les portails parents et élèves sont optimisés pour mobile." },
      { q: 'Quel support est disponible ?', a: "Support par chat et email inclus dans tous les plans. Le plan Entreprise inclut un interlocuteur dédié et des revues régulières." },
    ],
  },
  // Final CTA
  finalCta: {
    overline: 'PRÊT À COMMENCER ?',
    title: 'Voyez par',
    titleHighlight: 'vous-même.',
    subtitle: 'Demandez une démonstration personnalisée. Découvrez comment Synapse transforme votre établissement.',
    cta: 'Demander votre démonstration',
  },
  // Footer
  footer: {
    tagline: 'Logiciel de gestion scolaire par ScandiTek.',
    sections: {
      Produit: ['Fonctionnalités', 'Modules', 'Intelligence IA', 'Tarifs', 'Sécurité'],
      Entreprise: ['À propos', 'Contact', 'Partenaires', 'Carrières'],
      Ressources: ['Documentation', 'Blog', 'Statut', 'Mentions légales'],
    },
    copyright: '© 2026 ScandiTek · Scandinavian Tecknologie · Education · Innovation',
  },
};

export default fr;
