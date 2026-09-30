import { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Star } from 'lucide-react';
import logo from '@/assets/logo-atlas-distribution.png';
import salma from '@/assets/avatar-salma.jpg';
import youssef from '@/assets/avatar-youssef.jpg';
import karim from '@/assets/avatar-karim.jpg';

export default function ClientCard({ v, rtl }: { v: string[]; rtl: boolean }) {
  const tabs = v.slice(2);
  const [active, setActive] = useState(0);
  const counts = [3, 5, 12, 8, 4, 2, 3];
  const contacts = [
    [karim, 'Karim Benali', 'Directeur général'],
    [salma, 'Salma Idrissi', 'Responsable achats'],
    [youssef, 'Youssef Alami', 'Logistique'],
  ];
  return (
    <div dir={rtl ? 'rtl' : 'ltr'} className="rounded-3xl border border-white/10 bg-[#11102A]/90 p-5 shadow-2xl backdrop-blur-xl">
      <div className="flex items-start gap-4">
        <div className="grid place-items-center w-16 h-16 shrink-0 rounded-2xl bg-white p-2">
          <img src={logo} alt="Atlas Distribution" loading="lazy" width={64} height={64} className="w-full h-full object-contain" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="font-display text-[19px] font-semibold text-white">{v[0]}</p>
            <span className="rounded-full bg-[#1F8A4C]/25 px-2 py-0.5 text-[10px] font-semibold text-[#6EE7A0]">{v[1]}</span>
          </div>
          <p className="mt-0.5 flex items-center gap-1 text-[12px] text-[#B8B5C8]">Distribution · Casablanca <Star className="w-3 h-3 fill-[#F5B84C] text-[#F5B84C]" /></p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] text-[#E6E4F0]">
        {[[Phone, '+212 5 22 48 19 30'], [Mail, 'contact@atlas-distribution.ma'], [MapPin, 'Bd Zerktouni, Casablanca'], [Globe, 'atlas-distribution.ma']].map(([I, t]) => {
          const Icon = I as typeof Phone;
          return (
            <div key={t as string} className="flex items-center gap-2 rounded-lg bg-white/[0.04] px-2.5 py-2 min-w-0">
              <Icon className="w-3.5 h-3.5 shrink-0 text-[#A76CFF]" /><span className="truncate" dir="ltr">{t as string}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1">
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setActive(i)} className={`shrink-0 flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] transition-colors ${active === i ? 'border-[#A76CFF]/60 bg-[#772F9F]/40 text-white' : 'border-white/10 bg-white/[0.03] text-[#B8B5C8] hover:text-white'}`}>
            {t}<span className="rounded-full bg-white/10 px-1.5 text-[10px]">{counts[i]}</span>
          </button>
        ))}
      </div>
      <div className="mt-3 space-y-2">
        {contacts.map(([img, n, r], i) => (
          <div key={n} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-2">
            <img src={img} alt={n} loading="lazy" width={32} height={32} className="w-8 h-8 rounded-full object-cover" />
            <div className="min-w-0 flex-1"><p className="text-[12.5px] font-semibold text-white truncate">{n}</p><p className="text-[11px] text-[#8D89A0] truncate">{r}</p></div>
            {i === 0 && <span className="rounded-full bg-[#A76CFF]/20 px-2 py-0.5 text-[10px] text-[#E0CCFF]">★</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
