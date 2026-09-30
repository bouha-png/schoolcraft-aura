type Universe = { overline: string; title: string; text: string; tags: string[]; v: string[] };
type Flow = { title: string; steps: string[] };

export interface BusinessCopy {
  back: string;
  hero: { label: string; title1: string; title2: string; subtitle: string; cta: string; cta2: string; imgAlt: string; nodes: string[]; hub: string };
  problem: { title: string; tools: string[]; result: string; text: string };
  universes: Universe[];
  booking: { overline: string; title: string; text: string; steps: string[]; v: string[]; app: { company: string; step: string; service: string; services: { n: string; d: string }[]; month: string; days: string[]; morning: string; afternoon: string; with: string; role: string; summary: string } };
  sell: { overline: string; title: string; text: string; tags: string[] };
  shop: { title: string; text: string; steps: string[]; v: string[] };
  events: { title: string; text: string; tags: string[]; v: string[] };
  training: { overline: string; title: string; text: string; tags: string[]; v: string[] };
  workspaces: { overline: string; title: string; text: string; names: string[]; inside: string[]; v: string[] };
  connect: { title: string; text: string; flows: Flow[] };
  ai: { overline: string; title: string; text: string; items: { ctx: string; action: string }[] };
  modules: { title: string; text: string; items: string[]; note: string };
  final: { title1: string; title2: string; text: string; cta: string; cta2: string };
  floating: string;
  waDemo: string;
  waContact: string;
}

const fr: BusinessCopy = {
  back: 'Retour',
  hero: {
    label: 'Synapse Business',
    title1: 'Votre entreprise.',
    title2: 'Un seul environnement.',
    subtitle: 'Collaborez, gérez vos équipes, pilotez vos projets, suivez vos clients et développez vos services depuis une plateforme unique.',
    cta: 'Demander une démonstration',
    cta2: 'Explorer la plateforme',
    imgAlt: 'Une équipe de PME travaille ensemble',
    nodes: ['Équipe', 'Projet', 'Client', 'Finance', 'Document', 'Réunion'],
    hub: 'Synapse Business',
  },
  problem: {
    title: 'Pourquoi multiplier les outils pour faire fonctionner une seule entreprise ?',
    tools: ['Email', 'WhatsApp / Chat', 'Réunions', 'Stockage cloud', 'Outils projet', 'CRM', 'RH', 'Finance', 'Formation', 'Réservations'],
    result: 'Synapse Business',
    text: 'Synapse connecte les personnes, les informations et les processus dans un même environnement.',
  },
  universes: [
    {
      overline: 'Collaborer & communiquer',
      title: 'Un espace commun pour travailler ensemble.',
      text: 'Échangez, partagez, organisez vos réunions et retrouvez vos informations sans changer constamment d’outil.',
      tags: ['Espaces de travail', 'Collaboration', 'Chat', 'Email', 'Réunions en ligne', 'Calendrier', 'Documents partagés', 'Stockage', 'Communication interne', 'Live'],
      v: ['équipe-commerciale', 'La proposition pour Atlas est prête, je la partage ici.', 'Parfait, on la revoit à la réunion.', 'Proposition_Atlas.pdf', 'Réunion hebdo', '14:00', 'Rejoindre', 'Aujourd’hui'],
    },
    {
      overline: 'Organiser le travail',
      title: 'Du travail quotidien aux projets stratégiques.',
      text: 'Transformez les demandes, tâches et projets en processus visibles et traçables.',
      tags: ['Tâches', 'Projets', 'Workflows', 'Réunions', 'Activités', 'Événements', 'Échéances', 'Validations', 'Documents', 'Suivi'],
      v: ['Projet', 'Tâches', 'Personnes', 'Documents', 'Validation', 'Avancement', 'Ouverture agence Rabat', 'Validation demandée'],
    },
    {
      overline: 'Gérer les équipes',
      title: 'Les collaborateurs au cœur de l’organisation.',
      text: 'Centralisez la gestion de vos collaborateurs, du quotidien au développement des compétences.',
      tags: ['Annuaire', 'Organisation', 'RH', 'Dossier collaborateur', 'Présences & congés', 'Paie', 'Parcours collaborateur', 'Formation interne', 'Développement'],
      v: ['Collaborateur', 'RH', 'Paie', 'Formation', 'Développement', 'Salma Idrissi', 'Chargée de clientèle', 'Parcours de formation en cours'],
    },
    {
      overline: 'Piloter l’entreprise',
      title: 'Une vision plus claire de votre activité.',
      text: 'Rassemblez les informations nécessaires au pilotage de votre activité dans un même environnement.',
      tags: ['Finance', 'Budgets', 'Coûts', 'Suivi financier', 'Reporting', 'Informations de gestion', 'Finances des projets', 'Tableaux de bord'],
      v: ['Tableau de bord', 'Budget', 'Coûts', 'Projets', 'Activité', 'Par trimestre'],
    },
    {
      overline: 'Relation client',
      title: 'Chaque client. Chaque interaction. Au même endroit.',
      text: 'Gardez une vision claire de vos clients, des échanges passés aux prochaines actions.',
      tags: ['Clients', 'Organisations', 'Contacts', 'Historique', 'Opportunités', 'Activités', 'Suivi', 'Notes', 'Documents', 'Rendez-vous'],
      v: ['Atlas Distribution', 'Client', 'Contacts', 'Réunions', 'Emails', 'Documents', 'Tâches', 'Opportunités', 'Rendez-vous'],
    },
  ],
  booking: {
    overline: 'Réservation client',
    title: 'Laissez vos clients réserver simplement.',
    text: 'Proposez des créneaux de rendez-vous en ligne et retrouvez automatiquement les réservations dans votre environnement de travail.',
    steps: ['Client', 'Service', 'Date', 'Heure', 'Confirmation', 'Calendrier & CRM'],
    v: ['Prendre rendez-vous', 'Consultation conseil', 'Mardi', 'Confirmer', 'Rendez-vous confirmé', 'Ajouté au calendrier de l’équipe'],
    app: { company: 'Atlas Conseil', step: 'Étape 2 sur 3', service: 'Service', services: [{ n: 'Consultation conseil', d: '45 min · En agence' }, { n: 'Rendez-vous en visio', d: '30 min · En ligne' }], month: 'Septembre 2026', days: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'], morning: 'Matin', afternoon: 'Après-midi', with: 'Avec', role: 'Conseillère', summary: 'Mar. 15 sept. · 10:30' },
  },
  sell: {
    overline: 'Vendre & proposer des services',
    title: 'Développez aussi votre activité en ligne.',
    text: 'Transformez votre environnement Synapse en point d’accès à vos produits, services et événements.',
    tags: ['Boutique en ligne', 'Produits', 'Services', 'Offres numériques', 'Événements', 'Inscriptions', 'Formations', 'Réservations', 'Live'],
  },
  shop: {
    title: 'Une boutique reliée au reste de l’entreprise.',
    text: 'Du catalogue au suivi interne, chaque commande reste connectée à vos clients et à vos équipes.',
    steps: ['Catalogue', 'Client', 'Commande', 'Statut', 'Suivi interne'],
    v: ['Cosmétiques à l’argan', 'Séjour en riad', 'Caftans & textile', 'Nouvelle commande', 'En préparation', 'Tâche créée pour l’équipe'],
  },
  events: {
    title: 'Du rendez-vous au grand événement.',
    text: 'Organisez vos événements, gérez les inscriptions et diffusez vos sessions en direct, pour vos équipes comme pour vos clients.',
    tags: ['Événements', 'Inscriptions', 'Participants', 'Sessions en ligne', 'Live streaming', 'Webinaires', 'Public interne & externe'],
    v: ['En direct', 'Rencontre annuelle clients', 'Inscrits', 'Questions', 'S’inscrire'],
  },
  training: {
    overline: 'Formation',
    title: 'Développez les compétences de vos équipes.',
    text: 'Organisez la formation et le développement professionnel directement dans l’environnement de travail de vos collaborateurs.',
    tags: ['Catalogue', 'Inscriptions', 'Programmes', 'Formateurs', 'Sessions', 'Progression', 'Certificats', 'Formation en ligne'],
    v: ['Accueil des nouveaux collaborateurs', 'Relation client avancée', 'Outils numériques', 'Progression', 'Certificat obtenu'],
  },
  workspaces: {
    overline: 'Espaces de travail',
    title: 'Un espace pour chaque équipe, projet ou initiative.',
    text: 'L’espace de travail devient la salle numérique partagée de chaque activité.',
    names: ['Direction', 'Commercial', 'Projet', 'RH', 'Projet client'],
    inside: ['Membres', 'Discussion', 'Fichiers', 'Tâches', 'Réunions', 'Calendrier', 'Documents', 'Activité'],
    v: ['membres', 'Nouvelle réunion planifiée', 'Document mis à jour', 'Tâche terminée'],
  },
  connect: {
    title: 'Parce que votre entreprise ne fonctionne pas en silos.',
    text: 'La valeur de Synapse ne tient pas au nombre de modules, mais au fait qu’ils partagent le même contexte et travaillent ensemble.',
    flows: [
      { title: 'Un client prend rendez-vous', steps: ['CRM', 'Calendrier', 'Collaborateur', 'Réunion', 'Documents', 'Tâche', 'Finance'] },
      { title: 'Un collaborateur rejoint un projet', steps: ['Collaborateur', 'Espace', 'Projet', 'Tâches', 'Documents', 'Réunions', 'Formation'] },
    ],
  },
  ai: {
    overline: 'Syn’IA',
    title: 'Une intelligence qui travaille avec votre organisation.',
    text: 'Syn’IA apparaît là où le travail se fait déjà, pas dans une fenêtre à part.',
    items: [
      { ctx: 'Réunion', action: 'Résumer la réunion' },
      { ctx: 'Document', action: 'Reformuler un document' },
      { ctx: 'Projet', action: 'Préparer un point d’avancement' },
      { ctx: 'Recherche', action: 'Retrouver une information' },
      { ctx: 'Communication', action: 'Créer du contenu' },
      { ctx: 'Pilotage', action: 'Analyser des informations' },
      { ctx: 'Collaborateur', action: 'Accompagner un collaborateur' },
      { ctx: 'Client', action: 'Préparer un message client' },
    ],
  },
  modules: {
    title: 'Commencez avec vos priorités. Évoluez à votre rythme.',
    text: 'Chaque organisation active les briques dont elle a besoin, puis étend son environnement quand elle le souhaite.',
    items: ['Collaboration', 'Espaces', 'Communication', 'Réunions', 'Documents', 'Calendrier', 'Projets', 'Tâches', 'Workflows', 'RH', 'Paie', 'Formation', 'Finance', 'CRM', 'Réservation', 'Événements', 'Live', 'Boutique', 'IA'],
    note: 'Une seule plateforme. Les modules que vous choisissez.',
  },
  final: {
    title1: 'Moins d’outils.',
    title2: 'Plus de continuité.',
    text: 'Synapse Business réunit les personnes, le travail et les services de votre entreprise dans un environnement connecté.',
    cta: 'Demander une démonstration',
    cta2: 'Découvrir Synapse Business',
  },
  floating: 'Demander une démo',
  waDemo: 'Bonjour, je souhaite une démonstration de Synapse Business.',
  waContact: 'Bonjour, je souhaite en savoir plus sur Synapse Business.',
};

const en: BusinessCopy = {
  back: 'Back',
  hero: {
    label: 'Synapse Business',
    title1: 'Your company.',
    title2: 'One environment.',
    subtitle: 'Collaborate, manage your teams, run your projects, follow your customers and grow your services from a single platform.',
    cta: 'Request a demo',
    cta2: 'Explore the platform',
    imgAlt: 'An SME team working together',
    nodes: ['Team', 'Project', 'Customer', 'Finance', 'Document', 'Meeting'],
    hub: 'Synapse Business',
  },
  problem: {
    title: 'Why use so many tools to run one company?',
    tools: ['Email', 'WhatsApp / Chat', 'Meetings', 'Cloud storage', 'Project tools', 'CRM', 'HR', 'Finance', 'Training', 'Booking'],
    result: 'Synapse Business',
    text: 'Synapse connects people, information and processes in one environment.',
  },
  universes: [
    {
      overline: 'Collaborate & communicate',
      title: 'A shared space to work together.',
      text: 'Talk, share, run your meetings and find your information without constantly switching tools.',
      tags: ['Workspaces', 'Collaboration', 'Chat', 'Email', 'Online meetings', 'Calendar', 'Shared documents', 'File storage', 'Internal communication', 'Live'],
      v: ['sales-team', 'The Atlas proposal is ready, sharing it here.', 'Great, let’s review it in the meeting.', 'Atlas_Proposal.pdf', 'Weekly meeting', '14:00', 'Join', 'Today'],
    },
    {
      overline: 'Organise the work',
      title: 'From daily work to strategic projects.',
      text: 'Turn requests, tasks and projects into visible, traceable processes.',
      tags: ['Tasks', 'Projects', 'Workflows', 'Meetings', 'Activities', 'Events', 'Deadlines', 'Approvals', 'Documents', 'Follow-up'],
      v: ['Project', 'Tasks', 'People', 'Documents', 'Approval', 'Progress', 'Rabat office opening', 'Approval requested'],
    },
    {
      overline: 'Manage your teams',
      title: 'Employees at the heart of the organisation.',
      text: 'Centralise the management of your employees, from daily matters to skills development.',
      tags: ['Directory', 'Organisation', 'HR', 'Employee records', 'Attendance & leave', 'Payroll', 'Employee lifecycle', 'Internal training', 'Development'],
      v: ['Employee', 'HR', 'Payroll', 'Training', 'Development', 'Salma Idrissi', 'Customer advisor', 'Learning path in progress'],
    },
    {
      overline: 'Steer the company',
      title: 'A clearer view of your business.',
      text: 'Bring the information you need to steer your business into one environment.',
      tags: ['Finance', 'Budgets', 'Costs', 'Financial follow-up', 'Reporting', 'Management information', 'Project finances', 'Dashboards'],
      v: ['Dashboard', 'Budget', 'Costs', 'Projects', 'Activity', 'By quarter'],
    },
    {
      overline: 'Customer relationships',
      title: 'Every customer. Every interaction. In one place.',
      text: 'Keep a clear view of your customers, from past conversations to next actions.',
      tags: ['Customers', 'Organisations', 'Contacts', 'History', 'Opportunities', 'Activities', 'Follow-up', 'Notes', 'Documents', 'Appointments'],
      v: ['Atlas Distribution', 'Customer', 'Contacts', 'Meetings', 'Emails', 'Documents', 'Tasks', 'Opportunities', 'Appointments'],
    },
  ],
  booking: {
    overline: 'Customer booking',
    title: 'Let your customers book with ease.',
    text: 'Offer online appointment slots and find bookings automatically in your work environment.',
    steps: ['Customer', 'Service', 'Date', 'Time', 'Confirmation', 'Calendar & CRM'],
    v: ['Book an appointment', 'Advisory session', 'Tuesday', 'Confirm', 'Appointment confirmed', 'Added to the team calendar'],
    app: { company: 'Atlas Advisory', step: 'Step 2 of 3', service: 'Service', services: [{ n: 'Advisory session', d: '45 min · In office' }, { n: 'Video meeting', d: '30 min · Online' }], month: 'September 2026', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], morning: 'Morning', afternoon: 'Afternoon', with: 'With', role: 'Advisor', summary: 'Tue 15 Sep · 10:30' },
  },
  sell: {
    overline: 'Sell & offer services',
    title: 'Grow your business online too.',
    text: 'Turn your Synapse environment into a gateway to your products, services and events.',
    tags: ['Online shop', 'Products', 'Services', 'Digital offers', 'Events', 'Registrations', 'Training', 'Booking', 'Live'],
  },
  shop: {
    title: 'A shop connected to the rest of the company.',
    text: 'From catalogue to internal follow-up, every order stays linked to your customers and teams.',
    steps: ['Catalogue', 'Customer', 'Order', 'Status', 'Internal follow-up'],
    v: ['Argan cosmetics', 'Riad stay', 'Caftans & textiles', 'New order', 'In preparation', 'Task created for the team'],
  },
  events: {
    title: 'From meetings to major events.',
    text: 'Organise events, manage registrations and stream sessions live, for your teams and your customers.',
    tags: ['Events', 'Registrations', 'Participants', 'Online sessions', 'Live streaming', 'Webinars', 'Internal & external audiences'],
    v: ['Live', 'Annual customer meeting', 'Registered', 'Questions', 'Register'],
  },
  training: {
    overline: 'Training',
    title: 'Develop your teams’ skills.',
    text: 'Organise training and professional development right inside your employees’ work environment.',
    tags: ['Catalogue', 'Enrolment', 'Programmes', 'Instructors', 'Sessions', 'Progress', 'Certificates', 'Online learning'],
    v: ['Onboarding new employees', 'Advanced customer care', 'Digital tools', 'Progress', 'Certificate earned'],
  },
  workspaces: {
    overline: 'Workspaces',
    title: 'A space for every team, project or initiative.',
    text: 'The workspace becomes the shared digital room for each activity.',
    names: ['Management', 'Sales', 'Project', 'HR', 'Customer project'],
    inside: ['Members', 'Discussion', 'Files', 'Tasks', 'Meetings', 'Calendar', 'Documents', 'Activity'],
    v: ['members', 'New meeting scheduled', 'Document updated', 'Task completed'],
  },
  connect: {
    title: 'Because your company doesn’t work in silos.',
    text: 'The value of Synapse isn’t the number of modules, but that they share context and work together.',
    flows: [
      { title: 'A customer books an appointment', steps: ['CRM', 'Calendar', 'Employee', 'Meeting', 'Documents', 'Task', 'Finance'] },
      { title: 'An employee joins a project', steps: ['Employee', 'Workspace', 'Project', 'Tasks', 'Documents', 'Meetings', 'Training'] },
    ],
  },
  ai: {
    overline: 'Syn’IA',
    title: 'Intelligence that works with your organisation.',
    text: 'Syn’IA shows up where work already happens, not in a separate window.',
    items: [
      { ctx: 'Meeting', action: 'Summarise the meeting' },
      { ctx: 'Document', action: 'Rephrase a document' },
      { ctx: 'Project', action: 'Prepare a project update' },
      { ctx: 'Search', action: 'Find information' },
      { ctx: 'Communication', action: 'Create content' },
      { ctx: 'Steering', action: 'Analyse information' },
      { ctx: 'Employee', action: 'Assist an employee' },
      { ctx: 'Customer', action: 'Prepare a customer message' },
    ],
  },
  modules: {
    title: 'Start with your priorities. Grow at your own pace.',
    text: 'Each organisation activates the building blocks it needs, then extends its environment when it wants.',
    items: ['Collaboration', 'Workspaces', 'Communication', 'Meetings', 'Documents', 'Calendar', 'Projects', 'Tasks', 'Workflows', 'HR', 'Payroll', 'Training', 'Finance', 'CRM', 'Booking', 'Events', 'Live', 'Shop', 'AI'],
    note: 'One platform. The modules you choose.',
  },
  final: {
    title1: 'Fewer tools.',
    title2: 'More continuity.',
    text: 'Synapse Business brings your company’s people, work and services together in one connected environment.',
    cta: 'Request a demo',
    cta2: 'Discover Synapse Business',
  },
  floating: 'Request a demo',
  waDemo: 'Hello, I would like a demo of Synapse Business.',
  waContact: 'Hello, I would like to know more about Synapse Business.',
};

const no: BusinessCopy = {
  back: 'Tilbake',
  hero: {
    label: 'Synapse Business',
    title1: 'Din bedrift.',
    title2: 'Ett miljø.',
    subtitle: 'Samarbeid, led teamene, styr prosjektene, følg opp kundene og utvikle tjenestene fra én plattform.',
    cta: 'Be om demo',
    cta2: 'Utforsk plattformen',
    imgAlt: 'Et team i en SMB som jobber sammen',
    nodes: ['Team', 'Prosjekt', 'Kunde', 'Økonomi', 'Dokument', 'Møte'],
    hub: 'Synapse Business',
  },
  problem: {
    title: 'Hvorfor bruke så mange verktøy for å drive én bedrift?',
    tools: ['E-post', 'WhatsApp / Chat', 'Møter', 'Skylagring', 'Prosjektverktøy', 'CRM', 'HR', 'Økonomi', 'Opplæring', 'Booking'],
    result: 'Synapse Business',
    text: 'Synapse kobler sammen mennesker, informasjon og prosesser i ett miljø.',
  },
  universes: [
    {
      overline: 'Samarbeide & kommunisere',
      title: 'Et felles rom for å jobbe sammen.',
      text: 'Snakk sammen, del, hold møter og finn informasjonen uten å bytte verktøy hele tiden.',
      tags: ['Arbeidsrom', 'Samarbeid', 'Chat', 'E-post', 'Nettmøter', 'Kalender', 'Delte dokumenter', 'Lagring', 'Intern kommunikasjon', 'Live'],
      v: ['salgsteamet', 'Tilbudet til Atlas er klart, jeg deler det her.', 'Supert, vi går gjennom det på møtet.', 'Tilbud_Atlas.pdf', 'Ukemøte', '14:00', 'Bli med', 'I dag'],
    },
    {
      overline: 'Organisere arbeidet',
      title: 'Fra daglig arbeid til strategiske prosjekter.',
      text: 'Gjør forespørsler, oppgaver og prosjekter om til synlige og sporbare prosesser.',
      tags: ['Oppgaver', 'Prosjekter', 'Arbeidsflyt', 'Møter', 'Aktiviteter', 'Arrangementer', 'Frister', 'Godkjenninger', 'Dokumenter', 'Oppfølging'],
      v: ['Prosjekt', 'Oppgaver', 'Personer', 'Dokumenter', 'Godkjenning', 'Fremdrift', 'Åpning av kontor i Rabat', 'Godkjenning forespurt'],
    },
    {
      overline: 'Lede teamene',
      title: 'De ansatte i sentrum av organisasjonen.',
      text: 'Samle oppfølgingen av de ansatte, fra hverdagen til kompetanseutvikling.',
      tags: ['Ansattkatalog', 'Organisasjon', 'HR', 'Ansattinformasjon', 'Fravær & ferie', 'Lønn', 'Ansattreise', 'Intern opplæring', 'Utvikling'],
      v: ['Ansatt', 'HR', 'Lønn', 'Opplæring', 'Utvikling', 'Salma Idrissi', 'Kunderådgiver', 'Opplæringsløp pågår'],
    },
    {
      overline: 'Styre bedriften',
      title: 'Et klarere bilde av virksomheten.',
      text: 'Samle informasjonen du trenger for å styre virksomheten i ett miljø.',
      tags: ['Økonomi', 'Budsjetter', 'Kostnader', 'Økonomisk oppfølging', 'Rapportering', 'Styringsinformasjon', 'Prosjektøkonomi', 'Dashbord'],
      v: ['Dashbord', 'Budsjett', 'Kostnader', 'Prosjekter', 'Aktivitet', 'Per kvartal'],
    },
    {
      overline: 'Kunderelasjoner',
      title: 'Hver kunde. Hver kontakt. På ett sted.',
      text: 'Ha full oversikt over kundene, fra tidligere samtaler til neste steg.',
      tags: ['Kunder', 'Organisasjoner', 'Kontakter', 'Historikk', 'Muligheter', 'Aktiviteter', 'Oppfølging', 'Notater', 'Dokumenter', 'Avtaler'],
      v: ['Atlas Distribution', 'Kunde', 'Kontakter', 'Møter', 'E-post', 'Dokumenter', 'Oppgaver', 'Muligheter', 'Avtaler'],
    },
  ],
  booking: {
    overline: 'Kundebooking',
    title: 'La kundene booke enkelt.',
    text: 'Tilby ledige tider på nett, og finn bookingene automatisk igjen i arbeidsmiljøet.',
    steps: ['Kunde', 'Tjeneste', 'Dato', 'Tid', 'Bekreftelse', 'Kalender & CRM'],
    v: ['Bestill time', 'Rådgivningsmøte', 'Tirsdag', 'Bekreft', 'Timen er bekreftet', 'Lagt til i teamets kalender'],
    app: { company: 'Atlas Rådgivning', step: 'Steg 2 av 3', service: 'Tjeneste', services: [{ n: 'Rådgivningsmøte', d: '45 min · På kontoret' }, { n: 'Videomøte', d: '30 min · På nett' }], month: 'September 2026', days: ['Man', 'Tir', 'Ons', 'Tor', 'Fre'], morning: 'Formiddag', afternoon: 'Ettermiddag', with: 'Med', role: 'Rådgiver', summary: 'Tir. 15. sep. · 10:30' },
  },
  sell: {
    overline: 'Selge & tilby tjenester',
    title: 'Utvikle virksomheten på nett også.',
    text: 'Gjør Synapse-miljøet til inngangen til produktene, tjenestene og arrangementene dine.',
    tags: ['Nettbutikk', 'Produkter', 'Tjenester', 'Digitale tilbud', 'Arrangementer', 'Påmeldinger', 'Kurs', 'Booking', 'Live'],
  },
  shop: {
    title: 'En butikk koblet til resten av bedriften.',
    text: 'Fra katalog til intern oppfølging er hver bestilling knyttet til kundene og teamene.',
    steps: ['Katalog', 'Kunde', 'Bestilling', 'Status', 'Intern oppfølging'],
    v: ['Arganoljeprodukter', 'Opphold i riad', 'Kaftaner & tekstil', 'Ny bestilling', 'Under behandling', 'Oppgave opprettet for teamet'],
  },
  events: {
    title: 'Fra møtet til det store arrangementet.',
    text: 'Planlegg arrangementer, håndter påmeldinger og send økter direkte, for teamene og kundene.',
    tags: ['Arrangementer', 'Påmeldinger', 'Deltakere', 'Nettøkter', 'Livestreaming', 'Webinarer', 'Internt & eksternt publikum'],
    v: ['Direkte', 'Årlig kundemøte', 'Påmeldte', 'Spørsmål', 'Meld deg på'],
  },
  training: {
    overline: 'Opplæring',
    title: 'Utvikle kompetansen i teamene.',
    text: 'Organiser opplæring og faglig utvikling rett i de ansattes arbeidsmiljø.',
    tags: ['Kurskatalog', 'Påmelding', 'Programmer', 'Kursholdere', 'Økter', 'Fremdrift', 'Sertifikater', 'Nettkurs'],
    v: ['Onboarding av nye ansatte', 'Avansert kundeservice', 'Digitale verktøy', 'Fremdrift', 'Sertifikat oppnådd'],
  },
  workspaces: {
    overline: 'Arbeidsrom',
    title: 'Et rom for hvert team, prosjekt eller initiativ.',
    text: 'Arbeidsrommet blir det felles digitale rommet for hver aktivitet.',
    names: ['Ledelse', 'Salg', 'Prosjekt', 'HR', 'Kundeprosjekt'],
    inside: ['Medlemmer', 'Diskusjon', 'Filer', 'Oppgaver', 'Møter', 'Kalender', 'Dokumenter', 'Aktivitet'],
    v: ['medlemmer', 'Nytt møte planlagt', 'Dokument oppdatert', 'Oppgave fullført'],
  },
  connect: {
    title: 'Fordi bedriften ikke fungerer i siloer.',
    text: 'Verdien i Synapse er ikke antall moduler, men at de deler samme kontekst og jobber sammen.',
    flows: [
      { title: 'En kunde bestiller time', steps: ['CRM', 'Kalender', 'Ansatt', 'Møte', 'Dokumenter', 'Oppgave', 'Økonomi'] },
      { title: 'En ansatt blir med i et prosjekt', steps: ['Ansatt', 'Arbeidsrom', 'Prosjekt', 'Oppgaver', 'Dokumenter', 'Møter', 'Opplæring'] },
    ],
  },
  ai: {
    overline: 'Syn’IA',
    title: 'Intelligens som jobber sammen med organisasjonen.',
    text: 'Syn’IA dukker opp der arbeidet allerede skjer, ikke i et eget vindu.',
    items: [
      { ctx: 'Møte', action: 'Oppsummere møtet' },
      { ctx: 'Dokument', action: 'Omformulere et dokument' },
      { ctx: 'Prosjekt', action: 'Lage en statusoppdatering' },
      { ctx: 'Søk', action: 'Finne informasjon' },
      { ctx: 'Kommunikasjon', action: 'Lage innhold' },
      { ctx: 'Styring', action: 'Analysere informasjon' },
      { ctx: 'Ansatt', action: 'Hjelpe en ansatt' },
      { ctx: 'Kunde', action: 'Forberede en kundemelding' },
    ],
  },
  modules: {
    title: 'Start med det viktigste. Utvid i ditt tempo.',
    text: 'Hver organisasjon aktiverer byggeklossene den trenger, og utvider miljøet når den vil.',
    items: ['Samarbeid', 'Arbeidsrom', 'Kommunikasjon', 'Møter', 'Dokumenter', 'Kalender', 'Prosjekter', 'Oppgaver', 'Arbeidsflyt', 'HR', 'Lønn', 'Opplæring', 'Økonomi', 'CRM', 'Booking', 'Arrangementer', 'Live', 'Butikk', 'KI'],
    note: 'Én plattform. Modulene du velger.',
  },
  final: {
    title1: 'Færre verktøy.',
    title2: 'Mer sammenheng.',
    text: 'Synapse Business samler bedriftens mennesker, arbeid og tjenester i ett sammenkoblet miljø.',
    cta: 'Be om demo',
    cta2: 'Oppdag Synapse Business',
  },
  floating: 'Be om demo',
  waDemo: 'Hei, jeg ønsker en demo av Synapse Business.',
  waContact: 'Hei, jeg vil vite mer om Synapse Business.',
};

const ar: BusinessCopy = {
  back: 'رجوع',
  hero: {
    label: 'Synapse Business',
    title1: 'مقاولتك.',
    title2: 'بيئة واحدة.',
    subtitle: 'تعاون، وأدِر فرقك، وتابع مشاريعك وعملاءك، وطوّر خدماتك من منصة واحدة.',
    cta: 'اطلب عرضًا توضيحيًا',
    cta2: 'استكشف المنصة',
    imgAlt: 'فريق مقاولة صغيرة يعمل معًا',
    nodes: ['الفريق', 'المشروع', 'العميل', 'المالية', 'الوثيقة', 'الاجتماع'],
    hub: 'Synapse Business',
  },
  problem: {
    title: 'لماذا تستعمل أدوات كثيرة لتسيير مقاولة واحدة؟',
    tools: ['البريد الإلكتروني', 'واتساب / الدردشة', 'الاجتماعات', 'التخزين السحابي', 'أدوات المشاريع', 'CRM', 'الموارد البشرية', 'المالية', 'التكوين', 'الحجوزات'],
    result: 'Synapse Business',
    text: 'تربط Synapse الأشخاص والمعلومات والعمليات في بيئة واحدة.',
  },
  universes: [
    {
      overline: 'التعاون والتواصل',
      title: 'فضاء مشترك للعمل معًا.',
      text: 'تبادلوا وشاركوا ونظّموا اجتماعاتكم واعثروا على معلوماتكم دون تغيير الأدوات باستمرار.',
      tags: ['فضاءات العمل', 'التعاون', 'الدردشة', 'البريد', 'اجتماعات عن بعد', 'التقويم', 'وثائق مشتركة', 'التخزين', 'التواصل الداخلي', 'البث المباشر'],
      v: ['الفريق-التجاري', 'عرض Atlas جاهز، أشاركه هنا.', 'ممتاز، سنراجعه في الاجتماع.', 'عرض_Atlas.pdf', 'الاجتماع الأسبوعي', '14:00', 'انضمام', 'اليوم'],
    },
    {
      overline: 'تنظيم العمل',
      title: 'من العمل اليومي إلى المشاريع الاستراتيجية.',
      text: 'حوّل الطلبات والمهام والمشاريع إلى عمليات واضحة وقابلة للتتبع.',
      tags: ['المهام', 'المشاريع', 'سير العمل', 'الاجتماعات', 'الأنشطة', 'الفعاليات', 'الآجال', 'المصادقات', 'الوثائق', 'المتابعة'],
      v: ['المشروع', 'المهام', 'الأشخاص', 'الوثائق', 'المصادقة', 'التقدم', 'افتتاح وكالة الرباط', 'طلب مصادقة'],
    },
    {
      overline: 'إدارة الفرق',
      title: 'المتعاونون في قلب المؤسسة.',
      text: 'اجمع تدبير متعاونيك في مكان واحد، من اليومي إلى تطوير الكفاءات.',
      tags: ['دليل الموظفين', 'التنظيم', 'الموارد البشرية', 'ملف المتعاون', 'الحضور والعطل', 'الأجور', 'المسار المهني', 'التكوين الداخلي', 'التطوير'],
      v: ['المتعاون', 'الموارد البشرية', 'الأجور', 'التكوين', 'التطوير', 'سلمى الإدريسي', 'مستشارة عملاء', 'مسار تكوين جارٍ'],
    },
    {
      overline: 'قيادة المقاولة',
      title: 'رؤية أوضح لنشاطك.',
      text: 'اجمع المعلومات اللازمة لقيادة نشاطك في بيئة واحدة.',
      tags: ['المالية', 'الميزانيات', 'التكاليف', 'التتبع المالي', 'التقارير', 'معلومات التدبير', 'مالية المشاريع', 'لوحات القيادة'],
      v: ['لوحة القيادة', 'الميزانية', 'التكاليف', 'المشاريع', 'النشاط', 'حسب الفصل'],
    },
    {
      overline: 'العلاقة مع العملاء',
      title: 'كل عميل. كل تفاعل. في مكان واحد.',
      text: 'احتفظ برؤية واضحة لعملائك، من التبادلات السابقة إلى الخطوات القادمة.',
      tags: ['العملاء', 'المؤسسات', 'جهات الاتصال', 'السجل', 'الفرص', 'الأنشطة', 'المتابعة', 'الملاحظات', 'الوثائق', 'المواعيد'],
      v: ['Atlas Distribution', 'عميل', 'جهات الاتصال', 'الاجتماعات', 'الرسائل', 'الوثائق', 'المهام', 'الفرص', 'المواعيد'],
    },
  ],
  booking: {
    overline: 'حجز العملاء',
    title: 'دع عملاءك يحجزون بسهولة.',
    text: 'اعرض مواعيد متاحة عبر الإنترنت واعثر على الحجوزات تلقائيًا في بيئة عملك.',
    steps: ['العميل', 'الخدمة', 'التاريخ', 'الساعة', 'التأكيد', 'التقويم وCRM'],
    v: ['احجز موعدًا', 'جلسة استشارة', 'الثلاثاء', 'تأكيد', 'تم تأكيد الموعد', 'أُضيف إلى تقويم الفريق'],
    app: { company: 'أطلس للاستشارات', step: 'الخطوة 2 من 3', service: 'الخدمة', services: [{ n: 'جلسة استشارة', d: '45 دقيقة · في الوكالة' }, { n: 'اجتماع بالفيديو', d: '30 دقيقة · عن بعد' }], month: 'شتنبر 2026', days: ['الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'], morning: 'صباحًا', afternoon: 'بعد الزوال', with: 'مع', role: 'مستشارة', summary: 'الثلاثاء 15 شتنبر · 10:30' },
  },
  sell: {
    overline: 'البيع وتقديم الخدمات',
    title: 'طوّر نشاطك عبر الإنترنت أيضًا.',
    text: 'اجعل بيئة Synapse بوابة إلى منتجاتك وخدماتك وفعالياتك.',
    tags: ['متجر إلكتروني', 'المنتجات', 'الخدمات', 'عروض رقمية', 'الفعاليات', 'التسجيلات', 'التكوينات', 'الحجوزات', 'البث المباشر'],
  },
  shop: {
    title: 'متجر مرتبط بباقي المقاولة.',
    text: 'من الكتالوج إلى المتابعة الداخلية، يبقى كل طلب مرتبطًا بعملائك وفرقك.',
    steps: ['الكتالوج', 'العميل', 'الطلب', 'الحالة', 'المتابعة الداخلية'],
    v: ['مستحضرات الأركان', 'إقامة في رياض', 'القفاطين والنسيج', 'طلب جديد', 'قيد التحضير', 'أُنشئت مهمة للفريق'],
  },
  events: {
    title: 'من الموعد إلى الحدث الكبير.',
    text: 'نظّم فعالياتك، وأدِر التسجيلات، وابثّ جلساتك مباشرة لفرقك وعملائك.',
    tags: ['الفعاليات', 'التسجيلات', 'المشاركون', 'جلسات عن بعد', 'البث المباشر', 'الندوات الرقمية', 'جمهور داخلي وخارجي'],
    v: ['مباشر', 'اللقاء السنوي للعملاء', 'المسجلون', 'الأسئلة', 'سجّل'],
  },
  training: {
    overline: 'التكوين',
    title: 'طوّر كفاءات فرقك.',
    text: 'نظّم التكوين والتطوير المهني مباشرة داخل بيئة عمل متعاونيك.',
    tags: ['الكتالوج', 'التسجيل', 'البرامج', 'المكوّنون', 'الجلسات', 'التقدم', 'الشهادات', 'التعلم عن بعد'],
    v: ['استقبال المتعاونين الجدد', 'علاقة العملاء المتقدمة', 'الأدوات الرقمية', 'التقدم', 'تم الحصول على الشهادة'],
  },
  workspaces: {
    overline: 'فضاءات العمل',
    title: 'فضاء لكل فريق أو مشروع أو مبادرة.',
    text: 'يصبح فضاء العمل القاعة الرقمية المشتركة لكل نشاط.',
    names: ['الإدارة', 'التجاري', 'المشروع', 'الموارد البشرية', 'مشروع عميل'],
    inside: ['الأعضاء', 'النقاش', 'الملفات', 'المهام', 'الاجتماعات', 'التقويم', 'الوثائق', 'النشاط'],
    v: ['أعضاء', 'تمت برمجة اجتماع جديد', 'تم تحديث وثيقة', 'تم إنجاز مهمة'],
  },
  connect: {
    title: 'لأن مقاولتك لا تعمل في جزر منعزلة.',
    text: 'قيمة Synapse ليست في عدد الوحدات، بل في كونها تتقاسم السياق نفسه وتعمل معًا.',
    flows: [
      { title: 'عميل يحجز موعدًا', steps: ['CRM', 'التقويم', 'المتعاون', 'الاجتماع', 'الوثائق', 'المهمة', 'المالية'] },
      { title: 'متعاون ينضم إلى مشروع', steps: ['المتعاون', 'الفضاء', 'المشروع', 'المهام', 'الوثائق', 'الاجتماعات', 'التكوين'] },
    ],
  },
  ai: {
    overline: 'Syn’IA',
    title: 'ذكاء يعمل مع مؤسستك.',
    text: 'يظهر Syn’IA حيث يجري العمل أصلًا، لا في نافذة منفصلة.',
    items: [
      { ctx: 'اجتماع', action: 'تلخيص الاجتماع' },
      { ctx: 'وثيقة', action: 'إعادة صياغة وثيقة' },
      { ctx: 'مشروع', action: 'إعداد نقطة تقدم' },
      { ctx: 'بحث', action: 'العثور على معلومة' },
      { ctx: 'تواصل', action: 'إنشاء محتوى' },
      { ctx: 'قيادة', action: 'تحليل المعلومات' },
      { ctx: 'متعاون', action: 'مساعدة متعاون' },
      { ctx: 'عميل', action: 'إعداد رسالة لعميل' },
    ],
  },
  modules: {
    title: 'ابدأ بأولوياتك. تطوّر بإيقاعك.',
    text: 'تفعّل كل مؤسسة الوحدات التي تحتاجها، ثم توسّع بيئتها متى شاءت.',
    items: ['التعاون', 'الفضاءات', 'التواصل', 'الاجتماعات', 'الوثائق', 'التقويم', 'المشاريع', 'المهام', 'سير العمل', 'الموارد البشرية', 'الأجور', 'التكوين', 'المالية', 'CRM', 'الحجز', 'الفعاليات', 'البث', 'المتجر', 'الذكاء الاصطناعي'],
    note: 'منصة واحدة. والوحدات التي تختارها.',
  },
  final: {
    title1: 'أدوات أقل.',
    title2: 'استمرارية أكبر.',
    text: 'تجمع Synapse Business أشخاص مقاولتك وعملها وخدماتها في بيئة مترابطة.',
    cta: 'اطلب عرضًا توضيحيًا',
    cta2: 'اكتشف Synapse Business',
  },
  floating: 'اطلب عرضًا',
  waDemo: 'مرحبًا، أرغب في عرض توضيحي لـ Synapse Business.',
  waContact: 'مرحبًا، أرغب في معرفة المزيد عن Synapse Business.',
};

const business = { fr, en, no, ar };
export default business;
