type Card = { t: string; d: string };

export interface BusinessCopy {
  back: string;
  hero: { label: string; title1: string; title2: string; subtitle: string; cta: string; cta2: string; imgAlt: string };
  problem: { title: string; intro: string; cards: Card[]; transition: string };
  caps: { overline: string; title: string; items: Card[] };
  connect: { title: string; intro: string; steps: string[] };
  project: {
    title: string;
    intro: string;
    name: string;
    status: string;
    phases: string[];
    tasks: string;
    docs: string;
    team: string;
    budget: string;
    activity: string;
    taskItems: string[];
    docItems: string[];
    activityItems: string[];
    points: string[];
  };
  workflow: { title: string; intro: string; steps: string[]; history: string };
  ai: { title: string; text: string; examples: string[]; ask: string; answerTitle: string; answer: string[] };
  grow: { title: string; text: string; modules: string[]; note: string };
  value: { title: string; items: Card[] };
  final: { title: string; text: string; cta: string; cta2: string };
  floating: string;
  waDemo: string;
  waContact: string;
}

const fr: BusinessCopy = {
  back: 'Retour',
  hero: {
    label: 'Synapse Business',
    title1: 'Pilotez votre entreprise.',
    title2: 'Pas vos outils.',
    subtitle:
      'Centralisez vos équipes, projets, tâches, documents et processus dans un environnement de travail unifié, conçu pour les PME et les organisations en croissance.',
    cta: 'Demander une démonstration',
    cta2: 'Découvrir la plateforme',
    imgAlt: 'Une équipe de PME travaille ensemble autour d’un projet',
  },
  problem: {
    title: 'Votre entreprise avance. Vos outils doivent suivre.',
    intro:
      'Quand les équipes, projets, documents et processus sont répartis entre plusieurs outils, le travail devient plus difficile à suivre.',
    cards: [
      { t: 'Informations dispersées', d: 'Documents, messages et données répartis entre plusieurs outils.' },
      { t: 'Processus manuels', d: 'Des validations, suivis et tâches qui reposent encore sur des emails ou des fichiers Excel.' },
      { t: 'Manque de visibilité', d: 'Difficile de savoir où en sont les projets, responsabilités et activités.' },
      { t: 'Outils déconnectés', d: 'Chaque équipe travaille dans son propre environnement.' },
    ],
    transition: 'Synapse rassemble ces éléments dans un espace de travail commun.',
  },
  caps: {
    overline: 'La plateforme',
    title: 'Un environnement unique pour faire avancer l’entreprise.',
    items: [
      { t: 'Équipes & organisation', d: 'Structurez les équipes, rôles et responsabilités dans un environnement partagé.' },
      { t: 'Projets', d: 'Planifiez, suivez et documentez vos projets de bout en bout.' },
      { t: 'Tâches & workflows', d: 'Transformez vos processus récurrents en flux de travail simples et traçables.' },
      { t: 'Documents', d: 'Centralisez les documents et donnez accès à la bonne information au bon moment.' },
      { t: 'Pilotage', d: 'Suivez activités, échéances et indicateurs depuis un même espace.' },
      { t: 'Syn’IA', d: 'Accompagnez la rédaction, la recherche, l’analyse et le travail quotidien grâce à l’intelligence intégrée de Synapse.' },
    ],
  },
  connect: {
    title: 'Tout est connecté.',
    intro: 'Chaque étape du travail reste liée à la suivante, dans le même environnement.',
    steps: ['Équipe', 'Projet', 'Tâches', 'Documents', 'Validation', 'Suivi'],
  },
  project: {
    title: 'Des projets visibles de bout en bout.',
    intro: 'Phases, livrables, responsabilités, tâches et documents réunis dans une même vue.',
    name: 'Ouverture agence Rabat',
    status: 'En cours',
    phases: ['Cadrage', 'Conception', 'Réalisation', 'Livraison'],
    tasks: 'Tâches',
    docs: 'Documents',
    team: 'Équipe',
    budget: 'Budget',
    activity: 'Activité',
    taskItems: ['Valider le plan d’aménagement', 'Recruter l’équipe locale', 'Préparer le lancement'],
    docItems: ['Cahier des charges.pdf', 'Planning général.xlsx'],
    activityItems: ['Salma a validé la phase Cadrage', 'Youssef a ajouté un document', 'Nouvelle tâche assignée à Inès'],
    points: ['Phases et livrables', 'Responsabilités claires', 'Documents liés au projet', 'Historique des activités'],
  },
  workflow: {
    title: 'Transformez vos processus en workflows clairs.',
    intro:
      'Le travail récurrent se structure au lieu de se perdre dans des chaînes d’emails. Chaque demande suit un chemin clair, du début à la fin.',
    steps: ['Demande', 'Responsable', 'Validation', 'Action', 'Historique'],
    history: 'Chaque étape est tracée',
  },
  ai: {
    title: 'L’intelligence intégrée au travail quotidien.',
    text: 'Syn’IA accompagne les équipes là où elles travaillent déjà : rédaction, synthèse, recherche, analyse et préparation de contenu.',
    examples: [
      'Reformuler une description de projet',
      'Résumer un document',
      'Préparer un point d’avancement',
      'Extraire les informations clés',
      'Aider à la rédaction',
    ],
    ask: 'Prépare un point d’avancement du projet',
    answerTitle: 'Point d’avancement',
    answer: ['Phase Cadrage terminée.', 'Conception en cours, 2 tâches restantes.', 'Prochaine étape : validation du plan.'],
  },
  grow: {
    title: 'Une plateforme qui évolue avec votre entreprise.',
    text: 'Commencez avec les outils dont vous avez besoin aujourd’hui et étendez votre environnement à mesure que votre organisation évolue.',
    modules: ['Projets', 'Tâches', 'Documents', 'Équipes', 'Workflows', 'Finance', 'RH', 'Reporting', 'IA'],
    note: 'Un environnement modulaire, adapté à vos besoins.',
  },
  value: {
    title: 'La puissance d’une plateforme intégrée, sans la complexité des grands systèmes d’entreprise.',
    items: [
      { t: 'Simple à utiliser', d: 'Un environnement clair pour les équipes.' },
      { t: 'Connecté', d: 'Les activités, documents et responsabilités restent liés.' },
      { t: 'Évolutif', d: 'La plateforme peut grandir avec l’organisation.' },
    ],
  },
  final: {
    title: 'Voyez ce que Synapse Business peut simplifier dans votre organisation.',
    text: 'Découvrez comment vos équipes, projets et processus peuvent fonctionner dans un même environnement.',
    cta: 'Demander une démonstration',
    cta2: 'Nous contacter',
  },
  floating: 'Demander une démo',
  waDemo: 'Demande de démo — Synapse Business',
  waContact: 'Contact — Synapse Business',
};

const en: BusinessCopy = {
  back: 'Back',
  hero: {
    label: 'Synapse Business',
    title1: 'Run your business.',
    title2: 'Not your tools.',
    subtitle:
      'Bring your teams, projects, tasks, documents and processes together in one unified work environment, built for SMEs and growing organisations.',
    cta: 'Request a demo',
    cta2: 'Explore the platform',
    imgAlt: 'A business team working together on a project',
  },
  problem: {
    title: 'Your business is moving. Your tools need to keep up.',
    intro: 'When teams, projects, documents and processes are spread across many tools, work becomes harder to follow.',
    cards: [
      { t: 'Scattered information', d: 'Documents, messages and data spread across several tools.' },
      { t: 'Manual processes', d: 'Approvals, follow-ups and tasks that still rely on emails or Excel files.' },
      { t: 'Lack of visibility', d: 'Hard to know where projects, responsibilities and activities stand.' },
      { t: 'Disconnected tools', d: 'Each team works in its own environment.' },
    ],
    transition: 'Synapse brings these elements together in one shared workspace.',
  },
  caps: {
    overline: 'The platform',
    title: 'One environment to move the business forward.',
    items: [
      { t: 'Teams & organisation', d: 'Structure teams, roles and responsibilities in a shared environment.' },
      { t: 'Projects', d: 'Plan, track and document your projects end to end.' },
      { t: 'Tasks & workflows', d: 'Turn recurring processes into simple, traceable workflows.' },
      { t: 'Documents', d: 'Centralise documents and give access to the right information at the right time.' },
      { t: 'Oversight', d: 'Follow activities, deadlines and indicators from one place.' },
      { t: 'Syn’IA', d: 'Support writing, research, analysis and daily work with Synapse’s built-in intelligence.' },
    ],
  },
  connect: {
    title: 'Everything is connected.',
    intro: 'Every step of the work stays linked to the next, in the same environment.',
    steps: ['Team', 'Project', 'Tasks', 'Documents', 'Approval', 'Follow-up'],
  },
  project: {
    title: 'Projects visible from start to finish.',
    intro: 'Phases, deliverables, responsibilities, tasks and documents in one view.',
    name: 'New Rabat office',
    status: 'In progress',
    phases: ['Scoping', 'Design', 'Execution', 'Delivery'],
    tasks: 'Tasks',
    docs: 'Documents',
    team: 'Team',
    budget: 'Budget',
    activity: 'Activity',
    taskItems: ['Approve the layout plan', 'Hire the local team', 'Prepare the launch'],
    docItems: ['Requirements.pdf', 'Master schedule.xlsx'],
    activityItems: ['Salma approved the Scoping phase', 'Youssef added a document', 'New task assigned to Inès'],
    points: ['Phases and deliverables', 'Clear responsibilities', 'Documents linked to the project', 'Activity history'],
  },
  workflow: {
    title: 'Turn your processes into clear workflows.',
    intro: 'Recurring work gets structured instead of getting lost in email chains. Every request follows a clear path from start to finish.',
    steps: ['Request', 'Owner', 'Approval', 'Action', 'History'],
    history: 'Every step is tracked',
  },
  ai: {
    title: 'Intelligence built into everyday work.',
    text: 'Syn’IA supports teams where they already work: writing, summarising, research, analysis and content preparation.',
    examples: ['Rephrase a project description', 'Summarise a document', 'Prepare a status update', 'Extract key information', 'Help with drafting'],
    ask: 'Prepare a status update for the project',
    answerTitle: 'Status update',
    answer: ['Scoping phase completed.', 'Design in progress, 2 tasks remaining.', 'Next step: plan approval.'],
  },
  grow: {
    title: 'A platform that grows with your business.',
    text: 'Start with the tools you need today and extend your environment as your organisation evolves.',
    modules: ['Projects', 'Tasks', 'Documents', 'Teams', 'Workflows', 'Finance', 'HR', 'Reporting', 'AI'],
    note: 'A modular environment, shaped to your needs.',
  },
  value: {
    title: 'The power of an integrated platform, without the complexity of large enterprise systems.',
    items: [
      { t: 'Simple to use', d: 'A clear environment for teams.' },
      { t: 'Connected', d: 'Activities, documents and responsibilities stay linked.' },
      { t: 'Scalable', d: 'The platform can grow with the organisation.' },
    ],
  },
  final: {
    title: 'See what Synapse Business can simplify in your organisation.',
    text: 'Discover how your teams, projects and processes can work in one environment.',
    cta: 'Request a demo',
    cta2: 'Contact us',
  },
  floating: 'Request a demo',
  waDemo: 'Demo request — Synapse Business',
  waContact: 'Contact — Synapse Business',
};

const no: BusinessCopy = {
  back: 'Tilbake',
  hero: {
    label: 'Synapse Business',
    title1: 'Styr virksomheten.',
    title2: 'Ikke verktøyene.',
    subtitle:
      'Samle team, prosjekter, oppgaver, dokumenter og prosesser i ett felles arbeidsmiljø, laget for små og mellomstore bedrifter og organisasjoner i vekst.',
    cta: 'Be om en demo',
    cta2: 'Utforsk plattformen',
    imgAlt: 'Et team i en bedrift som jobber sammen om et prosjekt',
  },
  problem: {
    title: 'Virksomheten beveger seg. Verktøyene må følge med.',
    intro: 'Når team, prosjekter, dokumenter og prosesser er spredt på mange verktøy, blir arbeidet vanskeligere å følge.',
    cards: [
      { t: 'Spredt informasjon', d: 'Dokumenter, meldinger og data fordelt på flere verktøy.' },
      { t: 'Manuelle prosesser', d: 'Godkjenninger, oppfølging og oppgaver som fortsatt går via e-post eller Excel.' },
      { t: 'Lite oversikt', d: 'Vanskelig å vite hvor prosjekter, ansvar og aktiviteter står.' },
      { t: 'Frakoblede verktøy', d: 'Hvert team jobber i sitt eget miljø.' },
    ],
    transition: 'Synapse samler alt dette i ett felles arbeidsområde.',
  },
  caps: {
    overline: 'Plattformen',
    title: 'Ett miljø for å drive virksomheten fremover.',
    items: [
      { t: 'Team og organisasjon', d: 'Strukturer team, roller og ansvar i et felles miljø.' },
      { t: 'Prosjekter', d: 'Planlegg, følg opp og dokumenter prosjektene fra start til slutt.' },
      { t: 'Oppgaver og arbeidsflyt', d: 'Gjør faste prosesser om til enkle arbeidsflyter som kan spores.' },
      { t: 'Dokumenter', d: 'Samle dokumentene og gi tilgang til riktig informasjon til riktig tid.' },
      { t: 'Styring', d: 'Følg aktiviteter, frister og nøkkeltall fra ett sted.' },
      { t: 'Syn’IA', d: 'Få hjelp til skriving, søk, analyse og daglig arbeid med den innebygde intelligensen i Synapse.' },
    ],
  },
  connect: {
    title: 'Alt henger sammen.',
    intro: 'Hvert steg i arbeidet er knyttet til det neste, i samme miljø.',
    steps: ['Team', 'Prosjekt', 'Oppgaver', 'Dokumenter', 'Godkjenning', 'Oppfølging'],
  },
  project: {
    title: 'Prosjekter med full oversikt fra start til slutt.',
    intro: 'Faser, leveranser, ansvar, oppgaver og dokumenter samlet i én visning.',
    name: 'Nytt kontor i Rabat',
    status: 'Pågår',
    phases: ['Forarbeid', 'Utforming', 'Gjennomføring', 'Levering'],
    tasks: 'Oppgaver',
    docs: 'Dokumenter',
    team: 'Team',
    budget: 'Budsjett',
    activity: 'Aktivitet',
    taskItems: ['Godkjenne planløsningen', 'Ansette lokalt team', 'Forberede åpningen'],
    docItems: ['Kravspesifikasjon.pdf', 'Hovedplan.xlsx'],
    activityItems: ['Salma godkjente forarbeidet', 'Youssef la til et dokument', 'Ny oppgave tildelt Inès'],
    points: ['Faser og leveranser', 'Tydelig ansvar', 'Dokumenter knyttet til prosjektet', 'Aktivitetshistorikk'],
  },
  workflow: {
    title: 'Gjør prosessene om til tydelige arbeidsflyter.',
    intro: 'Faste oppgaver får struktur i stedet for å forsvinne i e-posttråder. Hver forespørsel følger en tydelig vei fra start til slutt.',
    steps: ['Forespørsel', 'Ansvarlig', 'Godkjenning', 'Handling', 'Historikk'],
    history: 'Hvert steg blir sporet',
  },
  ai: {
    title: 'Intelligens bygget inn i hverdagen.',
    text: 'Syn’IA hjelper teamene der de allerede jobber: skriving, oppsummering, søk, analyse og forberedelse av innhold.',
    examples: ['Omformulere en prosjektbeskrivelse', 'Oppsummere et dokument', 'Lage en statusoppdatering', 'Hente ut nøkkelinformasjon', 'Hjelpe med skriving'],
    ask: 'Lag en statusoppdatering for prosjektet',
    answerTitle: 'Statusoppdatering',
    answer: ['Forarbeidet er ferdig.', 'Utforming pågår, 2 oppgaver gjenstår.', 'Neste steg: godkjenning av planen.'],
  },
  grow: {
    title: 'En plattform som vokser med virksomheten.',
    text: 'Start med verktøyene du trenger i dag, og utvid miljøet etter hvert som organisasjonen utvikler seg.',
    modules: ['Prosjekter', 'Oppgaver', 'Dokumenter', 'Team', 'Arbeidsflyt', 'Økonomi', 'HR', 'Rapportering', 'KI'],
    note: 'Et modulbasert miljø, tilpasset deres behov.',
  },
  value: {
    title: 'Kraften i en samlet plattform, uten kompleksiteten i store bedriftssystemer.',
    items: [
      { t: 'Enkel å bruke', d: 'Et oversiktlig miljø for teamene.' },
      { t: 'Sammenkoblet', d: 'Aktiviteter, dokumenter og ansvar henger sammen.' },
      { t: 'Skalerbar', d: 'Plattformen kan vokse med organisasjonen.' },
    ],
  },
  final: {
    title: 'Se hva Synapse Business kan forenkle i organisasjonen deres.',
    text: 'Oppdag hvordan team, prosjekter og prosesser kan fungere i ett og samme miljø.',
    cta: 'Be om en demo',
    cta2: 'Kontakt oss',
  },
  floating: 'Be om en demo',
  waDemo: 'Forespørsel om demo — Synapse Business',
  waContact: 'Kontakt — Synapse Business',
};

const ar: BusinessCopy = {
  back: 'رجوع',
  hero: {
    label: 'سينابس للأعمال',
    title1: 'أديروا مقاولتكم.',
    title2: 'لا أدواتكم.',
    subtitle:
      'اجمعوا فرقكم ومشاريعكم ومهامكم ووثائقكم ومساطركم في بيئة عمل موحدة، مصممة للمقاولات الصغيرة والمتوسطة والمؤسسات في طور النمو.',
    cta: 'اطلبوا عرضًا توضيحيًا',
    cta2: 'اكتشفوا المنصة',
    imgAlt: 'فريق مقاولة يعمل معًا على مشروع',
  },
  problem: {
    title: 'مقاولتكم تتقدم. وأدواتكم يجب أن تواكبها.',
    intro: 'عندما تتوزع الفرق والمشاريع والوثائق والمساطر على أدوات متعددة، يصبح تتبع العمل أكثر صعوبة.',
    cards: [
      { t: 'معلومات متفرقة', d: 'وثائق ورسائل وبيانات موزعة على عدة أدوات.' },
      { t: 'مساطر يدوية', d: 'مصادقات ومتابعات ومهام ما زالت تعتمد على البريد الإلكتروني أو ملفات Excel.' },
      { t: 'غياب الرؤية', d: 'من الصعب معرفة وضعية المشاريع والمسؤوليات والأنشطة.' },
      { t: 'أدوات غير مترابطة', d: 'كل فريق يعمل في بيئته الخاصة.' },
    ],
    transition: 'سينابس يجمع كل هذه العناصر في فضاء عمل مشترك.',
  },
  caps: {
    overline: 'المنصة',
    title: 'بيئة واحدة للمضي بالمقاولة إلى الأمام.',
    items: [
      { t: 'الفرق والتنظيم', d: 'نظموا الفرق والأدوار والمسؤوليات في بيئة مشتركة.' },
      { t: 'المشاريع', d: 'خططوا لمشاريعكم وتابعوها ووثقوها من البداية إلى النهاية.' },
      { t: 'المهام وسير العمل', d: 'حولوا مساطركم المتكررة إلى مسارات عمل بسيطة وقابلة للتتبع.' },
      { t: 'الوثائق', d: 'ركزوا الوثائق ووفروا المعلومة المناسبة في الوقت المناسب.' },
      { t: 'القيادة', d: 'تابعوا الأنشطة والآجال والمؤشرات من فضاء واحد.' },
      { t: 'Syn’IA', d: 'دعم الكتابة والبحث والتحليل والعمل اليومي بفضل الذكاء المدمج في سينابس.' },
    ],
  },
  connect: {
    title: 'كل شيء مترابط.',
    intro: 'كل مرحلة من العمل تبقى مرتبطة بالمرحلة التالية، داخل نفس البيئة.',
    steps: ['الفريق', 'المشروع', 'المهام', 'الوثائق', 'المصادقة', 'المتابعة'],
  },
  project: {
    title: 'مشاريع واضحة من البداية إلى النهاية.',
    intro: 'المراحل والمخرجات والمسؤوليات والمهام والوثائق في عرض واحد.',
    name: 'افتتاح وكالة الرباط',
    status: 'قيد الإنجاز',
    phases: ['التأطير', 'التصميم', 'الإنجاز', 'التسليم'],
    tasks: 'المهام',
    docs: 'الوثائق',
    team: 'الفريق',
    budget: 'الميزانية',
    activity: 'النشاط',
    taskItems: ['المصادقة على مخطط التهيئة', 'توظيف الفريق المحلي', 'التحضير للإطلاق'],
    docItems: ['دفتر التحملات.pdf', 'الجدول العام.xlsx'],
    activityItems: ['سلمى صادقت على مرحلة التأطير', 'يوسف أضاف وثيقة', 'مهمة جديدة أسندت إلى إيناس'],
    points: ['المراحل والمخرجات', 'مسؤوليات واضحة', 'وثائق مرتبطة بالمشروع', 'سجل الأنشطة'],
  },
  workflow: {
    title: 'حولوا مساطركم إلى مسارات عمل واضحة.',
    intro: 'العمل المتكرر يصبح منظمًا بدل أن يضيع في سلاسل الرسائل. كل طلب يتبع مسارًا واضحًا من البداية إلى النهاية.',
    steps: ['الطلب', 'المسؤول', 'المصادقة', 'التنفيذ', 'السجل'],
    history: 'كل مرحلة مسجلة',
  },
  ai: {
    title: 'ذكاء مدمج في العمل اليومي.',
    text: 'Syn’IA يرافق الفرق حيث تعمل أصلًا: الكتابة والتلخيص والبحث والتحليل وإعداد المحتوى.',
    examples: ['إعادة صياغة وصف مشروع', 'تلخيص وثيقة', 'إعداد تقرير عن سير المشروع', 'استخراج المعلومات الأساسية', 'المساعدة في التحرير'],
    ask: 'أعدّ تقريرًا عن سير المشروع',
    answerTitle: 'تقرير سير المشروع',
    answer: ['انتهت مرحلة التأطير.', 'التصميم قيد الإنجاز، تبقى مهمتان.', 'الخطوة التالية: المصادقة على المخطط.'],
  },
  grow: {
    title: 'منصة تتطور مع مقاولتكم.',
    text: 'ابدؤوا بالأدوات التي تحتاجونها اليوم ووسعوا بيئتكم كلما تطورت مؤسستكم.',
    modules: ['المشاريع', 'المهام', 'الوثائق', 'الفرق', 'سير العمل', 'المالية', 'الموارد البشرية', 'التقارير', 'الذكاء الاصطناعي'],
    note: 'بيئة معيارية تتكيف مع احتياجاتكم.',
  },
  value: {
    title: 'قوة منصة متكاملة، دون تعقيد الأنظمة الكبرى للمقاولات.',
    items: [
      { t: 'سهلة الاستعمال', d: 'بيئة واضحة للفرق.' },
      { t: 'مترابطة', d: 'الأنشطة والوثائق والمسؤوليات تبقى مرتبطة.' },
      { t: 'قابلة للتطور', d: 'المنصة تنمو مع المؤسسة.' },
    ],
  },
  final: {
    title: 'اكتشفوا ما يمكن لسينابس للأعمال أن يبسطه في مؤسستكم.',
    text: 'تعرفوا كيف يمكن لفرقكم ومشاريعكم ومساطركم أن تعمل في بيئة واحدة.',
    cta: 'اطلبوا عرضًا توضيحيًا',
    cta2: 'تواصلوا معنا',
  },
  floating: 'اطلبوا عرضًا',
  waDemo: 'طلب عرض توضيحي — سينابس للأعمال',
  waContact: 'تواصل — سينابس للأعمال',
};

const business: Record<'fr' | 'en' | 'no' | 'ar', BusinessCopy> = { fr, en, no, ar };
export default business;
