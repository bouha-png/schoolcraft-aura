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
    titleHighlight: 'intelligent.',
    subtitle: "La plateforme éducative tout-en-un pour piloter votre établissement. 34 modules intégrés, 5 systèmes d'IA, un espace dédié pour chaque acteur éducatif.",
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
    subtitle: "Bien plus qu'un logiciel scolaire. Un écosystème éducatif intelligent pour piloter votre établissement avec précision.",
    cards: [
      {
        overline: 'INTELLIGENCE ARTIFICIELLE',
        title: "L'IA intégrée qui automatise vos processus.",
        value: 'Gagnez des heures chaque semaine.',
        description: "Génération de contenus pédagogiques, correction, emplois du temps, tutorat personnalisé — cinq systèmes d'IA intégrés nativement dans chaque couche de la plateforme. Vos équipes se concentrent sur l'essentiel : les élèves.",
      },
      {
        overline: 'TOUT-EN-UN',
        title: 'Une seule plateforme. Zéro friction.',
        value: 'Supprimez les outils isolés et les coûts cachés.',
        description: "34 modules unifiés — pédagogie, finances, RH, communication, services périscolaires — dans un écosystème unique. Fini les intégrations fragiles, les données en silos et les abonnements qui s'accumulent.",
      },
      {
        overline: 'CONTINUITÉ PÉDAGOGIQUE',
        title: "L'enseignement ne s'arrête jamais.",
        value: "Protégez la scolarité, quoi qu'il arrive.",
        description: "Chaque session planifiée est prête pour le présentiel et le distanciel. Crise sanitaire, absence prolongée, situation familiale — basculez en un clic. Aucun jour de cours perdu.",
      },
      {
        overline: 'FORMATION & COMPÉTENCES',
        title: "La qualité commence par la compétence.",
        value: "Formez, suivez, progressez — en continu.",
        description: "Via Mon Portail, chaque enseignant et collaborateur accède à ses parcours e-learning, modules d'onboarding et formations continues. La direction suit en temps réel qui a complété quoi — parce que la qualité éducative dépend directement de la compétence de ceux qui la délivrent.",
      },
    ],
  },
  // Modules
  modules: {
    overline: '34 MODULES',
    title: 'Tout ce dont votre établissement',
    titleHighlight: 'a besoin.',
    subtitle: 'Sept univers. Une seule plateforme. Des modules activables à la carte selon vos besoins.',
    swipeHint: 'Swipez pour explorer les modules',
    goToModule: 'Accéder au module',
    items: [
      {
        label: 'Pédagogie',
        title: 'Le cœur pédagogique de votre établissement.',
        description: "Programmes, cours, évaluations, suivi pédagogique individualisé — pilotés par l'IA.",
        features: ['Programmes & niveaux', 'LMS intégré', 'Tutorat IA personnalisé', 'Emploi du temps intelligent'],
      },
      {
        label: 'Finance',
        title: 'Pilotage financier et transparence totale.',
        description: 'Facturation, encaissements, suivi budgétaire — en temps réel.',
        features: ['Facturation automatique', 'Paiements & relances', 'Reporting & prévisions'],
      },
      {
        label: 'RH & Paie',
        title: 'Gestion du personnel simplifiée.',
        description: 'Recrutement, gestion administrative, traitement de la paie, formation.',
        features: ['Base de données du personnel', 'Paie automatisée', 'Pointage biométrique', 'Congés & formation'],
      },
      {
        label: 'Communication',
        title: 'Une communication fluide avec les familles.',
        description: 'Messagerie, notifications intelligentes, visioconférence, calendrier — centralisé.',
        features: ['Messagerie instantanée', 'Visioconférence intégrée', 'Notifications intelligentes', 'Calendrier partagé'],
      },
      {
        label: 'Services',
        title: 'Les services périscolaires, automatisés.',
        description: 'Transport, restauration, activités extrascolaires — suivi en temps réel.',
        features: ['Transport & GPS', 'Restauration & allergies', 'Activités extrascolaires', 'Drive sécurisé'],
      },
      {
        label: 'Portails',
        title: 'Un espace dédié pour chaque acteur éducatif.',
        description: "Un portail adapté à chaque rôle au sein de l'établissement.",
        features: ['Portail parents', 'Espace élève', 'Portail personnel', 'Mon Portail'],
      },
      {
        label: 'Administration',
        title: "Configuration et pilotage de votre plateforme.",
        description: 'Paramétrage, organisations, intégrations, sécurité des données.',
        features: ['Console Super Admin', 'Rôles & permissions', 'API Gateway', 'Auth multi-facteurs'],
      },
    ],
  },
  // Portals / Users
  portals: {
    overline: 'ÉCOSYSTÈME CONNECTÉ',
    title: 'Un espace dédié pour',
    titleHighlight: 'chaque acteur.',
    subtitle: "Chaque utilisateur accède à son portail personnalisé — sur web et mobile. Connectés via la communauté scolaire, le chat, les calendriers partagés et la collaboration de groupe.",
    imgAlt: "Écosystème éducatif connecté montrant les différents acteurs de l'établissement",
    roles: [
      { title: 'Direction & Propriétaires', description: 'Pilotage stratégique, tableaux de bord décisionnels, supervision globale de l\'établissement.', icon: 'crown' },
      { title: 'Enseignants', description: 'Gestion de classe, contenus pédagogiques, évaluations et suivi individualisé des élèves.', icon: 'graduationCap' },
      { title: 'Élèves', description: 'Cours, devoirs, emploi du temps, résultats et espace de collaboration entre pairs.', icon: 'bookOpen' },
      { title: 'Parents', description: 'Suivi de la scolarité, communication avec les enseignants, paiements et notifications.', icon: 'heart' },
      { title: 'Administration & Secrétariat', description: 'Admissions, inscriptions, gestion documentaire et accueil.', icon: 'clipboardList' },
      { title: 'Ressources Humaines', description: 'Gestion du personnel, paie, congés, recrutement et évaluation.', icon: 'users' },
      { title: 'Finance & Comptabilité', description: 'Facturation, encaissements, reporting financier et prévisions budgétaires.', icon: 'wallet' },
      { title: 'Transport & Chauffeurs', description: 'Itinéraires, suivi GPS en temps réel, pointage et sécurité des élèves.', icon: 'bus' },
      { title: 'Services Généraux', description: 'Restauration, sécurité, maintenance et gestion des installations.', icon: 'wrench' },
      { title: 'DSI & IT', description: 'Configuration, intégrations, sécurité des données et administration technique.', icon: 'server' },
    ],
    features: [
      { title: 'App Mobile & Web', description: 'Accès complet depuis tout appareil, partout, à tout moment.' },
      { title: 'Communauté Scolaire', description: 'Fil d\'actualité, annonces et vie de l\'établissement en temps réel.' },
      { title: 'Chat & Messagerie', description: 'Canaux de discussion par groupe, classe, département ou rôle.' },
      { title: 'Collaboration', description: 'Calendriers partagés, groupes de travail et documents collaboratifs.' },
    ],
  },
  // AI Section
  ai: {
    overline: 'INTELLIGENCE ARTIFICIELLE',
    title: "L'IA intégrée qui travaille",
    titleHighlight: 'pour vous.',
    subtitleShort: "Des systèmes d'IA intégrés nativement dans chaque couche de Synapse.",
    subtitle: "Des systèmes d'IA intégrés nativement dans chaque couche de Synapse.",
    systems: [
      { title: 'Génération de contenus pédagogiques', description: 'Leçons, exercices, évaluations — générés en minutes.', badge: 'Enseignants' },
      { title: 'Tutorat IA personnalisé', description: "Parcours adaptatifs, simulations d'examens calibrées.", badge: 'Élèves' },
      { title: 'Emploi du temps IA', description: 'Contraintes et disponibilités — résolu en minutes.', badge: 'Administration' },
      { title: "Syn'IA — Assistant", description: 'Assistant contextuel intégré dans chaque module.', badge: 'Tous' },
      { title: 'Moteur de connaissances', description: 'Recherche sémantique et intelligence connectée.', badge: 'Plateforme' },
      { title: 'Finance & Statistiques IA', description: 'Analyse prédictive, tableaux de bord intelligents et reporting financier automatisé.', badge: 'Finance' },
    ],
  },
  // Continuity
  continuity: {
    overline: 'CONTINUITÉ PÉDAGOGIQUE',
    title: 'La scolarité',
    titleHighlight: "ne s'arrête jamais.",
    subtitle: "Maladie prolongée, situation familiale, crise sanitaire — l'enseignement hybride est intégré nativement à la plateforme.",
    imgAlt: 'Élève suivant un cours à distance',
    cards: [
      { title: 'Basculement instantané', description: "Du présentiel au distanciel en un clic." },
      { title: 'Cours en direct', description: 'BigBlueButton et Jitsi intégrés nativement.' },
      { title: 'Sessions enregistrées', description: 'Les élèves rattrapent à leur rythme.' },
      { title: "Connecté à l'écosystème", description: "Le distanciel fait partie intégrante du système." },
    ],
  },
  // Adoption
  adoption: {
    overline: 'ACCOMPAGNEMENT',
    title: "L'adoption est",
    titleHighlight: 'notre responsabilité.',
    subtitle: "Le principal facteur d'échec n'est pas le logiciel — c'est la résistance au changement. Nous pilotons cette transition.",
    imgAlt: 'Équipe accompagnant le déploiement de Synapse',
    steps: [
      { number: '01', title: 'Formation structurée', description: 'Formation personnalisée par rôle. Chaque utilisateur maîtrise ses fonctions dès la mise en production.' },
      { number: '02', title: 'Conduite du changement', description: "Professionnels certifiés. Transformation organisationnelle, pas simplement du support technique." },
      { number: '03', title: 'Optimisation continue', description: "Revues régulières, nouvelles fonctionnalités, mesure de l'adoption et accompagnement continu." },
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
      { title: 'Sécurité', description: 'Protection et conformité des données de niveau scandinave.' },
      { title: 'Précision', description: 'Chaque fonctionnalité résout un problème spécifique.' },
      { title: 'Adaptabilité', description: 'Besoins locaux, architecture internationale.' },
      { title: 'Responsabilité', description: 'Nous assumons le résultat complet du déploiement.' },
    ],
  },
  // Pricing
  pricing: {
    overline: 'TARIFS',
    title: 'Un tarif adapté à',
    titleHighlight: 'votre établissement.',
    subtitle: "Chaque établissement est unique. Nous analysons vos besoins, votre taille et vos objectifs pour construire l'offre qui vous correspond — sans compromis.",
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
      { q: 'Combien de temps prend le déploiement ?', a: "Selon la taille de l'établissement, le déploiement complet prend entre 2 et 6 semaines, incluant la configuration, la formation et la mise en production." },
      { q: 'Comment se passe la migration des données ?', a: 'Notre équipe prend en charge la migration complète : données élèves, historique financier, emplois du temps. Aucune perte de données.' },
      { q: 'Quelle formation est incluse ?', a: "Chaque plan inclut une formation structurée par rôle. Direction, enseignants, personnel administratif — chacun reçoit un accompagnement adapté." },
      { q: 'Les données sont-elles sécurisées ?', a: 'Standards scandinaves de protection des données. Hébergement sécurisé, chiffrement de bout en bout, authentification multi-facteurs et sauvegardes continues.' },
      { q: 'Quelles langues sont supportées ?', a: 'Français, arabe (avec support RTL natif) et anglais. Basculement instantané entre les langues.' },
      { q: 'Synapse est-il compatible avec MASSAR ?', a: "Oui. Export des données et bulletins au format MASSAR. Intégration complète avec les exigences du ministère de l'Éducation nationale." },
      { q: "Y a-t-il une application mobile ?", a: "L'ensemble de la plateforme est responsive et accessible depuis tout appareil. Les portails parents et élèves sont optimisés pour mobile." },
      { q: 'Quel support est disponible ?', a: "Support par chat et email inclus dans tous les plans. Le plan Établissement inclut un interlocuteur dédié et des revues régulières." },
    ],
  },
  // Final CTA
  finalCta: {
    overline: 'PRÊT À COMMENCER ?',
    title: 'Voyez par',
    titleHighlight: 'vous-même.',
    subtitle: 'Demandez une démonstration personnalisée. Découvrez comment Synapse simplifie le pilotage de votre établissement éducatif.',
    cta: 'Demander votre démonstration',
  },
  // Footer
  footer: {
    tagline: 'Logiciel de gestion scolaire intelligent par ScandiTek.',
    sections: {
      Produit: ['Fonctionnalités', 'Modules', 'Intelligence IA', 'Tarifs', 'Sécurité'],
      Entreprise: ['À propos', 'Contact', 'Partenaires', 'Carrières'],
      Ressources: ['Documentation', 'Blog', 'Statut', 'Mentions légales'],
    },
    copyright: '© 2026 ScandiTek · Scandinavian Tecknologie · Education · Innovation',
  },
};

export default fr;
