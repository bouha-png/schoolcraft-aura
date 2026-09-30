import { Users, FolderKanban, UserCog, ShoppingBag, BarChart3, GraduationCap, type LucideIcon } from 'lucide-react';

export type Lang = 'fr' | 'en' | 'no' | 'ar';
type L4 = Record<Lang, string>;
type F4 = Record<Lang, string[]>;
export type Mod = { slug: string; name: L4; short: L4; features: F4 };
export type Cat = { id: string; icon: LucideIcon; name: L4; mods: Mod[] };

const m = (slug: string, name: L4, short: L4, features: F4): Mod => ({ slug, name, short, features });

export const CATEGORIES: Cat[] = [
  { id: 'collaboration', icon: Users, name: { fr: 'Collaboration', en: 'Collaboration', no: 'Samarbeid', ar: 'التعاون' }, mods: [
    m('bureaux-virtuels', { fr: 'Bureaux virtuels', en: 'Virtual offices', no: 'Virtuelle kontorer', ar: 'مكاتب افتراضية' },
      { fr: 'Un espace de travail par équipe, service ou projet.', en: 'A workspace for each team, department or project.', no: 'Et arbeidsområde per team, avdeling eller prosjekt.', ar: 'فضاء عمل لكل فريق أو قسم أو مشروع.' },
      { fr: ['Espaces par équipe et par projet', 'Fil d’activité commun', 'Forum et sujets de discussion', 'Accès selon les rôles'], en: ['Spaces per team and project', 'Shared activity feed', 'Forum and discussion topics', 'Role-based access'], no: ['Rom per team og prosjekt', 'Felles aktivitetsstrøm', 'Forum og diskusjonstråder', 'Rollebasert tilgang'], ar: ['فضاءات لكل فريق ومشروع', 'سجل نشاط مشترك', 'منتدى ومواضيع نقاش', 'ولوج حسب الأدوار'] }),
    m('documents-partages', { fr: 'Documents partagés', en: 'Shared documents', no: 'Delte dokumenter', ar: 'وثائق مشتركة' },
      { fr: 'Travaillez à plusieurs sur le même document, en direct.', en: 'Work together on the same document, live.', no: 'Jobb sammen i samme dokument, i sanntid.', ar: 'اعملوا معًا على نفس الوثيقة مباشرة.' },
      { fr: ['Co-édition en temps réel', 'Historique complet des versions', 'Stockage centralisé', 'Partage sécurisé'], en: ['Real-time co-editing', 'Full version history', 'Central storage', 'Secure sharing'], no: ['Samtidig redigering', 'Full versjonshistorikk', 'Sentral lagring', 'Sikker deling'], ar: ['تحرير مشترك فوري', 'سجل كامل للإصدارات', 'تخزين مركزي', 'مشاركة آمنة'] }),
    m('reunions', { fr: 'Réunions & PV', en: 'Meetings & minutes', no: 'Møter & referater', ar: 'الاجتماعات والمحاضر' },
      { fr: 'Réunions en ligne enregistrées, PV générés automatiquement.', en: 'Recorded online meetings, automatic minutes.', no: 'Nettmøter med opptak og automatiske referater.', ar: 'اجتماعات مسجلة ومحاضر تلقائية.' },
      { fr: ['Visio intégrée', 'Enregistrement des réunions', 'PV automatiques', 'Actions assignées après réunion'], en: ['Built-in video', 'Meeting recording', 'Automatic minutes', 'Follow-up actions assigned'], no: ['Innebygd video', 'Møteopptak', 'Automatiske referater', 'Oppgaver fordeles etter møtet'], ar: ['مكالمات فيديو مدمجة', 'تسجيل الاجتماعات', 'محاضر تلقائية', 'إسناد المهام بعد الاجتماع'] }),
    m('communication', { fr: 'Chat & email', en: 'Chat & email', no: 'Chat & e-post', ar: 'الدردشة والبريد' },
      { fr: 'Toute la communication interne au même endroit.', en: 'All internal communication in one place.', no: 'All intern kommunikasjon på ett sted.', ar: 'كل التواصل الداخلي في مكان واحد.' },
      { fr: ['Chat par canal et en privé', 'Email intégré', 'Annonces à toute l’entreprise', 'Live interne'], en: ['Channel and private chat', 'Built-in email', 'Company-wide announcements', 'Internal live'], no: ['Kanal- og privatchat', 'Innebygd e-post', 'Kunngjøringer til alle', 'Intern live'], ar: ['دردشة جماعية وخاصة', 'بريد مدمج', 'إعلانات لكل المؤسسة', 'بث داخلي مباشر'] }),
  ] },
  { id: 'organisation', icon: FolderKanban, name: { fr: 'Organisation', en: 'Organisation', no: 'Organisering', ar: 'التنظيم' }, mods: [
    m('projets', { fr: 'Projets', en: 'Projects', no: 'Prosjekter', ar: 'المشاريع' },
      { fr: 'Planifiez, suivez et livrez vos projets.', en: 'Plan, track and deliver your projects.', no: 'Planlegg, følg og lever prosjektene.', ar: 'خططوا وتابعوا وأنجزوا مشاريعكم.' },
      { fr: ['Tableaux et étapes', 'Suivi de l’avancement', 'Espace projet client', 'Documents liés'], en: ['Boards and milestones', 'Progress tracking', 'Client project space', 'Linked documents'], no: ['Tavler og milepæler', 'Fremdriftsoppfølging', 'Kundeprosjektrom', 'Koblede dokumenter'], ar: ['لوحات ومراحل', 'تتبع التقدم', 'فضاء مشروع العميل', 'وثائق مرتبطة'] }),
    m('taches-agenda', { fr: 'Tâches & agenda', en: 'Tasks & calendar', no: 'Oppgaver & kalender', ar: 'المهام والتقويم' },
      { fr: 'Chacun sait quoi faire et quand.', en: 'Everyone knows what to do and when.', no: 'Alle vet hva som skal gjøres og når.', ar: 'كل شخص يعرف ما يفعل ومتى.' },
      { fr: ['Tâches assignées', 'Calendrier partagé', 'Rappels automatiques', 'Priorités claires'], en: ['Assigned tasks', 'Shared calendar', 'Automatic reminders', 'Clear priorities'], no: ['Tildelte oppgaver', 'Delt kalender', 'Automatiske påminnelser', 'Tydelige prioriteringer'], ar: ['مهام مسندة', 'تقويم مشترك', 'تذكيرات تلقائية', 'أولويات واضحة'] }),
    m('prise-de-rendez-vous', { fr: 'Prise de rendez-vous', en: 'Online booking', no: 'Timebestilling', ar: 'حجز المواعيد' },
      { fr: 'Vos clients réservent en ligne, 24h/24.', en: 'Your clients book online, 24/7.', no: 'Kundene bestiller på nett, døgnet rundt.', ar: 'عملاؤكم يحجزون عبر الإنترنت على مدار الساعة.' },
      { fr: ['Page de réservation', 'Services et créneaux', 'Confirmations et rappels', 'Agenda des conseillers'], en: ['Booking page', 'Services and slots', 'Confirmations and reminders', 'Advisor calendars'], no: ['Bestillingsside', 'Tjenester og tider', 'Bekreftelser og påminnelser', 'Rådgiverkalendere'], ar: ['صفحة حجز', 'خدمات ومواعيد', 'تأكيدات وتذكيرات', 'أجندة المستشارين'] }),
  ] },
  { id: 'rh-paie', icon: UserCog, name: { fr: 'RH & Paie', en: 'HR & Payroll', no: 'HR & lønn', ar: 'الموارد البشرية والأجور' }, mods: [
    m('recrutement', { fr: 'Recrutement', en: 'Recruitment', no: 'Rekruttering', ar: 'التوظيف' },
      { fr: 'De l’offre au contrat signé.', en: 'From job post to signed contract.', no: 'Fra utlysning til signert kontrakt.', ar: 'من عرض العمل إلى العقد الموقّع.' },
      { fr: ['Offres et candidatures', 'Planification des entretiens', 'Évaluation des candidats', 'Contrats générés automatiquement'], en: ['Job posts and applications', 'Interview scheduling', 'Candidate evaluation', 'Auto-generated contracts'], no: ['Utlysninger og søknader', 'Oppsett av intervjuer', 'Vurdering av kandidater', 'Automatiske kontrakter'], ar: ['العروض والطلبات', 'برمجة المقابلات', 'تقييم المرشحين', 'عقود تُنشأ تلقائيًا'] }),
    m('paie', { fr: 'Paie', en: 'Payroll', no: 'Lønn', ar: 'الأجور' },
      { fr: 'Tout pour lancer la paie, avec une vue complète.', en: 'Everything to run payroll, with a full overview.', no: 'Alt for å kjøre lønn, med full oversikt.', ar: 'كل ما يلزم لصرف الأجور برؤية كاملة.' },
      { fr: ['Salaires et variables', 'Primes et heures intégrées', 'Contrôle avant validation', 'Bulletins envoyés automatiquement'], en: ['Salaries and variables', 'Bonuses and hours included', 'Review before approval', 'Payslips sent automatically'], no: ['Lønn og variabler', 'Bonus og timer inkludert', 'Kontroll før godkjenning', 'Lønnsslipper sendes automatisk'], ar: ['الرواتب والمتغيرات', 'دمج المكافآت والساعات', 'مراجعة قبل المصادقة', 'إرسال كشوف الأجور تلقائيًا'] }),
    m('performance', { fr: 'Performance & primes', en: 'Performance & bonuses', no: 'Oppfølging & bonus', ar: 'الأداء والمكافآت' },
      { fr: 'Objectifs, entretiens et primes reliés à la paie.', en: 'Goals, reviews and bonuses linked to payroll.', no: 'Mål, samtaler og bonus koblet til lønn.', ar: 'أهداف وتقييمات ومكافآت مرتبطة بالأجور.' },
      { fr: ['Objectifs individuels et d’équipe', 'Entretiens annuels', 'Primes de performance', 'Report direct en paie'], en: ['Individual and team goals', 'Annual reviews', 'Performance bonuses', 'Sent straight to payroll'], no: ['Individuelle mål og teammål', 'Medarbeidersamtaler', 'Prestasjonsbonus', 'Rett inn i lønn'], ar: ['أهداف فردية وجماعية', 'تقييمات سنوية', 'مكافآت الأداء', 'تحويل مباشر للأجور'] }),
    m('conges-absences', { fr: 'Congés & absences', en: 'Leave & absence', no: 'Ferie & fravær', ar: 'العطل والغياب' },
      { fr: 'Demande, approbation et paie : de bout en bout.', en: 'Request, approval and payroll: end to end.', no: 'Søknad, godkjenning og lønn: fra start til slutt.', ar: 'طلب وموافقة وأجر: من البداية إلى النهاية.' },
      { fr: ['Demande par le collaborateur', 'Approbation par le manager', 'Soldes mis à jour', 'Absences enregistrées automatiquement'], en: ['Employee request', 'Manager approval', 'Balances updated', 'Absences recorded automatically'], no: ['Søknad fra ansatt', 'Godkjenning av leder', 'Saldo oppdateres', 'Fravær registreres automatisk'], ar: ['طلب من الموظف', 'موافقة المدير', 'تحديث الرصيد', 'تسجيل الغياب تلقائيًا'] }),
    m('pointage', { fr: 'Pointage', en: 'Time tracking', no: 'Stempling', ar: 'تسجيل الحضور' },
      { fr: 'Entrées, sorties et heures sup. reliées à la paie.', en: 'Clock-in, clock-out and overtime linked to payroll.', no: 'Inn, ut og overtid koblet til lønn.', ar: 'الدخول والخروج والساعات الإضافية مرتبطة بالأجور.' },
      { fr: ['Pointage mobile', 'Présences en direct', 'Heures supplémentaires', 'Transmission à la paie'], en: ['Mobile clock-in', 'Live attendance', 'Overtime', 'Sent to payroll'], no: ['Stempling på mobil', 'Oppmøte i sanntid', 'Overtid', 'Sendes til lønn'], ar: ['تسجيل عبر الهاتف', 'الحضور مباشرة', 'الساعات الإضافية', 'إرسال إلى الأجور'] }),
  ] },
  { id: 'ventes-clients', icon: ShoppingBag, name: { fr: 'Ventes & clients', en: 'Sales & clients', no: 'Salg & kunder', ar: 'المبيعات والعملاء' }, mods: [
    m('crm', { fr: 'CRM & relation client', en: 'CRM & client relations', no: 'CRM & kunderelasjoner', ar: 'إدارة علاقات العملاء' },
      { fr: 'Chaque client, son historique et ses opportunités.', en: 'Every client, their history and opportunities.', no: 'Hver kunde, historikk og muligheter.', ar: 'كل عميل وسجله وفرصه.' },
      { fr: ['Fiche client complète', 'Pipeline commercial', 'Emails et réunions liés', 'Devis et opportunités'], en: ['Full client card', 'Sales pipeline', 'Linked emails and meetings', 'Quotes and opportunities'], no: ['Komplett kundekort', 'Salgspipeline', 'Koblede e-poster og møter', 'Tilbud og muligheter'], ar: ['بطاقة عميل كاملة', 'مسار المبيعات', 'رسائل واجتماعات مرتبطة', 'عروض أسعار وفرص'] }),
    m('boutique', { fr: 'Boutique en ligne', en: 'Online shop', no: 'Nettbutikk', ar: 'متجر إلكتروني' },
      { fr: 'Vendez vos produits en quelques étapes.', en: 'Sell your products in a few steps.', no: 'Selg produktene dine i noen få steg.', ar: 'بيعوا منتجاتكم في خطوات قليلة.' },
      { fr: ['Catalogue produits', 'Lien de boutique à partager', 'Commandes et stock', 'Suivi des livraisons'], en: ['Product catalogue', 'Shareable shop link', 'Orders and stock', 'Delivery tracking'], no: ['Produktkatalog', 'Butikklenke å dele', 'Ordre og lager', 'Leveringsoppfølging'], ar: ['كتالوج المنتجات', 'رابط متجر للمشاركة', 'الطلبات والمخزون', 'تتبع التوصيل'] }),
    m('evenements-live', { fr: 'Événements & live', en: 'Events & live', no: 'Arrangementer & live', ar: 'الفعاليات والبث' },
      { fr: 'Organisez des événements et diffusez en direct.', en: 'Run events and stream live.', no: 'Arranger eventer og send direkte.', ar: 'نظموا فعاليات وبثوا مباشرة.' },
      { fr: ['Inscriptions en ligne', 'Diffusion en direct', 'Billetterie', 'Replays'], en: ['Online registration', 'Live streaming', 'Ticketing', 'Replays'], no: ['Påmelding på nett', 'Direktesending', 'Billettsalg', 'Opptak'], ar: ['تسجيل عبر الإنترنت', 'بث مباشر', 'تذاكر', 'إعادة المشاهدة'] }),
  ] },
  { id: 'pilotage', icon: BarChart3, name: { fr: 'Pilotage', en: 'Management', no: 'Styring', ar: 'القيادة' }, mods: [
    m('tableaux-de-bord', { fr: 'Tableaux de bord', en: 'Dashboards', no: 'Dashbord', ar: 'لوحات القيادة' },
      { fr: 'Une vue claire de l’activité, pour la direction.', en: 'A clear view of activity, for management.', no: 'Tydelig oversikt over driften, for ledelsen.', ar: 'رؤية واضحة للنشاط لفائدة الإدارة.' },
      { fr: ['Indicateurs clés en direct', 'Leads, ventes et réunions', 'Avancement des projets', 'Transparence sur les équipes'], en: ['Live key figures', 'Leads, sales and meetings', 'Project progress', 'Team transparency'], no: ['Nøkkeltall i sanntid', 'Leads, salg og møter', 'Prosjektfremdrift', 'Åpenhet om teamene'], ar: ['مؤشرات مباشرة', 'العملاء المحتملون والمبيعات والاجتماعات', 'تقدم المشاريع', 'شفافية حول الفرق'] }),
    m('approbations', { fr: 'Approbations', en: 'Approvals', no: 'Godkjenninger', ar: 'الموافقات' },
      { fr: 'Devis, congés et dépenses validés en un clic.', en: 'Quotes, leave and expenses approved in one click.', no: 'Tilbud, ferie og utlegg godkjent med ett klikk.', ar: 'عروض وعطل ومصاريف بنقرة واحدة.' },
      { fr: ['Circuits de validation', 'Notifications', 'Historique des décisions', 'Sur mobile'], en: ['Approval flows', 'Notifications', 'Decision history', 'On mobile'], no: ['Godkjenningsflyter', 'Varsler', 'Beslutningshistorikk', 'På mobil'], ar: ['مسارات المصادقة', 'إشعارات', 'سجل القرارات', 'على الهاتف'] }),
    m('finance', { fr: 'Finance & dépenses', en: 'Finance & expenses', no: 'Økonomi & utlegg', ar: 'المالية والمصاريف' },
      { fr: 'Suivez factures, notes de frais et budgets.', en: 'Track invoices, expenses and budgets.', no: 'Følg fakturaer, utlegg og budsjetter.', ar: 'تابعوا الفواتير والمصاريف والميزانيات.' },
      { fr: ['Factures', 'Notes de frais', 'Budgets par projet', 'Exports comptables'], en: ['Invoices', 'Expense claims', 'Budgets per project', 'Accounting exports'], no: ['Fakturaer', 'Utleggsrefusjon', 'Budsjett per prosjekt', 'Regnskapseksport'], ar: ['الفواتير', 'مذكرات المصاريف', 'ميزانيات لكل مشروع', 'تصدير محاسبي'] }),
  ] },
  { id: 'formation-ia', icon: GraduationCap, name: { fr: 'Formation & IA', en: 'Training & AI', no: 'Opplæring & KI', ar: 'التكوين والذكاء الاصطناعي' }, mods: [
    m('formation', { fr: 'Formation', en: 'Training', no: 'Opplæring', ar: 'التكوين' },
      { fr: 'Développez les compétences de vos équipes.', en: 'Grow your teams’ skills.', no: 'Utvikle teamets kompetanse.', ar: 'طوروا كفاءات فرقكم.' },
      { fr: ['Catalogue de cours', 'Suivi de progression', 'Certificats', 'Parcours d’intégration'], en: ['Course catalogue', 'Progress tracking', 'Certificates', 'Onboarding paths'], no: ['Kurskatalog', 'Fremdriftsoppfølging', 'Sertifikater', 'Introduksjonsløp'], ar: ['كتالوج الدورات', 'تتبع التقدم', 'شهادات', 'مسارات الإدماج'] }),
    m('synia', { fr: "Syn'IA", en: "Syn'IA", no: "Syn'IA", ar: "Syn'IA" },
      { fr: 'L’assistant IA intégré à votre travail.', en: 'The AI assistant built into your work.', no: 'KI-assistenten bygget inn i arbeidet.', ar: 'المساعد الذكي المدمج في عملكم.' },
      { fr: ['Résumés de réunions', 'Rédaction d’emails et documents', 'Réponses sur vos données', 'Suggestions d’actions'], en: ['Meeting summaries', 'Drafting emails and documents', 'Answers from your data', 'Action suggestions'], no: ['Møteoppsummeringer', 'Skriving av e-post og dokumenter', 'Svar fra egne data', 'Forslag til oppgaver'], ar: ['ملخصات الاجتماعات', 'صياغة الرسائل والوثائق', 'إجابات من بياناتكم', 'اقتراح إجراءات'] }),
  ] },
];

export const findModule = (slug: string) => {
  for (const c of CATEGORIES) { const mod = c.mods.find((x) => x.slug === slug); if (mod) return { cat: c, mod }; }
  return null;
};

export const UI: Record<Lang, { o: string; t: string; i: string; more: string; back: string; features: string; related: string; demo: string; demoMsg: string }> = {
  fr: { o: 'La plateforme', t: 'Tout ce dont votre entreprise a besoin.', i: 'Découvrez chaque partie de la plateforme, classée par domaine.', more: 'En savoir plus', back: 'Retour', features: 'Ce qui est inclus', related: 'Dans la même catégorie', demo: 'Demander une démo', demoMsg: 'Bonjour, je souhaite une démo de Synclasse Business – module : ' },
  en: { o: 'The platform', t: 'Everything your business needs.', i: 'Explore every part of the platform, grouped by area.', more: 'Learn more', back: 'Back', features: 'What’s included', related: 'In the same category', demo: 'Request a demo', demoMsg: 'Hello, I would like a demo of Synclasse Business – module: ' },
  no: { o: 'Plattformen', t: 'Alt bedriften din trenger.', i: 'Utforsk hver del av plattformen, sortert etter område.', more: 'Les mer', back: 'Tilbake', features: 'Dette er inkludert', related: 'I samme kategori', demo: 'Be om demo', demoMsg: 'Hei, jeg ønsker en demo av Synclasse Business – modul: ' },
  ar: { o: 'المنصة', t: 'كل ما تحتاجه مؤسستكم.', i: 'اكتشفوا كل جزء من المنصة مصنفًا حسب المجال.', more: 'اعرف المزيد', back: 'رجوع', features: 'ما يتضمنه', related: 'في نفس الفئة', demo: 'اطلب عرضًا', demoMsg: 'مرحبًا، أرغب في عرض لـ Synclasse Business – وحدة: ' },
};
