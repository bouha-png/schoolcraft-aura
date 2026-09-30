import salma from '@/assets/avatar-salma.jpg';
import youssef from '@/assets/avatar-youssef.jpg';
import karim from '@/assets/avatar-karim.jpg';
import { MessageSquare, Calendar, Mail, Contact, FolderKanban, Users, Wallet, GraduationCap, ShoppingBag, Video } from 'lucide-react';

const DASH: Record<string, Record<string, string>> = {
  fr: { title: 'Tableau de bord', today: "Aujourd'hui", leads: 'Leads', meetings: 'Rendez-vous clients', sales: 'Ventes', revenue: 'CA du mois', agenda: 'Réunions du jour', projects: 'Projets en cours', requests: 'Approbations en attente', chats: 'Conversations récentes', pipeline: 'Pipeline CRM', new: 'Nouveau', quali: 'Qualifié', prop: 'Proposition', won: 'Gagné' },
  en: { title: 'Dashboard', today: 'Today', leads: 'Leads', meetings: 'Client meetings', sales: 'Sales', revenue: 'Monthly revenue', agenda: "Today's meetings", projects: 'Ongoing projects', requests: 'Pending approvals', chats: 'Recent chats', pipeline: 'CRM pipeline', new: 'New', quali: 'Qualified', prop: 'Proposal', won: 'Won' },
  no: { title: 'Dashbord', today: 'I dag', leads: 'Leads', meetings: 'Kundemøter', sales: 'Salg', revenue: 'Omsetning mnd', agenda: 'Dagens møter', projects: 'Pågående prosjekter', requests: 'Venter på godkjenning', chats: 'Siste chatter', pipeline: 'CRM-pipeline', new: 'Ny', quali: 'Kvalifisert', prop: 'Tilbud', won: 'Vunnet' },
  ar: { title: 'لوحة القيادة', today: 'اليوم', leads: 'العملاء المحتملون', meetings: 'مواعيد العملاء', sales: 'المبيعات', revenue: 'رقم المعاملات', agenda: 'اجتماعات اليوم', projects: 'مشاريع جارية', requests: 'موافقات معلقة', chats: 'محادثات حديثة', pipeline: 'مسار CRM', new: 'جديد', quali: 'مؤهل', prop: 'عرض', won: 'مكسوب' },
};

export default function PilotDashboard({ lang, rtl }: { lang: string; rtl: boolean }) {
  const t = DASH[lang] ?? DASH.fr;
  const kpis = [
    { l: t.leads, v: '48', d: '+12%' },
    { l: t.meetings, v: '17', d: '+5' },
    { l: t.sales, v: '9', d: '+3' },
    { l: t.revenue, v: '312k', d: '+8%' },
  ];
  const agenda = [['09:30', 'Atlas Conseil'], ['11:00', 'Maison Atlas'], ['14:30', 'Groupe Nour']];
  const projects: [string, number][] = [['Ouverture agence Rabat', 72], ['Site e-commerce', 45], ['Migration CRM', 88]];
  const requests = [['Devis Atlas Conseil', '45 000 MAD'], ['Congé · Youssef A.', '3 jours'], ['Note de frais', '1 200 MAD']];
  const chats = [[salma, 'Salma Idrissi', 'Proposition envoyée ✓'], [youssef, 'Youssef A.', 'Réunion à 14h30 ?'], [karim, 'Karim B.', 'Nouveau lead Casablanca']];
  const pipe: [string, number][] = [[t.new, 14], [t.quali, 9], [t.prop, 6], [t.won, 4]];
  const apps = [
    { I: MessageSquare, n: 'Chat' }, { I: Calendar, n: 'Agenda' }, { I: Mail, n: 'Email' }, { I: Contact, n: 'CRM' }, { I: FolderKanban, n: 'Projets' },
    { I: Users, n: 'RH' }, { I: Wallet, n: 'Finance' }, { I: GraduationCap, n: 'Formation' }, { I: ShoppingBag, n: 'Shop' }, { I: Video, n: 'Visio' },
  ];
  const card = 'rounded-xl border border-white/[0.07] bg-white/[0.03] p-3';
  return (
    <div dir={rtl ? 'rtl' : 'ltr'} className="relative rounded-3xl border border-white/10 bg-[#11102A]/90 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between px-1">
        <p className="text-[14px] font-semibold text-white">{t.title}</p>
        <span className="rounded-full bg-[#A76CFF]/15 px-2.5 py-1 text-[11px] text-[#E0CCFF]">{t.today}</span>
      </div>
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {kpis.map((k) => (
          <div key={k.l} className={card}>
            <p className="text-[10px] text-[#B8B5C8] truncate">{k.l}</p>
            <p className="mt-1 font-display text-[20px] font-bold text-white leading-none">{k.v}</p>
            <p className="mt-1 text-[10px] text-[#5CE1E6]">{k.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 grid sm:grid-cols-3 gap-2">
        <div className={`${card} sm:col-span-2 space-y-3`}>
          <div>
            <p className="text-[11px] font-semibold text-white">{t.agenda}</p>
            <div className="mt-2 space-y-1.5">
              {agenda.map(([h, n]) => (
                <div key={h} className="flex items-center gap-2 rounded-lg bg-white/[0.04] px-2 py-1.5">
                  <span className="text-[10px] font-semibold text-[#E0CCFF] w-9">{h}</span>
                  <span className="text-[11px] text-[#E6E4F0] truncate flex-1">{n}</span>
                  <Video className="w-3 h-3 text-[#5CE1E6]" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-white">{t.projects}</p>
            <div className="mt-2 space-y-2">
              {projects.map(([n, p]) => (
                <div key={n}>
                  <div className="flex justify-between text-[10px] text-[#B8B5C8]"><span className="truncate">{n}</span><span>{p}%</span></div>
                  <div className="mt-1 h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-[#772F9F] to-[#A76CFF]" style={{ width: `${p}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={card}>
          <p className="text-[11px] font-semibold text-white">{t.chats}</p>
          <div className="mt-2 space-y-2">
            {chats.map(([i, n, m]) => (
              <div key={n} className="flex items-center gap-2">
                <img src={i} alt={n} loading="lazy" width={28} height={28} className="w-7 h-7 shrink-0 rounded-full object-cover ring-2 ring-[#A76CFF]/40" />
                <div className="min-w-0"><p className="text-[10.5px] font-semibold text-white truncate">{n}</p><p className="text-[10px] text-[#8D89A0] truncate">{m}</p></div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] font-semibold text-white">{t.requests}</p>
          <div className="mt-2 space-y-1.5">
            {requests.map(([n, m]) => (
              <div key={n} className="flex items-center gap-1.5 rounded-lg border border-[#F5B84C]/25 bg-[#F5B84C]/[0.06] px-2 py-1.5">
                <div className="min-w-0 flex-1"><p className="text-[10.5px] text-white truncate">{n}</p><p className="text-[10px] text-[#8D89A0] truncate">{m}</p></div>
                <span className="grid place-items-center w-5 h-5 shrink-0 rounded-full bg-[#1F8A4C]/80 text-[10px] text-white">✓</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`${card} mt-2`}>
        <p className="text-[11px] font-semibold text-white">{t.pipeline}</p>
        <div className="mt-2 grid grid-cols-4 gap-1.5">
          {pipe.map(([n, v], i) => (
            <div key={n} className="rounded-lg bg-white/[0.04] px-2 py-1.5 text-center">
              <p className="text-[9.5px] text-[#B8B5C8] truncate">{n}</p>
              <p className={`text-[15px] font-bold ${i === 3 ? 'text-[#5CE1E6]' : 'text-white'}`}>{v}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 mx-auto w-fit max-w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] px-2 py-2 backdrop-blur">
        <div className="flex gap-1.5">
          {apps.map(({ I, n }) => (
            <div key={n} className="flex flex-col items-center w-8 sm:w-10">
              <span className="grid place-items-center w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#772F9F] to-[#A76CFF] shadow-lg"><I className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" /></span>
              <span className="mt-1 text-[8px] text-[#B8B5C8] truncate w-full text-center">{n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
