// Copy for the restructured /business page (SME priority order, Syn'IA as a cross-platform layer).
type Sec = { o: string; t: string; x: string };
export type BusinessV2 = {
  hero: { t1: string; t2: string; sub: string; nodes: string[]; ai: string };
  problem: { t: string; x: string };
  ai: Sec & { note: string; badge: string; items: { a: string; d: string }[] };
  crm: Sec & { points: string[]; cue: string };
  booking: Sec & { chain: string[] };
  hr: Sec & { life: string[]; cue: string };
  collab: Sec & { points: string[]; ws: string; cue: string };
  projects: Sec & { flow: string[]; cue: string };
  finance: Sec & { points: string[]; cue: string };
  shop: Sec & { opt: string };
  training: Sec;
  events: Sec & { opt: string };
  modular: { t: string; x: string; groups: string[]; layers: string; layerX: string; pilot: string };
};

const fr: BusinessV2 = {
  hero: {
    t1: 'Votre entreprise.', t2: 'Plus connectée. Plus intelligente.',
    sub: 'CRM, ventes, rendez-vous, RH & paie, collaboration, projets et finance — réunis dans un environnement intelligent qui relie vos équipes, vos clients et vos données.',
    nodes: ['CRM / Ventes', 'Rendez-vous', 'RH & Paie', 'Collaboration', 'Projets', 'Finance'], ai: 'Syn’IA intégrée',
  },
  problem: { t: 'Trop d’outils. Trop d’informations dispersées.', x: 'Synapse Business relie vos données clients, vos équipes, le travail et les décisions dans un même environnement.' },
  ai: {
    o: 'Syn’IA · Intelligence intégrée', t: 'Une plateforme qui ne se contente pas de centraliser. Elle comprend, assiste et agit.',
    x: 'Syn’IA est intégrée là où le travail se fait déjà. Elle s’appuie sur le contexte de votre organisation pour vous aider à préparer, résumer et retrouver l’information.',
    note: 'Syn’IA respecte les droits et accès de chaque utilisateur. Vos équipes gardent la main sur chaque décision.', badge: 'Syn’IA',
    items: [
      { a: 'CRM & Ventes', d: 'Prépare les relances, résume l’historique client et aide à rédiger offres et messages.' },
      { a: 'Réunions & Collaboration', d: 'Résume les réunions, génère les PV et extrait les actions à suivre.' },
      { a: 'Projets', d: 'Résume l’avancement, repère les actions en attente et prépare les points d’étape.' },
      { a: 'RH', d: 'Aide à rédiger les documents, accompagne l’intégration et résume les informations autorisées.' },
      { a: 'Finance', d: 'Aide à analyser les données disponibles et résume l’état des budgets et dépenses.' },
      { a: 'Connaissances & Recherche', d: 'Retrouve l’information dans les documents et espaces auxquels vous avez accès.' },
    ],
  },
  crm: {
    o: 'CRM & Ventes', t: 'Transformez chaque contact en relation suivie.',
    x: 'Un seul historique par client : contacts, réunions, emails, documents et opportunités. Chaque prochaine action est visible, aucune relance ne se perd.',
    points: ['Fiche client complète', 'Pipeline et opportunités', 'Emails et réunions liés', 'Prochaines actions assignées', 'Devis et documents'],
    cue: 'Syn’IA a préparé la relance pour Atlas Distribution',
  },
  booking: {
    o: 'Rendez-vous clients', t: 'Vos clients réservent. Votre équipe est prête.',
    x: 'Chaque réservation en ligne arrive dans le calendrier de l’équipe et sur la fiche du client, pour un suivi sans ressaisie.',
    chain: ['Réservation', 'Calendrier', 'Fiche client / CRM', 'Suivi équipe'],
  },
  hr: {
    o: 'RH & Paie', t: 'Tout le cycle collaborateur, du recrutement à la paie.',
    x: 'Chaque étape RH est reliée à la suivante : les informations saisies une fois alimentent le dossier, le pointage, les congés, les primes et la paie.',
    life: ['Recrutement', 'Contrat', 'Dossier collaborateur', 'Pointage', 'Congés / absences', 'Performance / primes', 'Paie', 'Bulletins'],
    cue: 'Syn’IA : brouillon de contrat prêt à relire',
  },
  collab: {
    o: 'Communication & Collaboration', t: 'Votre bureau virtuel, pour toute l’équipe.',
    x: 'Espaces de travail, fichiers partagés et co-édition sur le même document avec historique complet. Chat, email, forum, calendrier et réunions en ligne enregistrées, avec PV automatiques : la direction garde une vue claire.',
    points: ['Espaces de travail virtuels', 'Co-édition & historique', 'Chat, email & forum', 'Calendrier partagé', 'Réunions enregistrées & PV', 'Visibilité direction'],
    ws: 'Un espace par équipe ou projet', cue: 'Syn’IA : PV généré, 3 actions extraites',
  },
  projects: {
    o: 'Projets & Tâches', t: 'Des projets suivis de bout en bout.',
    x: 'Étapes, tâches et responsables clairs, avec documents, réunions et validations reliés au projet. L’avancement est visible pour tous.',
    flow: ['Projet', 'Étapes & tâches', 'Responsables', 'Documents', 'Réunions', 'Validations', 'Avancement'],
    cue: 'Syn’IA : point d’avancement préparé',
  },
  finance: {
    o: 'Finance & Pilotage', t: 'Vos finances et votre activité, dans une même vue.',
    x: 'Factures, dépenses, budgets et coûts par projet, validés en un clic. Le tableau de bord de direction réunit les chiffres de toute la plateforme.',
    points: ['Factures', 'Notes de frais', 'Budgets & coûts projet', 'Validations', 'Tableau de bord direction'],
    cue: 'Syn’IA : synthèse du budget T4 prête',
  },
  shop: { o: 'Boutique en ligne', t: 'Vendez aussi en ligne, si vous en avez besoin.', x: 'Pour les entreprises qui vendent des produits ou services : chaque commande est reliée au client et crée une tâche pour l’équipe.', opt: 'Optionnel' },
  training: { o: 'Formation', t: 'Intégration et montée en compétences, au même endroit.', x: 'Accueillez les nouveaux collaborateurs et développez les compétences de l’équipe dans leur environnement de travail.' },
  events: { o: 'Événements & Live', t: 'Webinaires, événements et diffusions en direct.', x: 'Gérez les inscriptions et diffusez vos sessions pour vos équipes comme pour vos clients.', opt: 'Optionnel' },
  modular: {
    t: 'Commencez avec vos priorités. Évoluez à votre rythme.', x: 'Activez les briques dont vous avez besoin aujourd’hui, puis étendez votre environnement.',
    groups: ['CRM & Ventes', 'Rendez-vous', 'RH & Paie', 'Collaboration', 'Projets', 'Finance', 'Boutique', 'Formation', 'Événements & Live'],
    layers: 'Présents dans tous les modules', layerX: 'Intelligence et pilotage transversaux', pilot: 'Pilotage',
  },
};

const en: BusinessV2 = {
  hero: {
    t1: 'Your business.', t2: 'More connected. More intelligent.',
    sub: 'CRM, sales, booking, HR & payroll, collaboration, projects and finance — brought together in an intelligent environment that connects your teams, your clients and your data.',
    nodes: ['CRM / Sales', 'Booking', 'HR & Payroll', 'Collaboration', 'Projects', 'Finance'], ai: 'Syn’IA built in',
  },
  problem: { t: 'Too many tools. Too much scattered information.', x: 'Synapse Business connects your client data, your people, your work and your decisions in one environment.' },
  ai: {
    o: 'Syn’IA · Built-in intelligence', t: 'A platform that does more than centralise. It understands, assists and acts.',
    x: 'Syn’IA is built into the places where work already happens. It uses your organisation’s context to help you prepare, summarise and find information.',
    note: 'Syn’IA respects each user’s permissions and access. Your teams stay in control of every decision.', badge: 'Syn’IA',
    items: [
      { a: 'CRM & Sales', d: 'Prepares follow-ups, summarises client history and helps draft offers and messages.' },
      { a: 'Meetings & Collaboration', d: 'Summarises meetings, generates minutes and extracts follow-up actions.' },
      { a: 'Projects', d: 'Summarises progress, spots pending actions and prepares status updates.' },
      { a: 'HR', d: 'Helps draft documents, supports onboarding and summarises permitted information.' },
      { a: 'Finance', d: 'Helps analyse available data and summarises budget and expense status.' },
      { a: 'Knowledge & Search', d: 'Finds information across the documents and workspaces you can access.' },
    ],
  },
  crm: {
    o: 'CRM & Sales', t: 'Turn every contact into a followed-up relationship.',
    x: 'One history per client: contacts, meetings, emails, documents and opportunities. Every next action is visible, no follow-up gets lost.',
    points: ['Full client record', 'Pipeline and opportunities', 'Linked emails and meetings', 'Assigned next actions', 'Quotes and documents'],
    cue: 'Syn’IA prepared the follow-up for Atlas Distribution',
  },
  booking: {
    o: 'Client booking', t: 'Your clients book. Your team is ready.',
    x: 'Every online booking lands in the team calendar and on the client record, for follow-up without re-entry.',
    chain: ['Booking', 'Calendar', 'Client record / CRM', 'Team follow-up'],
  },
  hr: {
    o: 'HR & Payroll', t: 'The full employee lifecycle, from hiring to payroll.',
    x: 'Every HR step connects to the next: information entered once feeds the employee file, time tracking, leave, bonuses and payroll.',
    life: ['Recruitment', 'Contract', 'Employee file', 'Time tracking', 'Leave / absence', 'Performance / bonuses', 'Payroll', 'Payslips'],
    cue: 'Syn’IA: draft contract ready to review',
  },
  collab: {
    o: 'Communication & Collaboration', t: 'Your virtual office, for the whole team.',
    x: 'Workspaces, shared files and co-editing on the same document with full history. Chat, email, forum, calendar and recorded online meetings with automatic minutes: management keeps a clear view.',
    points: ['Virtual workspaces', 'Co-editing & history', 'Chat, email & forum', 'Shared calendar', 'Recorded meetings & minutes', 'Management visibility'],
    ws: 'One space per team or project', cue: 'Syn’IA: minutes generated, 3 actions extracted',
  },
  projects: {
    o: 'Projects & Tasks', t: 'Projects followed from start to finish.',
    x: 'Clear milestones, tasks and owners, with documents, meetings and approvals linked to the project. Progress is visible to everyone.',
    flow: ['Project', 'Milestones & tasks', 'Owners', 'Documents', 'Meetings', 'Approvals', 'Progress'],
    cue: 'Syn’IA: status update prepared',
  },
  finance: {
    o: 'Finance & Management', t: 'Your finances and your activity, in one view.',
    x: 'Invoices, expenses, budgets and project costs, approved in one click. The management dashboard brings together figures from across the platform.',
    points: ['Invoices', 'Expense claims', 'Budgets & project costs', 'Approvals', 'Management dashboard'],
    cue: 'Syn’IA: Q4 budget summary ready',
  },
  shop: { o: 'Online shop', t: 'Sell online too, if you need it.', x: 'For businesses selling products or services: every order is linked to the client and creates a task for the team.', opt: 'Optional' },
  training: { o: 'Training', t: 'Onboarding and skills development, in one place.', x: 'Welcome new employees and grow your team’s skills inside their everyday work environment.' },
  events: { o: 'Events & Live', t: 'Webinars, events and live streaming.', x: 'Manage registrations and stream your sessions for your teams and your clients.', opt: 'Optional' },
  modular: {
    t: 'Start with your priorities. Grow at your own pace.', x: 'Activate the building blocks you need today, then extend your environment.',
    groups: ['CRM & Sales', 'Booking', 'HR & Payroll', 'Collaboration', 'Projects', 'Finance', 'Shop', 'Training', 'Events & Live'],
    layers: 'Present across every module', layerX: 'Cross-platform intelligence and management', pilot: 'Management',
  },
};

const no: BusinessV2 = {
  hero: {
    t1: 'Din bedrift.', t2: 'Mer koblet. Mer intelligent.',
    sub: 'CRM, salg, timebestilling, HR & lønn, samarbeid, prosjekter og økonomi — samlet i et intelligent miljø som kobler teamene, kundene og dataene dine.',
    nodes: ['CRM / Salg', 'Timebestilling', 'HR & lønn', 'Samarbeid', 'Prosjekter', 'Økonomi'], ai: 'Syn’IA innebygd',
  },
  problem: { t: 'For mange verktøy. For mye spredt informasjon.', x: 'Synapse Business kobler kundedata, mennesker, arbeid og beslutninger i ett miljø.' },
  ai: {
    o: 'Syn’IA · Innebygd intelligens', t: 'En plattform som gjør mer enn å samle. Den forstår, hjelper og handler.',
    x: 'Syn’IA er bygget inn der arbeidet allerede skjer. Den bruker konteksten i organisasjonen for å hjelpe deg å forberede, oppsummere og finne informasjon.',
    note: 'Syn’IA respekterer hver brukers rettigheter og tilganger. Teamene beholder kontrollen over hver beslutning.', badge: 'Syn’IA',
    items: [
      { a: 'CRM & salg', d: 'Forbereder oppfølging, oppsummerer kundehistorikk og hjelper med tilbud og meldinger.' },
      { a: 'Møter & samarbeid', d: 'Oppsummerer møter, lager referater og henter ut oppgaver.' },
      { a: 'Prosjekter', d: 'Oppsummerer fremdrift, finner ventende oppgaver og forbereder statusoppdateringer.' },
      { a: 'HR', d: 'Hjelper med dokumenter, støtter onboarding og oppsummerer tillatt informasjon.' },
      { a: 'Økonomi', d: 'Hjelper å analysere tilgjengelige data og oppsummerer budsjett og utgifter.' },
      { a: 'Kunnskap & søk', d: 'Finner informasjon i dokumentene og rommene du har tilgang til.' },
    ],
  },
  crm: {
    o: 'CRM & salg', t: 'Gjør hver kontakt til en fulgt opp relasjon.',
    x: 'Én historikk per kunde: kontakter, møter, e-post, dokumenter og muligheter. Hver neste handling er synlig, ingen oppfølging går tapt.',
    points: ['Komplett kundekort', 'Pipeline og muligheter', 'Koblede e-poster og møter', 'Tildelte neste steg', 'Tilbud og dokumenter'],
    cue: 'Syn’IA har forberedt oppfølgingen av Atlas Distribution',
  },
  booking: {
    o: 'Timebestilling', t: 'Kundene bestiller. Teamet er klart.',
    x: 'Hver bestilling på nett havner i teamets kalender og på kundekortet, for oppfølging uten dobbeltregistrering.',
    chain: ['Bestilling', 'Kalender', 'Kundekort / CRM', 'Oppfølging i teamet'],
  },
  hr: {
    o: 'HR & lønn', t: 'Hele medarbeiderløpet, fra rekruttering til lønn.',
    x: 'Hvert HR-steg henger sammen med det neste: informasjon registrert én gang brukes i personalmappen, stempling, fravær, bonus og lønn.',
    life: ['Rekruttering', 'Kontrakt', 'Personalmappe', 'Stempling', 'Ferie / fravær', 'Oppfølging / bonus', 'Lønn', 'Lønnsslipper'],
    cue: 'Syn’IA: kontraktutkast klart til gjennomgang',
  },
  collab: {
    o: 'Kommunikasjon & samarbeid', t: 'Ditt virtuelle kontor, for hele teamet.',
    x: 'Arbeidsrom, delte filer og samtidig redigering i samme dokument med full historikk. Chat, e-post, forum, kalender og innspilte nettmøter med automatiske referater: ledelsen har full oversikt.',
    points: ['Virtuelle arbeidsrom', 'Samtidig redigering & historikk', 'Chat, e-post & forum', 'Delt kalender', 'Innspilte møter & referater', 'Oversikt for ledelsen'],
    ws: 'Ett rom per team eller prosjekt', cue: 'Syn’IA: referat laget, 3 oppgaver hentet ut',
  },
  projects: {
    o: 'Prosjekter & oppgaver', t: 'Prosjekter fulgt fra start til slutt.',
    x: 'Tydelige milepæler, oppgaver og ansvarlige, med dokumenter, møter og godkjenninger koblet til prosjektet. Fremdriften er synlig for alle.',
    flow: ['Prosjekt', 'Milepæler & oppgaver', 'Ansvarlige', 'Dokumenter', 'Møter', 'Godkjenninger', 'Fremdrift'],
    cue: 'Syn’IA: statusoppdatering forberedt',
  },
  finance: {
    o: 'Økonomi & styring', t: 'Økonomien og driften, i én visning.',
    x: 'Fakturaer, utlegg, budsjetter og prosjektkostnader, godkjent med ett klikk. Ledelsens dashbord samler tall fra hele plattformen.',
    points: ['Fakturaer', 'Utlegg', 'Budsjetter & prosjektkostnader', 'Godkjenninger', 'Dashbord for ledelsen'],
    cue: 'Syn’IA: oppsummering av Q4-budsjett klar',
  },
  shop: { o: 'Nettbutikk', t: 'Selg på nett også, hvis du trenger det.', x: 'For bedrifter som selger produkter eller tjenester: hver ordre kobles til kunden og lager en oppgave for teamet.', opt: 'Valgfritt' },
  training: { o: 'Opplæring', t: 'Onboarding og kompetanseutvikling, på ett sted.', x: 'Ta imot nye ansatte og utvikle teamets kompetanse i det daglige arbeidsmiljøet.' },
  events: { o: 'Arrangementer & live', t: 'Webinarer, arrangementer og direktesending.', x: 'Håndter påmeldinger og send øktene dine direkte, for teamene og kundene.', opt: 'Valgfritt' },
  modular: {
    t: 'Start med dine prioriteringer. Voks i ditt tempo.', x: 'Aktiver delene du trenger i dag, og utvid miljøet når du vil.',
    groups: ['CRM & salg', 'Timebestilling', 'HR & lønn', 'Samarbeid', 'Prosjekter', 'Økonomi', 'Nettbutikk', 'Opplæring', 'Arrangementer & live'],
    layers: 'Til stede i alle moduler', layerX: 'Intelligens og styring på tvers', pilot: 'Styring',
  },
};

const ar: BusinessV2 = {
  hero: {
    t1: 'مؤسستكم.', t2: 'أكثر ترابطًا. أكثر ذكاءً.',
    sub: 'إدارة العملاء، المبيعات، المواعيد، الموارد البشرية والأجور، التعاون، المشاريع والمالية — مجتمعة في بيئة ذكية تربط فرقكم وعملاءكم وبياناتكم.',
    nodes: ['العملاء / المبيعات', 'المواعيد', 'الموارد البشرية والأجور', 'التعاون', 'المشاريع', 'المالية'], ai: 'Syn’IA مدمجة',
  },
  problem: { t: 'أدوات كثيرة. معلومات مشتتة.', x: 'تربط Synapse Business بيانات العملاء والفرق والعمل والقرارات في بيئة واحدة.' },
  ai: {
    o: 'Syn’IA · ذكاء مدمج', t: 'منصة لا تكتفي بالتجميع. إنها تفهم وتساعد وتتحرك.',
    x: 'Syn’IA مدمجة حيث يتم العمل أصلًا، وتعتمد على سياق مؤسستكم لمساعدتكم على التحضير والتلخيص والعثور على المعلومات.',
    note: 'تحترم Syn’IA صلاحيات كل مستخدم وحقوق وصوله. وتبقى القرارات بيد فرقكم.', badge: 'Syn’IA',
    items: [
      { a: 'العملاء والمبيعات', d: 'تحضّر المتابعات، وتلخص سجل العميل، وتساعد في صياغة العروض والرسائل.' },
      { a: 'الاجتماعات والتعاون', d: 'تلخص الاجتماعات، وتنشئ المحاضر، وتستخرج المهام.' },
      { a: 'المشاريع', d: 'تلخص التقدم، وترصد المهام المعلقة، وتحضّر تقارير المرحلة.' },
      { a: 'الموارد البشرية', d: 'تساعد في صياغة الوثائق، وترافق الإدماج، وتلخص المعلومات المسموح بها.' },
      { a: 'المالية', d: 'تساعد في تحليل البيانات المتاحة وتلخص وضع الميزانيات والمصاريف.' },
      { a: 'المعرفة والبحث', d: 'تعثر على المعلومات في الوثائق والفضاءات المتاحة لكم.' },
    ],
  },
  crm: {
    o: 'العملاء والمبيعات', t: 'حوّلوا كل اتصال إلى علاقة متابَعة.',
    x: 'سجل واحد لكل عميل: جهات الاتصال والاجتماعات والرسائل والوثائق والفرص. كل خطوة قادمة واضحة، ولا تضيع أي متابعة.',
    points: ['بطاقة عميل كاملة', 'مسار المبيعات والفرص', 'رسائل واجتماعات مرتبطة', 'خطوات قادمة مسندة', 'عروض أسعار ووثائق'],
    cue: 'حضّرت Syn’IA المتابعة لـ Atlas Distribution',
  },
  booking: {
    o: 'مواعيد العملاء', t: 'عملاؤكم يحجزون. فريقكم جاهز.',
    x: 'كل حجز عبر الإنترنت يصل إلى تقويم الفريق وإلى بطاقة العميل، لمتابعة دون إعادة إدخال.',
    chain: ['الحجز', 'التقويم', 'بطاقة العميل', 'متابعة الفريق'],
  },
  hr: {
    o: 'الموارد البشرية والأجور', t: 'دورة الموظف كاملة، من التوظيف إلى الأجر.',
    x: 'كل خطوة مرتبطة بالتي تليها: المعلومات المُدخلة مرة واحدة تغذي الملف والحضور والعطل والمكافآت والأجور.',
    life: ['التوظيف', 'العقد', 'ملف الموظف', 'الحضور', 'العطل والغياب', 'الأداء والمكافآت', 'الأجور', 'كشوف الأجور'],
    cue: 'Syn’IA: مسودة العقد جاهزة للمراجعة',
  },
  collab: {
    o: 'التواصل والتعاون', t: 'مكتبكم الافتراضي، لكل الفريق.',
    x: 'فضاءات عمل وملفات مشتركة وتحرير مشترك على نفس الوثيقة مع سجل كامل. دردشة وبريد ومنتدى وتقويم واجتماعات مسجلة مع محاضر تلقائية: الإدارة ترى الصورة كاملة.',
    points: ['فضاءات عمل افتراضية', 'تحرير مشترك وسجل', 'دردشة وبريد ومنتدى', 'تقويم مشترك', 'اجتماعات مسجلة ومحاضر', 'رؤية للإدارة'],
    ws: 'فضاء لكل فريق أو مشروع', cue: 'Syn’IA: تم إنشاء المحضر واستخراج 3 مهام',
  },
  projects: {
    o: 'المشاريع والمهام', t: 'مشاريع متابَعة من البداية إلى النهاية.',
    x: 'مراحل ومهام ومسؤولون واضحون، مع وثائق واجتماعات وموافقات مرتبطة بالمشروع. التقدم واضح للجميع.',
    flow: ['المشروع', 'المراحل والمهام', 'المسؤولون', 'الوثائق', 'الاجتماعات', 'الموافقات', 'التقدم'],
    cue: 'Syn’IA: تقرير التقدم جاهز',
  },
  finance: {
    o: 'المالية والقيادة', t: 'ماليتكم ونشاطكم، في عرض واحد.',
    x: 'فواتير ومصاريف وميزانيات وتكاليف المشاريع، تتم الموافقة عليها بنقرة. لوحة قيادة الإدارة تجمع أرقام المنصة كلها.',
    points: ['الفواتير', 'مذكرات المصاريف', 'الميزانيات وتكاليف المشاريع', 'الموافقات', 'لوحة قيادة الإدارة'],
    cue: 'Syn’IA: ملخص ميزانية الربع الرابع جاهز',
  },
  shop: { o: 'متجر إلكتروني', t: 'بيعوا عبر الإنترنت أيضًا، عند الحاجة.', x: 'للمؤسسات التي تبيع منتجات أو خدمات: كل طلب مرتبط بالعميل وينشئ مهمة للفريق.', opt: 'اختياري' },
  training: { o: 'التكوين', t: 'الإدماج وتطوير الكفاءات، في مكان واحد.', x: 'استقبلوا الموظفين الجدد وطوروا كفاءات الفريق داخل بيئة عملهم اليومية.' },
  events: { o: 'الفعاليات والبث', t: 'ندوات وفعاليات وبث مباشر.', x: 'أديروا التسجيلات وبثوا جلساتكم لفرقكم ولعملائكم.', opt: 'اختياري' },
  modular: {
    t: 'ابدؤوا بأولوياتكم. تطوروا بوتيرتكم.', x: 'فعّلوا ما تحتاجونه اليوم، ثم وسّعوا بيئتكم.',
    groups: ['العملاء والمبيعات', 'المواعيد', 'الموارد البشرية والأجور', 'التعاون', 'المشاريع', 'المالية', 'المتجر', 'التكوين', 'الفعاليات والبث'],
    layers: 'حاضرة في كل الوحدات', layerX: 'ذكاء وقيادة عبر المنصة', pilot: 'القيادة',
  },
};

const businessV2: Record<string, BusinessV2> = { fr, en, no, ar };
export default businessV2;
