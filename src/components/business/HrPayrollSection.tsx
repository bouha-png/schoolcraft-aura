import { Link } from 'react-router-dom';
import ExploreGroup from './ExploreGroup';
import { Users, UserPlus, Wallet, TrendingUp, CalendarCheck, Fingerprint, CheckCircle2, ArrowRight } from 'lucide-react';

type Tab = { n: string; h: string; d: string; steps: string[]; rows: [string, string, string][] };
type Copy = { o: string; t: string; i: string; save: string; tabs: Tab[] };

const T: Record<string, Copy> = {
  fr: {
    o: 'RH & Paie', t: 'Là où vos équipes gagnent vraiment du temps.', i: 'Du recrutement à la paie, chaque étape RH est reliée et automatisée, de bout en bout.', save: 'Heures gagnées chaque mois',
    tabs: [
      { n: 'Recrutement', h: 'Un processus de recrutement complet', d: 'Publiez l’offre, suivez les candidats, planifiez les entretiens et générez le contrat en un clic.', steps: ['Offre publiée', 'Candidatures', 'Entretiens', 'Contrat'], rows: [['Leila M. · Commerciale', 'Entretien jeu. 10:00', 'Planifié'], ['Omar T. · Comptable', 'Contrat CDI généré', 'À signer'], ['Nadia R. · Chef de projet', '2e entretien', 'En cours']] },
      { n: 'Paie', h: 'Tout pour lancer la paie', d: 'Salaires, primes, absences et heures remontent automatiquement. Vue complète avant validation.', steps: ['Pointage', 'Variables', 'Contrôle', 'Bulletins'], rows: [['Masse salariale · Sept.', '42 collaborateurs', 'Prête'], ['Primes intégrées', '6 primes', 'Validées'], ['Bulletins de paie', 'Envoi automatique', 'Planifié']] },
      { n: 'Performance & primes', h: 'Suivi des collaborateurs', d: 'Objectifs, entretiens annuels et primes liées à la performance, directement reportées en paie.', steps: ['Objectifs', 'Évaluation', 'Prime', 'Paie'], rows: [['Youssef A. · Objectifs T3', '112 %', 'Prime'], ['Salma I. · Entretien annuel', 'Jeu. 14:00', 'Planifié'], ['Équipe commerciale', 'Prime trimestrielle', 'En paie']] },
      { n: 'Absences & congés', h: 'Des congés sans échanges d’e-mails', d: 'Le collaborateur demande, le manager approuve, le solde et la paie se mettent à jour. Absences enregistrées automatiquement.', steps: ['Demande', 'Manager', 'Approbation', 'Paie'], rows: [['Karim B. · Congé', '12–16 oct.', 'Approuvé'], ['Youssef A. · Congé', '3 jours', 'En attente'], ['Absence maladie', 'Enregistrée auto.', 'Synchronisée']] },
      { n: 'Pointage', h: 'Pointage relié à la paie', d: 'Entrées, sorties et heures supplémentaires sont pointées et transmises directement à la paie.', steps: ['Entrée', 'Sortie', 'Heures sup.', 'Paie'], rows: [['Aujourd’hui · Présents', '38 / 42', 'En direct'], ['Heures supplémentaires', '26 h ce mois', 'En paie'], ['Retards', '2 signalés', 'Suivis']] },
    ],
  },
  en: {
    o: 'HR & Payroll', t: 'Where your teams really save time.', i: 'From hiring to payroll, every HR step is connected and automated, end to end.', save: 'Hours saved every month',
    tabs: [
      { n: 'Recruitment', h: 'A complete recruitment process', d: 'Post the job, track candidates, schedule interviews and generate the contract in one click.', steps: ['Job posted', 'Applications', 'Interviews', 'Contract'], rows: [['Leila M. · Sales', 'Interview Thu 10:00', 'Scheduled'], ['Omar T. · Accountant', 'Contract generated', 'To sign'], ['Nadia R. · Project lead', '2nd interview', 'In progress']] },
      { n: 'Payroll', h: 'Everything to run payroll', d: 'Salaries, bonuses, absences and hours flow in automatically. Full overview before approval.', steps: ['Time', 'Variables', 'Review', 'Payslips'], rows: [['Payroll · Sept.', '42 employees', 'Ready'], ['Bonuses included', '6 bonuses', 'Approved'], ['Payslips', 'Automatic sending', 'Scheduled']] },
      { n: 'Performance & bonuses', h: 'Employee follow-up', d: 'Goals, annual reviews and performance bonuses, carried straight into payroll.', steps: ['Goals', 'Review', 'Bonus', 'Payroll'], rows: [['Youssef A. · Q3 goals', '112%', 'Bonus'], ['Salma I. · Annual review', 'Thu 14:00', 'Scheduled'], ['Sales team', 'Quarterly bonus', 'In payroll']] },
      { n: 'Absence & leave', h: 'Leave without email chains', d: 'The employee requests, the manager approves, balances and payroll update. Absences are recorded automatically.', steps: ['Request', 'Manager', 'Approval', 'Payroll'], rows: [['Karim B. · Leave', 'Oct 12–16', 'Approved'], ['Youssef A. · Leave', '3 days', 'Pending'], ['Sick leave', 'Auto-recorded', 'Synced']] },
      { n: 'Time tracking', h: 'Clock-in linked to payroll', d: 'Check-ins, check-outs and overtime are tracked and sent directly to payroll.', steps: ['In', 'Out', 'Overtime', 'Payroll'], rows: [['Today · Present', '38 / 42', 'Live'], ['Overtime', '26 h this month', 'In payroll'], ['Late arrivals', '2 flagged', 'Followed up']] },
    ],
  },
  no: {
    o: 'HR & lønn', t: 'Der teamene dine virkelig sparer tid.', i: 'Fra rekruttering til lønn er hvert HR-steg koblet sammen og automatisert, fra start til slutt.', save: 'Timer spart hver måned',
    tabs: [
      { n: 'Rekruttering', h: 'En komplett rekrutteringsprosess', d: 'Publiser stillingen, følg kandidatene, sett opp intervjuer og lag kontrakten med ett klikk.', steps: ['Utlyst', 'Søknader', 'Intervjuer', 'Kontrakt'], rows: [['Leila M. · Salg', 'Intervju tor. 10:00', 'Planlagt'], ['Omar T. · Regnskap', 'Kontrakt laget', 'Til signering'], ['Nadia R. · Prosjektleder', '2. intervju', 'Pågår']] },
      { n: 'Lønn', h: 'Alt du trenger for å kjøre lønn', d: 'Lønn, bonuser, fravær og timer hentes automatisk. Full oversikt før godkjenning.', steps: ['Stempling', 'Variabler', 'Kontroll', 'Lønnsslipper'], rows: [['Lønn · sept.', '42 ansatte', 'Klar'], ['Bonuser inkludert', '6 bonuser', 'Godkjent'], ['Lønnsslipper', 'Sendes automatisk', 'Planlagt']] },
      { n: 'Oppfølging & bonus', h: 'Oppfølging av ansatte', d: 'Mål, medarbeidersamtaler og prestasjonsbonus som går rett inn i lønn.', steps: ['Mål', 'Samtale', 'Bonus', 'Lønn'], rows: [['Youssef A. · Mål Q3', '112 %', 'Bonus'], ['Salma I. · Medarbeidersamtale', 'Tor. 14:00', 'Planlagt'], ['Salgsteamet', 'Kvartalsbonus', 'I lønn']] },
      { n: 'Fravær & ferie', h: 'Ferie uten e-posttråder', d: 'Den ansatte søker, lederen godkjenner, saldo og lønn oppdateres. Fravær registreres automatisk.', steps: ['Søknad', 'Leder', 'Godkjent', 'Lønn'], rows: [['Karim B. · Ferie', '12.–16. okt.', 'Godkjent'], ['Youssef A. · Ferie', '3 dager', 'Venter'], ['Sykefravær', 'Registrert auto.', 'Synkronisert']] },
      { n: 'Stempling', h: 'Stempling koblet til lønn', d: 'Inn, ut og overtid registreres og sendes rett til lønn.', steps: ['Inn', 'Ut', 'Overtid', 'Lønn'], rows: [['I dag · Til stede', '38 / 42', 'Live'], ['Overtid', '26 t denne måneden', 'I lønn'], ['Forsinkelser', '2 meldt', 'Fulgt opp']] },
    ],
  },
  ar: {
    o: 'الموارد البشرية والأجور', t: 'حيث توفر فرقكم الوقت حقًا.', i: 'من التوظيف إلى الأجور، كل خطوة مترابطة ومؤتمتة من البداية إلى النهاية.', save: 'ساعات موفرة كل شهر',
    tabs: [
      { n: 'التوظيف', h: 'مسار توظيف متكامل', d: 'انشروا العرض، تابعوا المرشحين، نظموا المقابلات وأنشئوا العقد بنقرة واحدة.', steps: ['نشر العرض', 'الطلبات', 'المقابلات', 'العقد'], rows: [['ليلى م. · مبيعات', 'مقابلة الخميس 10:00', 'مبرمجة'], ['عمر ت. · محاسب', 'تم إنشاء العقد', 'للتوقيع'], ['نادية ر. · مديرة مشروع', 'مقابلة ثانية', 'جارية']] },
      { n: 'الأجور', h: 'كل ما تحتاجونه لصرف الأجور', d: 'الرواتب والمكافآت والغيابات والساعات تُدمج تلقائيًا، مع رؤية كاملة قبل المصادقة.', steps: ['الحضور', 'المتغيرات', 'المراجعة', 'كشوف الأجور'], rows: [['كتلة الأجور · شتنبر', '42 موظفًا', 'جاهزة'], ['المكافآت', '6 مكافآت', 'مصادق عليها'], ['كشوف الأجور', 'إرسال تلقائي', 'مبرمج']] },
      { n: 'الأداء والمكافآت', h: 'متابعة الموظفين', d: 'الأهداف والتقييمات السنوية ومكافآت الأداء تنتقل مباشرة إلى الأجور.', steps: ['الأهداف', 'التقييم', 'المكافأة', 'الأجور'], rows: [['يوسف أ. · أهداف الربع 3', '112%', 'مكافأة'], ['سلمى إ. · تقييم سنوي', 'الخميس 14:00', 'مبرمج'], ['فريق المبيعات', 'مكافأة فصلية', 'في الأجور']] },
      { n: 'الغياب والعطل', h: 'عطل بدون رسائل متبادلة', d: 'الموظف يطلب، المدير يوافق، ويُحدَّث الرصيد والأجر. الغيابات تُسجَّل تلقائيًا.', steps: ['الطلب', 'المدير', 'الموافقة', 'الأجور'], rows: [['كريم ب. · عطلة', '12–16 أكتوبر', 'موافق عليها'], ['يوسف أ. · عطلة', '3 أيام', 'في الانتظار'], ['غياب مرضي', 'مسجل تلقائيًا', 'متزامن']] },
      { n: 'تسجيل الحضور', h: 'حضور مرتبط بالأجور', d: 'الدخول والخروج والساعات الإضافية تُسجَّل وتُرسل مباشرة إلى الأجور.', steps: ['دخول', 'خروج', 'ساعات إضافية', 'الأجور'], rows: [['اليوم · الحاضرون', '38 / 42', 'مباشر'], ['ساعات إضافية', '26 س هذا الشهر', 'في الأجور'], ['تأخرات', '2', 'متابعة']] },
    ],
  },
};
const icons = [UserPlus, Wallet, TrendingUp, CalendarCheck, Fingerprint];
const slugs = ['recrutement', 'paie', 'performance', 'conges-absences', 'pointage'];
const more: Record<string, string> = { fr: 'En savoir plus', en: 'Learn more', no: 'Les mer', ar: 'اعرف المزيد' };

export default function HrPayrollSection({ lang }: { lang: string }) {
  const c = T[lang] ?? T.fr;
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute -top-20 start-1/3 w-[500px] h-[500px] rounded-full bg-[#772F9F]/20 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="text-center max-w-[760px] mx-auto">
          <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[#A76CFF]"><Users className="w-4 h-4" />{c.o}</span>
          <h2 className="mt-4 font-display text-[30px] md:text-[44px] font-bold leading-tight text-white">{c.t}</h2>
          <p className="mt-4 text-[16px] text-[#B8B5C8]">{c.i}</p>
          <ExploreGroup id="rh-paie" lang={lang} center />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {c.tabs.map((t, k) => {
            const TI = icons[k];
            return (
              <Link key={t.n} to={`/business/${slugs[k]}`} className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-5 hover:border-[#A76CFF]/45 hover:-translate-y-1 transition">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#772F9F] to-[#A76CFF]"><TI className="w-5 h-5 text-white" /></span>
                <p className="mt-4 font-semibold text-[15px] text-white">{t.n}</p>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-[#B8B5C8] flex-1">{t.d}</p>
                <div className="mt-4 flex items-center gap-1.5 text-[11px] text-[#8D89A0]"><CheckCircle2 className="w-3.5 h-3.5 text-[#6EE7A0]" />{t.rows[0][0].split(' · ')[0]} · {t.rows[0][2]}</div>
                <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#C9A8FF]">{more[lang] ?? more.fr}<ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180" /></span>
              </Link>
            );
          })}
        </div>
        <div className="mt-6 mx-auto max-w-[420px] flex items-center justify-between rounded-xl border border-[#3FA9F5]/30 bg-[#3FA9F5]/10 px-4 py-3">
          <span className="text-[12.5px] text-[#CDEBFF]">{c.save}</span>
          <span className="font-display text-[20px] font-bold text-white">+30 h</span>
        </div>
      </div>
    </section>
  );
}
