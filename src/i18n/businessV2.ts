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
  modular: { t: string; x: string; groups: string[]; layers: string; pilot: string; optL: string };
  opts: string;
  mid: { t: string; cta: string };
  final: { t1: string; t2: string; x: string; cta: string };
};

const fr: BusinessV2 = {
  hero: {
    t1: 'Votre entreprise.', t2: 'Plus connectée. Plus intelligente.',
    sub: 'La plateforme de gestion intégrée des PME, avec un assistant IA au service de vos équipes.',
    nodes: ['Clients & Ventes', 'Équipes & RH', 'Travail & Collaboration', 'Finance & Pilotage'], ai: 'Syn’IA intégrée',
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
    o: 'Clients & Ventes', t: 'De la prospection au rendez-vous, chaque relation client est suivie.',
    x: 'Historique client, pipeline et relances partagés par l’équipe commerciale. Les rendez-vous réservés en ligne rejoignent directement l’agenda et la fiche client.',
    points: ['Fiche client et historique', 'Pipeline et opportunités', 'Devis', 'Relances et prochaines actions', 'Prise de rendez-vous en ligne'],
  },
  booking: {
    o: 'Prise de rendez-vous', t: 'La réservation en ligne, reliée à vos agendas.',
    x: 'Vos clients réservent un créneau disponible. Le rendez-vous s’inscrit dans l’agenda du collaborateur et sur la fiche client.',
    chain: ['Réservation en ligne', 'Agenda de l’équipe', 'Fiche client', 'Rendez-vous confirmé'],
  },
  hr: {
    o: 'Équipes & RH', t: 'Le cycle collaborateur, du recrutement à la paie, et la montée en compétences.',
    x: 'Les données saisies à l’embauche alimentent chaque étape suivante, jusqu’au bulletin de paie.',
    life: ['Recrutement', 'Contrat', 'Dossier salarié', 'Pointage', 'Congés et absences', 'Évaluations et primes', 'Paie', 'Bulletins'],
  },
  collab: {
    o: 'Travail & Collaboration', t: 'Communication, documents et projets, organisés par équipe.',
    x: 'Le bureau virtuel où vos équipes échangent, produisent, archivent et suivent l’exécution des projets.',
    groups: [
      { h: 'Communication', items: ['Messagerie et email', 'Forum', 'Calendrier partagé'] },
      { h: 'Collaboration', items: ['Co-édition en direct', 'Réunions en ligne enregistrées', 'PV automatiques'] },
      { h: 'Gestion documentaire', items: ['Stockage centralisé et dossiers', 'Historique des versions', 'Recherche et droits d’accès'] },
      { h: 'Gestion de projet', items: ['Projets et jalons', 'Tâches et responsables', 'Validations et avancement'] },
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
    o: 'Finance & Pilotage', t: 'Maîtrisez vos dépenses. Pilotez sur des chiffres consolidés.',
    x: 'Les opérations financières au quotidien, et une vue de direction qui consolide les données de l’ensemble des modules.',
    ops: { h: 'Opérations financières', items: ['Factures', 'Notes de frais', 'Budgets', 'Coûts par projet', 'Circuits de validation'] },
    rep: { h: 'Reporting de direction', items: ['Indicateurs consolidés', 'Activité commerciale', 'Avancement des projets'] },
  },
  shop: { o: 'Boutique en ligne', t: 'Vendez vos produits et services en ligne.', x: 'Chaque commande est rattachée à la fiche client et transmise à l’équipe concernée.', opt: 'Optionnel' },
  training: { o: 'Formation', t: 'Intégration et développement des compétences.', x: 'Parcours d’intégration, formations internes, suivi de la progression et attestations de réussite.' },
  events: { o: 'Événements & Live', t: 'Webinaires et diffusions en direct.', x: 'Inscriptions, diffusion et replays pour vos événements internes et clients.', opt: 'Optionnel' },
  modular: {
    t: 'Démarrez avec vos priorités.', x: 'Activez les modules nécessaires, puis étendez la plateforme selon votre croissance.',
    groups: ['Clients & Ventes', 'Équipes & RH', 'Travail & Collaboration', 'Finance & Pilotage'],
    layers: 'Transversal à tous les modules', pilot: 'Reporting', optL: 'En option',
  },
  opts: 'Options',
  mid: { t: 'Découvrez comment Synapse Business s’adapte à votre organisation.', cta: 'Demander une démo' },
  final: { t1: 'Voyez Synapse Business', t2: 'appliqué à votre activité.', x: 'Une démonstration adaptée à vos processus et à vos priorités.', cta: 'Demander une démo' },
};

const en: BusinessV2 = {
  hero: {
    t1: 'Your business.', t2: 'More connected. More intelligent.',
    sub: 'The integrated management platform for SMEs, with an AI assistant working for your teams.',
    nodes: ['Customers & Sales', 'Teams & HR', 'Work & Collaboration', 'Finance & Steering'], ai: 'Syn’IA built in',
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
    o: 'Customers & Sales', t: 'From prospect to appointment, every customer relationship is followed up.',
    x: 'Customer history, pipeline and follow-ups shared by the sales team. Appointments booked online go straight to the calendar and the customer record.',
    points: ['Customer record and history', 'Pipeline and opportunities', 'Quotes', 'Follow-ups and next actions', 'Online appointment booking'],
  },
  booking: {
    o: 'Appointment booking', t: 'Online booking, connected to your calendars.',
    x: 'Customers book an available slot. The appointment is added to the employee’s calendar and to the customer record.',
    chain: ['Online booking', 'Team calendar', 'Customer record', 'Confirmed appointment'],
  },
  hr: {
    o: 'Teams & HR', t: 'The employee lifecycle, from recruitment to payroll, and skills development.',
    x: 'Data entered at hiring feeds every following step, through to the payslip.',
    life: ['Recruitment', 'Contract', 'Employee file', 'Time tracking', 'Leave and absence', 'Reviews and bonuses', 'Payroll', 'Payslips'],
  },
  collab: {
    o: 'Work & Collaboration', t: 'Communication, documents and projects, organised by team.',
    x: 'The virtual office where your teams communicate, produce, store documents and track project delivery.',
    groups: [
      { h: 'Communication', items: ['Messaging and email', 'Forum', 'Shared calendar'] },
      { h: 'Collaboration', items: ['Live co-editing', 'Recorded online meetings', 'Automatic minutes'] },
      { h: 'Document management', items: ['Central storage and folders', 'Version history', 'Search and access rights'] },
      { h: 'Project management', items: ['Projects and milestones', 'Tasks and owners', 'Approvals and progress'] },
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
    o: 'Finance & Steering', t: 'Control spending. Steer on consolidated figures.',
    x: 'Day-to-day financial operations, and a management view consolidating data from every module.',
    ops: { h: 'Financial operations', items: ['Invoices', 'Expense claims', 'Budgets', 'Project costs', 'Approval workflows'] },
    rep: { h: 'Management reporting', items: ['Consolidated indicators', 'Sales activity', 'Project progress'] },
  },
  shop: { o: 'Online shop', t: 'Sell your products and services online.', x: 'Each order is attached to the customer record and passed to the relevant team.', opt: 'Optional' },
  training: { o: 'Training', t: 'Onboarding and skills development.', x: 'Onboarding paths, internal courses, progress tracking and completion certificates.' },
  events: { o: 'Events & Live', t: 'Webinars and live broadcasts.', x: 'Registrations, streaming and replays for internal and customer events.', opt: 'Optional' },
  modular: {
    t: 'Start with your priorities.', x: 'Activate the modules you need, then extend the platform as you grow.',
    groups: ['Customers & Sales', 'Teams & HR', 'Work & Collaboration', 'Finance & Steering'],
    layers: 'Across all modules', pilot: 'Reporting', optL: 'Optional',
  },
  opts: 'Options',
  mid: { t: 'See how Synapse Business fits your organisation.', cta: 'Request a demo' },
  final: { t1: 'See Synapse Business', t2: 'applied to your business.', x: 'A demonstration tailored to your processes and priorities.', cta: 'Request a demo' },
};

const no: BusinessV2 = {
  hero: {
    t1: 'Din bedrift.', t2: 'Mer tilkoblet. Mer intelligent.',
    sub: 'Den integrerte styringsplattformen for SMB-er, med en AI-assistent som jobber for teamene dine.',
    nodes: ['Kunder & salg', 'Team & HR', 'Arbeid & samarbeid', 'Økonomi & styring'], ai: 'Syn’IA innebygd',
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
    o: 'Kunder & salg', t: 'Fra prospekt til avtale, hvert kundeforhold følges opp.',
    x: 'Kundehistorikk, pipeline og oppfølging delt i salgsteamet. Timer bestilt på nett går rett inn i kalenderen og på kundekortet.',
    points: ['Kundekort og historikk', 'Pipeline og muligheter', 'Tilbud', 'Oppfølging og neste steg', 'Timebestilling på nett'],
  },
  booking: {
    o: 'Timebestilling', t: 'Nettbestilling koblet til kalenderne deres.',
    x: 'Kunden bestiller en ledig tid. Avtalen legges i den ansattes kalender og på kundekortet.',
    chain: ['Nettbestilling', 'Teamkalender', 'Kundekort', 'Bekreftet avtale'],
  },
  hr: {
    o: 'Team & HR', t: 'Medarbeiderløpet fra rekruttering til lønn, og kompetanseutvikling.',
    x: 'Data registrert ved ansettelse brukes i hvert steg, helt til lønnsslippen.',
    life: ['Rekruttering', 'Kontrakt', 'Personalmappe', 'Tidsregistrering', 'Ferie og fravær', 'Evaluering og bonus', 'Lønn', 'Lønnsslipper'],
  },
  collab: {
    o: 'Arbeid & samarbeid', t: 'Kommunikasjon, dokumenter og prosjekter, organisert per team.',
    x: 'Det virtuelle kontoret der teamene kommuniserer, produserer, lagrer dokumenter og følger prosjektgjennomføringen.',
    groups: [
      { h: 'Kommunikasjon', items: ['Meldinger og e-post', 'Forum', 'Delt kalender'] },
      { h: 'Samarbeid', items: ['Samtidig redigering', 'Innspilte nettmøter', 'Automatiske referater'] },
      { h: 'Dokumenthåndtering', items: ['Sentral lagring og mapper', 'Versjonshistorikk', 'Søk og tilgangsstyring'] },
      { h: 'Prosjektstyring', items: ['Prosjekter og milepæler', 'Oppgaver og ansvarlige', 'Godkjenninger og fremdrift'] },
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
    o: 'Økonomi & styring', t: 'Kontroll på kostnadene. Styring på konsoliderte tall.',
    x: 'Daglig økonomidrift, og en ledervisning som samler data fra alle moduler.',
    ops: { h: 'Økonomidrift', items: ['Fakturaer', 'Utlegg', 'Budsjetter', 'Prosjektkostnader', 'Godkjenningsflyt'] },
    rep: { h: 'Lederrapportering', items: ['Konsoliderte nøkkeltall', 'Salgsaktivitet', 'Prosjektfremdrift'] },
  },
  shop: { o: 'Nettbutikk', t: 'Selg produkter og tjenester på nett.', x: 'Hver ordre knyttes til kundekortet og sendes til riktig team.', opt: 'Valgfritt' },
  training: { o: 'Opplæring', t: 'Onboarding og kompetanseutvikling.', x: 'Onboardingløp, interne kurs, fremdriftsoppfølging og kursbevis.' },
  events: { o: 'Arrangementer & live', t: 'Webinarer og direktesendinger.', x: 'Påmelding, sending og opptak for interne og eksterne arrangementer.', opt: 'Valgfritt' },
  modular: {
    t: 'Start med prioriteringene deres.', x: 'Aktiver modulene dere trenger, og utvid plattformen i takt med veksten.',
    groups: ['Kunder & salg', 'Team & HR', 'Arbeid & samarbeid', 'Økonomi & styring'],
    layers: 'På tvers av alle moduler', pilot: 'Rapportering', optL: 'Valgfritt',
  },
  opts: 'Tillegg',
  mid: { t: 'Se hvordan Synapse Business passer deres organisasjon.', cta: 'Be om en demo' },
  final: { t1: 'Se Synapse Business', t2: 'i deres virksomhet.', x: 'En demonstrasjon tilpasset deres prosesser og prioriteringer.', cta: 'Be om en demo' },
};

const ar: BusinessV2 = {
  hero: {
    t1: 'مؤسستكم.', t2: 'أكثر ترابطًا. أكثر ذكاءً.',
    sub: 'منصة التسيير المتكاملة للمقاولات الصغرى والمتوسطة، مع مساعد ذكي في خدمة فرقكم.',
    nodes: ['العملاء والمبيعات', 'الفرق والموارد البشرية', 'العمل والتعاون', 'المالية والقيادة'], ai: 'Syn’IA مدمجة',
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
    o: 'العملاء والمبيعات', t: 'من الاستقطاب إلى الموعد، كل علاقة عميل متابَعة.',
    x: 'سجل العميل ومسار المبيعات والمتابعات مشتركة داخل فريق المبيعات. والمواعيد المحجوزة إلكترونيًا تُضاف مباشرة إلى الأجندة وبطاقة العميل.',
    points: ['بطاقة العميل وسجله', 'مسار المبيعات والفرص', 'عروض الأسعار', 'المتابعات والخطوات التالية', 'حجز المواعيد إلكترونيًا'],
  },
  booking: {
    o: 'حجز المواعيد', t: 'حجز إلكتروني مرتبط بأجنداتكم.',
    x: 'يحجز العميل موعدًا متاحًا، فيُضاف إلى أجندة الموظف وإلى بطاقة العميل.',
    chain: ['حجز إلكتروني', 'أجندة الفريق', 'بطاقة العميل', 'موعد مؤكد'],
  },
  hr: {
    o: 'الفرق والموارد البشرية', t: 'مسار الموظف من التوظيف إلى الأجور، وتطوير الكفاءات.',
    x: 'البيانات المدخلة عند التوظيف تغذي كل مرحلة لاحقة، حتى ورقة الأجر.',
    life: ['التوظيف', 'العقد', 'ملف الموظف', 'تسجيل الحضور', 'العطل والغياب', 'التقييم والمكافآت', 'الأجور', 'أوراق الأجر'],
  },
  collab: {
    o: 'العمل والتعاون', t: 'التواصل والوثائق والمشاريع، منظمة حسب الفريق.',
    x: 'المكتب الافتراضي حيث تتواصل فرقكم وتنتج وتحفظ الوثائق وتتابع تنفيذ المشاريع.',
    groups: [
      { h: 'التواصل', items: ['المراسلة والبريد', 'المنتدى', 'تقويم مشترك'] },
      { h: 'التعاون', items: ['تحرير مشترك مباشر', 'اجتماعات مسجلة عبر الإنترنت', 'محاضر تلقائية'] },
      { h: 'التدبير الوثائقي', items: ['تخزين مركزي ومجلدات', 'سجل النسخ', 'البحث وصلاحيات الوصول'] },
      { h: 'تدبير المشاريع', items: ['المشاريع والمراحل', 'المهام والمسؤولون', 'الموافقات والتقدم'] },
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
    o: 'المالية والقيادة', t: 'تحكّموا في النفقات. قودوا بأرقام موحّدة.',
    x: 'العمليات المالية اليومية، ورؤية للإدارة تجمع بيانات كل الوحدات.',
    ops: { h: 'العمليات المالية', items: ['الفواتير', 'مذكرات المصاريف', 'الميزانيات', 'تكاليف المشاريع', 'مسارات الموافقة'] },
    rep: { h: 'تقارير الإدارة', items: ['مؤشرات موحّدة', 'النشاط التجاري', 'تقدم المشاريع'] },
  },
  shop: { o: 'متجر إلكتروني', t: 'بيعوا منتجاتكم وخدماتكم عبر الإنترنت.', x: 'كل طلب مرتبط ببطاقة العميل ويُحال إلى الفريق المعني.', opt: 'اختياري' },
  training: { o: 'التكوين', t: 'الإدماج وتطوير الكفاءات.', x: 'مسارات إدماج، تكوينات داخلية، تتبع التقدم وشهادات الإتمام.' },
  events: { o: 'الفعاليات والبث', t: 'ندوات عبر الإنترنت وبث مباشر.', x: 'التسجيل والبث وإعادة المشاهدة للفعاليات الداخلية وفعاليات العملاء.', opt: 'اختياري' },
  modular: {
    t: 'ابدؤوا بأولوياتكم.', x: 'فعّلوا الوحدات التي تحتاجونها، ثم وسّعوا المنصة مع نموكم.',
    groups: ['العملاء والمبيعات', 'الفرق والموارد البشرية', 'العمل والتعاون', 'المالية والقيادة'],
    layers: 'عبر كل الوحدات', pilot: 'التقارير', optL: 'اختياري',
  },
  opts: 'خيارات',
  mid: { t: 'اكتشفوا كيف تتكيف Synapse Business مع مؤسستكم.', cta: 'اطلب عرضًا توضيحيًا' },
  final: { t1: 'شاهدوا Synapse Business', t2: 'مطبّقة على نشاطكم.', x: 'عرض توضيحي مكيّف مع مساطركم وأولوياتكم.', cta: 'اطلب عرضًا توضيحيًا' },
};

const businessV2: Record<string, BusinessV2> = { fr, en, no, ar };
export default businessV2;
