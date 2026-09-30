import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ArrowRight, Layers, MousePointerClick, EyeOff, Unplug, Users, FolderKanban, Workflow, FileText,
  BarChart3, Sparkles, Check, CheckCircle2, Circle, Send, History, Plus,
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import business from '@/i18n/business';
import LanguageSelector from '@/components/portal/LanguageSelector';
import scanditekLogo from '@/assets/scanditek-logo.png.asset.json';
import heroImg from '@/assets/business-hero.jpg';

const WHATSAPP_NUMBER = '212614615816';

const glassBtn =
  'inline-flex items-center justify-center gap-2 h-[54px] px-7 rounded-full text-[16px] font-semibold text-white border border-[#A76CFF]/55 bg-[#772F9F]/35 backdrop-blur-xl transition-all duration-300 hover:bg-[#772F9F]/55 hover:border-[#A76CFF]/85 hover:-translate-y-0.5 whitespace-nowrap';
const ghostBtn =
  'inline-flex items-center justify-center gap-2 h-[54px] px-7 rounded-full text-[16px] font-medium text-[#E6E4F0] border border-white/15 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.09] hover:border-white/30 whitespace-nowrap';
const glow = { boxShadow: '0 10px 34px -12px rgba(119,47,159,0.55), inset 0 1px 0 rgba(255,255,255,0.12)' };
const panel = 'rounded-[24px] border border-white/10 bg-[#0E1030]/70 backdrop-blur-sm';

const Reveal = ({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShown(true), io.disconnect()), { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SectionTitle = ({ overline, title, intro, center }: { overline?: string; title: string; intro?: string; center?: boolean }) => (
  <Reveal className={center ? 'text-center mx-auto max-w-[820px]' : 'max-w-[760px]'}>
    {overline && <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#A76CFF]">{overline}</p>}
    <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[1.1] text-[clamp(1.9rem,4.4vw,3rem)] text-white">{title}</h2>
    {intro && <p className={`mt-5 text-[16px] md:text-[18px] leading-[1.7] text-[#B8B5C8] ${center ? 'mx-auto max-w-[640px]' : 'max-w-[620px]'}`}>{intro}</p>}
  </Reveal>
);

const Bar = ({ w, tone = 'violet' }: { w: string; tone?: 'violet' | 'cyan' }) => (
  <div className="h-1.5 w-full rounded-full bg-white/[0.07] overflow-hidden">
    <div className="h-full rounded-full" style={{ width: w, background: tone === 'cyan' ? 'linear-gradient(90deg,#3FA9F5,#5CE1E6)' : 'linear-gradient(90deg,#772F9F,#A76CFF)' }} />
  </div>
);

const Business = () => {
  const { lang } = useLanguage();
  const c = business[lang as keyof typeof business] ?? business.fr;
  const isRtl = lang === 'ar';
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setShowFloating(!e.isIntersecting), { threshold: 0.05 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const openWa = (msg: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) window.location.href = url;
  };

  const arrow = <ArrowRight className={`w-[18px] h-[18px] ${isRtl ? 'rotate-180' : ''}`} aria-hidden />;
  const problemIcons = [Layers, MousePointerClick, EyeOff, Unplug];
  const container = 'mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12';

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07091D] text-white">
      <header dir="ltr" className="absolute inset-x-0 top-0 z-30">
        <div className={`${container} h-24 md:h-28 flex items-center justify-between gap-4`}>
          <Link to="/" className="flex items-center gap-3 group">
            <img src={scanditekLogo.url} alt="ScandiTek" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            <span className="text-[13px] md:text-sm font-medium text-[#CFCDDC] group-hover:text-white transition-colors">← {c.back}</span>
          </Link>
          <LanguageSelector />
        </div>
      </header>

      <main dir={isRtl ? 'rtl' : 'ltr'}>
        {/* HERO */}
        <section id="hero" className="relative min-h-[94vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt={c.hero.imgAlt} width={1920} height={1088} className="w-full h-full object-cover" style={{ objectPosition: 'center right', transform: isRtl ? 'scaleX(-1)' : undefined }} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(${isRtl ? 270 : 90}deg, rgba(7,9,29,0.97) 0%, rgba(7,9,29,0.8) 32%, rgba(7,9,29,0.4) 60%, rgba(7,9,29,0.15) 100%)` }} aria-hidden />
            <div className="absolute inset-x-0 bottom-0 h-48" style={{ background: 'linear-gradient(180deg, rgba(7,9,29,0) 0%, #07091D 100%)' }} aria-hidden />
          </div>

          <div className={`relative z-10 ${container} pt-32 pb-24 md:pt-40 md:pb-32 grid lg:grid-cols-12 gap-10 items-end`}>
            <div className="lg:col-span-7">
              <p className="hero-animate hero-delay-1 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#A76CFF]">{c.hero.label}</p>
              <h1 className="hero-animate hero-delay-1 mt-6 font-display font-bold tracking-[-0.02em] leading-[1.04] text-[clamp(2.5rem,7vw,4.6rem)] text-[#F7F7FB]">
                {c.hero.title1}
                <br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(100deg,#F7F7FB 0%,#C9A9FF 55%,#7CC8FF 100%)' }}>{c.hero.title2}</span>
              </h1>
              <p className="hero-animate hero-delay-2 mt-7 max-w-[560px] text-[16px] md:text-[18px] leading-[1.65] text-[#CFCDDC]">{c.hero.subtitle}</p>
              <div className="hero-animate hero-delay-3 mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#" onClick={openWa(c.waDemo)} className={glassBtn} style={glow}>{c.hero.cta}{arrow}</a>
                <a href="#platform" className={ghostBtn}>{c.hero.cta2}</a>
              </div>
            </div>

            {/* Partial interface preview */}
            <div className="hidden lg:block lg:col-span-5 hero-animate hero-delay-3">
              <div className={`${panel} bg-[#0B0E26]/75 backdrop-blur-xl p-5 max-w-[380px] ms-auto shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]`}>
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-semibold text-white">{c.project.name}</p>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#3FA9F5]/15 text-[#7CC8FF] border border-[#3FA9F5]/30">{c.project.status}</span>
                </div>
                <div className="mt-4 space-y-2.5">
                  {c.project.phases.slice(0, 3).map((p, i) => (
                    <div key={p} className="grid grid-cols-[88px_1fr] items-center gap-3 text-[12px] text-[#B8B5C8]">
                      <span>{p}</span><Bar w={['100%', '64%', '22%'][i]} tone={i === 0 ? 'cyan' : 'violet'} />
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                  {c.project.activityItems.slice(0, 2).map((a) => (
                    <p key={a} className="flex items-center gap-2 text-[12px] text-[#CFCDDC]"><span className="h-1.5 w-1.5 rounded-full bg-[#A76CFF]" />{a}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="relative py-20 md:py-28">
          <div className={container}>
            <SectionTitle title={c.problem.title} intro={c.problem.intro} />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {c.problem.cards.map((card, i) => {
                const Icon = problemIcons[i];
                return (
                  <Reveal key={card.t} delay={i * 80}>
                    <div className={`${panel} h-full p-6 md:p-7 transition-colors duration-300 hover:border-white/20`}>
                      <Icon className="w-5 h-5 text-[#8D89A0]" strokeWidth={1.75} aria-hidden />
                      <h3 className="mt-6 font-display text-[18px] font-semibold text-white">{card.t}</h3>
                      <p className="mt-2.5 text-[15px] leading-[1.65] text-[#B8B5C8]">{card.d}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <Reveal className="mt-14 md:mt-20 text-center">
              <span className="mx-auto block h-12 w-px bg-gradient-to-b from-transparent to-[#A76CFF]" aria-hidden />
              <p className="mt-6 font-display font-semibold text-[clamp(1.35rem,3vw,2rem)] leading-[1.3] text-white max-w-[720px] mx-auto">{c.problem.transition}</p>
            </Reveal>
          </div>
        </section>

        {/* CAPABILITIES — bento */}
        <section id="platform" className="relative py-20 md:py-28 bg-[#0A0C24]">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)', backgroundSize: '72px 72px' }} aria-hidden />
          <div className={`relative ${container}`}>
            <SectionTitle overline={c.caps.overline} title={c.caps.title} />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
              {/* Teams */}
              <Reveal className="md:col-span-3">
                <CapCard icon={Users} t={c.caps.items[0].t} d={c.caps.items[0].d}>
                  <div className="flex items-center">
                    {['S', 'Y', 'I', 'M', 'K'].map((l, i) => (
                      <span key={l} className="-ms-2 first:ms-0 grid place-items-center w-10 h-10 rounded-full border-2 border-[#0E1030] text-[13px] font-semibold text-white" style={{ background: ['#772F9F', '#3F4CC9', '#2D8A9E', '#5E2580', '#4A5580'][i] }}>{l}</span>
                    ))}
                    <span className="ms-3 text-[12px] text-[#8D89A0]">+12</span>
                  </div>
                </CapCard>
              </Reveal>
              {/* Projects */}
              <Reveal className="md:col-span-3" delay={80}>
                <CapCard icon={FolderKanban} t={c.caps.items[1].t} d={c.caps.items[1].d}>
                  <div className="space-y-2.5">
                    {c.project.phases.map((p, i) => (
                      <div key={p} className="grid grid-cols-[96px_1fr] items-center gap-3 text-[12px] text-[#B8B5C8]"><span>{p}</span><Bar w={['100%', '70%', '35%', '8%'][i]} /></div>
                    ))}
                  </div>
                </CapCard>
              </Reveal>
              {/* Tasks */}
              <Reveal className="md:col-span-2" delay={0}>
                <CapCard icon={Workflow} t={c.caps.items[2].t} d={c.caps.items[2].d}>
                  <div className="space-y-2">
                    {c.project.taskItems.map((tk, i) => (
                      <p key={tk} className="flex items-center gap-2 text-[12.5px] text-[#CFCDDC]">
                        {i === 0 ? <CheckCircle2 className="w-4 h-4 text-[#5CE1E6]" /> : <Circle className="w-4 h-4 text-[#8D89A0]" />}<span className="truncate">{tk}</span>
                      </p>
                    ))}
                  </div>
                </CapCard>
              </Reveal>
              {/* Documents */}
              <Reveal className="md:col-span-2" delay={80}>
                <CapCard icon={FileText} t={c.caps.items[3].t} d={c.caps.items[3].d}>
                  <div className="space-y-2">
                    {c.project.docItems.map((d) => (
                      <p key={d} className="flex items-center gap-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-[12.5px] text-[#CFCDDC]"><FileText className="w-3.5 h-3.5 text-[#A76CFF]" /><span className="truncate" dir="ltr">{d}</span></p>
                    ))}
                  </div>
                </CapCard>
              </Reveal>
              {/* Oversight */}
              <Reveal className="md:col-span-2" delay={160}>
                <CapCard icon={BarChart3} t={c.caps.items[4].t} d={c.caps.items[4].d}>
                  <div className="flex items-end gap-2 h-16">
                    {[40, 62, 48, 75, 58, 88, 70].map((h, i) => (
                      <span key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i === 5 ? 'linear-gradient(180deg,#5CE1E6,#3FA9F5)' : 'rgba(167,108,255,0.35)' }} />
                    ))}
                  </div>
                </CapCard>
              </Reveal>
              {/* Syn'IA wide */}
              <Reveal className="md:col-span-6">
                <div className="relative overflow-hidden rounded-[24px] border border-[#A76CFF]/25 p-6 md:p-9 grid md:grid-cols-2 gap-6 items-center" style={{ background: 'linear-gradient(135deg, rgba(62,24,86,0.55) 0%, rgba(14,16,48,0.8) 60%)' }}>
                  <div>
                    <span className="inline-grid place-items-center w-11 h-11 rounded-[10px] border border-[#A76CFF]/50 bg-[#772F9F]/40 text-white"><Sparkles className="w-5 h-5" /></span>
                    <h3 className="mt-5 font-display text-[22px] font-semibold text-white">{c.caps.items[5].t}</h3>
                    <p className="mt-2.5 text-[15px] leading-[1.7] text-[#CFCDDC] max-w-[440px]">{c.caps.items[5].d}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {c.ai.examples.map((ex) => (
                      <span key={ex} className="text-[13px] px-3.5 py-2 rounded-full border border-white/12 bg-white/[0.05] text-[#E6E4F0]">{ex}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONNECTED */}
        <section className="relative py-20 md:py-28">
          <div className={container}>
            <SectionTitle title={c.connect.title} intro={c.connect.intro} center />
            <Reveal className="mt-14">
              <div className="relative">
                <div className="hidden md:block absolute top-1/2 inset-x-8 h-px -translate-y-1/2" style={{ background: 'linear-gradient(90deg, transparent, rgba(167,108,255,0.6), rgba(92,225,230,0.5), transparent)' }} aria-hidden />
                <ol className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
                  {c.connect.steps.map((s, i) => (
                    <li key={s} className={`${panel} bg-[#0E1030] px-4 py-5 text-center`}>
                      <span className="mx-auto grid place-items-center w-8 h-8 rounded-full text-[12px] font-semibold text-white border border-[#A76CFF]/50 bg-[#772F9F]/40">{i + 1}</span>
                      <p className="mt-3 font-display text-[15px] font-semibold text-white">{s}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROJECT HIGHLIGHT */}
        <section className="relative py-20 md:py-28 bg-[#0A0C24]">
          <div className={`${container} grid lg:grid-cols-12 gap-10 lg:gap-14 items-center`}>
            <div className="lg:col-span-4">
              <SectionTitle title={c.project.title} intro={c.project.intro} />
              <Reveal className="mt-8">
                <ul className="space-y-3">
                  {c.project.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[15px] text-[#E6E4F0]"><Check className="w-4 h-4 text-[#A76CFF]" />{p}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal className="lg:col-span-8" delay={100}>
              <div className={`${panel} bg-[#0C0F2B] p-4 sm:p-6 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]`}>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-9 h-9 rounded-[10px] bg-[#772F9F]/40 border border-[#A76CFF]/40"><FolderKanban className="w-4 h-4" /></span>
                    <p className="font-display text-[16px] font-semibold">{c.project.name}</p>
                  </div>
                  <span className="text-[12px] px-3 py-1 rounded-full bg-[#3FA9F5]/15 text-[#7CC8FF] border border-[#3FA9F5]/30">{c.project.status}</span>
                </div>
                {/* phases */}
                <div className="mt-5 grid grid-cols-4 gap-2">
                  {c.project.phases.map((p, i) => (
                    <div key={p}>
                      <div className={`h-1.5 rounded-full ${i === 0 ? 'bg-[#5CE1E6]' : i === 1 ? 'bg-[#A76CFF]' : 'bg-white/10'}`} />
                      <p className={`mt-2 text-[11.5px] sm:text-[12.5px] ${i <= 1 ? 'text-white' : 'text-[#8D89A0]'}`}>{p}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2 rounded-2xl bg-white/[0.03] border border-white/[0.07] p-4">
                    <p className="text-[12px] uppercase tracking-[0.14em] text-[#8D89A0]">{c.project.tasks}</p>
                    <div className="mt-3 space-y-2.5">
                      {c.project.taskItems.map((tk, i) => (
                        <div key={tk} className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.03] px-3 py-2.5">
                          <span className="flex items-center gap-2.5 text-[13px] text-[#E6E4F0] min-w-0">
                            {i === 0 ? <CheckCircle2 className="w-4 h-4 shrink-0 text-[#5CE1E6]" /> : <Circle className="w-4 h-4 shrink-0 text-[#8D89A0]" />}
                            <span className="truncate">{tk}</span>
                          </span>
                          <span className="grid place-items-center w-6 h-6 shrink-0 rounded-full text-[10px] font-semibold" style={{ background: ['#772F9F', '#2D8A9E', '#3F4CC9'][i] }}>{['S', 'Y', 'I'][i]}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-5 text-[12px] uppercase tracking-[0.14em] text-[#8D89A0]">{c.project.docs}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {c.project.docItems.map((d) => (
                        <span key={d} dir="ltr" className="inline-flex items-center gap-2 rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 text-[12px] text-[#CFCDDC]"><FileText className="w-3.5 h-3.5 text-[#A76CFF]" />{d}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-4">
                      <p className="text-[12px] uppercase tracking-[0.14em] text-[#8D89A0]">{c.project.budget}</p>
                      <div className="mt-3"><Bar w="58%" tone="cyan" /></div>
                    </div>
                    <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-4">
                      <p className="text-[12px] uppercase tracking-[0.14em] text-[#8D89A0]">{c.project.activity}</p>
                      <div className="mt-3 space-y-2.5">
                        {c.project.activityItems.map((a) => (
                          <p key={a} className="flex gap-2 text-[12.5px] leading-[1.5] text-[#CFCDDC]"><span className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#A76CFF]" />{a}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="relative py-20 md:py-28">
          <div className={container}>
            <SectionTitle title={c.workflow.title} intro={c.workflow.intro} />
            <Reveal className="mt-12">
              <div className="grid md:grid-cols-5 gap-3 md:gap-0">
                {c.workflow.steps.map((s, i) => {
                  const last = i === c.workflow.steps.length - 1;
                  return (
                    <div key={s} className="relative flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                      <div className="flex md:w-full items-center">
                        <span className={`grid place-items-center w-12 h-12 shrink-0 rounded-full border ${last ? 'border-[#5CE1E6]/50 bg-[#3FA9F5]/15 text-[#7CC8FF]' : 'border-[#A76CFF]/50 bg-[#772F9F]/35 text-white'}`}>
                          {last ? <History className="w-5 h-5" /> : i === 0 ? <Send className="w-5 h-5" /> : <span className="text-[14px] font-semibold">{i + 1}</span>}
                        </span>
                        {!last && <span className="hidden md:block flex-1 h-px mx-3 bg-gradient-to-r from-[#A76CFF]/60 to-[#A76CFF]/10 rtl:bg-gradient-to-l" aria-hidden />}
                      </div>
                      <div className="md:mt-5 md:pe-6">
                        <p className="font-display text-[17px] font-semibold text-white">{s}</p>
                        {last && <p className="mt-1 text-[13px] text-[#8D89A0]">{c.workflow.history}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* SYN'IA */}
        <section className="relative py-20 md:py-28 bg-[#0A0C24] overflow-hidden">
          <div className="pointer-events-none absolute -top-40 end-[-10%] w-[600px] h-[600px] rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(119,47,159,0.35) 0%, transparent 65%)' }} aria-hidden />
          <div className={`relative ${container} grid lg:grid-cols-2 gap-12 items-center`}>
            <div>
              <SectionTitle overline="Syn’IA" title={c.ai.title} intro={c.ai.text} />
              <Reveal className="mt-8 flex flex-wrap gap-2">
                {c.ai.examples.map((ex) => (
                  <span key={ex} className="text-[13px] px-3.5 py-2 rounded-full border border-white/12 bg-white/[0.04] text-[#E6E4F0]">{ex}</span>
                ))}
              </Reveal>
            </div>
            <Reveal delay={100}>
              <div className={`${panel} bg-[#0C0F2B] p-5 sm:p-6`}>
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4">
                  <p className="text-[12px] uppercase tracking-[0.14em] text-[#8D89A0]">{c.project.name}</p>
                  <div className="mt-3 space-y-2"><Bar w="100%" tone="cyan" /><Bar w="64%" /><Bar w="22%" /></div>
                </div>
                <div className="mt-4 flex justify-end">
                  <p className="max-w-[80%] rounded-2xl rounded-ee-md bg-white/[0.07] px-4 py-2.5 text-[14px] text-white">{c.ai.ask}</p>
                </div>
                <div className="mt-3 rounded-2xl rounded-es-md border border-[#A76CFF]/30 p-4" style={{ background: 'linear-gradient(135deg, rgba(119,47,159,0.22), rgba(14,16,48,0.6))' }}>
                  <p className="flex items-center gap-2 text-[13px] font-semibold text-[#C9A9FF]"><Sparkles className="w-4 h-4" />{c.ai.answerTitle}</p>
                  <ul className="mt-2.5 space-y-1.5">
                    {c.ai.answer.map((a) => (
                      <li key={a} className="flex gap-2 text-[14px] leading-[1.55] text-[#E6E4F0]"><span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#A76CFF]" />{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* GROW */}
        <section className="relative py-20 md:py-28">
          <div className={container}>
            <SectionTitle title={c.grow.title} intro={c.grow.text} center />
            <Reveal className="mt-12">
              <div className="mx-auto max-w-[760px] grid grid-cols-3 gap-3 md:gap-4">
                {c.grow.modules.map((m, i) => {
                  const active = i < 4;
                  return (
                    <div key={m} className={`rounded-2xl px-3 py-5 md:py-6 text-center transition-all duration-300 hover:-translate-y-0.5 ${active ? 'border border-[#A76CFF]/40 bg-[#772F9F]/20' : 'border border-dashed border-white/15 bg-white/[0.02]'}`}>
                      {!active && <Plus className="mx-auto mb-1.5 w-4 h-4 text-[#8D89A0]" aria-hidden />}
                      <p className={`font-display text-[14px] md:text-[16px] font-semibold ${active ? 'text-white' : 'text-[#B8B5C8]'}`}>{m}</p>
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 text-center text-[14px] text-[#8D89A0]">{c.grow.note}</p>
            </Reveal>
          </div>
        </section>

        {/* VALUE */}
        <section className="relative py-20 md:py-28 bg-[#0A0C24]">
          <div className={container}>
            <Reveal className="max-w-[900px]">
              <p className="font-display font-bold tracking-[-0.02em] leading-[1.15] text-[clamp(1.8rem,4.2vw,3rem)] text-white">{c.value.title}</p>
            </Reveal>
            <div className="mt-14 grid md:grid-cols-3 gap-8 md:gap-10">
              {c.value.items.map((v, i) => (
                <Reveal key={v.t} delay={i * 90}>
                  <div className="border-t border-white/15 pt-6">
                    <span className="text-[13px] font-semibold text-[#A76CFF]">0{i + 1}</span>
                    <h3 className="mt-3 font-display text-[20px] font-semibold text-white">{v.t}</h3>
                    <p className="mt-2 text-[15px] leading-[1.65] text-[#B8B5C8]">{v.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(60% 70% at 50% 100%, rgba(119,47,159,0.35) 0%, rgba(7,9,29,0) 70%)' }} aria-hidden />
          <Reveal className={`relative ${container} text-center`}>
            <h2 className="mx-auto max-w-[860px] font-display font-bold tracking-[-0.02em] leading-[1.1] text-[clamp(2rem,4.8vw,3.4rem)] text-white">{c.final.title}</h2>
            <p className="mx-auto mt-6 max-w-[600px] text-[16px] md:text-[18px] leading-[1.65] text-[#CFCDDC]">{c.final.text}</p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" onClick={openWa(c.waDemo)} className={glassBtn} style={glow}>{c.final.cta}{arrow}</a>
              <a href="#" onClick={openWa(c.waContact)} className={ghostBtn}>{c.final.cta2}</a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-[13px] text-[#8D89A0]">© ScandiTek — Casablanca & Oslo</footer>

      <a
        href="#"
        onClick={openWa(c.waDemo)}
        className={`fixed z-40 bottom-8 md:bottom-10 ${isRtl ? 'left-5 md:left-8' : 'right-5 md:right-8'} inline-flex items-center gap-2 h-12 px-5 rounded-full text-[14px] font-semibold text-white border border-[#A76CFF]/50 backdrop-blur-xl whitespace-nowrap transition-all duration-500 ${showFloating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        style={{ background: 'linear-gradient(145deg, rgba(62,24,86,0.92) 0%, rgba(94,37,128,0.88) 40%, rgba(119,47,159,0.78) 100%)', ...glow }}
      >
        {c.floating}{arrow}
      </a>
    </div>
  );
};

const CapCard = ({ icon: Icon, t, d, children }: { icon: typeof Users; t: string; d: string; children: ReactNode }) => (
  <div className={`${panel} h-full p-6 md:p-7 flex flex-col transition-colors duration-300 hover:border-[#A76CFF]/30`}>
    <span className="inline-grid place-items-center w-11 h-11 rounded-[10px] border border-[#A76CFF]/50 text-white" style={{ background: 'linear-gradient(145deg, rgba(62,24,86,0.92), rgba(119,47,159,0.78))' }}><Icon className="w-5 h-5" strokeWidth={1.75} /></span>
    <h3 className="mt-5 font-display text-[19px] font-semibold text-white">{t}</h3>
    <p className="mt-2 text-[15px] leading-[1.65] text-[#B8B5C8]">{d}</p>
    <div className="mt-6 pt-5 border-t border-white/[0.07] mt-auto">{children}</div>
  </div>
);

export default Business;
