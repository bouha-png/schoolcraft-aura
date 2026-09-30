import { CATEGORIES, UI, type Lang } from './modulesData';

export default function ModuleCatalog({ lang }: { lang: string }) {
  const l = (lang in UI ? lang : 'fr') as Lang;
  const u = UI[l];
  return (
    <section id="plateforme" className="relative py-20 md:py-28 bg-[#0A0C24]">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="text-center max-w-[720px] mx-auto">
          <span className="text-[12px] uppercase tracking-[0.2em] text-[#A76CFF]">{u.o}</span>
          <h2 className="mt-4 font-display text-[30px] md:text-[44px] font-bold leading-tight text-white">{u.t}</h2>
          <p className="mt-4 text-[16px] text-[#B8B5C8]">{u.i}</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((c) => {
            const I = c.icon;
            return (
              <div key={c.id} className="h-full rounded-[22px] border border-white/10 bg-[#0E1030]/75 backdrop-blur-md p-5">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#772F9F] to-[#A76CFF]"><I className="w-5 h-5 text-white" /></span>
                  <h3 className="flex-1 font-display text-[18px] font-bold text-white">{c.name[l]}</h3>
                </div>
                <div className="mt-4 space-y-1.5">
                  {c.mods.map((m) => (
                    <div key={m.slug} className="flex items-center gap-3 rounded-xl px-3 py-2.5">
                      <div className="min-w-0 flex-1">
                        <p className="text-[14px] font-semibold text-white">{m.name[l]}</p>
                        <p className="text-[12.5px] text-[#9D99B2] leading-snug">{m.short[l]}</p>
                      </div>
                      </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
