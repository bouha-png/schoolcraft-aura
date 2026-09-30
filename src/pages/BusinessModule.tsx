import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSelector from '@/components/portal/LanguageSelector';
import { findModule, UI, type Lang } from '@/components/business/modulesData';

const WHATSAPP_NUMBER = '212614615816';

export default function BusinessModule() {
  const { slug = '' } = useParams();
  const { lang } = useLanguage();
  const l = (lang in UI ? lang : 'fr') as Lang;
  const u = UI[l];
  const found = findModule(slug);
  useEffect(() => { if (found) document.title = `${found.mod.name[l]} · Business`; window.scrollTo(0, 0); }, [slug, l]);
  if (!found) return <Navigate to="/business" replace />;
  const { cat, mod } = found;
  const I = cat.icon;
  const rtl = l === 'ar';
  const openWa = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(u.demoMsg + mod.name[l])}`;
    if (!window.open(url, '_blank')) window.location.href = url;
  };
  return (
    <div className="min-h-screen bg-[#07091D] text-white overflow-x-hidden">
      <header dir="ltr" className="mx-auto max-w-[1080px] px-5 md:px-8 py-5 flex items-center justify-between">
        <Link to="/business#plateforme" className="inline-flex items-center gap-2 text-[14px] text-[#CFCBE0] hover:text-white"><ArrowLeft className="w-4 h-4" />{u.back}</Link>
        <LanguageSelector />
      </header>
      <main dir={rtl ? 'rtl' : 'ltr'} className="relative mx-auto max-w-[1080px] px-5 md:px-8 pb-24">
        <div className="absolute -top-10 start-0 w-[420px] h-[420px] rounded-full bg-[#772F9F]/25 blur-[120px] pointer-events-none" />
        <div className="relative pt-8 md:pt-14">
          <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[#A76CFF]"><I className="w-4 h-4" />{cat.name[l]}</span>
          <h1 className="mt-4 font-display text-[36px] md:text-[56px] font-bold leading-[1.05]">{mod.name[l]}</h1>
          <p className="mt-4 max-w-[640px] text-[18px] text-[#B8B5C8]">{mod.short[l]}</p>
          <a href="#" onClick={openWa} className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full font-semibold bg-gradient-to-r from-[#772F9F] to-[#A76CFF]">{u.demo}<ArrowRight className="w-4 h-4 rtl:rotate-180" /></a>
        </div>

        <section className="relative mt-14">
          <h2 className="font-display text-[22px] font-bold">{u.features}</h2>
          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            {mod.features[l].map((f) => (
              <div key={f} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <CheckCircle2 className="w-5 h-5 text-[#A76CFF] shrink-0" /><span className="text-[15px]">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {cat.mods.length > 1 && (
          <section className="relative mt-14">
            <h2 className="font-display text-[22px] font-bold">{u.related}</h2>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {cat.mods.filter((x) => x.slug !== mod.slug).map((x) => (
                <Link key={x.slug} to={`/business/${x.slug}`} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:border-[#A76CFF]/40 transition">
                  <p className="font-semibold">{x.name[l]}</p>
                  <p className="mt-1 text-[13px] text-[#9D99B2]">{x.short[l]}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[13px] text-[#C9A8FF]">{u.more}<ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" /></span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
