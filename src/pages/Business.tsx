import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ArrowRight, Users, FolderKanban, UserRound, Wallet, FileText, Video, Mail, MessageSquare, Cloud, Contact,
  UserCog, GraduationCap, CalendarCheck, Sparkles, CheckCircle2, Hash, Paperclip, Radio, Award, ShoppingBag,
  PlayCircle, ChevronRight, History, MessagesSquare, FileCheck2, Eye, Banknote, Search, ShieldCheck, BarChart3,
} from 'lucide-react';
import { FolderOpen, Lock, PenLine, ListChecks, Lightbulb, Database } from 'lucide-react';
import avatarSalma from '@/assets/avatar-salma.jpg';
import avatarYoussef from '@/assets/avatar-youssef.jpg';
import avatarKarim from '@/assets/avatar-karim.jpg';
import { useLanguage } from '@/i18n/LanguageContext';
import business from '@/i18n/business';
import LanguageSelector from '@/components/portal/LanguageSelector';
import ClientCard from '@/components/business/ClientCard';
import PilotDashboard from '@/components/business/PilotDashboard';
import SecuritySection from '@/components/business/SecuritySection';
import businessV2 from '@/i18n/businessV2';
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
  const v = businessV2[lang] ?? businessV2.fr;
  const wsRoles = WORKSPACE_ROLES[lang as keyof typeof WORKSPACE_ROLES] ?? WORKSPACE_ROLES.fr;
  const groupIcons = [Contact, UserCog, Users, Wallet];
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


  const nodeIcons = [Contact, UserCog, Users, Wallet];
  const toolIcons = [Mail, MessageSquare, Video, Cloud, FolderKanban, Contact, UserCog, Wallet, GraduationCap, CalendarCheck];
  const aiIcons = [Video, PenLine, Search, Database, ListChecks, Lightbulb];
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
                <div className="grid grid-cols-2 gap-3">
                  {v.hero.nodes.slice(0, 2).map((n, i) => { const Icon = nodeIcons[i]; return (
                    <div key={n} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center"><span className={`${iconBox} w-9 h-9 mx-auto`} style={iconBg}><Icon className="w-4 h-4" strokeWidth={1.75} /></span><p className="mt-2 text-[11.5px] leading-tight text-[#D6D3E4]">{n}</p></div>
                  ); })}
                </div>
                <div className="relative my-4 rounded-2xl border border-[#A76CFF]/55 bg-[#772F9F]/25 px-4 py-4 text-center" style={glow}>
                  <p className="font-display text-[16px] font-semibold">{c.hero.hub}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#7CC8FF]/40 bg-[#3FA9F5]/10 px-3 py-1 text-[11.5px] text-[#CDEBFF]"><Sparkles className="w-3.5 h-3.5 animate-pulse" />{v.hero.ai}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {v.hero.nodes.slice(2).map((n, i) => { const Icon = nodeIcons[i + 2]; return (
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


        {/* D1. CLIENTS & VENTES */}
        <section id="clients" className="relative py-20 md:py-28">
          <div className={container}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Title overline={v.crm.o} title={v.crm.t} intro={v.crm.x} />
                <Reveal delay={100}><Points items={v.crm.points} /></Reveal>
              </div>
              <Reveal delay={150} className="relative space-y-3">
                <ClientCard v={crm.v} rtl={rtl} />
                <div className="rounded-2xl border border-[#3FA9F5]/30 bg-[#3FA9F5]/[0.06] p-4">
                  <p className="flex items-center gap-2 text-[13px] font-semibold"><CalendarCheck className="w-4 h-4 text-[#7CC8FF]" />{v.booking.o}</p>
                  <div className="mt-3"><Chain steps={v.booking.chain} rtl={rtl} tone="cyan" /></div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={100} className="mt-12">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8D89A0]">{v.opts}</p>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                {[[v.shop.o, v.shop.t, v.shop.x, ShoppingBag], [v.events.o, v.events.t, v.events.x, Radio]].map(([o, t, x, I]) => ((o: string, t: string, x: string, Icon: typeof ShoppingBag) => (
                  <div key={o} className="flex gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-4">
                    <span className="grid place-items-center w-9 h-9 rounded-xl border border-white/15 text-[#B8B5C8] shrink-0"><Icon className="w-4 h-4" /></span>
                    <div className="min-w-0"><p className="text-[14px] font-semibold">{o}<Opt t={v.shop.opt} /></p><p className="mt-1 text-[12.5px] leading-snug text-[#9D99B2]">{x}</p></div>
                  </div>
                ))(o as string, t as string, x as string, I as typeof ShoppingBag))}
              </div>
            </Reveal>
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
                <div className="mt-6 rounded-2xl border border-[#3FA9F5]/30 bg-[#3FA9F5]/[0.07] p-4 flex items-center gap-3">
                  <Banknote className="w-5 h-5 text-[#7CC8FF]" />
                  <div className="flex-1"><p className="text-[13px] text-[#E6E4F0]">{teams.v[7]}</p><div className="mt-2"><Bar w="90%" tone="cyan" /></div></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={180} className="mt-6 mx-auto max-w-[640px]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="flex items-center gap-2 text-[14px] font-semibold"><GraduationCap className="w-4 h-4 text-[#C9A8FF]" />{v.training.o}</p>
                <p className="mt-1 text-[13px] text-[#B8B5C8]">{v.training.x}</p>
                <div className="mt-4 space-y-2.5">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="grid grid-cols-[1fr_90px_36px] items-center gap-3 text-[12.5px] text-[#E6E4F0]">
                      <span className="truncate">{c.training.v[i]}</span><Bar w={`${[100, 65, 10][i]}%`} tone={i === 0 ? 'cyan' : 'violet'} /><span className="text-[11px] text-[#8D89A0]">{[100, 65, 10][i]}%</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 flex items-center gap-2 text-[12px] text-[#CDEBFF]"><Award className="w-4 h-4" />{c.training.v[4]}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MID CTA */}
        <section className="relative py-14 md:py-16">
          <Reveal className={`${container} flex flex-col md:flex-row items-center justify-between gap-6 rounded-[24px] border border-[#A76CFF]/35 bg-gradient-to-r from-[#772F9F]/25 to-[#0E1030]/60 px-6 py-8 md:px-10`}>
            <p className="font-display text-[20px] md:text-[24px] font-semibold text-center md:text-start max-w-[620px]">{v.mid.t}</p>
            <a href="#" onClick={openWa(c.waDemo)} className={glassBtn} style={glow}>{v.mid.cta}{arrow}</a>
          </Reveal>
        </section>

        {/* G. COLLABORATION */}
        <section id="collaboration" className="relative py-20 md:py-28 bg-[#0A0C24]">
          <div className={container}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Title overline={v.collab.o} title={v.collab.t} intro={v.collab.x} />
                <Reveal delay={100} className="mt-7 grid grid-cols-2 gap-3">
                  {v.collab.groups.map((g) => (
                    <div key={g.h} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#A76CFF]">{g.h}</p>
                      <ul className="mt-3 space-y-2">{g.items.map((p) => <li key={p} className="flex items-start gap-2 text-[13.5px] leading-snug text-[#E6E4F0]"><CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-[#7CC8FF] shrink-0" />{p}</li>)}</ul>
                    </div>
                  ))}
                </Reveal>
              </div>
              <Reveal delay={150}>
              <div className={`${panel} p-5 space-y-3`}>
                <div className="rounded-2xl border border-[#3FA9F5]/25 bg-[#3FA9F5]/[0.06] p-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="flex items-center gap-2 text-[13px] font-semibold"><Database className="w-4 h-4 text-[#7CC8FF]" />{v.collab.store[0]}</p>
                    <span className="flex items-center gap-1 text-[10.5px] text-[#B8B5C8]"><Lock className="w-3 h-3" />{v.collab.store[5]}</span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {v.collab.store.slice(1, 5).map((f) => (
                      <div key={f} className="flex items-center gap-1.5 rounded-lg bg-white/[0.05] border border-white/[0.07] px-2.5 py-2 text-[11.5px] text-[#E6E4F0] min-w-0"><FolderOpen className="w-3.5 h-3.5 text-[#C9A8FF] shrink-0" /><span className="truncate">{f}</span></div>
                    ))}
                  </div>
                </div>
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
            <Reveal className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-6 items-center rounded-[24px] border border-white/10 bg-white/[0.02] p-5 md:p-7">
              <div>
                <p className="flex items-center gap-2 text-[15px] font-semibold"><FolderKanban className="w-4 h-4 text-[#7CC8FF]" />{v.projects.o}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#B8B5C8]">{v.projects.x}</p>
                <div className="mt-4"><Chain steps={v.projects.flow} rtl={rtl} /></div>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-[#0E1030]/70 p-4">
                <div className="flex items-center justify-between"><p className="text-[13px] font-semibold">{organise.v[6]}</p><span className="text-[11px] px-2.5 py-1 rounded-full bg-[#3FA9F5]/15 text-[#7CC8FF] border border-[#3FA9F5]/30">{organise.v[7]}</span></div>
                <div className="mt-4 space-y-2.5">
                  {organise.v.slice(0, 4).map((st, i) => (
                    <div key={st} className="grid grid-cols-[110px_1fr] items-center gap-3 text-[12.5px] text-[#CFCDDC]"><span className="flex items-center gap-2">{i < 2 ? <CheckCircle2 className="w-3.5 h-3.5 text-[#7CC8FF]" /> : <Dot />}{st}</span><Bar w={`${[100, 80, 55, 30][i]}%`} tone={i < 2 ? 'cyan' : 'violet'} /></div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* I. FINANCE + MANAGEMENT */}
        <section id="finance" className="relative py-20 md:py-28">
          <div className={container}>
            <Title overline={v.finance.o} title={v.finance.t} intro={v.finance.x} center />
            <Reveal delay={80} className="mt-8 mx-auto max-w-[900px] grid sm:grid-cols-2 gap-4">
              {[v.finance.ops, v.finance.rep].map((g, k) => (
                <div key={g.h} className={`rounded-2xl border p-4 ${k ? 'border-[#3FA9F5]/30 bg-[#3FA9F5]/[0.06]' : 'border-white/10 bg-white/[0.03]'}`}>
                  <p className="flex items-center gap-2 text-[13px] font-semibold">{k ? <BarChart3 className="w-4 h-4 text-[#7CC8FF]" /> : <Wallet className="w-4 h-4 text-[#C9A8FF]" />}{g.h}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">{g.items.map((p) => <span key={p} className="text-[12.5px] px-2.5 py-1 rounded-lg bg-white/[0.05] text-[#D6D3E4]">{p}</span>)}</div>
                </div>
              ))}
            </Reveal>
            <Reveal delay={150} className="mt-12 mx-auto max-w-[900px] relative">
              <PilotDashboard lang={lang} rtl={rtl} />
            </Reveal>
          </div>
        </section>

        {/* L. SYN'IA — short text-only */}
        <section id="synia" className="relative py-14 md:py-16 border-t border-white/5">
          <Reveal className={`${container} max-w-[760px] text-center`}>
            <p className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#C9A9FF]"><Sparkles className="w-3.5 h-3.5" />{v.ai.o}</p>
            <h2 className="mt-3 font-display text-[22px] md:text-[28px] font-semibold leading-tight">{v.ai.t}</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[#B8B5C8]">{v.ai.x}</p>
          </Reveal>
        </section>

        {/* M. SECURITY */}
        <SecuritySection lang={lang} />

        {/* N. CLOSING: modularity + final CTA */}
        <section id="modules" className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(60% 70% at 50% 100%, rgba(119,47,159,0.4) 0%, rgba(7,9,29,0) 70%)' }} aria-hidden />
          <div className={`relative ${container}`}>
            <Title title={v.modular.t} intro={v.modular.x} center />
            <Reveal delay={100} className="mt-10 mx-auto max-w-[960px]">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                {v.modular.groups.map((g, i) => { const I = groupIcons[i]; return (
                  <div key={g} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0E1030]/80 px-3 py-3">
                    <span className={`${iconBox} w-8 h-8`} style={iconBg}><I className="w-4 h-4" strokeWidth={1.75} /></span>
                    <span className="text-[13.5px] font-medium leading-tight">{g}</span>
                  </div>
                ); })}
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12.5px] text-[#9D99B2]">
                <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#C9A9FF]" />Syn’IA · {v.modular.layers}</span>
                <span>{v.modular.optL} : {v.shop.o}, {v.events.o}</span>
              </div>
            </Reveal>
            <Reveal className="mt-20 text-center">
              <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.04] text-[clamp(2.2rem,6vw,4.4rem)]">
                {v.final.t1}<br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(100deg,#F7F7FB 0%,#C9A9FF 55%,#7CC8FF 100%)' }}>{v.final.t2}</span>
              </h2>
              <p className="mx-auto mt-6 max-w-[560px] text-[16px] md:text-[18px] leading-[1.6] text-[#CFCDDC]">{v.final.x}</p>
              <div className="mt-9 flex justify-center"><a href="#" onClick={openWa(c.waDemo)} className={glassBtn} style={glow}>{v.final.cta}{arrow}</a></div>
            </Reveal>
          </div>
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
