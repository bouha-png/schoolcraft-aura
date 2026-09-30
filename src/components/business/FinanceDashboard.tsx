// Illustrative finance dashboard for the /business finance section (sample figures only).
const T = {
  fr: { title: 'Finance', period: 'Ce trimestre', kpis: ['Chiffre d’affaires', 'Dépenses', 'Marge', 'Factures en attente'], chart: 'Recettes et dépenses', rev: 'Recettes', exp: 'Dépenses', months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'], budget: 'Budget par projet', projects: ['Agence Rabat', 'Site e-commerce', 'Migration CRM'], split: 'Répartition des dépenses', cats: ['Salaires', 'Fournisseurs', 'Frais', 'Autres'] },
  en: { title: 'Finance', period: 'This quarter', kpis: ['Revenue', 'Expenses', 'Margin', 'Pending invoices'], chart: 'Income and expenses', rev: 'Income', exp: 'Expenses', months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], budget: 'Budget by project', projects: ['Rabat office', 'E-commerce site', 'CRM migration'], split: 'Expense breakdown', cats: ['Salaries', 'Suppliers', 'Expenses', 'Other'] },
  no: { title: 'Økonomi', period: 'Dette kvartalet', kpis: ['Omsetning', 'Kostnader', 'Margin', 'Utestående fakturaer'], chart: 'Inntekter og kostnader', rev: 'Inntekter', exp: 'Kostnader', months: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun'], budget: 'Budsjett per prosjekt', projects: ['Kontor Rabat', 'Nettbutikk', 'CRM-migrering'], split: 'Kostnadsfordeling', cats: ['Lønn', 'Leverandører', 'Utlegg', 'Annet'] },
  ar: { title: 'المالية', period: 'هذا الربع', kpis: ['رقم المعاملات', 'النفقات', 'الهامش', 'فواتير معلقة'], chart: 'المداخيل والنفقات', rev: 'المداخيل', exp: 'النفقات', months: ['ين', 'فبر', 'مار', 'أبر', 'ماي', 'يون'], budget: 'الميزانية حسب المشروع', projects: ['وكالة الرباط', 'متجر إلكتروني', 'ترحيل CRM'], split: 'توزيع النفقات', cats: ['الأجور', 'الموردون', 'المصاريف', 'أخرى'] },
};
const kpiVals = [['1,24 M', '+9%'], ['812 k', '+3%'], ['34 %', '+2 pts'], ['14', '−4']];
const rev = [62, 70, 66, 78, 84, 92];
const exp = [48, 52, 50, 55, 57, 60];
const budget = [72, 45, 88];
const split = [52, 26, 14, 8];
const splitColors = ['#A76CFF', '#3FA9F5', '#5CE1E6', '#6B6784'];

export default function FinanceDashboard({ lang }: { lang: string }) {
  const c = T[(lang in T ? lang : 'fr') as keyof typeof T];
  const W = 300, H = 120, step = W / (rev.length - 1);
  const line = (d: number[]) => d.map((v, i) => `${i ? 'L' : 'M'}${i * step},${H - v * 1.2}`).join(' ');
  let acc = 0;
  const donut = split.map((p, i) => { const s = acc; acc += p; return `${splitColors[i]} ${s}% ${acc}%`; }).join(',');
  return (
    <div className="rounded-[22px] border border-white/10 bg-[#0E1030]/80 backdrop-blur-md p-4 md:p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between">
        <p className="text-[15px] font-semibold">{c.title}</p>
        <span className="text-[11.5px] px-3 py-1 rounded-full bg-[#772F9F]/30 border border-[#A76CFF]/30 text-[#E0CCFF]">{c.period}</span>
      </div>
      <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {c.kpis.map((k, i) => (
          <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] text-[#9D99B2] truncate">{k}</p>
            <p className="mt-1 font-display text-[20px] font-bold">{kpiVals[i][0]}</p>
            <p className={`text-[11px] ${i === 1 ? 'text-[#C9A9FF]' : 'text-[#5CE1E6]'}`}>{kpiVals[i][1]}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 grid md:grid-cols-[1.5fr_1fr] gap-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[12.5px] font-semibold">{c.chart}</p>
            <div className="flex gap-3 text-[10.5px] text-[#B8B5C8]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#3FA9F5]" />{c.rev}</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#A76CFF]" />{c.exp}</span>
            </div>
          </div>
          <svg dir="ltr" viewBox={`0 -6 ${W} ${H + 12}`} className="mt-3 w-full h-[130px]" preserveAspectRatio="none">
            <defs><linearGradient id="fg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#3FA9F5" stopOpacity="0.35" /><stop offset="1" stopColor="#3FA9F5" stopOpacity="0" /></linearGradient></defs>
            {[0, 1, 2, 3].map((g) => <line key={g} x1="0" x2={W} y1={g * (H / 3)} y2={g * (H / 3)} stroke="rgba(255,255,255,0.06)" />)}
            <path d={`${line(rev)} L${W},${H} L0,${H} Z`} fill="url(#fg)" />
            <path d={line(rev)} fill="none" stroke="#3FA9F5" strokeWidth="2.2" vectorEffect="non-scaling-stroke" />
            <path d={line(exp)} fill="none" stroke="#A76CFF" strokeWidth="2" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
          </svg>
          <div dir="ltr" className="mt-1 flex justify-between text-[10px] text-[#8D89A0]">{c.months.map((m) => <span key={m}>{m}</span>)}</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-[12.5px] font-semibold">{c.split}</p>
          <div className="mt-3 flex items-center gap-4">
            <div className="relative w-20 h-20 shrink-0 rounded-full" style={{ background: `conic-gradient(${donut})` }}>
              <div className="absolute inset-[12px] rounded-full bg-[#0E1030]" />
            </div>
            <ul className="space-y-1.5 text-[11.5px] text-[#D6D3E4] min-w-0">
              {c.cats.map((k, i) => <li key={k} className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-sm shrink-0" style={{ background: splitColors[i] }} /><span className="truncate">{k}</span><span className="ms-auto text-[#8D89A0]">{split[i]}%</span></li>)}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <p className="text-[12.5px] font-semibold">{c.budget}</p>
        <div className="mt-3 space-y-2.5">
          {c.projects.map((p, i) => (
            <div key={p} className="grid grid-cols-[120px_1fr_36px] items-center gap-3 text-[12px] text-[#D6D3E4]">
              <span className="truncate">{p}</span>
              <div className="h-1.5 rounded-full bg-white/[0.07] overflow-hidden"><div className="h-full rounded-full" style={{ width: `${budget[i]}%`, background: budget[i] > 85 ? 'linear-gradient(90deg,#A76CFF,#FF8A8A)' : 'linear-gradient(90deg,#772F9F,#3FA9F5)' }} /></div>
              <span className="text-[11px] text-[#8D89A0]">{budget[i]}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
