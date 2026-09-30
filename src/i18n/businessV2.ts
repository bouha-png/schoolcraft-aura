// Copy for the restructured /business page (SME priority order, Syn'IA as a cross-platform layer).
type Sec = { o: string; t: string; x: string };
export type BusinessV2 = {
  hero: { t1: string; t2: string; sub: string; nodes: string[]; ai: string };
  problem: { t: string; x: string };
  ai: Sec & { note: string; badge: string; items: { a: string; d: string }[] };
  crm: Sec & { points: string[]; cue: string };
  booking: Sec & { chain: string[] };
  hr: Sec & { life: string[]; cue: string };
  collab: Sec & { points: string[]; store: string[]; ws: string; cue: string };
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
    o: 'Syn’IA · Intelligence intégrée', t: 'Un assistant intégré, là où vous travaillez déjà.',
    x: 'Syn’IA vous aide à résumer, rédiger, rechercher et préparer, à partir de l’information à laquelle vous avez accès. Les décisions restent les vôtres.',
    note: 'Syn’IA respecte les droits et accès de chaque utilisateur. Vos équipes gardent la main sur chaque décision.', badge: 'Syn’IA',
    items: [
      { a: 'Résumés de réunions & PV automatiques', d: 'Résume les réunions enregistrées, rédige le PV et liste les actions à suivre.' },
      { a: 'Rédaction & reformulation', d: 'Aide à rédiger emails et documents, ou à reformuler un texte existant.' },
      { a: 'Recherche de documents', d: 'Retrouve l’information dans les documents et espaces auxquels vous avez accès.' },
      { a: 'Réponses à partir de vos données', d: 'Répond à vos questions à partir des données disponibles dans la plateforme, selon vos droits.' },
      { a: 'Suggestions d’actions', d: 'Propose des suites à donner et des relances, que vous validez.' },
      { a: 'Création de contenu', d: 'Aide à préparer annonces, supports et contenus de formation.' },
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
    x: 'Tous vos documents sont stockés dans Synapse, organisés par dossiers et espaces, et accessibles selon les droits de chacun. Co-édition en direct, historique des versions, chat, email, forum, calendrier et réunions enregistrées avec PV automatiques.',
    points: ['Stockage documentaire centralisé', 'Fichiers partagés', 'Dossiers / espaces organisés', 'Co-édition en direct', 'Historique des versions', 'Partage sécurisé', 'Recherche de documents', 'Accès selon les droits', 'Chat, email, forum', 'Calendrier partagé', 'Réunions en ligne', 'Enregistrement des réunions', 'PV automatiques'],
    store: ['Stockage documentaire', 'Direction', 'Commercial', 'RH', 'Projets', 'Accès selon les droits'],
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
    o: 'Syn’IA · Built-in intelligence', t: 'A built-in assistant, where you already work.',
    x: 'Syn’IA helps you summarise, draft, search and prepare, using the information you have access to. Decisions stay yours.',
    note: 'Syn’IA respects each user’s permissions and access. Your teams stay in control of every decision.', badge: 'Syn’IA',
    items: [
      { a: 'Meeting summaries & automatic minutes', d: 'Summarises recorded meetings, drafts the minutes and lists follow-up actions.' },
      { a: 'Drafting & rewording', d: 'Helps draft emails and documents, or reword existing text.' },
      { a: 'Document search', d: 'Finds information across the documents and workspaces you can access.' },
      { a: 'Answers from your data', d: 'Answers questions from the data available in the platform, within your permissions.' },
      { a: 'Action suggestions', d: 'Suggests next steps and follow-ups for you to approve.' },
      { a: 'Content creation', d: 'Helps prepare announcements, materials and training content.' },
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
    x: 'All your documents are stored in Synapse, organised in folders and spaces, and accessible according to each person’s rights. Live co-editing, version history, chat, email, forum, calendar and recorded meetings with automatic minutes.',
    points: ['Centralised document storage', 'Shared files', 'Organised folders / spaces', 'Live co-editing', 'Version history', 'Secure sharing', 'Document search', 'Permission-based access', 'Chat, email, forum', 'Shared calendar', 'Online meetings', 'Meeting recording', 'Automatic minutes'],
    store: ['Document storage', 'Management', 'Sales', 'HR', 'Projects', 'Access by permissions'],
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
    o: 'Syn’IA · Innebygd intelligens', t: 'En innebygd assistent, der du allerede jobber.',
    x: 'Syn’IA hjelper deg å oppsummere, skrive, søke og forberede, basert på informasjonen du har tilgang til. Beslutningene er dine.',
    note: 'Syn’IA respekterer hver brukers rettigheter og tilganger. Teamene beholder kontrollen over hver beslutning.', badge: 'Syn’IA',
    items: [
      { a: 'Møteoppsummering & automatiske referater', d: 'Oppsummerer innspilte møter, skriver referat og lister oppfølgingspunkter.' },
      { a: 'Skriving & omformulering', d: 'Hjelper med e-poster og dokumenter, eller omformulerer eksisterende tekst.' },
      { a: 'Dokumentsøk', d: 'Finner informasjon i dokumentene og rommene du har tilgang til.' },
      { a: 'Svar fra dine data', d: 'Svarer på spørsmål ut fra data i plattformen, innenfor dine tilganger.' },
      { a: 'Forslag til handlinger', d: 'Foreslår neste steg og oppfølging som du godkjenner.' },
      { a: 'Innholdsproduksjon', d: 'Hjelper med kunngjøringer, materiell og opplæringsinnhold.' },
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
    x: 'Alle dokumentene lagres i Synapse, organisert i mapper og rom, og tilgjengelige etter hver enkelts rettigheter. Samtidig redigering, versjonshistorikk, chat, e-post, forum, kalender og innspilte møter med automatiske referater.',
    points: ['Sentral dokumentlagring', 'Delte filer', 'Organiserte mapper / rom', 'Samtidig redigering', 'Versjonshistorikk', 'Sikker deling', 'Dokumentsøk', 'Tilgang etter rettigheter', 'Chat, e-post, forum', 'Delt kalender', 'Nettmøter', 'Opptak av møter', 'Automatiske referater'],
    store: ['Dokumentlagring', 'Ledelse', 'Salg', 'HR', 'Prosjekter', 'Tilgang etter rettigheter'],
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
    o: 'Syn’IA · ذكاء مدمج', t: 'مساعد مدمج، حيث تعملون أصلًا.',
    x: 'تساعدكم Syn’IA على التلخيص والصياغة والبحث والتحضير، انطلاقًا من المعلومات المتاحة لكم. القرار يبقى لكم.',
    note: 'تحترم Syn’IA صلاحيات كل مستخدم وحقوق وصوله. وتبقى القرارات بيد فرقكم.', badge: 'Syn’IA',
    items: [
      { a: 'ملخصات الاجتماعات والمحاضر التلقائية', d: 'تلخص الاجتماعات المسجلة، وتصوغ المحضر، وتسرد المهام المطلوبة.' },
      { a: 'الصياغة وإعادة الصياغة', d: 'تساعد في كتابة الرسائل والوثائق، أو إعادة صياغة نص موجود.' },
      { a: 'البحث في الوثائق', d: 'تعثر على المعلومات في الوثائق والفضاءات المتاحة لكم.' },
      { a: 'إجابات من بياناتكم', d: 'تجيب عن أسئلتكم من البيانات المتاحة في المنصة، وفق صلاحياتكم.' },
      { a: 'اقتراح الإجراءات', d: 'تقترح الخطوات التالية والمتابعات لتوافقوا عليها.' },
      { a: 'إنشاء المحتوى', d: 'تساعد في إعداد الإعلانات والمواد ومحتوى التكوين.' },
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
    x: 'تُخزَّن كل وثائقكم في Synapse، منظمة في مجلدات وفضاءات، ومتاحة حسب صلاحيات كل شخص. تحرير مشترك مباشر، سجل النسخ، دردشة وبريد ومنتدى وتقويم واجتماعات مسجلة مع محاضر تلقائية.',
    points: ['تخزين مركزي للوثائق', 'ملفات مشتركة', 'مجلدات وفضاءات منظمة', 'تحرير مشترك مباشر', 'سجل النسخ', 'مشاركة آمنة', 'البحث في الوثائق', 'وصول حسب الصلاحيات', 'دردشة وبريد ومنتدى', 'تقويم مشترك', 'اجتماعات عبر الإنترنت', 'تسجيل الاجتماعات', 'محاضر تلقائية'],
    store: ['تخزين الوثائق', 'الإدارة', 'المبيعات', 'الموارد البشرية', 'المشاريع', 'وصول حسب الصلاحيات'],
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
