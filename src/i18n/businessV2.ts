// Copy for the /business page (SME priority order). Each section carries one message; no idea is repeated across sections.
type Sec = { o: string; t: string; x: string };
type Group = { h: string; items: string[] };
export type BusinessV2 = {
  hero: { t1: string; t2: string; sub: string; nodes: string[]; ai: string };
  problem: { t: string; x: string };
  ai: Sec & { note: string; badge: string; items: { a: string; d: string }[] };
  crm: Sec & { points: string[] };
  booking: Sec & { chain: string[] };
  hr: Sec & { life: string[] };
  collab: Sec & { groups: Group[]; store: string[]; ws: string; cue: string };
  projects: Sec & { flow: string[] };
  finance: Sec & { ops: Group; rep: Group };
  shop: Sec & { opt: string };
  training: Sec;
  events: Sec & { opt: string };
  modular: { t: string; x: string; groups: string[]; layers: string; pilot: string };
  final: { t1: string; t2: string; x: string; cta: string };
};

const fr: BusinessV2 = {
  hero: {
    t1: 'Votre entreprise.', t2: 'Plus connectée. Plus intelligente.',
    sub: 'La plateforme de gestion intégrée des PME, avec un assistant IA au service de vos équipes.',
    nodes: ['CRM / Ventes', 'Rendez-vous', 'RH & Paie', 'Collaboration', 'Projets', 'Finance'], ai: 'Syn’IA intégrée',
  },
  problem: {
    t: 'Des outils dispersés, des informations fragmentées.',
    x: 'Ressaisies, versions multiples, suivi incomplet. Synapse Business assure la continuité de l’information, du premier contact client jusqu’au reporting.',
  },
  ai: {
    o: 'Syn’IA · Assistant IA', t: 'Un assistant qui fait gagner du temps sur les tâches récurrentes.',
    x: 'Syn’IA s’appuie sur les informations auxquelles chaque utilisateur a accès pour résumer, rédiger, rechercher et proposer.',
    note: 'Syn’IA respecte les droits d’accès de chaque utilisateur. Les décisions restent entre les mains de vos équipes.', badge: 'Syn’IA',
    items: [
      { a: 'Comptes rendus de réunion', d: 'Synthèse des réunions enregistrées, rédaction du PV et liste des actions.' },
      { a: 'Rédaction et reformulation', d: 'Préparation d’emails et de documents, reformulation de textes existants.' },
      { a: 'Recherche documentaire', d: 'Accès rapide aux documents et espaces autorisés.' },
      { a: 'Réponses sur vos données', d: 'Réponses fondées sur les données disponibles dans la plateforme.' },
      { a: 'Suggestions d’actions', d: 'Propositions de relances et d’étapes suivantes, soumises à validation.' },
      { a: 'Création de contenus', d: 'Aide à la préparation d’annonces, de supports et de contenus de formation.' },
    ],
  },
  crm: {
    o: 'CRM & Ventes', t: 'Une relation client suivie, de la prospection à la signature.',
    x: 'Chaque client dispose d’un historique unique. Opportunités, relances et prochaines actions sont attribuées et visibles par l’équipe commerciale.',
    points: ['Fiche client et historique', 'Pipeline commercial', 'Opportunités et devis', 'Relances planifiées', 'Prochaines actions attribuées'],
  },
  booking: {
    o: 'Prise de rendez-vous', t: 'La réservation en ligne, reliée à vos agendas.',
    x: 'Vos clients réservent un créneau disponible. Le rendez-vous s’inscrit dans l’agenda du collaborateur et sur la fiche client.',
    chain: ['Réservation en ligne', 'Agenda de l’équipe', 'Fiche client', 'Rendez-vous confirmé'],
  },
  hr: {
    o: 'RH & Paie', t: 'Le cycle collaborateur, du recrutement au bulletin de paie.',
    x: 'Les données saisies à l’embauche alimentent chaque étape suivante, jusqu’au calcul de la paie.',
    life: ['Recrutement', 'Contrat', 'Dossier salarié', 'Pointage', 'Congés et absences', 'Évaluations et primes', 'Paie', 'Bulletins'],
  },
  collab: {
    o: 'Communication & Collaboration', t: 'Le bureau virtuel de vos équipes.',
    x: 'Communication, travail collaboratif et gestion documentaire, organisés par espace d’équipe ou de projet.',
    groups: [
      { h: 'Communication', items: ['Messagerie et email', 'Forum', 'Calendrier partagé'] },
      { h: 'Collaboration', items: ['Co-édition en direct', 'Réunions en ligne enregistrées', 'PV automatiques'] },
      { h: 'Gestion documentaire', items: ['Stockage centralisé et dossiers', 'Historique des versions', 'Recherche et droits d’accès'] },
    ],
    store: ['Stockage documentaire', 'Direction', 'Commercial', 'RH', 'Projets', 'Accès selon les droits'],
    ws: 'Un espace par équipe ou par projet', cue: 'Syn’IA : PV rédigé, 3 actions identifiées',
  },
  projects: {
    o: 'Gestion de projet', t: 'Des projets pilotés jalon par jalon.',
    x: 'Jalons, tâches et responsables définis. Documents et validations rattachés au projet, avancement mesuré en continu.',
    flow: ['Projet', 'Jalons', 'Tâches', 'Responsables', 'Validations', 'Avancement'],
  },
  finance: {
    o: 'Finance & Reporting', t: 'Maîtrisez vos dépenses. Pilotez sur des chiffres consolidés.',
    x: 'Les opérations financières au quotidien, et une vue de direction qui consolide les données de l’ensemble des modules.',
    ops: { h: 'Opérations financières', items: ['Factures', 'Notes de frais', 'Budgets', 'Coûts par projet', 'Circuits de validation'] },
    rep: { h: 'Reporting de direction', items: ['Indicateurs consolidés', 'Activité commerciale', 'Avancement des projets'] },
  },
  shop: { o: 'Boutique en ligne', t: 'Vendez vos produits et services en ligne.', x: 'Chaque commande est rattachée à la fiche client et transmise à l’équipe concernée.', opt: 'Optionnel' },
  training: { o: 'Formation', t: 'Intégration et développement des compétences.', x: 'Parcours d’intégration, formations internes, suivi de la progression et attestations de réussite.' },
  events: { o: 'Événements & Live', t: 'Webinaires et diffusions en direct.', x: 'Inscriptions, diffusion et replays pour vos événements internes et clients.', opt: 'Optionnel' },
  modular: {
    t: 'Démarrez avec vos priorités.', x: 'Activez les modules nécessaires, puis étendez la plateforme selon votre croissance.',
    groups: ['CRM & Ventes', 'Rendez-vous', 'RH & Paie', 'Collaboration', 'Projets', 'Finance', 'Boutique', 'Formation', 'Événements & Live'],
    layers: 'Transversal à tous les modules', pilot: 'Reporting',
  },
  final: { t1: 'Voyez Synapse Business', t2: 'appliqué à votre activité.', x: 'Une démonstration adaptée à vos processus et à vos priorités.', cta: 'Demander une démo' },
};

const en: BusinessV2 = {
  hero: {
    t1: 'Your business.', t2: 'More connected. More intelligent.',
    sub: 'The integrated management platform for SMEs, with an AI assistant working for your teams.',
    nodes: ['CRM / Sales', 'Booking', 'HR & Payroll', 'Collaboration', 'Projects', 'Finance'], ai: 'Syn’IA built in',
  },
  problem: {
    t: 'Scattered tools, fragmented information.',
    x: 'Re-entry, multiple versions, incomplete follow-up. Synapse Business keeps information continuous, from first customer contact to reporting.',
  },
  ai: {
    o: 'Syn’IA · AI assistant', t: 'An assistant that saves time on recurring tasks.',
    x: 'Syn’IA works from the information each user has access to, to summarise, draft, search and suggest.',
    note: 'Syn’IA respects each user’s access rights. Decisions remain with your teams.', badge: 'Syn’IA',
    items: [
      { a: 'Meeting minutes', d: 'Summaries of recorded meetings, drafted minutes and action lists.' },
      { a: 'Drafting and rewording', d: 'Preparing emails and documents, rewording existing text.' },
      { a: 'Document search', d: 'Fast access to authorised documents and workspaces.' },
      { a: 'Answers from your data', d: 'Answers based on the data available in the platform.' },
      { a: 'Action suggestions', d: 'Proposed follow-ups and next steps, subject to approval.' },
      { a: 'Content creation', d: 'Help preparing announcements, materials and training content.' },
    ],
  },
  crm: {
    o: 'CRM & Sales', t: 'Customer relationships managed from prospect to signature.',
    x: 'Each customer has a single history. Opportunities, follow-ups and next actions are assigned and visible to the sales team.',
    points: ['Customer record and history', 'Sales pipeline', 'Opportunities and quotes', 'Scheduled follow-ups', 'Assigned next actions'],
  },
  booking: {
    o: 'Appointment booking', t: 'Online booking, connected to your calendars.',
    x: 'Customers book an available slot. The appointment is added to the employee’s calendar and to the customer record.',
    chain: ['Online booking', 'Team calendar', 'Customer record', 'Confirmed appointment'],
  },
  hr: {
    o: 'HR & Payroll', t: 'The employee lifecycle, from recruitment to payslip.',
    x: 'Data entered at hiring feeds every following step, through to payroll.',
    life: ['Recruitment', 'Contract', 'Employee file', 'Time tracking', 'Leave and absence', 'Reviews and bonuses', 'Payroll', 'Payslips'],
  },
  collab: {
    o: 'Communication & Collaboration', t: 'Your teams’ virtual office.',
    x: 'Communication, collaborative work and document management, organised by team or project space.',
    groups: [
      { h: 'Communication', items: ['Messaging and email', 'Forum', 'Shared calendar'] },
      { h: 'Collaboration', items: ['Live co-editing', 'Recorded online meetings', 'Automatic minutes'] },
      { h: 'Document management', items: ['Central storage and folders', 'Version history', 'Search and access rights'] },
    ],
    store: ['Document storage', 'Management', 'Sales', 'HR', 'Projects', 'Access by permissions'],
    ws: 'One space per team or project', cue: 'Syn’IA: minutes drafted, 3 actions identified',
  },
  projects: {
    o: 'Project management', t: 'Projects managed milestone by milestone.',
    x: 'Defined milestones, tasks and owners. Documents and approvals attached to the project, progress measured continuously.',
    flow: ['Project', 'Milestones', 'Tasks', 'Owners', 'Approvals', 'Progress'],
  },
  finance: {
    o: 'Finance & Reporting', t: 'Control spending. Steer on consolidated figures.',
    x: 'Day-to-day financial operations, and a management view consolidating data from every module.',
    ops: { h: 'Financial operations', items: ['Invoices', 'Expense claims', 'Budgets', 'Project costs', 'Approval workflows'] },
    rep: { h: 'Management reporting', items: ['Consolidated indicators', 'Sales activity', 'Project progress'] },
  },
  shop: { o: 'Online shop', t: 'Sell your products and services online.', x: 'Each order is attached to the customer record and passed to the relevant team.', opt: 'Optional' },
  training: { o: 'Training', t: 'Onboarding and skills development.', x: 'Onboarding paths, internal courses, progress tracking and completion certificates.' },
  events: { o: 'Events & Live', t: 'Webinars and live broadcasts.', x: 'Registrations, streaming and replays for internal and customer events.', opt: 'Optional' },
  modular: {
    t: 'Start with your priorities.', x: 'Activate the modules you need, then extend the platform as you grow.',
    groups: ['CRM & Sales', 'Booking', 'HR & Payroll', 'Collaboration', 'Projects', 'Finance', 'Shop', 'Training', 'Events & Live'],
    layers: 'Across all modules', pilot: 'Reporting',
  },
  final: { t1: 'See Synapse Business', t2: 'applied to your business.', x: 'A demonstration tailored to your processes and priorities.', cta: 'Request a demo' },
};

const no: BusinessV2 = {
  hero: {
    t1: 'Din bedrift.', t2: 'Mer tilkoblet. Mer intelligent.',
    sub: 'Den integrerte styringsplattformen for SMB-er, med en AI-assistent som jobber for teamene dine.',
    nodes: ['CRM / Salg', 'Timebestilling', 'HR & lønn', 'Samarbeid', 'Prosjekter', 'Økonomi'], ai: 'Syn’IA innebygd',
  },
  problem: {
    t: 'Spredte verktøy, fragmentert informasjon.',
    x: 'Dobbeltregistrering, flere versjoner, mangelfull oppfølging. Synapse Business sikrer sammenhengende informasjon, fra første kundekontakt til rapportering.',
  },
  ai: {
    o: 'Syn’IA · AI-assistent', t: 'En assistent som sparer tid på gjentakende oppgaver.',
    x: 'Syn’IA bruker informasjonen hver bruker har tilgang til for å oppsummere, skrive, søke og foreslå.',
    note: 'Syn’IA respekterer hver brukers tilganger. Beslutningene ligger hos teamene dine.', badge: 'Syn’IA',
    items: [
      { a: 'Møtereferater', d: 'Oppsummering av innspilte møter, referatutkast og tiltaksliste.' },
      { a: 'Skriving og omformulering', d: 'Utkast til e-poster og dokumenter, omformulering av tekst.' },
      { a: 'Dokumentsøk', d: 'Rask tilgang til autoriserte dokumenter og rom.' },
      { a: 'Svar fra dine data', d: 'Svar basert på data som finnes i plattformen.' },
      { a: 'Forslag til tiltak', d: 'Forslag til oppfølging og neste steg, til godkjenning.' },
      { a: 'Innholdsproduksjon', d: 'Hjelp med kunngjøringer, materiell og opplæringsinnhold.' },
    ],
  },
  crm: {
    o: 'CRM & salg', t: 'Kundeforhold fulgt opp fra prospekt til signatur.',
    x: 'Hver kunde har én historikk. Muligheter, oppfølging og neste steg er tildelt og synlige for salgsteamet.',
    points: ['Kundekort og historikk', 'Salgspipeline', 'Muligheter og tilbud', 'Planlagt oppfølging', 'Tildelte neste steg'],
  },
  booking: {
    o: 'Timebestilling', t: 'Nettbestilling koblet til kalenderne deres.',
    x: 'Kunden bestiller en ledig tid. Avtalen legges i den ansattes kalender og på kundekortet.',
    chain: ['Nettbestilling', 'Teamkalender', 'Kundekort', 'Bekreftet avtale'],
  },
  hr: {
    o: 'HR & lønn', t: 'Hele medarbeiderløpet, fra rekruttering til lønnsslipp.',
    x: 'Data registrert ved ansettelse brukes videre i hvert steg, helt til lønnskjøring.',
    life: ['Rekruttering', 'Kontrakt', 'Personalmappe', 'Tidsregistrering', 'Ferie og fravær', 'Evaluering og bonus', 'Lønn', 'Lønnsslipper'],
  },
  collab: {
    o: 'Kommunikasjon & samarbeid', t: 'Teamenes virtuelle kontor.',
    x: 'Kommunikasjon, samarbeid og dokumenthåndtering, organisert per team- eller prosjektrom.',
    groups: [
      { h: 'Kommunikasjon', items: ['Meldinger og e-post', 'Forum', 'Delt kalender'] },
      { h: 'Samarbeid', items: ['Samtidig redigering', 'Innspilte nettmøter', 'Automatiske referater'] },
      { h: 'Dokumenthåndtering', items: ['Sentral lagring og mapper', 'Versjonshistorikk', 'Søk og tilgangsstyring'] },
    ],
    store: ['Dokumentlagring', 'Ledelse', 'Salg', 'HR', 'Prosjekter', 'Tilgang etter rettigheter'],
    ws: 'Ett rom per team eller prosjekt', cue: 'Syn’IA: referat skrevet, 3 tiltak identifisert',
  },
  projects: {
    o: 'Prosjektstyring', t: 'Prosjekter styrt milepæl for milepæl.',
    x: 'Definerte milepæler, oppgaver og ansvarlige. Dokumenter og godkjenninger knyttet til prosjektet, fremdrift målt fortløpende.',
    flow: ['Prosjekt', 'Milepæler', 'Oppgaver', 'Ansvarlige', 'Godkjenninger', 'Fremdrift'],
  },
  finance: {
    o: 'Økonomi & rapportering', t: 'Kontroll på kostnadene. Styring på konsoliderte tall.',
    x: 'Daglig økonomidrift, og en ledervisning som samler data fra alle moduler.',
    ops: { h: 'Økonomidrift', items: ['Fakturaer', 'Utlegg', 'Budsjetter', 'Prosjektkostnader', 'Godkjenningsflyt'] },
    rep: { h: 'Lederrapportering', items: ['Konsoliderte nøkkeltall', 'Salgsaktivitet', 'Prosjektfremdrift'] },
  },
  shop: { o: 'Nettbutikk', t: 'Selg produkter og tjenester på nett.', x: 'Hver ordre knyttes til kundekortet og sendes til riktig team.', opt: 'Valgfritt' },
  training: { o: 'Opplæring', t: 'Onboarding og kompetanseutvikling.', x: 'Onboardingløp, interne kurs, fremdriftsoppfølging og kursbevis.' },
  events: { o: 'Arrangementer & live', t: 'Webinarer og direktesendinger.', x: 'Påmelding, sending og opptak for interne og eksterne arrangementer.', opt: 'Valgfritt' },
  modular: {
    t: 'Start med prioriteringene deres.', x: 'Aktiver modulene dere trenger, og utvid plattformen i takt med veksten.',
    groups: ['CRM & salg', 'Timebestilling', 'HR & lønn', 'Samarbeid', 'Prosjekter', 'Økonomi', 'Nettbutikk', 'Opplæring', 'Arrangementer & live'],
    layers: 'På tvers av alle moduler', pilot: 'Rapportering',
  },
  final: { t1: 'Se Synapse Business', t2: 'i deres virksomhet.', x: 'En demonstrasjon tilpasset deres prosesser og prioriteringer.', cta: 'Be om en demo' },
};

const ar: BusinessV2 = {
  hero: {
    t1: 'مؤسستكم.', t2: 'أكثر ترابطًا. أكثر ذكاءً.',
    sub: 'منصة التسيير المتكاملة للمقاولات الصغرى والمتوسطة، مع مساعد ذكي في خدمة فرقكم.',
    nodes: ['العملاء / المبيعات', 'المواعيد', 'الموارد البشرية والأجور', 'التعاون', 'المشاريع', 'المالية'], ai: 'Syn’IA مدمجة',
  },
  problem: {
    t: 'أدوات متفرقة ومعلومات مجزأة.',
    x: 'إعادة إدخال، ونسخ متعددة، ومتابعة ناقصة. تضمن Synapse Business استمرارية المعلومة، من أول اتصال بالعميل إلى التقارير.',
  },
  ai: {
    o: 'Syn’IA · مساعد ذكي', t: 'مساعد يوفّر الوقت في المهام المتكررة.',
    x: 'تعتمد Syn’IA على المعلومات المتاحة لكل مستخدم للتلخيص والصياغة والبحث والاقتراح.',
    note: 'تحترم Syn’IA صلاحيات الوصول لكل مستخدم. والقرار يبقى بيد فرقكم.', badge: 'Syn’IA',
    items: [
      { a: 'محاضر الاجتماعات', d: 'تلخيص الاجتماعات المسجلة وصياغة المحضر وقائمة المهام.' },
      { a: 'الصياغة وإعادة الصياغة', d: 'إعداد الرسائل والوثائق وإعادة صياغة النصوص.' },
      { a: 'البحث في الوثائق', d: 'وصول سريع إلى الوثائق والفضاءات المسموح بها.' },
      { a: 'إجابات من بياناتكم', d: 'إجابات مبنية على البيانات المتاحة في المنصة.' },
      { a: 'اقتراح الإجراءات', d: 'اقتراح متابعات وخطوات تالية، تخضع للموافقة.' },
      { a: 'إنشاء المحتوى', d: 'المساعدة في إعداد الإعلانات والمواد ومحتوى التكوين.' },
    ],
  },
  crm: {
    o: 'العملاء والمبيعات', t: 'علاقة عملاء متابَعة من الاستقطاب إلى التوقيع.',
    x: 'لكل عميل سجل واحد. الفرص والمتابعات والخطوات التالية مسندة وواضحة لفريق المبيعات.',
    points: ['بطاقة العميل وسجله', 'مسار المبيعات', 'الفرص وعروض الأسعار', 'متابعات مجدولة', 'خطوات تالية مسندة'],
  },
  booking: {
    o: 'حجز المواعيد', t: 'حجز إلكتروني مرتبط بأجنداتكم.',
    x: 'يحجز العميل موعدًا متاحًا، فيُضاف إلى أجندة الموظف وإلى بطاقة العميل.',
    chain: ['حجز إلكتروني', 'أجندة الفريق', 'بطاقة العميل', 'موعد مؤكد'],
  },
  hr: {
    o: 'الموارد البشرية والأجور', t: 'مسار الموظف، من التوظيف إلى ورقة الأجر.',
    x: 'البيانات المدخلة عند التوظيف تغذي كل مرحلة لاحقة، حتى احتساب الأجور.',
    life: ['التوظيف', 'العقد', 'ملف الموظف', 'تسجيل الحضور', 'العطل والغياب', 'التقييم والمكافآت', 'الأجور', 'أوراق الأجر'],
  },
  collab: {
    o: 'التواصل والتعاون', t: 'المكتب الافتراضي لفرقكم.',
    x: 'التواصل والعمل التعاوني والتدبير الوثائقي، منظمة حسب فضاء الفريق أو المشروع.',
    groups: [
      { h: 'التواصل', items: ['المراسلة والبريد', 'المنتدى', 'تقويم مشترك'] },
      { h: 'التعاون', items: ['تحرير مشترك مباشر', 'اجتماعات مسجلة عبر الإنترنت', 'محاضر تلقائية'] },
      { h: 'التدبير الوثائقي', items: ['تخزين مركزي ومجلدات', 'سجل النسخ', 'البحث وصلاحيات الوصول'] },
    ],
    store: ['تخزين الوثائق', 'الإدارة', 'المبيعات', 'الموارد البشرية', 'المشاريع', 'وصول حسب الصلاحيات'],
    ws: 'فضاء لكل فريق أو مشروع', cue: 'Syn’IA: تمت صياغة المحضر وتحديد 3 مهام',
  },
  projects: {
    o: 'تدبير المشاريع', t: 'مشاريع تُقاد مرحلة بمرحلة.',
    x: 'مراحل ومهام ومسؤولون محددون. الوثائق والموافقات مرتبطة بالمشروع، والتقدم يُقاس باستمرار.',
    flow: ['المشروع', 'المراحل', 'المهام', 'المسؤولون', 'الموافقات', 'التقدم'],
  },
  finance: {
    o: 'المالية والتقارير', t: 'تحكّموا في النفقات. قودوا بأرقام موحّدة.',
    x: 'العمليات المالية اليومية، ورؤية للإدارة تجمع بيانات كل الوحدات.',
    ops: { h: 'العمليات المالية', items: ['الفواتير', 'مذكرات المصاريف', 'الميزانيات', 'تكاليف المشاريع', 'مسارات الموافقة'] },
    rep: { h: 'تقارير الإدارة', items: ['مؤشرات موحّدة', 'النشاط التجاري', 'تقدم المشاريع'] },
  },
  shop: { o: 'متجر إلكتروني', t: 'بيعوا منتجاتكم وخدماتكم عبر الإنترنت.', x: 'كل طلب مرتبط ببطاقة العميل ويُحال إلى الفريق المعني.', opt: 'اختياري' },
  training: { o: 'التكوين', t: 'الإدماج وتطوير الكفاءات.', x: 'مسارات إدماج، تكوينات داخلية، تتبع التقدم وشهادات الإتمام.' },
  events: { o: 'الفعاليات والبث', t: 'ندوات عبر الإنترنت وبث مباشر.', x: 'التسجيل والبث وإعادة المشاهدة للفعاليات الداخلية وفعاليات العملاء.', opt: 'اختياري' },
  modular: {
    t: 'ابدؤوا بأولوياتكم.', x: 'فعّلوا الوحدات التي تحتاجونها، ثم وسّعوا المنصة مع نموكم.',
    groups: ['العملاء والمبيعات', 'المواعيد', 'الموارد البشرية والأجور', 'التعاون', 'المشاريع', 'المالية', 'المتجر', 'التكوين', 'الفعاليات والبث'],
    layers: 'عبر كل الوحدات', pilot: 'التقارير',
  },
  final: { t1: 'شاهدوا Synapse Business', t2: 'مطبّقة على نشاطكم.', x: 'عرض توضيحي مكيّف مع مساطركم وأولوياتكم.', cta: 'اطلب عرضًا توضيحيًا' },
};

const businessV2: Record<string, BusinessV2> = { fr, en, no, ar };
export default businessV2;
