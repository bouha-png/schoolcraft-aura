import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ArrowRight, Users, FolderKanban, UserRound, Wallet, FileText, Video, Mail, MessageSquare, Cloud, Contact,
  UserCog, GraduationCap, CalendarCheck, Sparkles, CheckCircle2, Hash, Paperclip, Radio, Award, ShoppingBag,
  PlayCircle, Calendar, ChevronRight, History, MessagesSquare, FileCheck2, Eye, Banknote,
} from 'lucide-react';
import avatarSalma from '@/assets/avatar-salma.jpg';
import avatarYoussef from '@/assets/avatar-youssef.jpg';
import avatarKarim from '@/assets/avatar-karim.jpg';
import { useLanguage } from '@/i18n/LanguageContext';
import business from '@/i18n/business';
import LanguageSelector from '@/components/portal/LanguageSelector';
import ClientCard from '@/components/business/ClientCard';
import PilotDashboard from '@/components/business/PilotDashboard';
import SecuritySection from '@/components/business/SecuritySection';
import ModuleCatalog from '@/components/business/ModuleCatalog';
import HrPayrollSection from '@/components/business/HrPayrollSection';
import { WORKSPACE_ROLES } from '@/components/business/workspaceRoles';
import scanditekLogo from '@/assets/scanditek-logo.png.asset.json';
import heroImg from '@/assets/business-hero.jpg';
import prodOlive from '@/assets/prod-watch.jpg';
import prodCeramic from '@/assets/prod-art.jpg';
import prodLeather from '@/assets/prod-bag.jpg';
import prodCoffee from '@/assets/prod-sofa.jpg';
import courseOnboarding from '@/assets/learn-onboarding.jpg';
import courseCustomer from '@/assets/learn-customer.jpg';
import courseDigital from '@/assets/learn-digital.jpg';
import liveImg from '@/assets/business-live-podcast-v2.jpg';

const WHATSAPP_NUMBER = '212614615816';

const glassBtn =
  'inline-flex items-center justify-center gap-2 h-[54px] px-7 rounded-full text-[16px] font-semibold text-white border border-[#A76CFF]/55 bg-[#772F9F]/35 backdrop-blur-xl transition-all duration-300 hover:bg-[#772F9F]/55 hover:border-[#A76CFF]/85 hover:-translate-y-0.5 whitespace-nowrap';
const ghostBtn =
  'inline-flex items-center justify-center gap-2 h-[54px] px-7 rounded-full text-[16px] font-medium text-[#E6E4F0] border border-white/15 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.09] hover:border-white/30 whitespace-nowrap';
const glow = { boxShadow: '0 10px 34px -12px rgba(119,47,159,0.55), inset 0 1px 0 rgba(255,255,255,0.12)' };
const panel = 'rounded-[22px] border border-white/10 bg-[#0E1030]/75 backdrop-blur-md shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]';
const iconBox = 'inline-grid place-items-center rounded-[10px] border border-[#A76CFF]/50 text-white shrink-0';
const iconBg = { background: 'linear-gradient(145deg, rgba(62,24,86,0.92), rgba(119,47,159,0.78))' };
const container = 'mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12';

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
    <div ref={ref} className={`transition-all duration-700 ease-out ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const Title = ({ overline, title, intro, center }: { overline?: string; title: string; intro?: string; center?: boolean }) => (
  <Reveal className={center ? 'text-center mx-auto max-w-[860px]' : 'max-w-[640px]'}>
    {overline && <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#A76CFF]">{overline}</p>}
    <h2 className="mt-4 font-display font-bold tracking-[-0.02em] leading-[1.1] text-[clamp(1.9rem,4.4vw,3rem)] text-white">{title}</h2>
    {intro && <p className={`mt-5 text-[16px] md:text-[18px] leading-[1.7] text-[#B8B5C8] ${center ? 'mx-auto max-w-[640px]' : ''}`}>{intro}</p>}
  </Reveal>
);

const Tags = ({ items }: { items: string[] }) => (
  <div className="mt-7 flex flex-wrap gap-2">
    {items.map((t) => (
      <span key={t} className="text-[13px] px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[#D6D3E4]">{t}</span>
    ))}
  </div>
);

const Chain = ({ steps, rtl, tone = 'violet' }: { steps: string[]; rtl: boolean; tone?: 'violet' | 'cyan' }) => (
  <div className="flex flex-wrap items-center gap-y-3">
    {steps.map((s, i) => (
      <div key={s} className="flex items-center">
        <span className={`text-[13px] font-medium px-3.5 py-2 rounded-full border ${tone === 'cyan' ? 'border-[#3FA9F5]/35 bg-[#3FA9F5]/10 text-[#CDEBFF]' : 'border-[#A76CFF]/40 bg-[#772F9F]/20 text-white'}`}>{s}</span>
        {i < steps.length - 1 && <ChevronRight className={`mx-1.5 w-4 h-4 text-[#8D89A0] ${rtl ? 'rotate-180' : ''}`} />}
      </div>
    ))}
  </div>
);

const Bar = ({ w, tone = 'violet' }: { w: string; tone?: 'violet' | 'cyan' }) => (
  <div className="h-1.5 w-full rounded-full bg-white/[0.07] overflow-hidden">
    <div className="h-full rounded-full" style={{ width: w, background: tone === 'cyan' ? 'linear-gradient(90deg,#3FA9F5,#5CE1E6)' : 'linear-gradient(90deg,#772F9F,#A76CFF)' }} />
  </div>
);

const Dot = () => <span className="h-1.5 w-1.5 rounded-full bg-[#A76CFF] shrink-0" />;

const Business = () => {
  const { lang } = useLanguage();
  const c = business[lang as keyof typeof business] ?? business.fr;
  const rtl = lang === 'ar';
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
  const arrow = <ArrowRight className={`w-[18px] h-[18px] ${rtl ? 'rotate-180' : ''}`} />;


  const nodeIcons = [Contact, CalendarCheck, UserCog, Users, FolderKanban, Wallet];
  const toolIcons = [Mail, MessageSquare, Video, Cloud, FolderKanban, Contact, UserCog, Wallet, GraduationCap, CalendarCheck];
  const aiIcons = [Contact, Video, FolderKanban, UserCog, Wallet, Search];
  const [collab, organise, teams, , , crm] = c.universes;

  const Points = ({ items }: { items: string[] }) => (
    <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
      {items.map((p) => <li key={p} className="flex items-center gap-2.5 text-[14.5px] text-[#E6E4F0]"><CheckCircle2 className="w-4 h-4 text-[#7CC8FF] shrink-0" />{p}</li>)}
    </ul>
  );
  const AiCue = ({ text, className = '' }: { text: string; className?: string }) => (
    <div className={`flex items-center gap-2.5 rounded-2xl border border-[#A76CFF]/45 bg-[#1A1240]/90 backdrop-blur-md px-3.5 py-2.5 shadow-[0_14px_40px_-16px_rgba(119,47,159,0.8)] ${className}`}>
      <span className={`${iconBox} w-7 h-7`} style={iconBg}><Sparkles className="w-3.5 h-3.5" /></span>
      <p className="text-[12.5px] leading-snug text-[#EDE6FF]">{text}</p>
    </div>
  );
  const Opt = ({ t }: { t: string }) => <span className="ms-3 align-middle text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/15 text-[#B8B5C8]">{t}</span>;

  return (
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

      <main dir={rtl ? 'rtl' : 'ltr'}>
        {/* A. HERO */}
        <section id="hero" className="relative min-h-[94vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt={c.hero.imgAlt} width={1376} height={768} className="w-full h-full object-cover" style={{ objectPosition: 'center right', transform: rtl ? 'scaleX(-1)' : undefined }} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(${rtl ? 270 : 90}deg, rgba(7,9,29,0.97) 0%, rgba(7,9,29,0.82) 34%, rgba(7,9,29,0.45) 62%, rgba(7,9,29,0.2) 100%)` }} aria-hidden />
            <div className="absolute inset-x-0 bottom-0 h-48" style={{ background: 'linear-gradient(180deg, rgba(7,9,29,0) 0%, #07091D 100%)' }} aria-hidden />
          </div>
          <div className={`relative z-10 ${container} pt-32 pb-24 md:pt-40 md:pb-32 grid lg:grid-cols-12 gap-10 items-center`}>
            <div className="lg:col-span-7">
              <p className="hero-animate hero-delay-1 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#A76CFF]">{c.hero.label}</p>
              <h1 className="hero-animate hero-delay-1 mt-6 font-display font-bold tracking-[-0.02em] leading-[1.06] text-[clamp(2.3rem,6.4vw,4.3rem)] text-[#F7F7FB]">
                {v.hero.t1}<br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(100deg,#F7F7FB 0%,#C9A9FF 55%,#7CC8FF 100%)' }}>{v.hero.t2}</span>
              </h1>
              <p className="hero-animate hero-delay-2 mt-7 max-w-[580px] text-[16px] md:text-[18px] leading-[1.65] text-[#CFCDDC]">{v.hero.sub}</p>
              <div className="hero-animate hero-delay-3 mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#" onClick={openWa(c.waDemo)} className={glassBtn} style={glow}>{c.hero.cta}{arrow}</a>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-5 hero-animate hero-delay-3">
              <div className={`${panel} bg-[#0B0E26]/70 p-6 max-w-[420px] ms-auto`}>
                <div className="grid grid-cols-3 gap-3">
                  {v.hero.nodes.slice(0, 3).map((n, i) => { const Icon = nodeIcons[i]; return (
                    <div key={n} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center"><span className={`${iconBox} w-9 h-9 mx-auto`} style={iconBg}><Icon className="w-4 h-4" strokeWidth={1.75} /></span><p className="mt-2 text-[11.5px] leading-tight text-[#D6D3E4]">{n}</p></div>
                  ); })}
                </div>
                <div className="relative my-4 rounded-2xl border border-[#A76CFF]/55 bg-[#772F9F]/25 px-4 py-4 text-center" style={glow}>
                  <p className="font-display text-[16px] font-semibold">{c.hero.hub}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#7CC8FF]/40 bg-[#3FA9F5]/10 px-3 py-1 text-[11.5px] text-[#CDEBFF]"><Sparkles className="w-3.5 h-3.5 animate-pulse" />{v.hero.ai}</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {v.hero.nodes.slice(3).map((n, i) => { const Icon = nodeIcons[i + 3]; return (
                    <div key={n} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center"><span className={`${iconBox} w-9 h-9 mx-auto`} style={iconBg}><Icon className="w-4 h-4" strokeWidth={1.75} /></span><p className="mt-2 text-[11.5px] leading-tight text-[#D6D3E4]">{n}</p></div>
                  ); })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B. PROBLEM -> SOLUTION */}
        <section id="problem" className="relative py-16 md:py-24">
          <div className={container}>
            <Title title={v.problem.t} center />
            <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-[820px] mx-auto">
              {c.problem.tools.map((t, i) => { const Icon = toolIcons[i]; return (
                <Reveal key={t} delay={i * 40}><span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.035] text-[13px] text-[#CFCDDC]"><Icon className="w-3.5 h-3.5 text-[#8D89A0]" />{t}</span></Reveal>
              ); })}
            </div>
            <Reveal delay={400} className="mt-8 flex flex-col items-center">
              <span className="h-12 w-px bg-gradient-to-b from-white/5 to-[#A76CFF]" />
              <div className="mt-2 rounded-[22px] border border-[#A76CFF]/55 px-8 py-5 text-center" style={{ ...iconBg, ...glow }}>
                <p className="font-display text-[clamp(1.4rem,3.2vw,2rem)] font-bold">{c.problem.result}</p>
              </div>
              <p className="mt-6 max-w-[600px] text-center text-[16px] md:text-[18px] leading-[1.6] text-[#E6E4F0]">{v.problem.x}</p>
            </Reveal>
          </div>
        </section>

        {/* C. SYN'IA */}
        <section id="synia" className="relative py-20 md:py-28 overflow-hidden bg-[#0A0C24]">
          <div className="absolute -top-32 start-1/2 -translate-x-1/2 w-[720px] h-[520px] rounded-full bg-[#772F9F]/25 blur-[140px] pointer-events-none" aria-hidden />
          <div className={`relative ${container}`}>
            <Reveal className="flex justify-center"><span className="inline-flex items-center gap-2 rounded-full border border-[#A76CFF]/50 bg-[#772F9F]/25 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E0CCFF]"><Sparkles className="w-4 h-4" />{v.ai.o}</span></Reveal>
            <Title title={v.ai.t} intro={v.ai.x} center />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {v.ai.items.map((it, i) => { const I = aiIcons[i]; return (
                <Reveal key={it.a} delay={i * 70} className="h-full">
                  <div className="h-full rounded-[20px] border border-[#A76CFF]/25 bg-gradient-to-b from-[#161238]/90 to-[#0E1030]/80 p-5 md:p-6">
                    <div className="flex items-center justify-between">
                      <span className={`${iconBox} w-10 h-10`} style={iconBg}><I className="w-5 h-5" strokeWidth={1.75} /></span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#A76CFF]/20 border border-[#A76CFF]/40 px-2.5 py-0.5 text-[11px] font-semibold text-[#E0CCFF]"><Sparkles className="w-3 h-3" />{v.ai.badge}</span>
                    </div>
                    <h3 className="mt-4 font-display text-[18px] font-semibold">{it.a}</h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-[#B8B5C8]">{it.d}</p>
                  </div>
                </Reveal>
              ); })}
            </div>
            <Reveal className="mt-8 mx-auto max-w-[680px] flex items-center justify-center gap-2 text-center text-[13.5px] text-[#B8B5C8]"><ShieldCheck className="w-4 h-4 text-[#7CC8FF] shrink-0" />{v.ai.note}</Reveal>
          </div>
        </section>

        {/* D. CRM */}
        <section id="crm" className="relative py-20 md:py-28">
          <div className={`${container} grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            <div>
              <Title overline={v.crm.o} title={v.crm.t} intro={v.crm.x} />
              <Reveal delay={100}><Points items={v.crm.points} /></Reveal>
            </div>
            <Reveal delay={150} className="relative">
              <ClientCard v={crm.v} rtl={rtl} />
              <AiCue text={v.crm.cue} className="mt-3 lg:mt-0 lg:absolute lg:-bottom-6 lg:-start-6 lg:max-w-[320px]" />
            </Reveal>
          </div>
        </section>

        {/* E. BOOKING */}
        <section id="booking" className="relative py-20 md:py-28 bg-[#0A0C24]">
          <div className={`${container} grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            <div className="lg:order-2">
              <Title overline={v.booking.o} title={v.booking.t} intro={v.booking.x} />
              <Reveal delay={100} className="mt-8"><Chain steps={v.booking.chain} rtl={rtl} tone="cyan" /></Reveal>
            </div>
            <div className="lg:order-1 flex justify-center">
            <Reveal delay={150} className="flex justify-center">
              <div dir="ltr" className="relative w-[300px] aspect-[9/19.5] rounded-[54px] p-[3px] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.95)]" style={{ background: 'linear-gradient(145deg,#8E8A96 0%,#3A3842 30%,#1C1B22 55%,#5A5763 100%)' }}>
                {/* side buttons */}
                <span className="absolute -left-[3px] top-[110px] h-7 w-[3px] rounded-l bg-[#4A4852]" />
                <span className="absolute -left-[3px] top-[155px] h-12 w-[3px] rounded-l bg-[#4A4852]" />
                <span className="absolute -left-[3px] top-[215px] h-12 w-[3px] rounded-l bg-[#4A4852]" />
                <span className="absolute -right-[3px] top-[170px] h-20 w-[3px] rounded-r bg-[#4A4852]" />
                <div className="h-full w-full rounded-[51px] bg-black p-[9px]">
                  <div className="relative h-full w-full overflow-hidden rounded-[43px] bg-[#F7F7FB] text-[#14142B]">
                    {/* status bar + dynamic island */}
                    <div className="relative h-12 flex items-center justify-between px-7 text-[13px] font-semibold">
                      <span>9:41</span>
                      <span className="absolute left-1/2 top-2.5 -translate-x-1/2 h-[30px] w-[96px] rounded-full bg-black" />
                      <span className="flex items-center gap-1">
                        <span className="flex items-end gap-[2px]">{[4, 6, 8, 10].map((h) => <span key={h} className="w-[3px] rounded-sm bg-[#14142B]" style={{ height: h }} />)}</span>
                        <span className="ms-1 h-[11px] w-[22px] rounded-[3px] border border-[#14142B]/60 p-[1.5px]"><span className="block h-full w-[80%] rounded-[1px] bg-[#14142B]" /></span>
                      </span>
                    </div>
                    <div dir={rtl ? 'rtl' : 'ltr'} className="absolute inset-x-0 top-12 bottom-0 flex flex-col">
                      {/* app header */}
                      <div className="px-4 pt-1 flex items-center gap-2.5">
                        <span className="h-8 w-8 rounded-full bg-white border border-[#E4E2EE] grid place-items-center"><ChevronRight className={`w-4 h-4 text-[#14142B] ${rtl ? '' : 'rotate-180'}`} /></span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-medium text-[#8D89A0]">{c.booking.app.step}</p>
                          <p className="text-[14px] font-bold leading-tight truncate">{c.booking.v[0]}</p>
                        </div>
                        <span className="h-8 w-8 rounded-full grid place-items-center text-[11px] font-bold text-white" style={{ background: 'linear-gradient(135deg,#3E1856,#772F9F)' }}>A</span>
                      </div>
                      <div className="mx-4 mt-2.5 h-1 rounded-full bg-[#E9E7F2] overflow-hidden"><div className="h-full w-2/3 rounded-full bg-[#772F9F]" /></div>

                      <div className="flex-1 overflow-hidden px-4 pt-3 space-y-2.5">
                        {/* services */}
                        <div className="space-y-1.5">
                          {c.booking.app.services.map((s, i) => (
                            <div key={s.n} className={`flex items-center gap-2.5 rounded-2xl p-2 ${i === 0 ? 'bg-white ring-2 ring-[#772F9F] shadow-[0_6px_16px_-10px_rgba(119,47,159,0.6)]' : 'bg-white/70 border border-[#E9E7F2]'}`}>
                              <span className={`h-8 w-8 rounded-xl grid place-items-center ${i === 0 ? 'bg-[#772F9F] text-white' : 'bg-[#EFEDF6] text-[#772F9F]'}`}>{i === 0 ? <Users className="w-4 h-4" /> : <Video className="w-4 h-4" />}</span>
                              <div className="flex-1 min-w-0"><p className="text-[12px] font-semibold truncate">{s.n}</p><p className="text-[10px] text-[#8D89A0]">{s.d}</p></div>
                              <span className={`h-4 w-4 rounded-full border-2 ${i === 0 ? 'border-[#772F9F] bg-[#772F9F] shadow-[inset_0_0_0_2px_white]' : 'border-[#CFCDDC]'}`} />
                            </div>
                          ))}
                        </div>

                        {/* dates */}
                        <div>
                          <p className="text-[11px] font-semibold text-[#5E5A75]">{c.booking.app.month}</p>
                          <div className="mt-1.5 grid grid-cols-5 gap-1.5">
                            {c.booking.app.days.map((d, i) => (
                              <div key={d} className={`rounded-xl py-1 text-center ${i === 1 ? 'bg-[#14142B] text-white' : 'bg-white border border-[#E9E7F2]'}`}>
                                <p className={`text-[9px] truncate px-0.5 ${i === 1 ? 'text-white/70' : 'text-[#8D89A0]'}`}>{d}</p>
                                <p className="text-[14px] font-bold leading-tight">{14 + i}</p>
                                <span className={`mx-auto mt-0.5 block h-1 w-1 rounded-full ${i === 3 ? 'bg-transparent' : i === 1 ? 'bg-[#C9A9FF]' : 'bg-[#1F8A55]'}`} />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* slots */}
                        {[[c.booking.app.morning, ['09:00', '10:30', '11:15']], [c.booking.app.afternoon, ['14:00', '15:30', '16:45']]].map(([label, slots]) => (
                          <div key={label as string}>
                            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#8D89A0]">{label as string}</p>
                            <div className="mt-1 grid grid-cols-3 gap-1.5">
                              {(slots as string[]).map((t) => (
                                <span key={t} className={`text-center text-[11px] font-medium py-1.5 rounded-lg ${t === '10:30' ? 'bg-[#772F9F] text-white' : t === '15:30' ? 'bg-[#F1F0F5] text-[#B8B5C8] line-through' : 'bg-white border border-[#E9E7F2]'}`}>{t}</span>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* advisor */}
                        <div className="flex items-center gap-2.5 rounded-2xl bg-white border border-[#E9E7F2] p-2">
                          <span className="h-7 w-7 rounded-full bg-gradient-to-br from-[#772F9F] to-[#3FA9F5] grid place-items-center text-[10px] font-semibold text-white">SI</span>
                          <div className="flex-1"><p className="text-[10px] text-[#8D89A0]">{c.booking.app.with}</p><p className="text-[11px] font-semibold">Salma Idrissi · {c.booking.app.role}</p></div>
                        </div>
                      </div>

                      {/* bottom sheet */}
                      <div className="rounded-t-[22px] bg-white px-4 pt-3 pb-6 shadow-[0_-10px_24px_-16px_rgba(20,20,43,0.35)]">
                        <div className="flex items-center gap-2 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1F8A55] shrink-0" />
                          <span className="font-semibold truncate">{c.booking.app.summary}</span>
                          <span className="ms-auto text-[#8D89A0] shrink-0">{c.booking.app.services[0].d.split('·')[0].trim()}</span>
                        </div>
                        <div className="mt-2.5 rounded-2xl text-white text-center text-[13px] font-semibold py-2.5" style={{ background: 'linear-gradient(135deg,#5E2580,#772F9F)' }}>{c.booking.v[3]}</div>
                      </div>
                    </div>
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 h-[5px] w-[120px] rounded-full bg-[#14142B]" />
                  </div>
                </div>
              </div>
            </Reveal>
            </div>
          </div>
        </section>

        {/* F. HR & PAYROLL */}
        <section id="rh" className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute -top-20 start-1/3 w-[500px] h-[500px] rounded-full bg-[#772F9F]/15 blur-[120px] pointer-events-none" aria-hidden />
          <div className={`relative ${container}`}>
            <Title overline={v.hr.o} title={v.hr.t} intro={v.hr.x} center />
            <Reveal delay={100} className="mt-12">
              <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
                {v.hr.life.map((s, i) => (
                  <li key={s} className="relative rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-3.5">
                    <span className="text-[11px] font-semibold text-[#A76CFF]">0{i + 1}</span>
                    <p className="mt-1 text-[13px] font-medium leading-snug text-white">{s}</p>
                    <span className="absolute inset-x-3 bottom-0 h-[2px] rounded-full" style={{ background: `linear-gradient(90deg,#772F9F,#3FA9F5)`, opacity: 0.35 + i * 0.08 }} />
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={150} className="mt-6 mx-auto max-w-[640px]">
              <div className={`${panel} p-6`}>
                <div className="flex items-center gap-3">
                  <span className="h-11 w-11 rounded-full bg-gradient-to-br from-[#772F9F] to-[#3FA9F5] grid place-items-center text-[14px] font-semibold">SI</span>
                  <div><p className="text-[15px] font-semibold">{teams.v[5]}</p><p className="text-[12px] text-[#B8B5C8]">{teams.v[6]}</p></div>
                </div>
                <div className="mt-6"><Chain steps={teams.v.slice(0, 5)} rtl={rtl} /></div>
                <div className="mt-6 rounded-2xl border border-[#3FA9F5]/30 bg-[#3FA9F5]/[0.07] p-4 flex items-center gap-3">
                  <Banknote className="w-5 h-5 text-[#7CC8FF]" />
                  <div className="flex-1"><p className="text-[13px] text-[#E6E4F0]">{teams.v[7]}</p><div className="mt-2"><Bar w="90%" tone="cyan" /></div></div>
                </div>
              </div>
              <AiCue text={v.hr.cue} className="mt-3" />
            </Reveal>
          </div>
        </section>

        {/* G. COLLABORATION */}
        <section id="collaboration" className="relative py-20 md:py-28 bg-[#0A0C24]">
          <div className={container}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Title overline={v.collab.o} title={v.collab.t} intro={v.collab.x} />
                <Reveal delay={100}><Points items={v.collab.points} /></Reveal>
              </div>
              <Reveal delay={150}>
              <div className={`${panel} p-5 space-y-3`}>
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="flex items-center gap-2 text-[13px] font-semibold min-w-0"><FileText className="w-4 h-4 text-[#3FA9F5] shrink-0" /><span className="truncate">{collab.v[8]}</span></p>
                    <div className="flex -space-x-2 rtl:space-x-reverse shrink-0">
                      <img src={avatarSalma} alt="" className="w-6 h-6 rounded-full object-cover ring-2 ring-[#772F9F]" />
                      <img src={avatarYoussef} alt="" className="w-6 h-6 rounded-full object-cover ring-2 ring-[#3FA9F5]" />
                      <img src={avatarKarim} alt="" className="w-6 h-6 rounded-full object-cover ring-2 ring-[#6EE7A0]" />
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="h-2 w-[90%] rounded bg-white/10" />
                    <div className="relative h-2 w-[75%] rounded bg-[#772F9F]/40"><span className="absolute -top-1 end-0 h-4 w-0.5 bg-[#A76CFF] animate-pulse" /></div>
                    <div className="h-2 w-[82%] rounded bg-white/10" />
                    <div className="relative h-2 w-[55%] rounded bg-[#3FA9F5]/30"><span className="absolute -top-1 end-0 h-4 w-0.5 bg-[#3FA9F5] animate-pulse" /></div>
                  </div>
                  <p className="mt-3 flex items-center gap-1.5 text-[11px] text-[#8D89A0]"><History className="w-3.5 h-3.5" />{collab.v[9]} · {collab.v[10]}</p>
                </div>
                <div className="grid sm:grid-cols-[1fr_170px] gap-3">
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-4">
                    <p className="flex items-center gap-1.5 text-[13px] font-semibold"><Hash className="w-4 h-4 text-[#A76CFF]" />{collab.v[0]}</p>
                    <div className="mt-3 space-y-2.5 text-[12.5px]">
                      <div className="flex gap-2.5"><img src={avatarSalma} alt="" className="h-7 w-7 rounded-full object-cover shrink-0" /><p className="rounded-xl rounded-ss-none bg-white/[0.06] px-3 py-2 text-[#E6E4F0]">{collab.v[1]}</p></div>
                      <div className="ms-9 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-[12px] text-[#CFCDDC]"><Paperclip className="w-3.5 h-3.5" />{collab.v[3]}</div>
                      <div className="flex gap-2.5"><img src={avatarYoussef} alt="" className="h-7 w-7 rounded-full object-cover shrink-0" /><p className="rounded-xl rounded-ss-none bg-white/[0.06] px-3 py-2 text-[#E6E4F0]">{collab.v[2]}</p></div>
                    </div>
                    <p className="mt-3 flex items-center gap-1.5 text-[11.5px] text-[#C9A8FF]"><MessagesSquare className="w-3.5 h-3.5" />{collab.v[11]} · {collab.v[12]}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-[#A76CFF]/35 bg-[#772F9F]/15 p-4">
                      <div className="flex items-center justify-between"><Video className="w-4 h-4 text-[#C9A9FF]" /><span className="flex items-center gap-1 text-[10px] text-[#FF8A8A]"><span className="w-1.5 h-1.5 rounded-full bg-[#FF5A5A] animate-pulse" />REC {collab.v[16]}</span></div>
                      <p className="mt-2 text-[13px] font-semibold">{collab.v[4]}</p>
                      <p className="text-[12px] text-[#B8B5C8]">{collab.v[5]}</p>
                      <span className="mt-3 inline-block text-[12px] px-3 py-1 rounded-full bg-white/10">{collab.v[6]}</span>
                    </div>
                    <div className="rounded-2xl border border-[#6EE7A0]/25 bg-[#1F8A4C]/10 p-3.5">
                      <p className="flex items-center gap-1.5 text-[12px] font-semibold text-[#A7F3C8]"><FileCheck2 className="w-3.5 h-3.5" />{collab.v[13]}</p>
                      <p className="mt-1 text-[11px] text-[#B8B5C8]">{collab.v[14]}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between text-[12px]"><span className="flex items-center gap-1.5 text-[#B8B5C8]"><Eye className="w-3.5 h-3.5 text-[#3FA9F5]" />{collab.v[17]} · {collab.v[18]}</span><span className="font-semibold text-white">82%</span></div>
                  <div className="mt-2"><Bar w="82%" tone="cyan" /></div>
                </div>
              </div>
                <AiCue text={v.collab.cue} className="mt-3" />
              </Reveal>
            </div>
            <Reveal className="mt-14">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#A76CFF]">{v.collab.ws}</p>
              <div className="mt-4 -mx-5 px-5 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
                {wsRoles.map((role, i) => (
                  <div key={c.workspaces.names[i]} className="snap-start shrink-0 w-[240px] sm:w-auto rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-display text-[15px] font-semibold">{c.workspaces.names[i]}</p>
                      <div className="flex -space-x-1.5 rtl:space-x-reverse">{['#772F9F', '#3FA9F5', '#A76CFF'].map((col) => <span key={col} className="h-5 w-5 rounded-full border-2 border-[#0E1030]" style={{ background: col }} />)}</div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">{role.tiles.slice(0, 4).map((x) => <span key={x} className="text-[11.5px] px-2 py-1 rounded-lg bg-white/[0.05] text-[#D6D3E4]">{x}</span>)}</div>
                    <p className="mt-3 flex items-center gap-2 text-[11.5px] text-[#9D99B2]"><Dot />{role.activity[0]}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* H. PROJECTS */}
        <section id="projets" className="relative py-20 md:py-28">
          <div className={`${container} grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            <div>
              <Title overline={v.projects.o} title={v.projects.t} intro={v.projects.x} />
              <Reveal delay={100} className="mt-8"><Chain steps={v.projects.flow} rtl={rtl} /></Reveal>
            </div>
            <Reveal delay={150}>
              <div className={`${panel} p-6`}>
                <div className="flex items-center justify-between">
                  <p className="text-[14px] font-semibold">{organise.v[6]}</p>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#3FA9F5]/15 text-[#7CC8FF] border border-[#3FA9F5]/30">{organise.v[7]}</span>
                </div>
                <div className="mt-6 space-y-3">
                  {organise.v.slice(0, 6).map((s, i) => (
                    <div key={s} className="grid grid-cols-[110px_1fr] items-center gap-3 text-[13px] text-[#CFCDDC]">
                      <span className="flex items-center gap-2">{i < 4 ? <CheckCircle2 className="w-4 h-4 text-[#7CC8FF]" /> : <Dot />}{s}</span>
                      <Bar w={`${[100, 88, 76, 62, 40, 28][i]}%`} tone={i < 4 ? 'cyan' : 'violet'} />
                    </div>
                  ))}
                </div>
              </div>
              <AiCue text={v.projects.cue} className="mt-3" />
            </Reveal>
          </div>
        </section>

        {/* I. FINANCE + MANAGEMENT */}
        <section id="finance" className="relative py-20 md:py-28 bg-[#0A0C24]">
          <div className={container}>
            <Title overline={v.finance.o} title={v.finance.t} intro={v.finance.x} center />
            <Reveal delay={80} className="mt-7 flex flex-wrap justify-center gap-2">
              {v.finance.points.map((p) => <span key={p} className="text-[13px] px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-[#D6D3E4]">{p}</span>)}
            </Reveal>
            <Reveal delay={150} className="mt-12 mx-auto max-w-[900px] relative">
              <PilotDashboard lang={lang} rtl={rtl} />
              <AiCue text={v.finance.cue} className="mt-3 lg:mt-0 lg:absolute lg:-top-5 lg:-end-8 lg:max-w-[300px]" />
            </Reveal>
          </div>
        </section>

        {/* J. SHOP */}
        <section id="boutique" className="relative py-20 md:py-28">
          <div className={`${container} grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center max-w-[1080px]`}>
            <div>
              <Reveal><p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#A76CFF]">{v.shop.o}<Opt t={v.shop.opt} /></p></Reveal>
              <Title title={v.shop.t} intro={v.shop.x} />
              <Reveal delay={100} className="mt-8"><Chain steps={c.shop.steps} rtl={rtl} /></Reveal>
            </div>
            <Reveal delay={150} className="flex justify-center pb-6">
                  <div className="relative w-[150px] md:w-[170px] rounded-[26px] p-[5px] bg-gradient-to-b from-[#C9C6D2] via-[#6E6B78] to-[#3A3844] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.7)]">
                    <div className="relative rounded-[21px] overflow-hidden bg-[#F7F5FA] text-[#1B1830] h-[300px] md:h-[330px] flex flex-col">
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3.5 rounded-full bg-black z-10" />
                      <div className="pt-7 px-3 pb-2 flex items-center justify-between">
                        <span className="text-[10px] font-bold">{c.shop.phone[0]}</span>
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </div>
                      <div className="px-2 grid grid-cols-2 gap-1.5">
                        {[prodOlive, prodCeramic, prodLeather, prodCoffee].map((img, k) => (
                          <div key={k} className={`rounded-lg bg-white p-1 ${k === 0 ? 'ring-2 ring-[#772F9F]' : ''}`}>
                            <img src={img} alt="" loading="lazy" width={816} height={816} className="w-full aspect-square rounded-md object-cover" />
                            <p className="mt-1 text-[8.5px] font-semibold leading-tight truncate">{c.shop.phone[5 + k]}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto px-2.5 pb-3 space-y-1.5">
                        <div className="rounded-lg bg-[#772F9F] text-white text-[10px] font-semibold text-center py-1.5">{c.shop.phone[2]}</div>
                        <div className="rounded-lg bg-[#E7F7EE] text-[#1F8A4C] text-[9.5px] font-semibold flex items-center justify-center gap-1 py-1"><CheckCircle2 className="w-3 h-3" />{c.shop.phone[3]}</div>
                      </div>
                    </div>
                    <p className="absolute -bottom-6 inset-x-0 text-center text-[10px] text-[#8D89A0]">{c.shop.phone[4]}</p>
                  </div>
            </Reveal>
          </div>
        </section>

        {/* K. TRAINING */}
        <section id="formation" className="relative py-16 md:py-24 bg-[#0A0C24]">
          <div className={`${container} grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            <Reveal delay={150} className="lg:order-2">
              <div className={`${panel} p-5 md:p-6`}>
                {(() => {
                  const covers = [courseOnboarding, courseCustomer, courseDigital]; const pct = [100, 65, 0]; const t = c.training.v;
                  const L = ({ fr: { m: 'modules', h: 'h', go: ['Revoir', 'Continuer', 'Commencer'], s: ['Terminé', 'En cours', 'Nouveau'] }, en: { m: 'modules', h: 'h', go: ['Review', 'Continue', 'Start learning'], s: ['Completed', 'In progress', 'New'] }, no: { m: 'moduler', h: 't', go: ['Se igjen', 'Fortsett', 'Start kurset'], s: ['Fullført', 'Pågår', 'Nytt'] }, ar: { m: 'وحدات', h: 'س', go: ['مراجعة', 'متابعة', 'ابدأ التعلم'], s: ['مكتمل', 'قيد التقدم', 'جديد'] } } as Record<string, { m: string; h: string; go: string[]; s: string[] }>)[lang] ?? { m: 'modules', h: 'h', go: ['Revoir', 'Continuer', 'Commencer'], s: ['Terminé', 'En cours', 'Nouveau'] };
                  const meta = [[6, 2], [8, 3], [5, 1.5]];
                  const order = [1, 0, 2];
                  return (<>
                  <div className="flex items-center justify-between mb-4"><p className="flex items-center gap-2 text-[14px] font-semibold"><GraduationCap className="w-4 h-4 text-[#C9A8FF]" />{t[3]}</p><span className="text-[11px] text-[#8D89A0]">3 / 12</span></div>
                  <div className="space-y-3">
                    {order.map((i, k) => {
                      const st = pct[i] === 100 ? 0 : pct[i] > 0 ? 1 : 2;
                      return (
                        <div key={i} className="flex gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2.5">
                          <div className="relative w-24 sm:w-32 shrink-0 rounded-xl overflow-hidden">
                            <img src={covers[i]} alt="" loading="lazy" width={992} height={672} className="absolute inset-0 w-full h-full object-cover" />
                            {st === 0 && <span className="absolute top-1.5 end-1.5 grid place-items-center w-5 h-5 rounded-full bg-[#3FA9F5]"><CheckCircle2 className="w-3.5 h-3.5 text-white" /></span>}
                          </div>
                          <div className="min-w-0 flex-1 py-0.5">
                            <div className="flex items-center gap-2"><span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${st === 0 ? 'bg-[#3FA9F5]/20 text-[#7CC8FF]' : st === 1 ? 'bg-[#A76CFF]/20 text-[#E0CCFF]' : 'bg-[#1F8A4C]/25 text-[#6EE7A0]'}`}>{L.s[st]}</span></div>
                            <p className="mt-1.5 text-[13.5px] font-semibold leading-snug">{t[i]}</p>
                            <p className="mt-0.5 text-[11px] text-[#8D89A0]">{meta[i][0]} {L.m} · {meta[i][1]} {L.h}</p>
                            <div className="mt-2 flex items-center gap-2"><Bar w={`${pct[i]}%`} tone={st === 0 ? 'cyan' : 'violet'} /><span className="text-[11px] text-[#B8B4CC] shrink-0">{pct[i]}%</span></div>
                            <button className={`mt-2.5 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11.5px] font-semibold ${k === 0 || st === 2 ? 'bg-gradient-to-r from-[#772F9F] to-[#A76CFF] text-white' : 'border border-white/15 text-[#E6E4F0]'}`}><PlayCircle className="w-3.5 h-3.5" />{L.go[st]}</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 flex items-center gap-2 rounded-xl border border-[#3FA9F5]/30 bg-[#3FA9F5]/10 px-4 py-3 text-[13px] text-[#CDEBFF]"><Award className="w-4 h-4" />{t[4]}</div>
                </>); })()}
              </div>
            </Reveal>
            <div className="lg:order-1">
              <Title overline={v.training.o} title={v.training.t} intro={v.training.x} />
            </div>
          </div>
        </section>

        {/* L. EVENTS & LIVE */}
        <section id="evenements" className="relative py-16 md:py-24">
          <div className={`${container} grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            <div>
              <Reveal><p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#A76CFF]">{v.events.o}<Opt t={v.events.opt} /></p></Reveal>
              <Title title={v.events.t} intro={v.events.x} />
            </div>
            <Reveal delay={150} className={`${panel} p-4`}>
                <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
                  <div className="relative h-48 md:h-56 grid place-items-center overflow-hidden">
                    <img src={liveImg} alt="" loading="lazy" width={1376} height={768} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07091D]/70 via-transparent to-transparent" />
                    <PlayCircle className="relative w-12 h-12 text-white/85 drop-shadow-lg" strokeWidth={1.25} />
                    <span className="absolute top-3 start-3 inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#E5484D]"><span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />{c.events.v[0]}</span>
                  </div>
                  <div className="p-4 bg-white/[0.03] flex items-center justify-between gap-3">
                    <div><p className="text-[14px] font-semibold">{c.events.v[1]}</p><p className="text-[12px] text-[#B8B5C8]">{c.events.v[2]} · {c.events.v[3]}</p></div>
                    <span className="text-[12px] px-3 py-1.5 rounded-full border border-[#A76CFF]/50 bg-[#772F9F]/30 whitespace-nowrap">{c.events.v[4]}</span>
                  </div>
                </div>
            </Reveal>
          </div>
        </section>

        {/* M. SECURITY */}
        <SecuritySection lang={lang} />

        {/* N. MODULARITY + FINAL CTA */}
        <section id="modules" className="relative py-20 md:py-28 bg-[#0A0C24]">
          <div className={container}>
            <Title title={v.modular.t} intro={v.modular.x} center />
            <Reveal delay={100} className="mt-12 mx-auto max-w-[1000px] rounded-[24px] border border-[#A76CFF]/30 p-3 md:p-4" style={{ background: 'linear-gradient(180deg,rgba(119,47,159,0.18),rgba(14,16,48,0.6))' }}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 rounded-2xl border border-[#A76CFF]/40 bg-[#772F9F]/20 px-4 py-3">
                <span className="flex items-center gap-2 text-[14px] font-semibold"><Sparkles className="w-4 h-4 text-[#C9A9FF]" />Syn’IA<span className="text-[#8D89A0]">+</span><BarChart3 className="w-4 h-4 text-[#7CC8FF]" />{v.modular.pilot}</span>
                <span className="text-[12px] text-[#CFCDDC]">{v.modular.layers} · {v.modular.layerX}</span>
              </div>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {v.modular.groups.map((g, i) => { const I = groupIcons[i]; return (
                  <div key={g} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0E1030]/80 px-3 py-3">
                    <span className={`${iconBox} w-8 h-8`} style={iconBg}><I className="w-4 h-4" strokeWidth={1.75} /></span>
                    <span className="text-[13.5px] font-medium leading-tight">{g}</span>
                  </div>
                ); })}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(60% 70% at 50% 100%, rgba(119,47,159,0.4) 0%, rgba(7,9,29,0) 70%)' }} aria-hidden />
          <Reveal className={`relative ${container} text-center`}>
            <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.02] text-[clamp(2.6rem,7.5vw,5.4rem)]">
              {c.final.title1}<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(100deg,#F7F7FB 0%,#C9A9FF 55%,#7CC8FF 100%)' }}>{c.final.title2}</span>
            </h2>
            <p className="mx-auto mt-7 max-w-[620px] text-[16px] md:text-[19px] leading-[1.65] text-[#CFCDDC]">{c.final.text}</p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" onClick={openWa(c.waDemo)} className={glassBtn} style={glow}>{c.final.cta}{arrow}</a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-[13px] text-[#8D89A0]">© ScandiTek — Casablanca & Oslo</footer>

      <a
        href="#"
        onClick={openWa(c.waDemo)}
        className={`fixed z-40 bottom-8 md:bottom-10 ${rtl ? 'left-5 md:left-8' : 'right-5 md:right-8'} inline-flex items-center gap-2 h-12 px-5 rounded-full text-[14px] font-semibold text-white border border-[#A76CFF]/50 backdrop-blur-xl whitespace-nowrap transition-all duration-500 ${showFloating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        style={{ background: 'linear-gradient(145deg, rgba(62,24,86,0.92) 0%, rgba(94,37,128,0.88) 40%, rgba(119,47,159,0.78) 100%)', ...glow }}
      >
        {c.floating}{arrow}
      </a>
    </div>
  );
};

export default Business;
