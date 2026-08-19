export type ModuleItem = {
  icon: string;
  title: string;
  shortDescription: string;
  expandedParagraphs: string[];
  bullets?: string[];
  bulletsAfter?: string[];
  outcome: string[];
  cta?: string;
};

export const associationsModules = {
  section: {
    overline: 'L’ÉCOSYSTÈME SYNAPSE ASSOCIATIONS',
    title1: 'Toute votre organisation.',
    title2: 'Un seul environnement connecté.',
    intro: [
      'Synapse Associations réunit les fonctions essentielles de votre organisation dans une plateforme commune.',
      'Chaque domaine reste autonome, tout en étant connecté aux membres, aux équipes, aux activités, aux données et aux processus de l’organisation.',
      'Moins d’outils dispersés. Plus de continuité, de visibilité et de contrôle.',
    ],
    more: 'En savoir plus',
    less: 'Réduire',
  },
  trust: {
    title: 'Confiance, sécurité & conformité',
    subtitle:
      'Une gestion responsable des données de votre organisation et de ses membres.',
  },
  modules: [
    {
      icon: 'UsersRound',
      title: 'Adhérents & espace membre',
      shortDescription:
        'Une relation membre plus simple, plus directe et mieux structurée. Centralisez le parcours de chaque adhérent et offrez-lui un espace personnel adapté.',
      expandedParagraphs: [
        'Synapse centralise le parcours de chaque adhérent, depuis la demande d’adhésion jusqu’à sa participation active dans l’organisation.',
        'Chaque membre dispose de son propre compte. Il peut consulter les informations qui le concernent, suivre les actualités officielles, découvrir les opportunités proposées et s’inscrire aux formations, événements et activités.',
        'L’administration bénéficie d’informations centralisées et actualisées, tandis que les membres gagnent en autonomie.',
      ],
      outcome: ['Une meilleure expérience pour les membres.', 'Moins de gestion manuelle pour l’organisation.'],
    },
    {
      icon: 'Network',
      title: 'Gouvernance & structure organisationnelle',
      shortDescription:
        'Une organisation claire, de la direction nationale aux unités locales. Structurez les responsabilités, les instances et les processus de gouvernance.',
      expandedParagraphs: [
        'Synapse permet de représenter la structure réelle de l’organisation : siège national, régions, sections, organes, commissions, équipes et autres niveaux de responsabilité.',
        'Les rôles, mandats, instances, décisions, assemblées, résolutions, élections et processus de gouvernance sont organisés et suivis dans un environnement commun.',
        'Chaque niveau dispose des informations et des outils correspondant à son périmètre.',
      ],
      outcome: ['Des responsabilités clairement définies.', 'Une gouvernance plus transparente.'],
    },
    {
      icon: 'MessagesSquare',
      title: 'Communication & collaboration',
      shortDescription:
        'Le travail et la communication enfin réunis. Connectez les équipes, les commissions, les projets et les membres dans un environnement commun.',
      expandedParagraphs: [
        'Synapse rassemble les outils nécessaires aux échanges quotidiens de l’organisation : groupes, chat, email, calendrier, réunions en ligne, annonces, publications, sondages et espaces de collaboration.',
        'Les informations restent associées aux équipes, commissions, projets et activités concernés.',
        'L’organisation réduit ainsi sa dépendance aux conversations dispersées, aux groupes informels et aux informations difficiles à retrouver.',
      ],
      outcome: ['Une conversation mieux structurée.', 'Toute la communauté reste connectée.'],
    },
    {
      icon: 'GraduationCap',
      title: 'Formation & certification',
      shortDescription:
        'Toutes vos formations. Tous les formats. Un seul parcours. Gérez le présentiel, l’online, l’hybride et l’e-learning depuis une même plateforme.',
      expandedParagraphs: ['Synapse permet de gérer l’ensemble des activités de formation, qu’elles soient organisées :'],
      bullets: ['en présentiel', 'en ligne', 'en mode hybride', 'en e-learning', 'ou dans un parcours combinant plusieurs modalités'],
      bulletsAfter: [
        'La plateforme connecte les programmes, les sessions, les formateurs, les participants, les contenus, les ressources, les évaluations, la progression et les certifications.',
        'Chaque participant suit son parcours depuis son propre compte. Les responsables disposent d’une vision consolidée des inscriptions, de la participation, de l’avancement et des résultats.',
      ],
      outcome: ['De l’inscription à la certification,', 'chaque étape reste connectée.'],
    },
    {
      icon: 'CalendarDays',
      title: 'Événements & activités',
      shortDescription:
        'Planifiez, publiez et suivez toutes vos initiatives. Centralisez vos événements, activités, inscriptions et participants.',
      expandedParagraphs: [
        'Synapse accompagne l’organisation de vos événements, rencontres, campagnes, ateliers, conférences et autres activités.',
        'Les responsables centralisent la planification, les inscriptions, les participants, le calendrier, les communications et le suivi opérationnel.',
        'Depuis leur espace personnel, les membres découvrent les activités disponibles, s’inscrivent directement et reçoivent les informations et notifications nécessaires.',
      ],
      outcome: ['Une organisation plus fluide.', 'Une participation plus accessible.'],
    },
    {
      icon: 'WalletCards',
      title: 'Finance & paiements',
      shortDescription:
        'Une vision plus claire des flux financiers liés à vos activités. Suivez cotisations, inscriptions, paiements et transactions depuis un environnement commun.',
      expandedParagraphs: [
        'Synapse centralise les informations financières associées aux adhésions, aux inscriptions, aux formations, aux événements et aux autres activités de l’organisation.',
        'Les responsables peuvent suivre les cotisations, les paiements, les montants en attente, les transactions et les informations financières pertinentes.',
        'Les données financières peuvent alimenter les tableaux de bord, les rapports et les processus de validation.',
      ],
      outcome: ['Moins de rapprochements manuels.', 'Plus de visibilité et de contrôle.'],
    },
    {
      icon: 'ListChecks',
      title: 'Tâches, processus & validations',
      shortDescription:
        'Transformez les décisions en actions suivies. Attribuez les tâches, suivez les échéances et gardez les validations visibles.',
      expandedParagraphs: [
        'Synapse permet d’organiser le travail au-delà de la simple communication.',
        'Les actions peuvent être attribuées aux personnes concernées, associées à une échéance, suivies selon leur statut et intégrées aux différents processus de l’organisation.',
        'Les validations, demandes de correction, décisions et actions en attente restent visibles jusqu’à leur résolution.',
      ],
      outcome: ['Chacun sait ce qu’il doit faire.', 'Les responsables savent ce qui reste à traiter.'],
    },
    {
      icon: 'Megaphone',
      title: 'Annonces officielles & notifications',
      shortDescription:
        'La bonne information, à la bonne personne, au bon moment. Publiez une fois et informez automatiquement les utilisateurs concernés.',
      expandedParagraphs: [
        'Synapse permet de publier les communications officielles dans l’environnement de l’organisation et de les adresser aux membres, équipes, rôles ou unités concernés.',
        'Les notifications peuvent accompagner les principales activités :',
      ],
      bullets: [
        'nouvelle annonce',
        'ouverture d’une inscription',
        'nouvelle formation, activité ou événement',
        'modification d’un programme',
        'tâche attribuée',
        'échéance à venir',
        'demande de validation',
        'changement de statut',
        'information officielle importante',
      ],
      outcome: ['Moins de relances manuelles.', 'Moins d’informations oubliées.'],
    },
    {
      icon: 'PanelsTopLeft',
      title: 'Portail & espace personnel',
      shortDescription:
        'Un point d’entrée unique pour chaque utilisateur. Donnez aux membres un espace personnel pour accéder aux informations et services qui les concernent.',
      expandedParagraphs: [
        'Le portail Synapse offre aux membres et aux autres utilisateurs un environnement personnalisé selon leur rôle.',
        'Ils peuvent notamment consulter leurs activités, gérer leurs inscriptions, suivre leurs formations, retrouver leurs documents et certificats, recevoir les annonces officielles et accomplir les actions attendues.',
        'Cette autonomie réduit les demandes adressées à l’administration et améliore la qualité de service offerte aux membres.',
      ],
      outcome: ['Plus d’autonomie pour les utilisateurs.', 'Moins d’interventions manuelles pour les équipes.'],
    },
    {
      icon: 'ChartNoAxesCombined',
      title: 'Pilotage & tableaux de bord',
      shortDescription:
        'Une vision globale, du niveau national au niveau local. Transformez les données de l’organisation en informations utiles pour le pilotage.',
      expandedParagraphs: [
        'Synapse rassemble les données issues des différents domaines afin de fournir une vision consolidée de l’organisation.',
        'Les responsables peuvent suivre les membres, les participations, les formations, les activités, les événements, les tâches, les structures, les finances et les indicateurs essentiels.',
        'Les tableaux de bord permettent de passer d’une vue nationale ou globale à une région, une unité, une activité ou un processus particulier.',
      ],
      outcome: ['Une seule source d’information.', 'Une meilleure base pour décider.'],
    },
    {
      icon: 'FileClock',
      title: 'Rapports & traçabilité',
      shortDescription:
        'Chaque activité laisse une trace exploitable. Retrouvez l’historique des actions, décisions, validations et changements.',
      expandedParagraphs: [
        'Synapse enregistre et relie les actions réalisées dans les différents domaines de la plateforme.',
        'L’organisation peut retrouver l’historique d’une adhésion, d’une formation, d’un événement, d’une tâche, d’une validation, d’un paiement ou d’une décision.',
        'La traçabilité permet notamment de comprendre :',
      ],
      bullets: [
        'ce qui a été réalisé',
        'par quelle personne',
        'à quel moment',
        'dans quel contexte',
        'avec quel statut',
        'quelles informations ont été modifiées',
      ],
      bulletsAfter: ['Ces données peuvent être utilisées pour le pilotage, les rapports, les contrôles internes et les audits.'],
      outcome: ['Une traçabilité de bout en bout.', 'Une organisation qui garde la maîtrise de son activité.'],
    },
    {
      icon: 'Sparkles',
      title: 'Syn’IA — l’assistant intelligent de Synapse',
      shortDescription:
        'L’intelligence artificielle intégrée au travail quotidien. Accélérez la recherche, la synthèse, le reporting et le suivi des actions.',
      expandedParagraphs: [
        'Syn’IA accompagne les utilisateurs directement dans l’environnement Synapse.',
        'L’assistant peut notamment contribuer à :',
      ],
      bullets: [
        'préparer et structurer des rapports',
        'produire des synthèses d’activité',
        'organiser et suivre les tâches',
        'identifier les éléments nécessitant une attention',
        'retrouver plus rapidement les informations',
        'préparer des contenus',
        'analyser les données disponibles',
        'guider les utilisateurs dans leurs processus',
      ],
      bulletsAfter: [
        'L’intelligence artificielle assiste les équipes. Les décisions, approbations et validations restent sous le contrôle des personnes autorisées.',
      ],
      outcome: ['Moins de temps à chercher et consolider.', 'Plus de temps pour analyser, décider et agir.'],
    },
  ] as ModuleItem[],
  trustCards: [
    {
      icon: 'ShieldCheck',
      title: 'Sécurité, protection & maîtrise des données',
      shortDescription:
        'La confiance commence par la protection de l’information. Des accès maîtrisés, des actions traçables et une gestion responsable des données.',
      cta: 'Découvrir notre approche',
      expandedParagraphs: [
        'Synapse Associations est conçu pour soutenir une gestion sécurisée et responsable des données de l’organisation et de ses membres.',
        'Les accès sont définis selon les rôles, les responsabilités et le périmètre de chaque utilisateur. Les actions importantes peuvent être tracées, et l’organisation conserve une visibilité sur les accès, les activités et les utilisations autorisées.',
        'L’approche de sécurité couvre notamment :',
      ],
      bullets: [
        'la gestion des rôles et des autorisations',
        'la limitation des accès aux personnes habilitées',
        'la traçabilité des actions et des modifications',
        'la protection des données pendant leur traitement',
        'la sauvegarde et la continuité des données',
        'la gestion des durées de conservation',
        'la suppression ou l’archivage selon les règles définies',
        'l’encadrement des prestataires et sous-traitants',
        'la gestion des éventuels transferts de données',
      ],
      outcome: ['Vos données ne sont pas seulement stockées.', 'Elles sont gouvernées, protégées et maîtrisées.'],
    },
    {
      icon: 'Scale',
      title: 'Protection des données & cadre marocain',
      shortDescription:
        'Une approche conçue pour accompagner les exigences marocaines de protection des données. Synapse soutient une gestion responsable des données personnelles et des droits des utilisateurs.',
      expandedParagraphs: [
        'Synapse Associations est conçu pour accompagner les organisations dans leur alignement avec la loi marocaine n° 09-08 relative à la protection des personnes physiques à l’égard du traitement des données à caractère personnel, ainsi qu’avec les exigences applicables de la CNDP.',
        'L’approche tient notamment compte des principes suivants :',
      ],
      bullets: [
        'une finalité claire et légitime pour chaque traitement',
        'une collecte limitée aux données réellement nécessaires',
        'une information transparente des personnes concernées',
        'une gestion appropriée des droits d’accès, de rectification et d’opposition',
        'une durée de conservation adaptée à la finalité',
        'des mesures techniques et organisationnelles de sécurité',
        'la confidentialité des données',
        'l’encadrement des sous-traitants',
        'un traitement approprié des éventuels transferts de données à l’étranger',
      ],
      bulletsAfter: [
        'Les modalités précises d’hébergement, de sauvegarde, de conservation, de suppression et de localisation des données sont définies selon l’architecture retenue, les besoins de l’organisation et les exigences juridiques applicables.',
      ],
      outcome: ['Conçu pour accompagner l’alignement avec le cadre marocain de protection des données.'],
    },
  ] as ModuleItem[],
};

export default associationsModules;
