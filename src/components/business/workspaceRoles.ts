type Role = { tiles: string[]; activity: string[] };
type L = 'fr' | 'en' | 'no' | 'ar';

export const WORKSPACE_ROLES: Record<L, Role[]> = {
  fr: [
    { tiles: ['Tableau de bord', 'Objectifs', 'Budgets', 'Rapports', 'Comité de direction', 'Décisions', 'Indicateurs', 'Documents stratégiques'], activity: ['Rapport mensuel publié', 'Comité planifié jeudi', 'Budget T4 validé'] },
    { tiles: ['Leads', 'Pipeline', 'Devis', 'Rendez-vous clients', 'Contrats', 'Objectifs ventes', 'Relances', 'Catalogue'], activity: ['Nouveau lead Casablanca', 'Devis envoyé à Atlas Conseil', 'Vente conclue'] },
    { tiles: ['Planning', 'Tâches', 'Jalons', 'Équipe', 'Fichiers', 'Réunions', 'Risques', 'Avancement'], activity: ['Jalon 2 atteint', 'Tâche assignée à Youssef', 'Réunion de suivi planifiée'] },
    { tiles: ['Collaborateurs', 'Recrutement', 'Congés', 'Onboarding', 'Formations', 'Évaluations', 'Contrats', 'Documents RH'], activity: ['Nouvelle candidature reçue', 'Congé approuvé', 'Formation terminée'] },
    { tiles: ['Client', 'Livrables', 'Validation', 'Discussion', 'Fichiers partagés', 'Planning', 'Factures', 'Historique'], activity: ['Livrable validé par le client', 'Nouveau message client', 'Facture envoyée'] },
  ],
  en: [
    { tiles: ['Dashboard', 'Goals', 'Budgets', 'Reports', 'Board meetings', 'Decisions', 'KPIs', 'Strategy docs'], activity: ['Monthly report published', 'Board meeting Thursday', 'Q4 budget approved'] },
    { tiles: ['Leads', 'Pipeline', 'Quotes', 'Client meetings', 'Contracts', 'Sales targets', 'Follow-ups', 'Catalogue'], activity: ['New lead in Casablanca', 'Quote sent to Atlas Conseil', 'Deal closed'] },
    { tiles: ['Planning', 'Tasks', 'Milestones', 'Team', 'Files', 'Meetings', 'Risks', 'Progress'], activity: ['Milestone 2 reached', 'Task assigned to Youssef', 'Follow-up meeting scheduled'] },
    { tiles: ['Employees', 'Recruitment', 'Leave', 'Onboarding', 'Training', 'Reviews', 'Contracts', 'HR documents'], activity: ['New application received', 'Leave approved', 'Training completed'] },
    { tiles: ['Client', 'Deliverables', 'Approval', 'Discussion', 'Shared files', 'Planning', 'Invoices', 'History'], activity: ['Deliverable approved by client', 'New client message', 'Invoice sent'] },
  ],
  no: [
    { tiles: ['Dashbord', 'Mål', 'Budsjetter', 'Rapporter', 'Ledermøter', 'Beslutninger', 'Nøkkeltall', 'Strategidokumenter'], activity: ['Månedsrapport publisert', 'Ledermøte torsdag', 'Budsjett Q4 godkjent'] },
    { tiles: ['Leads', 'Pipeline', 'Tilbud', 'Kundemøter', 'Kontrakter', 'Salgsmål', 'Oppfølging', 'Katalog'], activity: ['Ny lead i Casablanca', 'Tilbud sendt til Atlas Conseil', 'Salg lukket'] },
    { tiles: ['Planlegging', 'Oppgaver', 'Milepæler', 'Team', 'Filer', 'Møter', 'Risiko', 'Fremdrift'], activity: ['Milepæl 2 nådd', 'Oppgave tildelt Youssef', 'Oppfølgingsmøte planlagt'] },
    { tiles: ['Ansatte', 'Rekruttering', 'Fravær', 'Onboarding', 'Opplæring', 'Medarbeidersamtaler', 'Kontrakter', 'HR-dokumenter'], activity: ['Ny søknad mottatt', 'Ferie godkjent', 'Kurs fullført'] },
    { tiles: ['Kunde', 'Leveranser', 'Godkjenning', 'Diskusjon', 'Delte filer', 'Plan', 'Fakturaer', 'Historikk'], activity: ['Leveranse godkjent av kunde', 'Ny kundemelding', 'Faktura sendt'] },
  ],
  ar: [
    { tiles: ['لوحة القيادة', 'الأهداف', 'الميزانيات', 'التقارير', 'اجتماعات الإدارة', 'القرارات', 'المؤشرات', 'الوثائق الاستراتيجية'], activity: ['نشر التقرير الشهري', 'اجتماع الإدارة يوم الخميس', 'اعتماد ميزانية الربع الرابع'] },
    { tiles: ['العملاء المحتملون', 'مسار المبيعات', 'عروض الأسعار', 'مواعيد العملاء', 'العقود', 'أهداف المبيعات', 'المتابعات', 'الكتالوج'], activity: ['عميل محتمل جديد في الدار البيضاء', 'إرسال عرض إلى Atlas Conseil', 'إتمام صفقة'] },
    { tiles: ['التخطيط', 'المهام', 'المراحل', 'الفريق', 'الملفات', 'الاجتماعات', 'المخاطر', 'التقدم'], activity: ['بلوغ المرحلة 2', 'إسناد مهمة إلى يوسف', 'جدولة اجتماع متابعة'] },
    { tiles: ['الموظفون', 'التوظيف', 'الإجازات', 'الإدماج', 'التكوين', 'التقييمات', 'العقود', 'وثائق الموارد البشرية'], activity: ['طلب توظيف جديد', 'الموافقة على إجازة', 'إتمام تكوين'] },
    { tiles: ['العميل', 'المخرجات', 'المصادقة', 'النقاش', 'ملفات مشتركة', 'التخطيط', 'الفواتير', 'السجل'], activity: ['مصادقة العميل على مخرج', 'رسالة جديدة من العميل', 'إرسال فاتورة'] },
  ],
};
