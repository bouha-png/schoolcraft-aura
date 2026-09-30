import { useState } from 'react';
import { Users, UserPlus, Wallet, TrendingUp, CalendarCheck, Fingerprint, CheckCircle2, Clock, FileSignature, ArrowRight } from 'lucide-react';

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
const rowIcons = [FileSignature, CheckCircle2, Clock];

export default function HrPayrollSection({ lang }: { lang: string }) {
  const c = T[lang] ?? T.fr;
  const [a, setA] = useState(0);
  const tab = c.tabs[a];
  const I = icons[a];
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute -top-20 start-1/3 w-[500px] h-[500px] rounded-full bg-[#772F9F]/20 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-[1180px] px-5 md:px-8">
        <div className="text-center max-w-[760px] mx-auto">
          <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[#A76CFF]"><Users className="w-4 h-4" />{c.o}</span>
          <h2 className="mt-4 font-display text-[30px] md:text-[44px] font-bold leading-tight text-white">{c.t}</h2>
          <p className="mt-4 text-[16px] text-[#B8B5C8]">{c.i}</p>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 md:justify-center snap-x">
          {c.tabs.map((t, k) => {
            const TI = icons[k];
            return (
              <button key={t.n} onClick={() => setA(k)} className={`snap-start shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold border transition ${a === k ? 'bg-gradient-to-r from-[#772F9F] to-[#A76CFF] border-transparent text-white shadow-[0_8px_30px_-8px_rgba(167,108,255,0.6)]' : 'border-white/12 bg-white/[0.03] text-[#CFCBE0] hover:bg-white/[0.07]'}`}>
                <TI className="w-4 h-4" />{t.n}
              </button>
            );
          })}
        </div>

        <div key={a} className="mt-8 grid lg:grid-cols-2 gap-8 items-center animate-fade-in">
          <div>
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#772F9F] to-[#A76CFF]"><I className="w-6 h-6 text-white" /></span>
            <h3 className="mt-5 font-display text-[24px] md:text-[30px] font-bold text-white leading-tight">{tab.h}</h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#B8B5C8]">{tab.d}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {tab.steps.map((s, k) => (
                <span key={s} className="inline-flex items-center gap-2">
                  <span className="rounded-full border border-[#A76CFF]/40 bg-[#A76CFF]/10 px-3 py-1.5 text-[12px] font-medium text-[#E0CCFF]">{k + 1}. {s}</span>
                  {k < tab.steps.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-[#8D89A0] rtl:rotate-180" />}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 md:p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-[14px] font-semibold text-white"><I className="w-4 h-4 text-[#C9A8FF]" />{tab.n}</p>
              <span className="flex items-center gap-1.5 text-[11px] text-[#6EE7A0]"><span className="w-1.5 h-1.5 rounded-full bg-[#6EE7A0] animate-pulse" />Auto</span>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-1.5">
              {tab.steps.map((s, k) => <div key={s} className={`h-1.5 rounded-full ${k < 3 ? 'bg-gradient-to-r from-[#772F9F] to-[#A76CFF]' : 'bg-white/10'}`} />)}
            </div>
            <div className="mt-5 space-y-2.5">
              {tab.rows.map(([n, m, s], k) => {
                const RI = rowIcons[k];
                return (
                  <div key={n} className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3">
                    <span className="grid place-items-center w-9 h-9 rounded-xl bg-white/[0.06] shrink-0"><RI className="w-4 h-4 text-[#C9A8FF]" /></span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-semibold text-white truncate">{n}</p>
                      <p className="text-[11.5px] text-[#8D89A0] truncate">{m}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-[#A76CFF]/15 px-2.5 py-1 text-[10.5px] font-semibold text-[#E0CCFF]">{s}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl border border-[#3FA9F5]/30 bg-[#3FA9F5]/10 px-4 py-3">
              <span className="text-[12.5px] text-[#CDEBFF]">{c.save}</span>
              <span className="font-display text-[20px] font-bold text-white">+30 h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
