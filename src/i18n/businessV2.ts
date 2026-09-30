// Copy for the /business page: outcome-based structure (4 outcomes → data flow → Syn'IA → modularity → trust → CTA).
type Outcome = { o: string; t: string; x: string; points: string[] };
type Opt = { o: string; x: string };
export type BusinessV2 = {
  hero: { t1: string; t2: string; sub: string; ai: string; cta2: string };
  grow: Outcome & { body: string; orbit: string[]; client: string; tag: string; booking: string; chain: string[]; opts: string; optL: string; shop: Opt; events: Opt };
  team: Outcome & { life: string[]; training: string; orbit: string[]; emp: string; value: string };
  work: Outcome & { store: string[]; cue: string; orbit: string[]; team: string; teamSub: string; value: string };
  fin: Outcome & { body: string; orbit: string[]; center: string };
  flow: { o: string; t: string; a: string[]; b: string[] };
  ai: { o: string; t: string; x: string; orbit: string[]; sub: string };
  modular: { t: string; x: string; items: string[] };
  trust: { o: string; t: string; items: [string, string][] };
  partner: { o: string; t: string; x: string; steps: string[] };
  final: { t: string; cta: string };
};

const fr: BusinessV2 = {
  hero: {
    t1: 'Pilotez votre entreprise', t2: 'dans un environnement connecté.',
    sub: 'Clients, équipes, opérations et finance réunis pour simplifier le travail quotidien et donner à la direction une vision plus claire.',
    ai: 'Avec Syn’IA, votre assistant intégré.', cta2: 'Découvrir la plateforme',
  },
  grow: {
    orbit: ['Contacts', 'Opportunités', 'CRM', 'Devis', 'Relances', 'Réservation en ligne', 'Historique', 'Boutique en ligne', 'Webinaires', 'Événements'], client: 'Atlas Distribution', tag: 'Vos clients', o: 'Clients & Ventes', t: 'Développez votre relation client.',
    x: 'Suivez vos clients à chaque étape, du premier contact à la fidélisation, avec toute votre équipe commerciale.',
    points: ['Fiche client et historique', 'Pipeline et opportunités', 'Devis et relances', 'Prise de rendez-vous en ligne'], body: 'Chaque client dispose d’une fiche complète avec tout son historique. Votre équipe suit les opportunités dans le pipeline, envoie devis et relances au bon moment, et vos clients peuvent prendre rendez-vous en ligne en quelques clics.',
    booking: 'Prise de rendez-vous', chain: ['Réservation en ligne', 'Agenda', 'Fiche client'],
    opts: 'Options', optL: 'Optionnel',
    shop: { o: 'Boutique en ligne', x: 'Commandes rattachées à la fiche client.' },
    events: { o: 'Événements & Live', x: 'Webinaires, diffusions et replays.' },
  },
  team: {
    o: 'Équipes & RH', t: 'Gérez vos équipes.',
    x: 'Le cycle collaborateur, du recrutement à la paie, et la montée en compétences.',
    points: ['Dossier salarié et contrats', 'Présence, congés et absences', 'RH & Paie : paie et bulletins', 'Intégration et formation'],
    life: ['Recrutement', 'Contrat', 'Présence', 'Congés', 'Paie'], training: 'Formation', orbit: ['Paie', 'Bulletins', 'Pointage', 'Présence & absences', 'Congés', 'Formation', 'Certificats', 'Suivi', 'Mon portail'], emp: 'Employé', value: 'Vos managers disposent d’une vision fiable de chaque collaborateur, du recrutement à la paie : moins de tâches administratives, des décisions RH plus sereines et davantage de temps consacré à l’accompagnement des équipes.',
  },
  work: {
    orbit: ['Chat', 'Email', 'Fil d’actualité', 'Groupes', 'Espaces de travail', 'Réunions en ligne', 'Stockage', 'Documents', 'Suite bureautique', 'Projets', 'Tâches', 'Sondages'], team: 'Votre équipe', teamSub: 'Bureau virtuel', o: 'Travail & Collaboration', t: 'Organisez le travail et la collaboration.',
    x: 'Communication, documents et projets réunis dans un bureau virtuel structuré par équipe.',
    points: ['Messagerie, email, forum et calendrier', 'Réunions en ligne et co-édition', 'Stockage documentaire, versions et droits d’accès', 'Projets, tâches, jalons et validations'],
    value: 'Vos équipes gagnent du temps au quotidien : chacun retrouve immédiatement les bons échanges, documents et priorités, les décisions avancent plus vite et le travail se poursuit sans rupture, au bureau comme à distance.',
    store: ['Stockage documentaire', 'Direction', 'Commercial', 'RH', 'Projets', 'Accès selon les droits'],
    cue: 'Syn’IA : PV rédigé, 3 actions identifiées',
  },
  fin: {
    orbit: ['Factures', 'Notes de frais', 'Budgets', 'Coûts par projet', 'Validations', 'Paiements en ligne', 'Grand livre', 'Gestion des comptes', 'Audit', 'Reporting', 'Tableaux de bord'], center: 'Finance', o: 'Finance & Pilotage', t: 'Pilotez vos finances.',
    x: 'Les opérations financières au quotidien et une vue de direction consolidée.',
    points: ['Factures et notes de frais', 'Budgets et coûts par projet', 'Circuits de validation', 'Tableaux de bord de direction'], body: 'Factures, notes de frais et paiements sont traités au même endroit. Chaque dépense suit son circuit de validation, les budgets et les coûts par projet se mettent à jour en temps réel, et la direction dispose de tableaux de bord clairs pour décider en toute confiance.',
  },
  flow: {
    o: 'Plateforme connectée', t: 'Une information saisie une fois, disponible là où elle est utile.',
    a: ['Client', 'Rendez-vous', 'Projet', 'Facturation', 'Reporting'],
    b: ['Collaborateur', 'Contrat', 'Présence', 'Paie', 'Reporting'],
  },
  ai: {
    o: 'Syn’IA', t: 'Votre assistant IA personnel, intégré à la plateforme.', sub: 'Assistant IA personnel', orbit: ['PV automatiques', 'Rédaction de textes', 'Publications du fil', 'Traduction dans le chat', 'Suggestions de réponse', 'Rapports', 'Données à la demande', 'Échange vocal ou écrit'],
    x: 'Syn’IA accompagne vos équipes dans leur travail quotidien. Intégrée aux différents espaces de Synapse Business, elle intervient lorsque cela apporte une valeur réelle : retrouver une information, préparer ou reformuler un contenu, résumer certains échanges ou simplifier des tâches récurrentes. Elle s’appuie sur les informations auxquelles chaque utilisateur a accès et respecte les droits définis dans l’organisation.',
  },
  modular: {
    t: 'Adaptez Synapse à votre entreprise.', x: 'Commencez avec vos priorités. Ajoutez de nouvelles fonctions à mesure que vos besoins évoluent.',
    items: ['CRM', 'RH & Paie', 'Collaboration', 'Projets', 'Finance', 'Formation', 'Réservation', 'Boutique', 'Événements'],
  },
  trust: {
    o: 'Confiance & déploiement', t: 'Un déploiement maîtrisé.',
    items: [
      ['Gestion des droits', 'Chaque utilisateur accède aux espaces et données qui le concernent.'],
      ['Données et accès', 'Les accès sont définis par l’organisation, par rôle et par équipe.'],
      ['Déploiement progressif', 'Mise en service par étapes, selon vos priorités.'],
      ['Accompagnement', 'Paramétrage et prise en main avec l’équipe ScandiTek.'],
    ],
  },
  partner: { o: 'ScandiTek', t: 'Votre partenaire de transformation.', x: 'Nous partons de vos besoins et de vos ambitions pour vous accompagner à chaque étape, à votre rythme et dans la direction que vous choisissez.', steps: ['Écoute et diagnostic', 'Déploiement sur mesure', 'Accompagnement dans la durée', 'Service & support', 'Success manager dédié', 'Tickets directs vers ScandiTek'] },
  final: { t: 'Découvrez comment Synapse Business peut s’adapter à votre organisation.', cta: 'Demander une démo' },
};

const en: BusinessV2 = {
  hero: {
    t1: 'Run your business', t2: 'in a connected environment.',
    sub: 'Customers, teams, operations and finance brought together to simplify daily work and give management a clearer view.',
    ai: 'With Syn’IA, your built-in assistant.', cta2: 'Explore the platform',
  },
  grow: {
    orbit: ['Contacts', 'Opportunities', 'CRM', 'Quotes', 'Follow-ups', 'Online booking', 'History', 'Online shop', 'Webinars', 'Event management'], client: 'Atlas Distribution', tag: 'Your customers', o: 'Customers & Sales', t: 'Grow your customer relationships.',
    x: 'Follow your customers at every stage, from first contact to loyalty, with your whole sales team.',
    points: ['Customer record and history', 'Pipeline and opportunities', 'Quotes and follow-ups', 'Online appointment booking'], body: 'Every customer has a complete record with their full history. Your team tracks opportunities in the pipeline, sends quotes and follow-ups at the right time, and customers can book appointments online in just a few clicks.',
    booking: 'Appointment booking', chain: ['Online booking', 'Calendar', 'Customer record'],
    opts: 'Options', optL: 'Optional',
    shop: { o: 'Online shop', x: 'Orders linked to the customer record.' },
    events: { o: 'Events & Live', x: 'Webinars, broadcasts and replays.' },
  },
  team: {
    o: 'Teams & HR', t: 'Manage your teams.',
    x: 'The employee lifecycle, from recruitment to payroll, and skills development.',
    points: ['Employee file and contracts', 'Attendance, leave and absence', 'HR & Payroll: payroll and payslips', 'Onboarding and training'],
    life: ['Recruitment', 'Contract', 'Attendance', 'Leave', 'Payroll'], training: 'Training', orbit: ['Payroll', 'Payslips', 'Time tracking', 'Attendance & absence', 'Leave', 'Training', 'Certificates', 'Follow-up', 'My portal'], emp: 'Employee', value: 'Your managers get a reliable view of every employee, from recruitment to payroll: less administration, more confident HR decisions and more time spent supporting their teams.',
  },
  work: {
    orbit: ['Chat', 'Email', 'Feed', 'Groups', 'Workspaces', 'Online meetings', 'Storage', 'Documents', 'Productivity suite', 'Projects', 'Tasks', 'Polls'], team: 'Your team', teamSub: 'Virtual office', o: 'Work & Collaboration', t: 'Organise work and collaboration.',
    x: 'Communication, documents and projects in a virtual office structured by team.',
    points: ['Messaging, email, forum and calendar', 'Online meetings and co-editing', 'Document storage, versions and access rights', 'Projects, tasks, milestones and approvals'],
    value: 'Your teams save time every day: everyone finds the right conversations, documents and priorities instantly, decisions move faster and work continues seamlessly, in the office or remotely.',
    store: ['Document storage', 'Management', 'Sales', 'HR', 'Projects', 'Access by permissions'],
    cue: 'Syn’IA: minutes drafted, 3 actions identified',
  },
  fin: {
    orbit: ['Invoices', 'Expense claims', 'Budgets', 'Project costs', 'Approvals', 'Online payments', 'General ledger', 'Account management', 'Audit', 'Reporting', 'Dashboards'], center: 'Finance', o: 'Finance & Steering', t: 'Steer your finances.',
    x: 'Day-to-day financial operations and a consolidated management view.',
    points: ['Invoices and expense claims', 'Budgets and project costs', 'Approval workflows', 'Management dashboards'], body: 'Invoices, expense claims and payments are handled in one place. Every expense follows its approval workflow, budgets and project costs update in real time, and management gets clear dashboards to make decisions with confidence.',
  },
  flow: {
    o: 'Connected platform', t: 'Information entered once, available wherever it is useful.',
    a: ['Customer', 'Appointment', 'Project', 'Invoicing', 'Reporting'],
    b: ['Employee', 'Contract', 'Attendance', 'Payroll', 'Reporting'],
  },
  ai: {
    o: 'Syn’IA', t: 'Your personal AI assistant, built into the platform.', sub: 'Personal AI assistant', orbit: ['Automatic minutes', 'Text drafting', 'Feed posts', 'Chat translation', 'Reply suggestions', 'Reports', 'Data on demand', 'Voice or text'],
    x: 'Syn’IA supports your teams in their daily work. Integrated across the areas of Synapse Business, it steps in when it adds real value: finding information, preparing or rephrasing content, summarising certain exchanges or simplifying recurring tasks. It relies on the information each user has access to and respects the rights defined in the organisation.',
  },
  modular: {
    t: 'Adapt Synapse to your business.', x: 'Start with your priorities. Add new functions as your needs evolve.',
    items: ['CRM', 'HR & Payroll', 'Collaboration', 'Projects', 'Finance', 'Training', 'Booking', 'Shop', 'Events'],
  },
  trust: {
    o: 'Trust & deployment', t: 'A controlled rollout.',
    items: [
      ['Rights management', 'Each user accesses the spaces and data relevant to them.'],
      ['Data and access', 'Access is defined by the organisation, by role and by team.'],
      ['Gradual deployment', 'Rollout in stages, according to your priorities.'],
      ['Guidance', 'Configuration and onboarding with the ScandiTek team.'],
    ],
  },
  partner: { o: 'ScandiTek', t: 'Your transformation partner.', x: 'We start from your needs and ambitions and support you at every step, at your pace and in the direction you choose.', steps: ['Listening and assessment', 'Tailored deployment', 'Long-term support', 'Service & support', 'Dedicated success manager', 'Tickets direct to ScandiTek'] },
  final: { t: 'See how Synapse Business can adapt to your organisation.', cta: 'Request a demo' },
};

const no: BusinessV2 = {
  hero: {
    t1: 'Styr bedriften', t2: 'i et sammenkoblet miljø.',
    sub: 'Kunder, team, drift og økonomi samlet for å forenkle hverdagen og gi ledelsen et klarere bilde.',
    ai: 'Med Syn’IA, din innebygde assistent.', cta2: 'Utforsk plattformen',
  },
  grow: {
    orbit: ['Kontakter', 'Muligheter', 'CRM', 'Tilbud', 'Oppfølging', 'Nettbooking', 'Historikk', 'Nettbutikk', 'Webinarer', 'Arrangementer'], client: 'Atlas Distribution', tag: 'Dine kunder', o: 'Kunder & salg', t: 'Styrk kunderelasjonene deres.',
    x: 'Følg kundene deres gjennom hele reisen, fra første kontakt til lojalitet, sammen med hele salgsteamet.',
    points: ['Kundekort og historikk', 'Pipeline og muligheter', 'Tilbud og oppfølging', 'Timebestilling på nett'], body: 'Hver kunde har et komplett kundekort med hele historikken. Teamet ditt følger mulighetene i pipelinen, sender tilbud og oppfølging til rett tid, og kundene kan bestille time på nett med noen få klikk.',
    booking: 'Timebestilling', chain: ['Nettbestilling', 'Kalender', 'Kundekort'],
    opts: 'Tillegg', optL: 'Valgfritt',
    shop: { o: 'Nettbutikk', x: 'Ordrer knyttet til kundekortet.' },
    events: { o: 'Arrangementer & live', x: 'Webinarer, sendinger og opptak.' },
  },
  team: {
    o: 'Team & HR', t: 'Led teamene.',
    x: 'Medarbeiderløpet fra rekruttering til lønn, og kompetanseutvikling.',
    points: ['Personalmappe og kontrakter', 'Tilstedeværelse, ferie og fravær', 'HR & lønn: lønn og lønnsslipper', 'Onboarding og opplæring'],
    life: ['Rekruttering', 'Kontrakt', 'Tilstedeværelse', 'Ferie', 'Lønn'], training: 'Opplæring', orbit: ['Lønn', 'Lønnsslipper', 'Tidsregistrering', 'Tilstedeværelse & fravær', 'Ferie', 'Opplæring', 'Kursbevis', 'Oppfølging', 'Min portal'], emp: 'Ansatt', value: 'Lederne får et pålitelig bilde av hver ansatt, fra rekruttering til lønn: mindre administrasjon, tryggere HR-beslutninger og mer tid til å følge opp teamene.',
  },
  work: {
    orbit: ['Chat', 'E-post', 'Feed', 'Grupper', 'Arbeidsrom', 'Nettmøter', 'Lagring', 'Dokumenter', 'Kontorpakke', 'Prosjekter', 'Oppgaver', 'Avstemninger'], team: 'Teamet ditt', teamSub: 'Virtuelt kontor', o: 'Arbeid & samarbeid', t: 'Organiser arbeid og samarbeid.',
    x: 'Kommunikasjon, dokumenter og prosjekter i et virtuelt kontor organisert per team.',
    points: ['Meldinger, e-post, forum og kalender', 'Nettmøter og samtidig redigering', 'Dokumentlagring, versjoner og tilgang', 'Prosjekter, oppgaver, milepæler og godkjenninger'],
    value: 'Teamene sparer tid hver dag: alle finner riktige samtaler, dokumenter og prioriteringer med en gang, beslutninger tas raskere og arbeidet flyter uten brudd, på kontoret eller eksternt.',
    store: ['Dokumentlagring', 'Ledelse', 'Salg', 'HR', 'Prosjekter', 'Tilgang etter rettigheter'],
    cue: 'Syn’IA: referat skrevet, 3 tiltak identifisert',
  },
  fin: {
    orbit: ['Fakturaer', 'Utlegg', 'Budsjetter', 'Prosjektkostnader', 'Godkjenninger', 'Nettbetaling', 'Hovedbok', 'Kontoforvaltning', 'Revisjon', 'Rapportering', 'Dashboards'], center: 'Økonomi', o: 'Økonomi & styring', t: 'Styr økonomien.',
    x: 'Daglig økonomidrift og en samlet ledervisning.',
    points: ['Fakturaer og utlegg', 'Budsjetter og prosjektkostnader', 'Godkjenningsflyt', 'Ledelsesdashboards'], body: 'Fakturaer, utlegg og betalinger håndteres på ett sted. Hver utgift følger sin godkjenningsflyt, budsjetter og prosjektkostnader oppdateres i sanntid, og ledelsen får tydelige dashboards for å ta beslutninger med trygghet.',
  },
  flow: {
    o: 'Sammenkoblet plattform', t: 'Informasjon registreres én gang og er tilgjengelig der den trengs.',
    a: ['Kunde', 'Avtale', 'Prosjekt', 'Fakturering', 'Rapportering'],
    b: ['Medarbeider', 'Kontrakt', 'Tilstedeværelse', 'Lønn', 'Rapportering'],
  },
  ai: {
    o: 'Syn’IA', t: 'Din personlige AI-assistent, innebygd i plattformen.', sub: 'Personlig AI-assistent', orbit: ['Automatiske referater', 'Tekstskriving', 'Innlegg i feeden', 'Oversettelse i chat', 'Svarforslag', 'Rapporter', 'Data på forespørsel', 'Tale eller tekst'],
    x: 'Syn’IA støtter teamene i det daglige arbeidet. Integrert i de ulike delene av Synapse Business bidrar den når det gir reell verdi: å finne informasjon, forberede eller omformulere innhold, oppsummere enkelte samtaler eller forenkle gjentakende oppgaver. Den bygger på informasjonen hver bruker har tilgang til og respekterer rettighetene som er definert i organisasjonen.',
  },
  modular: {
    t: 'Tilpass Synapse til bedriften.', x: 'Start med prioriteringene. Legg til nye funksjoner etter hvert som behovene endrer seg.',
    items: ['CRM', 'HR & lønn', 'Samarbeid', 'Prosjekter', 'Økonomi', 'Opplæring', 'Timebestilling', 'Nettbutikk', 'Arrangementer'],
  },
  trust: {
    o: 'Tillit & utrulling', t: 'En kontrollert utrulling.',
    items: [
      ['Rettighetsstyring', 'Hver bruker får tilgang til rommene og dataene som gjelder dem.'],
      ['Data og tilgang', 'Tilgang defineres av organisasjonen, per rolle og team.'],
      ['Gradvis utrulling', 'Oppstart i trinn, etter deres prioriteringer.'],
      ['Oppfølging', 'Oppsett og opplæring sammen med ScandiTek-teamet.'],
    ],
  },
  partner: { o: 'ScandiTek', t: 'Deres transformasjonspartner.', x: 'Vi tar utgangspunkt i deres behov og ambisjoner, og følger dere gjennom hvert steg – i deres tempo og i den retningen dere velger.', steps: ['Kartlegging og behov', 'Skreddersydd innføring', 'Oppfølging over tid', 'Service & support', 'Egen success manager', 'Saker direkte til ScandiTek'] },
  final: { t: 'Se hvordan Synapse Business kan tilpasses deres organisasjon.', cta: 'Be om en demo' },
};

const ar: BusinessV2 = {
  hero: {
    t1: 'أديروا مؤسستكم', t2: 'ضمن منظومة متكاملة.',
    sub: 'العملاء والفرق والعمليات والمالية مجتمعة لتبسيط العمل اليومي ومنح الإدارة رؤية أشمل.',
    ai: 'مع Syn’IA، مساعدكم المدمج.', cta2: 'اكتشفوا المنصة',
  },
  grow: {
    orbit: ['جهات الاتصال', 'الفرص', 'إدارة علاقات العملاء (CRM)', 'عروض الأسعار', 'المتابعات', 'الحجز عبر الإنترنت', 'السجل', 'المتجر الإلكتروني', 'الندوات عبر الإنترنت', 'إدارة الفعاليات'], client: 'Atlas Distribution', tag: 'عملاؤكم', o: 'العملاء والمبيعات', t: 'طوّروا علاقتكم بعملائكم.',
    x: 'تابعوا عملاءكم في كل مرحلة، من أول تواصل إلى الولاء، مع كامل فريقكم التجاري.',
    points: ['بطاقة العميل وسجله', 'مسار المبيعات والفرص', 'عروض الأسعار والمتابعات', 'حجز المواعيد إلكترونيًا'], body: 'لكل عميل بطاقة كاملة تضم سجله بالكامل. يتابع فريقكم الفرص في مسار المبيعات، ويرسل عروض الأسعار والمتابعات في الوقت المناسب، ويمكن لعملائكم حجز المواعيد إلكترونيًا ببضع نقرات.',
    booking: 'حجز المواعيد', chain: ['حجز إلكتروني', 'الأجندة', 'بطاقة العميل'],
    opts: 'خيارات', optL: 'اختياري',
    shop: { o: 'متجر إلكتروني', x: 'طلبات مرتبطة ببطاقة العميل.' },
    events: { o: 'الفعاليات والبث', x: 'ندوات وبث مباشر وإعادة المشاهدة.' },
  },
  team: {
    o: 'الفرق والموارد البشرية', t: 'أديروا فرقكم.',
    x: 'مسار الموظف من التوظيف إلى الرواتب، وتنمية المهارات.',
    points: ['ملف الموظف والعقود', 'الحضور والإجازات والغياب', 'الموارد البشرية والرواتب: الرواتب وقسائم الرواتب', 'الإدماج والتكوين'],
    life: ['التوظيف', 'العقد', 'الحضور', 'الإجازات', 'الرواتب'], training: 'التكوين', orbit: ['الرواتب', 'قسائم الرواتب', 'تسجيل الحضور', 'الحضور والغياب', 'الإجازات', 'التكوين', 'الشهادات', 'المتابعة', 'بوابتي'], emp: 'موظف', value: 'يحصل مديرو فرقكم على رؤية موثوقة لكل موظف، من التوظيف إلى الرواتب: مهام إدارية أقل، وقرارات موارد بشرية أكثر ثقة، ووقت أكبر لمرافقة الفرق.',
  },
  work: {
    orbit: ['الدردشة', 'البريد الإلكتروني', 'موجز الأخبار', 'المجموعات', 'مساحات العمل', 'اجتماعات عبر الإنترنت', 'التخزين', 'مساحة مشتركة', 'أدوات مكتبية', 'إدارة المشاريع', 'المهام', 'استطلاعات'], team: 'فريقكم', teamSub: 'مكتب افتراضي', o: 'العمل والتعاون', t: 'نظّموا العمل والتعاون.',
    x: 'التواصل والوثائق والمشاريع في مكتب افتراضي منظم حسب الفريق.',
    points: ['المراسلة والبريد الإلكتروني والمنتدى والتقويم', 'اجتماعات عبر الإنترنت وتحرير مشترك', 'تخزين الوثائق والنسخ وصلاحيات الوصول', 'المشاريع والمهام والمراحل والموافقات'],
    value: 'توفر فرقكم الوقت يوميًا: يجد كل فرد المحادثات والوثائق والأولويات المناسبة فورًا، وتُتخذ القرارات بسرعة أكبر، ويستمر العمل دون انقطاع، في المكتب أو عن بُعد.',
    store: ['تخزين الوثائق', 'الإدارة', 'المبيعات', 'الموارد البشرية', 'المشاريع', 'وصول حسب الصلاحيات'],
    cue: 'Syn’IA: تمت صياغة محضر الاجتماع وتحديد 3 مهام',
  },
  fin: {
    orbit: ['الفواتير', 'تقارير النفقات', 'الميزانيات', 'تكاليف المشاريع', 'الموافقات', 'المدفوعات الإلكترونية', 'دفتر الأستاذ العام', 'إدارة الحسابات', 'التدقيق', 'التقارير', 'لوحات المعلومات'], center: 'المالية', o: 'المالية والتحكم', t: 'تحكّموا في شؤونكم المالية.',
    x: 'العمليات المالية اليومية ورؤية موحّدة للإدارة.',
    points: ['الفواتير وتقارير النفقات', 'الميزانيات وتكاليف المشاريع', 'مسارات الموافقة', 'لوحات معلومات الإدارة'], body: 'تُعالَج الفواتير وتقارير النفقات والمدفوعات في مكان واحد. تمرّ كل نفقة عبر مسار الموافقة الخاص بها، وتُحدَّث الميزانيات وتكاليف المشاريع في الوقت الفعلي، وتحصل الإدارة على لوحات معلومات واضحة لاتخاذ القرارات بثقة.',
  },
  flow: {
    o: 'منصة مترابطة', t: 'معلومة تُدخل مرة واحدة، ومتاحة حيث تكون مفيدة.',
    a: ['العميل', 'الموعد', 'المشروع', 'الفوترة', 'التقارير'],
    b: ['الموظف', 'العقد', 'الحضور', 'الرواتب', 'التقارير'],
  },
  ai: {
    o: 'Syn’IA', t: 'مساعدكم الشخصي بالذكاء الاصطناعي، مدمج في المنصة.', sub: 'مساعد ذكاء اصطناعي شخصي', orbit: ['محاضر اجتماعات تلقائية', 'صياغة النصوص', 'منشورات موجز الأخبار', 'الترجمة في الدردشة', 'اقتراحات الردود', 'التقارير', 'بيانات عند الطلب', 'بالصوت أو الكتابة'],
    x: 'يرافق Syn’IA فرقكم في عملهم اليومي. وبفضل تكامله مع مختلف مساحات Synapse Business، يتدخل حين تضيف قيمة حقيقية: العثور على معلومة، أو إعداد محتوى أو إعادة صياغته، أو تلخيص المحادثات، أو تبسيط المهام المتكررة. ويعتمد على المعلومات المتاحة لكل مستخدم ويحترم الصلاحيات المحددة داخل المؤسسة.',
  },
  modular: {
    t: 'خصّصوا Synapse وفق احتياجات مؤسستكم.', x: 'ابدؤوا بأولوياتكم، وأضيفوا وظائف جديدة كلما تطورت احتياجاتكم.',
    items: ['إدارة علاقات العملاء (CRM)', 'الموارد البشرية والرواتب', 'التعاون', 'المشاريع', 'المالية', 'التكوين', 'الحجز', 'المتجر', 'الفعاليات'],
  },
  trust: {
    o: 'الثقة والنشر', t: 'نشر مضبوط وآمن.',
    items: [
      ['إدارة الصلاحيات', 'كل مستخدم يصل إلى المساحات والبيانات التي تخصه.'],
      ['البيانات والوصول', 'تحدد المؤسسة الوصول حسب الدور والفريق.'],
      ['نشر تدريجي', 'تفعيل على مراحل حسب أولوياتكم.'],
      ['المواكبة', 'إعداد المنصة واعتمادها المنصة مع فريق ScandiTek.'],
    ],
  },
  partner: { o: 'ScandiTek', t: 'شريككم في التحول الرقمي.', x: 'ننطلق من احتياجاتكم وطموحاتكم لنرافقكم في كل مرحلة، وفق وتيرتكم وفي الاتجاه الذي تختارونه.', steps: ['الاستماع والتشخيص', 'نشر مُكيَّف حسب الحاجة', 'مرافقة على المدى الطويل', 'الخدمة والدعم الفني', 'مدير نجاح مخصص', 'نظام تذاكر دعم مباشر مع ScandiTek'] },
  final: { t: 'اكتشفوا كيف يمكن أن تتكيف Synapse Business مع مؤسستكم.', cta: 'اطلبوا عرضًا توضيحيًا' },
};

const businessV2: Record<string, BusinessV2> = { fr, en, no, ar };
export default businessV2;
