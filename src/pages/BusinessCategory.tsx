import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSelector from '@/components/portal/LanguageSelector';
import { CATEGORIES, UI, type Lang } from '@/components/business/modulesData';

const WHATSAPP_NUMBER = '212614615816';

export default function BusinessCategory() {
  const { id = '' } = useParams();
  const { lang } = useLanguage();
  const l = (lang in UI ? lang : 'fr') as Lang;
  const u = UI[l];
  const cat = CATEGORIES.find((c) => c.id === id);
  useEffect(() => { if (cat) document.title = `${cat.name[l]} · Synapse Business`; window.scrollTo(0, 0); }, [id, l]);
  if (!cat) return <Navigate to="/business" replace />;
  const I = cat.icon;
  const rtl = l === 'ar';
  const openWa = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(u.demoMsg + cat.name[l])}`;
    if (!window.open(url, '_blank')) window.location.href = url;
  };
  const others = CATEGORIES.filter((c) => c.id !== cat.id);
  return (
    <div className="min-h-screen bg-[#07091D] text-white overflow-x-hidden">
      <header dir="ltr" className="mx-auto max-w-[1080px] px-5 md:px-8 py-5 flex items-center justify-between">
        <Link to="/business#plateforme" className="inline-flex items-center gap-2 text-[14px] text-[#CFCBE0] hover:text-white"><ArrowLeft className="w-4 h-4" />{u.back}</Link>
        <LanguageSelector />
      </header>
      <main dir={rtl ? 'rtl' : 'ltr'} className="relative mx-auto max-w-[1080px] px-5 md:px-8 pb-24">
        <div className="absolute -top-10 start-0 w-[420px] h-[420px] rounded-full bg-[#772F9F]/25 blur-[120px] pointer-events-none" />
        <div className="relative pt-8 md:pt-14">
          <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#772F9F] to-[#A76CFF]"><I className="w-7 h-7 text-white" /></span>
          <h1 className="mt-5 font-display text-[36px] md:text-[56px] font-bold leading-[1.05]">{cat.name[l]}</h1>
          <a href="#" onClick={openWa} className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full font-semibold bg-gradient-to-r from-[#772F9F] to-[#A76CFF]">{u.demo}<ArrowRight className="w-4 h-4 rtl:rotate-180" /></a>
        </div>

        <div className="relative mt-12 space-y-5">
          {cat.mods.map((m) => (
            <section key={m.slug} className="rounded-[22px] border border-white/10 bg-[#0E1030]/75 backdrop-blur-md p-6 md:p-8">
              <h2 className="font-display text-[24px] md:text-[28px] font-bold">{m.name[l]}</h2>
              <p className="mt-2 text-[16px] text-[#B8B5C8]">{m.short[l]}</p>
              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                {m.features[l].map((f) => (
                  <div key={f} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#A76CFF] shrink-0" /><span className="text-[15px]">{f}</span>
                  </div>
                ))}
              </div>
              <Link to={`/business/${m.slug}`} className="mt-5 inline-flex items-center gap-1 text-[14px] text-[#C9A8FF] hover:text-white">{u.more}<ArrowRight className="w-4 h-4 rtl:rotate-180" /></Link>
            </section>
          ))}
        </div>

        <div className="relative mt-14 flex flex-wrap gap-2">
          {others.map((c) => (
            <Link key={c.id} to={`/business/categorie/${c.id}`} className="rounded-full border border-white/15 px-4 py-2 text-[14px] text-[#CFCBE0] hover:border-[#A76CFF]/50 hover:text-white">{c.name[l]}</Link>
          ))}
        </div>
      </main>
    </div>
  );
}
