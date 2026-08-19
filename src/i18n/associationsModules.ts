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

export type AssociationsModulesContent = {
  section: {
    overline: string;
    title1: string;
    title2: string;
    intro: string[];
    more: string;
    less: string;
  };
  trust: { title: string; subtitle: string };
  modules: ModuleItem[];
  trustCards: ModuleItem[];
};

const fr: AssociationsModulesContent = {
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
    subtitle: 'Une gestion responsable des données de votre organisation et de ses membres.',
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
  ],
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
  ],
};

const en: AssociationsModulesContent = {
  section: {
    overline: 'THE SYNAPSE ASSOCIATIONS ECOSYSTEM',
    title1: 'Your entire organization.',
    title2: 'One connected environment.',
    intro: [
      'Synapse Associations brings the essential functions of your organization together in one shared platform.',
      'Each area remains autonomous, while staying connected to the members, teams, activities, data and processes of the organization.',
      'Fewer scattered tools. More continuity, visibility and control.',
    ],
    more: 'Learn more',
    less: 'Show less',
  },
  trust: {
    title: 'Trust, security & compliance',
    subtitle: 'Responsible management of your organization’s and members’ data.',
  },
  modules: [
    {
      icon: 'UsersRound',
      title: 'Members & member area',
      shortDescription:
        'A simpler, more direct and better structured member relationship. Centralize each member’s journey and give them a personal space of their own.',
      expandedParagraphs: [
        'Synapse centralizes each member’s journey, from the membership request to active participation in the organization.',
        'Every member has their own account. They can view the information that concerns them, follow official news, discover the opportunities offered and register for training, events and activities.',
        'The administration benefits from centralized, up-to-date information, while members gain autonomy.',
      ],
      outcome: ['A better experience for members.', 'Less manual work for the organization.'],
    },
    {
      icon: 'Network',
      title: 'Governance & organizational structure',
      shortDescription:
        'A clear organization, from national leadership to local units. Structure responsibilities, bodies and governance processes.',
      expandedParagraphs: [
        'Synapse makes it possible to represent the real structure of the organization: national headquarters, regions, chapters, bodies, committees, teams and other levels of responsibility.',
        'Roles, mandates, bodies, decisions, assemblies, resolutions, elections and governance processes are organized and tracked in one shared environment.',
        'Each level has the information and tools that match its scope.',
      ],
      outcome: ['Clearly defined responsibilities.', 'More transparent governance.'],
    },
    {
      icon: 'MessagesSquare',
      title: 'Communication & collaboration',
      shortDescription:
        'Work and communication finally in one place. Connect teams, committees, projects and members in a shared environment.',
      expandedParagraphs: [
        'Synapse gathers the tools needed for the organization’s daily exchanges: groups, chat, email, calendar, online meetings, announcements, posts, polls and collaboration spaces.',
        'Information stays linked to the relevant teams, committees, projects and activities.',
        'The organization thus reduces its reliance on scattered conversations, informal groups and information that is hard to find.',
      ],
      outcome: ['Better structured conversations.', 'The whole community stays connected.'],
    },
    {
      icon: 'GraduationCap',
      title: 'Training & certification',
      shortDescription:
        'All your training. Every format. One journey. Manage in-person, online, hybrid and e-learning from a single platform.',
      expandedParagraphs: ['Synapse lets you manage all training activities, whether they are organized:'],
      bullets: ['in person', 'online', 'in hybrid mode', 'as e-learning', 'or in a journey combining several formats'],
      bulletsAfter: [
        'The platform connects programs, sessions, trainers, participants, content, resources, assessments, progress and certifications.',
        'Each participant follows their journey from their own account. Managers get a consolidated view of registrations, attendance, progress and results.',
      ],
      outcome: ['From registration to certification,', 'every step stays connected.'],
    },
    {
      icon: 'CalendarDays',
      title: 'Events & activities',
      shortDescription:
        'Plan, publish and track all your initiatives. Centralize your events, activities, registrations and participants.',
      expandedParagraphs: [
        'Synapse supports the organization of your events, meetings, campaigns, workshops, conferences and other activities.',
        'Managers centralize planning, registrations, participants, the calendar, communications and operational follow-up.',
        'From their personal space, members discover available activities, register directly and receive the information and notifications they need.',
      ],
      outcome: ['A smoother organization.', 'More accessible participation.'],
    },
    {
      icon: 'WalletCards',
      title: 'Finance & payments',
      shortDescription:
        'A clearer view of the financial flows linked to your activities. Track dues, registrations, payments and transactions in one environment.',
      expandedParagraphs: [
        'Synapse centralizes the financial information linked to memberships, registrations, training, events and the organization’s other activities.',
        'Managers can track dues, payments, outstanding amounts, transactions and relevant financial information.',
        'Financial data can feed dashboards, reports and approval processes.',
      ],
      outcome: ['Fewer manual reconciliations.', 'More visibility and control.'],
    },
    {
      icon: 'ListChecks',
      title: 'Tasks, processes & approvals',
      shortDescription:
        'Turn decisions into tracked actions. Assign tasks, follow deadlines and keep approvals visible.',
      expandedParagraphs: [
        'Synapse makes it possible to organize work beyond simple communication.',
        'Actions can be assigned to the right people, linked to a deadline, tracked by status and integrated into the organization’s various processes.',
        'Approvals, correction requests, decisions and pending actions stay visible until they are resolved.',
      ],
      outcome: ['Everyone knows what to do.', 'Managers know what is still open.'],
    },
    {
      icon: 'Megaphone',
      title: 'Official announcements & notifications',
      shortDescription:
        'The right information, to the right person, at the right time. Publish once and automatically inform the relevant users.',
      expandedParagraphs: [
        'Synapse lets you publish official communications inside the organization’s environment and address them to the relevant members, teams, roles or units.',
        'Notifications can accompany key activities:',
      ],
      bullets: [
        'a new announcement',
        'a registration opening',
        'a new training, activity or event',
        'a change to a program',
        'an assigned task',
        'an upcoming deadline',
        'an approval request',
        'a status change',
        'important official information',
      ],
      outcome: ['Fewer manual reminders.', 'Less information forgotten.'],
    },
    {
      icon: 'PanelsTopLeft',
      title: 'Portal & personal space',
      shortDescription:
        'A single entry point for every user. Give members a personal space to access the information and services that concern them.',
      expandedParagraphs: [
        'The Synapse portal gives members and other users an environment personalized to their role.',
        'They can view their activities, manage their registrations, follow their training, find their documents and certificates, receive official announcements and complete the actions expected of them.',
        'This autonomy reduces requests to the administration and improves the quality of service offered to members.',
      ],
      outcome: ['More autonomy for users.', 'Fewer manual interventions for the teams.'],
    },
    {
      icon: 'ChartNoAxesCombined',
      title: 'Steering & dashboards',
      shortDescription:
        'A global view, from national to local level. Turn the organization’s data into useful information for steering.',
      expandedParagraphs: [
        'Synapse brings together data from the different areas to provide a consolidated view of the organization.',
        'Managers can track members, participation, training, activities, events, tasks, structures, finances and key indicators.',
        'Dashboards make it possible to move from a national or global view down to a region, a unit, an activity or a specific process.',
      ],
      outcome: ['A single source of information.', 'A better basis for decisions.'],
    },
    {
      icon: 'FileClock',
      title: 'Reports & traceability',
      shortDescription:
        'Every activity leaves a usable trace. Retrieve the history of actions, decisions, approvals and changes.',
      expandedParagraphs: [
        'Synapse records and links the actions carried out across the different areas of the platform.',
        'The organization can retrieve the history of a membership, a training, an event, a task, an approval, a payment or a decision.',
        'Traceability helps understand in particular:',
      ],
      bullets: [
        'what was done',
        'by which person',
        'at what time',
        'in what context',
        'with what status',
        'which information was modified',
      ],
      bulletsAfter: ['This data can be used for steering, reporting, internal controls and audits.'],
      outcome: ['End-to-end traceability.', 'An organization that stays in control of its activity.'],
    },
    {
      icon: 'Sparkles',
      title: 'Syn’IA — the intelligent Synapse assistant',
      shortDescription:
        'Artificial intelligence built into daily work. Speed up search, summaries, reporting and follow-up of actions.',
      expandedParagraphs: [
        'Syn’IA supports users directly inside the Synapse environment.',
        'The assistant can help to:',
      ],
      bullets: [
        'prepare and structure reports',
        'produce activity summaries',
        'organize and track tasks',
        'identify items that need attention',
        'find information faster',
        'prepare content',
        'analyze available data',
        'guide users through their processes',
      ],
      bulletsAfter: [
        'Artificial intelligence assists the teams. Decisions, approvals and validations remain under the control of authorized people.',
      ],
      outcome: ['Less time searching and consolidating.', 'More time to analyze, decide and act.'],
    },
  ],
  trustCards: [
    {
      icon: 'ShieldCheck',
      title: 'Security, protection & data control',
      shortDescription:
        'Trust begins with protecting information. Controlled access, traceable actions and responsible data management.',
      cta: 'Discover our approach',
      expandedParagraphs: [
        'Synapse Associations is designed to support secure and responsible management of the data of the organization and its members.',
        'Access is defined according to the roles, responsibilities and scope of each user. Important actions can be traced, and the organization keeps visibility over access, activities and authorized uses.',
        'The security approach covers in particular:',
      ],
      bullets: [
        'management of roles and permissions',
        'limiting access to authorized people',
        'traceability of actions and changes',
        'protection of data during processing',
        'backup and continuity of data',
        'management of retention periods',
        'deletion or archiving according to defined rules',
        'oversight of providers and subcontractors',
        'management of any data transfers',
      ],
      outcome: ['Your data is not just stored.', 'It is governed, protected and controlled.'],
    },
    {
      icon: 'Scale',
      title: 'Data protection & the Moroccan framework',
      shortDescription:
        'An approach designed to support Moroccan data protection requirements. Synapse supports responsible management of personal data and user rights.',
      expandedParagraphs: [
        'Synapse Associations is designed to support organizations in aligning with Moroccan law no. 09-08 on the protection of individuals with regard to the processing of personal data, as well as the applicable CNDP requirements.',
        'The approach takes into account the following principles:',
      ],
      bullets: [
        'a clear and legitimate purpose for each processing activity',
        'collection limited to data that is genuinely necessary',
        'transparent information for the people concerned',
        'appropriate handling of rights of access, rectification and objection',
        'a retention period suited to the purpose',
        'technical and organizational security measures',
        'confidentiality of data',
        'oversight of subcontractors',
        'appropriate handling of any transfers of data abroad',
      ],
      bulletsAfter: [
        'The precise arrangements for hosting, backup, retention, deletion and data location are defined according to the chosen architecture, the needs of the organization and the applicable legal requirements.',
      ],
      outcome: ['Designed to support alignment with the Moroccan data protection framework.'],
    },
  ],
};

const no: AssociationsModulesContent = {
  section: {
    overline: 'ØKOSYSTEMET SYNAPSE ASSOCIATIONS',
    title1: 'Hele organisasjonen din.',
    title2: 'Ett sammenkoblet miljø.',
    intro: [
      'Synapse Associations samler organisasjonens viktigste funksjoner i én felles plattform.',
      'Hvert område er selvstendig, samtidig som det er koblet til medlemmene, teamene, aktivitetene, dataene og prosessene i organisasjonen.',
      'Færre spredte verktøy. Mer sammenheng, oversikt og kontroll.',
    ],
    more: 'Les mer',
    less: 'Vis mindre',
  },
  trust: {
    title: 'Tillit, sikkerhet og etterlevelse',
    subtitle: 'Ansvarlig håndtering av data om organisasjonen din og medlemmene.',
  },
  modules: [
    {
      icon: 'UsersRound',
      title: 'Medlemmer og medlemsområde',
      shortDescription:
        'En enklere, mer direkte og bedre strukturert medlemsrelasjon. Samle hele medlemsreisen og gi hvert medlem et eget personlig område.',
      expandedParagraphs: [
        'Synapse samler hvert medlems reise, fra søknad om medlemskap til aktiv deltakelse i organisasjonen.',
        'Hvert medlem har sin egen konto. Der kan de se informasjon som gjelder dem, følge offisielle nyheter, oppdage tilbud og melde seg på kurs, arrangementer og aktiviteter.',
        'Administrasjonen får sentralisert og oppdatert informasjon, mens medlemmene blir mer selvhjulpne.',
      ],
      outcome: ['Bedre opplevelse for medlemmene.', 'Mindre manuelt arbeid for organisasjonen.'],
    },
    {
      icon: 'Network',
      title: 'Styring og organisasjonsstruktur',
      shortDescription:
        'En tydelig organisasjon, fra nasjonal ledelse til lokale enheter. Strukturer ansvar, organer og styringsprosesser.',
      expandedParagraphs: [
        'Synapse gjør det mulig å gjenspeile organisasjonens faktiske struktur: nasjonalt hovedkontor, regioner, lokallag, organer, komiteer, team og andre ansvarsnivåer.',
        'Roller, mandater, organer, beslutninger, årsmøter, vedtak, valg og styringsprosesser organiseres og følges opp i ett felles miljø.',
        'Hvert nivå får informasjonen og verktøyene som hører til sitt ansvarsområde.',
      ],
      outcome: ['Tydelig definert ansvar.', 'Mer transparent styring.'],
    },
    {
      icon: 'MessagesSquare',
      title: 'Kommunikasjon og samarbeid',
      shortDescription:
        'Arbeid og kommunikasjon endelig samlet. Koble sammen team, komiteer, prosjekter og medlemmer i ett felles miljø.',
      expandedParagraphs: [
        'Synapse samler verktøyene organisasjonen trenger i hverdagen: grupper, chat, e-post, kalender, nettmøter, kunngjøringer, innlegg, spørreundersøkelser og samarbeidsrom.',
        'Informasjonen forblir knyttet til de aktuelle teamene, komiteene, prosjektene og aktivitetene.',
        'Slik blir organisasjonen mindre avhengig av spredte samtaler, uformelle grupper og informasjon som er vanskelig å finne igjen.',
      ],
      outcome: ['Bedre strukturerte samtaler.', 'Hele fellesskapet holdes koblet sammen.'],
    },
    {
      icon: 'GraduationCap',
      title: 'Opplæring og sertifisering',
      shortDescription:
        'All opplæring. Alle formater. Ett løp. Håndter fysisk, digital, hybrid og e-læring fra én og samme plattform.',
      expandedParagraphs: ['Synapse lar deg håndtere all opplæringsaktivitet, uansett om den gjennomføres:'],
      bullets: ['fysisk', 'digitalt', 'som hybrid', 'som e-læring', 'eller i et løp som kombinerer flere former'],
      bulletsAfter: [
        'Plattformen kobler sammen programmer, økter, instruktører, deltakere, innhold, ressurser, vurderinger, progresjon og sertifiseringer.',
        'Hver deltaker følger sitt eget løp fra sin konto. Ansvarlige får en samlet oversikt over påmeldinger, deltakelse, fremdrift og resultater.',
      ],
      outcome: ['Fra påmelding til sertifisering', 'henger hvert steg sammen.'],
    },
    {
      icon: 'CalendarDays',
      title: 'Arrangementer og aktiviteter',
      shortDescription:
        'Planlegg, publiser og følg opp alle initiativer. Samle arrangementer, aktiviteter, påmeldinger og deltakere.',
      expandedParagraphs: [
        'Synapse støtter gjennomføringen av arrangementer, møter, kampanjer, workshops, konferanser og andre aktiviteter.',
        'Ansvarlige samler planlegging, påmeldinger, deltakere, kalender, kommunikasjon og operativ oppfølging på ett sted.',
        'Fra sitt personlige område oppdager medlemmene tilgjengelige aktiviteter, melder seg på direkte og får informasjonen og varslene de trenger.',
      ],
      outcome: ['En smidigere organisering.', 'Enklere deltakelse.'],
    },
    {
      icon: 'WalletCards',
      title: 'Økonomi og betalinger',
      shortDescription:
        'Tydeligere oversikt over pengestrømmene knyttet til aktivitetene. Følg kontingenter, påmeldinger, betalinger og transaksjoner i ett miljø.',
      expandedParagraphs: [
        'Synapse samler den økonomiske informasjonen knyttet til medlemskap, påmeldinger, opplæring, arrangementer og organisasjonens øvrige aktiviteter.',
        'Ansvarlige kan følge kontingenter, betalinger, utestående beløp, transaksjoner og relevant økonomisk informasjon.',
        'Økonomidata kan brukes i dashbord, rapporter og godkjenningsprosesser.',
      ],
      outcome: ['Færre manuelle avstemminger.', 'Mer oversikt og kontroll.'],
    },
    {
      icon: 'ListChecks',
      title: 'Oppgaver, prosesser og godkjenninger',
      shortDescription:
        'Gjør beslutninger om til oppfulgte handlinger. Fordel oppgaver, følg frister og hold godkjenninger synlige.',
      expandedParagraphs: [
        'Synapse gjør det mulig å organisere arbeidet utover ren kommunikasjon.',
        'Handlinger kan tildeles rett person, knyttes til en frist, følges opp etter status og integreres i organisasjonens ulike prosesser.',
        'Godkjenninger, forespørsler om retting, beslutninger og ventende handlinger forblir synlige til de er løst.',
      ],
      outcome: ['Alle vet hva de skal gjøre.', 'Ansvarlige vet hva som gjenstår.'],
    },
    {
      icon: 'Megaphone',
      title: 'Offisielle kunngjøringer og varsler',
      shortDescription:
        'Riktig informasjon, til riktig person, til riktig tid. Publiser én gang og informer automatisk de aktuelle brukerne.',
      expandedParagraphs: [
        'Synapse lar deg publisere offisiell kommunikasjon i organisasjonens miljø og rette den mot aktuelle medlemmer, team, roller eller enheter.',
        'Varsler kan følge de viktigste aktivitetene:',
      ],
      bullets: [
        'ny kunngjøring',
        'åpning av påmelding',
        'nytt kurs, ny aktivitet eller nytt arrangement',
        'endring i et program',
        'tildelt oppgave',
        'kommende frist',
        'forespørsel om godkjenning',
        'statusendring',
        'viktig offisiell informasjon',
      ],
      outcome: ['Færre manuelle purringer.', 'Mindre informasjon som glemmes.'],
    },
    {
      icon: 'PanelsTopLeft',
      title: 'Portal og personlig område',
      shortDescription:
        'Ett felles inngangspunkt for hver bruker. Gi medlemmene et personlig område med informasjonen og tjenestene som angår dem.',
      expandedParagraphs: [
        'Synapse-portalen gir medlemmer og andre brukere et miljø tilpasset deres rolle.',
        'Der kan de blant annet se aktivitetene sine, håndtere påmeldinger, følge opplæringen sin, finne dokumenter og kursbevis, motta offisielle kunngjøringer og utføre forventede handlinger.',
        'Denne selvbetjeningen reduserer henvendelser til administrasjonen og hever servicenivået overfor medlemmene.',
      ],
      outcome: ['Mer selvbetjening for brukerne.', 'Færre manuelle inngrep for teamene.'],
    },
    {
      icon: 'ChartNoAxesCombined',
      title: 'Styring og dashbord',
      shortDescription:
        'Helhetlig oversikt, fra nasjonalt til lokalt nivå. Gjør organisasjonens data om til nyttig styringsinformasjon.',
      expandedParagraphs: [
        'Synapse samler data fra de ulike områdene for å gi et helhetlig bilde av organisasjonen.',
        'Ansvarlige kan følge medlemmer, deltakelse, opplæring, aktiviteter, arrangementer, oppgaver, strukturer, økonomi og sentrale nøkkeltall.',
        'Dashbordene gjør det mulig å gå fra nasjonal eller samlet oversikt ned til en region, en enhet, en aktivitet eller en bestemt prosess.',
      ],
      outcome: ['Én kilde til informasjon.', 'Et bedre grunnlag for beslutninger.'],
    },
    {
      icon: 'FileClock',
      title: 'Rapporter og sporbarhet',
      shortDescription:
        'Hver aktivitet etterlater et brukbart spor. Finn historikken for handlinger, beslutninger, godkjenninger og endringer.',
      expandedParagraphs: [
        'Synapse registrerer og kobler sammen handlinger utført i plattformens ulike områder.',
        'Organisasjonen kan finne historikken til et medlemskap, et kurs, et arrangement, en oppgave, en godkjenning, en betaling eller en beslutning.',
        'Sporbarheten gjør det blant annet mulig å forstå:',
      ],
      bullets: [
        'hva som ble gjort',
        'av hvem',
        'når',
        'i hvilken sammenheng',
        'med hvilken status',
        'hvilken informasjon som ble endret',
      ],
      bulletsAfter: ['Disse dataene kan brukes til styring, rapportering, internkontroll og revisjon.'],
      outcome: ['Sporbarhet fra start til slutt.', 'En organisasjon som beholder kontrollen over egen virksomhet.'],
    },
    {
      icon: 'Sparkles',
      title: 'Syn’IA — den intelligente assistenten i Synapse',
      shortDescription:
        'Kunstig intelligens integrert i det daglige arbeidet. Raskere søk, oppsummering, rapportering og oppfølging av handlinger.',
      expandedParagraphs: [
        'Syn’IA hjelper brukerne direkte inne i Synapse-miljøet.',
        'Assistenten kan blant annet bidra til å:',
      ],
      bullets: [
        'forberede og strukturere rapporter',
        'lage oppsummeringer av aktivitet',
        'organisere og følge opp oppgaver',
        'identifisere det som krever oppmerksomhet',
        'finne informasjon raskere',
        'forberede innhold',
        'analysere tilgjengelige data',
        'veilede brukerne gjennom prosessene',
      ],
      bulletsAfter: [
        'Kunstig intelligens støtter teamene. Beslutninger, godkjenninger og validering forblir under kontroll av autoriserte personer.',
      ],
      outcome: ['Mindre tid på å lete og samle informasjon.', 'Mer tid til å analysere, beslutte og handle.'],
    },
  ],
  trustCards: [
    {
      icon: 'ShieldCheck',
      title: 'Sikkerhet, beskyttelse og kontroll over data',
      shortDescription:
        'Tillit starter med å beskytte informasjonen. Kontrollert tilgang, sporbare handlinger og ansvarlig databehandling.',
      cta: 'Se vår tilnærming',
      expandedParagraphs: [
        'Synapse Associations er utviklet for å støtte sikker og ansvarlig håndtering av data om organisasjonen og medlemmene.',
        'Tilgang defineres etter roller, ansvar og den enkelte brukerens område. Viktige handlinger kan spores, og organisasjonen beholder oversikt over tilganger, aktiviteter og godkjent bruk.',
        'Sikkerhetstilnærmingen omfatter blant annet:',
      ],
      bullets: [
        'håndtering av roller og tilganger',
        'begrensning av tilgang til autoriserte personer',
        'sporbarhet for handlinger og endringer',
        'beskyttelse av data under behandling',
        'sikkerhetskopiering og kontinuitet',
        'håndtering av lagringstid',
        'sletting eller arkivering etter definerte regler',
        'oppfølging av leverandører og underleverandører',
        'håndtering av eventuelle dataoverføringer',
      ],
      outcome: ['Dataene dine blir ikke bare lagret.', 'De styres, beskyttes og kontrolleres.'],
    },
    {
      icon: 'Scale',
      title: 'Personvern og det marokkanske rammeverket',
      shortDescription:
        'En tilnærming utformet for å støtte marokkanske personvernkrav. Synapse støtter ansvarlig håndtering av personopplysninger og brukernes rettigheter.',
      expandedParagraphs: [
        'Synapse Associations er utviklet for å hjelpe organisasjoner med å etterleve den marokkanske loven nr. 09-08 om beskyttelse av fysiske personer ved behandling av personopplysninger, samt gjeldende krav fra CNDP.',
        'Tilnærmingen tar blant annet hensyn til følgende prinsipper:',
      ],
      bullets: [
        'et klart og berettiget formål for hver behandling',
        'innsamling begrenset til data som faktisk er nødvendige',
        'åpen informasjon til de registrerte',
        'god håndtering av rett til innsyn, retting og innsigelse',
        'lagringstid tilpasset formålet',
        'tekniske og organisatoriske sikkerhetstiltak',
        'konfidensialitet for dataene',
        'oppfølging av underleverandører',
        'forsvarlig håndtering av eventuelle overføringer av data til utlandet',
      ],
      bulletsAfter: [
        'De konkrete rammene for hosting, sikkerhetskopiering, lagring, sletting og datalokalisering fastsettes ut fra valgt arkitektur, organisasjonens behov og gjeldende juridiske krav.',
      ],
      outcome: ['Utviklet for å støtte etterlevelse av det marokkanske personvernrammeverket.'],
    },
  ],
};

const ar: AssociationsModulesContent = {
  section: {
    overline: 'منظومة SYNAPSE ASSOCIATIONS',
    title1: 'منظمتكم بأكملها.',
    title2: 'بيئة واحدة مترابطة.',
    intro: [
      'تجمع Synapse Associations الوظائف الأساسية لمنظمتكم في منصة واحدة مشتركة.',
      'يبقى كل مجال مستقلاً، مع ارتباطه في الوقت نفسه بالأعضاء والفرق والأنشطة والبيانات والمساطر داخل المنظمة.',
      'أدوات أقل تشتتاً. المزيد من الاستمرارية والوضوح والتحكم.',
    ],
    more: 'اقرأ المزيد',
    less: 'إظهار أقل',
  },
  trust: {
    title: 'الثقة والأمن والامتثال',
    subtitle: 'تدبير مسؤول لبيانات منظمتكم وأعضائها.',
  },
  modules: [
    {
      icon: 'UsersRound',
      title: 'الأعضاء وفضاء العضو',
      shortDescription:
        'علاقة أبسط وأوضح وأكثر تنظيماً مع الأعضاء. اجمعوا مسار كل عضو ووفّروا له فضاءً شخصياً خاصاً به.',
      expandedParagraphs: [
        'تجمع Synapse مسار كل عضو، من طلب الانخراط إلى المشاركة الفعلية داخل المنظمة.',
        'يتوفر كل عضو على حساب خاص به. يمكنه الاطلاع على المعلومات التي تخصه، ومتابعة الأخبار الرسمية، واكتشاف الفرص المتاحة، والتسجيل في التكوينات والفعاليات والأنشطة.',
        'تستفيد الإدارة من معلومات مركزية ومحيّنة، بينما يكتسب الأعضاء مزيداً من الاستقلالية.',
      ],
      outcome: ['تجربة أفضل للأعضاء.', 'تدبير يدوي أقل بالنسبة للمنظمة.'],
    },
    {
      icon: 'Network',
      title: 'الحكامة والهيكل التنظيمي',
      shortDescription:
        'تنظيم واضح، من الإدارة الوطنية إلى الوحدات المحلية. هيكلوا المسؤوليات والأجهزة ومساطر الحكامة.',
      expandedParagraphs: [
        'تتيح Synapse تمثيل الهيكل الفعلي للمنظمة: المقر الوطني، الجهات، الفروع، الأجهزة، اللجان، الفرق ومستويات المسؤولية الأخرى.',
        'تُنظَّم الأدوار والانتدابات والأجهزة والقرارات والجموع العامة والتوصيات والانتخابات ومساطر الحكامة وتُتابَع داخل بيئة مشتركة.',
        'يتوفر كل مستوى على المعلومات والأدوات المناسبة لمجال اختصاصه.',
      ],
      outcome: ['مسؤوليات محددة بوضوح.', 'حكامة أكثر شفافية.'],
    },
    {
      icon: 'MessagesSquare',
      title: 'التواصل والتعاون',
      shortDescription:
        'العمل والتواصل في مكان واحد أخيراً. اربطوا الفرق واللجان والمشاريع والأعضاء داخل بيئة مشتركة.',
      expandedParagraphs: [
        'تجمع Synapse الأدوات اللازمة للتبادلات اليومية للمنظمة: المجموعات، المحادثة، البريد الإلكتروني، التقويم، الاجتماعات عن بعد، الإعلانات، المنشورات، استطلاعات الرأي وفضاءات التعاون.',
        'تبقى المعلومات مرتبطة بالفرق واللجان والمشاريع والأنشطة المعنية.',
        'وبذلك تقلل المنظمة من اعتمادها على المحادثات المشتتة والمجموعات غير الرسمية والمعلومات التي يصعب العثور عليها.',
      ],
      outcome: ['تواصل أكثر تنظيماً.', 'بقاء المجتمع بأكمله على ارتباط.'],
    },
    {
      icon: 'GraduationCap',
      title: 'التكوين والإشهاد',
      shortDescription:
        'كل تكويناتكم. جميع الصيغ. مسار واحد. دبّروا التكوين الحضوري وعن بعد والهجين والتعلم الإلكتروني من منصة واحدة.',
      expandedParagraphs: ['تتيح Synapse تدبير مجموع أنشطة التكوين، سواء نُظمت:'],
      bullets: ['بشكل حضوري', 'عن بعد', 'بصيغة هجينة', 'عبر التعلم الإلكتروني', 'أو ضمن مسار يجمع بين عدة صيغ'],
      bulletsAfter: [
        'تربط المنصة البرامج والحصص والمكوّنين والمشاركين والمحتويات والموارد والتقييمات والتقدم والشهادات.',
        'يتابع كل مشارك مساره من حسابه الخاص. ويتوفر المسؤولون على رؤية شاملة للتسجيلات والحضور والتقدم والنتائج.',
      ],
      outcome: ['من التسجيل إلى الإشهاد،', 'تبقى كل مرحلة مترابطة.'],
    },
    {
      icon: 'CalendarDays',
      title: 'الفعاليات والأنشطة',
      shortDescription:
        'خططوا وانشروا وتابعوا جميع مبادراتكم. اجمعوا فعالياتكم وأنشطتكم وتسجيلاتكم والمشاركين فيها.',
      expandedParagraphs: [
        'ترافق Synapse تنظيم فعالياتكم ولقاءاتكم وحملاتكم وورشاتكم وندواتكم وأنشطتكم الأخرى.',
        'يجمع المسؤولون التخطيط والتسجيلات والمشاركين والتقويم والتواصل والمتابعة العملية في مكان واحد.',
        'ومن فضائهم الشخصي، يكتشف الأعضاء الأنشطة المتاحة ويسجلون مباشرة ويتوصلون بالمعلومات والإشعارات الضرورية.',
      ],
      outcome: ['تنظيم أكثر سلاسة.', 'مشاركة أيسر.'],
    },
    {
      icon: 'WalletCards',
      title: 'المالية والأداءات',
      shortDescription:
        'رؤية أوضح للتدفقات المالية المرتبطة بأنشطتكم. تابعوا الاشتراكات والتسجيلات والأداءات والمعاملات في بيئة واحدة.',
      expandedParagraphs: [
        'تجمع Synapse المعلومات المالية المرتبطة بالانخراطات والتسجيلات والتكوينات والفعاليات وباقي أنشطة المنظمة.',
        'يمكن للمسؤولين تتبع الاشتراكات والأداءات والمبالغ غير المسددة والمعاملات والمعطيات المالية ذات الصلة.',
        'ويمكن للمعطيات المالية أن تغذي لوحات القيادة والتقارير ومساطر المصادقة.',
      ],
      outcome: ['مطابقات يدوية أقل.', 'مزيد من الوضوح والتحكم.'],
    },
    {
      icon: 'ListChecks',
      title: 'المهام والمساطر والمصادقات',
      shortDescription:
        'حوّلوا القرارات إلى إجراءات متابَعة. وزّعوا المهام وتتبّعوا الآجال وأبقوا المصادقات ظاهرة.',
      expandedParagraphs: [
        'تتيح Synapse تنظيم العمل إلى ما هو أبعد من مجرد التواصل.',
        'يمكن إسناد الإجراءات إلى الأشخاص المعنيين، وربطها بأجل محدد، وتتبعها حسب حالتها، وإدماجها في مختلف مساطر المنظمة.',
        'تبقى المصادقات وطلبات التصحيح والقرارات والإجراءات المعلقة ظاهرة إلى حين معالجتها.',
      ],
      outcome: ['كل شخص يعرف ما عليه القيام به.', 'والمسؤولون يعرفون ما تبقى من معالجة.'],
    },
    {
      icon: 'Megaphone',
      title: 'البلاغات الرسمية والإشعارات',
      shortDescription:
        'المعلومة المناسبة، للشخص المناسب، في الوقت المناسب. انشروا مرة واحدة وأخبروا المستخدمين المعنيين تلقائياً.',
      expandedParagraphs: [
        'تتيح Synapse نشر البلاغات الرسمية داخل بيئة المنظمة وتوجيهها إلى الأعضاء أو الفرق أو الأدوار أو الوحدات المعنية.',
        'ويمكن للإشعارات أن ترافق الأنشطة الرئيسية:',
      ],
      bullets: [
        'بلاغ جديد',
        'فتح باب التسجيل',
        'تكوين أو نشاط أو فعالية جديدة',
        'تعديل في برنامج',
        'مهمة مسندة',
        'أجل قادم',
        'طلب مصادقة',
        'تغيير في الحالة',
        'معلومة رسمية مهمة',
      ],
      outcome: ['تذكيرات يدوية أقل.', 'معلومات منسية أقل.'],
    },
    {
      icon: 'PanelsTopLeft',
      title: 'البوابة والفضاء الشخصي',
      shortDescription:
        'نقطة دخول واحدة لكل مستخدم. امنحوا الأعضاء فضاءً شخصياً للوصول إلى المعلومات والخدمات التي تخصهم.',
      expandedParagraphs: [
        'توفر بوابة Synapse للأعضاء ولباقي المستخدمين بيئة مخصصة حسب دور كل واحد منهم.',
        'ويمكنهم الاطلاع على أنشطتهم، وتدبير تسجيلاتهم، ومتابعة تكويناتهم، واسترجاع وثائقهم وشهاداتهم، وتلقي البلاغات الرسمية، وإنجاز الإجراءات المطلوبة منهم.',
        'هذه الاستقلالية تقلل من الطلبات الموجهة إلى الإدارة وتحسّن جودة الخدمة المقدمة للأعضاء.',
      ],
      outcome: ['استقلالية أكبر للمستخدمين.', 'تدخلات يدوية أقل للفرق.'],
    },
    {
      icon: 'ChartNoAxesCombined',
      title: 'القيادة ولوحات القيادة',
      shortDescription:
        'رؤية شاملة، من المستوى الوطني إلى المستوى المحلي. حوّلوا معطيات المنظمة إلى معلومات مفيدة للقيادة.',
      expandedParagraphs: [
        'تجمع Synapse المعطيات الواردة من مختلف المجالات لتوفير رؤية موحدة عن المنظمة.',
        'يمكن للمسؤولين تتبع الأعضاء والمشاركات والتكوينات والأنشطة والفعاليات والمهام والهياكل والمالية والمؤشرات الأساسية.',
        'وتتيح لوحات القيادة الانتقال من رؤية وطنية أو شاملة إلى جهة أو وحدة أو نشاط أو مسطرة معينة.',
      ],
      outcome: ['مصدر واحد للمعلومة.', 'أساس أفضل لاتخاذ القرار.'],
    },
    {
      icon: 'FileClock',
      title: 'التقارير والتتبع',
      shortDescription:
        'كل نشاط يترك أثراً قابلاً للاستثمار. استرجعوا تاريخ الإجراءات والقرارات والمصادقات والتغييرات.',
      expandedParagraphs: [
        'تسجّل Synapse الإجراءات المنجزة في مختلف مجالات المنصة وتربط بينها.',
        'ويمكن للمنظمة استرجاع تاريخ انخراط أو تكوين أو فعالية أو مهمة أو مصادقة أو أداء أو قرار.',
        'ويتيح التتبع على الخصوص فهم:',
      ],
      bullets: [
        'ما تم إنجازه',
        'من طرف أي شخص',
        'في أي وقت',
        'في أي سياق',
        'بأي حالة',
        'وما هي المعلومات التي تم تعديلها',
      ],
      bulletsAfter: ['ويمكن استعمال هذه المعطيات في القيادة والتقارير والمراقبة الداخلية والافتحاص.'],
      outcome: ['تتبع من البداية إلى النهاية.', 'منظمة تحتفظ بالتحكم في نشاطها.'],
    },
    {
      icon: 'Sparkles',
      title: 'Syn’IA — المساعد الذكي لـ Synapse',
      shortDescription:
        'ذكاء اصطناعي مدمج في العمل اليومي. سرّعوا البحث والتلخيص وإعداد التقارير وتتبع الإجراءات.',
      expandedParagraphs: [
        'يرافق Syn’IA المستخدمين مباشرة داخل بيئة Synapse.',
        'ويمكن للمساعد أن يساهم على الخصوص في:',
      ],
      bullets: [
        'إعداد التقارير وهيكلتها',
        'إنتاج ملخصات عن النشاط',
        'تنظيم المهام وتتبعها',
        'تحديد العناصر التي تتطلب الانتباه',
        'العثور على المعلومات بسرعة أكبر',
        'إعداد المحتويات',
        'تحليل المعطيات المتوفرة',
        'توجيه المستخدمين في مساطرهم',
      ],
      bulletsAfter: [
        'الذكاء الاصطناعي يساعد الفرق. أما القرارات والموافقات والمصادقات فتبقى تحت تحكم الأشخاص المخوّل لهم ذلك.',
      ],
      outcome: ['وقت أقل في البحث والتجميع.', 'وقت أكبر للتحليل واتخاذ القرار والتنفيذ.'],
    },
  ],
  trustCards: [
    {
      icon: 'ShieldCheck',
      title: 'الأمن والحماية والتحكم في البيانات',
      shortDescription:
        'الثقة تبدأ بحماية المعلومة. ولوجات محكومة، وإجراءات قابلة للتتبع، وتدبير مسؤول للبيانات.',
      cta: 'اكتشفوا مقاربتنا',
      expandedParagraphs: [
        'صُمّمت Synapse Associations لدعم تدبير آمن ومسؤول لبيانات المنظمة وأعضائها.',
        'تُحدَّد الولوجات حسب الأدوار والمسؤوليات ومجال كل مستخدم. ويمكن تتبع الإجراءات المهمة، وتحتفظ المنظمة برؤية حول الولوجات والأنشطة والاستعمالات المرخص بها.',
        'وتشمل المقاربة الأمنية على الخصوص:',
      ],
      bullets: [
        'تدبير الأدوار والصلاحيات',
        'حصر الولوج في الأشخاص المخوّل لهم',
        'تتبع الإجراءات والتعديلات',
        'حماية البيانات أثناء معالجتها',
        'النسخ الاحتياطي واستمرارية البيانات',
        'تدبير مدد الاحتفاظ',
        'الحذف أو الأرشفة وفق القواعد المحددة',
        'تأطير المزودين والمناولين',
        'تدبير عمليات نقل البيانات المحتملة',
      ],
      outcome: ['بياناتكم ليست مخزّنة فقط.', 'بل مُدارة ومحمية ومتحكَّم فيها.'],
    },
    {
      icon: 'Scale',
      title: 'حماية المعطيات والإطار القانوني المغربي',
      shortDescription:
        'مقاربة مصممة لمواكبة المتطلبات المغربية لحماية المعطيات. تدعم Synapse تدبيراً مسؤولاً للمعطيات الشخصية ولحقوق المستخدمين.',
      expandedParagraphs: [
        'صُمّمت Synapse Associations لمواكبة المنظمات في ملاءمتها مع القانون المغربي رقم 09-08 المتعلق بحماية الأشخاص الذاتيين تجاه معالجة المعطيات ذات الطابع الشخصي، وكذا المتطلبات المعمول بها لدى اللجنة الوطنية لمراقبة حماية المعطيات ذات الطابع الشخصي (CNDP).',
        'وتأخذ المقاربة بعين الاعتبار على الخصوص المبادئ التالية:',
      ],
      bullets: [
        'غاية واضحة ومشروعة لكل معالجة',
        'جمع محدود في المعطيات الضرورية فعلاً',
        'إخبار شفاف للأشخاص المعنيين',
        'تدبير ملائم لحقوق الولوج والتصحيح والتعرض',
        'مدة احتفاظ ملائمة للغاية المتوخاة',
        'تدابير أمنية تقنية وتنظيمية',
        'سرية المعطيات',
        'تأطير المناولين',
        'معالجة ملائمة لعمليات نقل المعطيات إلى الخارج عند الاقتضاء',
      ],
      bulletsAfter: [
        'تُحدَّد الكيفيات الدقيقة للاستضافة والنسخ الاحتياطي والاحتفاظ والحذف وتوطين المعطيات حسب البنية المعتمدة وحاجيات المنظمة والمتطلبات القانونية المعمول بها.',
      ],
      outcome: ['مصمّمة لمواكبة الملاءمة مع الإطار المغربي لحماية المعطيات.'],
    },
  ],
};

export const associationsModules = { fr, en, no, ar } as const;

export default associationsModules;
