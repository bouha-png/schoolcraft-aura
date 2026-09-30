import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ArrowRight, Users, FolderKanban, UserRound, Wallet, FileText, Video, Mail, MessageSquare, Cloud, Contact,
  UserCog, GraduationCap, CalendarCheck, Sparkles, CheckCircle2, Hash, Paperclip, Radio, Award, ShoppingBag,
  PlayCircle, ChevronRight, History, MessagesSquare, FileCheck2, Eye, Banknote, Search, ShieldCheck, BarChart3,
} from 'lucide-react';
import { IdCard, Receipt, PiggyBank, CreditCard, Coins, LayoutDashboard, Rss, LayoutGrid, ListChecks, Vote, Clock, Plane, TrendingUp, FolderOpen, Lock, Database, KeyRound, Layers, Headphones, Package, Store, MonitorPlay, CalendarDays, Handshake } from 'lucide-react';
import avatarSalma from '@/assets/avatar-salma.jpg';
import avatarYoussef from '@/assets/avatar-youssef.jpg';
import avatarKarim from '@/assets/avatar-karim.jpg';
import { useLanguage } from '@/i18n/LanguageContext';
import business from '@/i18n/business';
import LanguageSelector from '@/components/portal/LanguageSelector';
import ClientCard from '@/components/business/ClientCard';
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

const Hub = ({ children, badge }: { children: ReactNode; badge: ReactNode }) => (
  <span className="relative grid place-items-center w-24 h-24 md:w-28 md:h-28 rounded-[30%] border border-[#A5F3EC]/60 bg-gradient-to-br from-[#2DD4C4] via-[#1FB5C9] to-[#7B5CF0] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_60px_-5px_rgba(45,212,196,0.8)]">
    {children}
    <span className="absolute -bottom-2 -end-2 grid place-items-center w-9 h-9 rounded-xl border border-[#E2D4FF]/50 bg-gradient-to-br from-[#8B4FE0] to-[#5B3FC8] text-white shadow-lg">{badge}</span>
  </span>
);

const Orbit = ({ items, icons, center, name, sub, dense }: { items: string[]; icons: typeof Users[]; center: ReactNode; name: string; sub: string; dense?: boolean }) => (
  <div className={`relative mx-auto aspect-square w-full ${dense ? 'max-w-[540px]' : 'max-w-[460px]'}`}>
    <div className="absolute inset-[14%] rounded-full border border-dashed border-[#A76CFF]/30" />
    <div className="absolute inset-[30%] rounded-full bg-[#772F9F]/20 blur-2xl" aria-hidden />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
      {center}
      <p className="mt-3 text-[14px] font-semibold">{name}</p>
      <p className="text-[11.5px] text-[#B8B5C8]">{sub}</p>
    </div>
    {items.map((o, i) => {
      const Icon = icons[i];
      const ang = (i / items.length) * 2 * Math.PI - Math.PI / 2;
      return (
        <div key={o} className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center ${dense ? 'w-[66px] md:w-[92px]' : 'w-[84px] md:w-[96px]'}`} style={{ left: `${50 + (dense ? 39 : 36) * Math.cos(ang)}%`, top: `${50 + (dense ? 39 : 36) * Math.sin(ang)}%` }}>
          <span className={`grid place-items-center ${dense ? 'w-9 h-9 md:w-11 md:h-11' : 'w-11 h-11 md:w-12 md:h-12'} rounded-[30%] border border-[#D9C2FF]/60 bg-gradient-to-br from-[#B57CFF]/85 via-[#8B4FE0]/75 to-[#5B8CFF]/70 backdrop-blur-xl text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_30px_-10px_rgba(167,108,255,1)]`}><Icon className={dense ? "w-4 h-4 md:w-5 md:h-5" : "w-5 h-5"} strokeWidth={1.75} /></span>
          <p className={`mt-1.5 text-center ${dense ? "text-[9.5px] md:text-[11px]" : "text-[10.5px] md:text-[11.5px]"} leading-tight text-[#E6E4F0]`}>{o}</p>
        </div>
      );
    })}
  </div>
);

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
  const [collab, organise, teams, , , crm] = c.universes;

  const Points = ({ items, single }: { items: string[]; single?: boolean }) => (
    <ul className={`mt-7 grid ${single ? '' : 'sm:grid-cols-2'} gap-x-6 gap-y-2.5`}>
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
        {/* 1. HERO */}
        <section id="hero" className="relative md:min-h-[90vh] flex items-center pb-4 md:pb-0 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt={c.hero.imgAlt} width={1376} height={768} className="w-full h-full object-cover" style={{ objectPosition: 'center right', transform: rtl ? 'scaleX(-1)' : undefined }} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(${rtl ? 270 : 90}deg, rgba(7,9,29,0.97) 0%, rgba(7,9,29,0.82) 38%, rgba(7,9,29,0.45) 66%, rgba(7,9,29,0.2) 100%)` }} aria-hidden />
            <div className="absolute inset-x-0 bottom-0 h-48" style={{ background: 'linear-gradient(180deg, rgba(7,9,29,0) 0%, #07091D 100%)' }} aria-hidden />
          </div>
          <div className={`relative z-10 ${container} pt-32 pb-24 md:pt-40 md:pb-32`}>
            <div className="max-w-[720px]">
              <p className="hero-animate hero-delay-1 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#A76CFF]">{c.hero.label}</p>
              <h1 className="hero-animate hero-delay-1 mt-6 font-display font-bold tracking-[-0.02em] leading-[1.06] text-[clamp(2.2rem,5.8vw,4rem)] text-[#F7F7FB]">
                {v.hero.t1}<br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(100deg,#F7F7FB 0%,#C9A9FF 55%,#7CC8FF 100%)' }}>{v.hero.t2}</span>
              </h1>
              <p className="hero-animate hero-delay-2 mt-7 max-w-[600px] text-[16px] md:text-[18px] leading-[1.65] text-[#CFCDDC]">{v.hero.sub}</p>
              <div className="hero-animate hero-delay-3 mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#" onClick={openWa(c.waDemo)} className={glassBtn} style={glow}>{v.final.cta}{arrow}</a>
                <a href="#clients" className={ghostBtn}>{v.hero.cta2}</a>
              </div>
              <p className="hero-animate hero-delay-3 mt-8 flex items-center gap-2 text-[13.5px] text-[#B8B5C8]"><Sparkles className="w-4 h-4 text-[#C9A9FF]" />{v.hero.ai}</p>
            </div>
          </div>
        </section>

        {/* 2A. DÉVELOPPEZ VOTRE ACTIVITÉ */}
        <section id="clients" className="relative pt-10 pb-20 md:py-28">
          <div className={container}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Title overline={v.grow.o} title={v.grow.t} intro={v.grow.x} />
                <Reveal delay={100}><Points items={v.grow.points} /></Reveal>
              </div>
              <Reveal delay={150}>
                <Orbit dense items={v.grow.orbit} icons={[Users, TrendingUp, BarChart3, FileText, Mail, CalendarCheck, History, Package, Store, MonitorPlay, CalendarDays]}
                  center={<Hub badge={<Handshake className="w-[18px] h-[18px]" strokeWidth={1.8} />}><Contact className="w-12 h-12 md:w-14 md:h-14" strokeWidth={1.5} /></Hub>}
                  name={v.grow.tag} sub={v.grow.o} />
              </Reveal>
            </div>
            <Reveal delay={100} className="mt-10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8D89A0]">{v.grow.opts}</p>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                {([[v.grow.shop, ShoppingBag], [v.grow.events, Radio]] as const).map(([o, Icon]) => (
                  <div key={o.o} className="flex items-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-4">
                    <span className="grid place-items-center w-9 h-9 rounded-xl border border-white/15 text-[#B8B5C8] shrink-0"><Icon className="w-4 h-4" /></span>
                    <div className="min-w-0"><p className="text-[14px] font-semibold">{o.o}<Opt t={v.grow.optL} /></p><p className="mt-1 text-[12.5px] text-[#9D99B2]">{o.x}</p></div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 2B. GÉREZ VOS ÉQUIPES */}
        <section id="rh" className="relative py-20 md:py-28 overflow-hidden bg-[#0A0C24]">
          <div className={container}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <Reveal delay={150} className="order-2 lg:order-1">
                <Orbit items={v.team.orbit} icons={[Banknote, FileText, Clock, CalendarCheck, Plane, GraduationCap, Award, TrendingUp, LayoutDashboard]}
                  center={<Hub badge={<IdCard className="w-[18px] h-[18px]" strokeWidth={1.8} />}>
                    <svg viewBox="0 0 64 64" className="w-14 h-14 md:w-16 md:h-16"><defs><linearGradient id="empg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FFFFFF" /><stop offset="1" stopColor="#E0FBF8" /></linearGradient></defs><circle cx="32" cy="22" r="11" fill="url(#empg)" /><path d="M10 56c0-12 10-19 22-19s22 7 22 19z" fill="url(#empg)" opacity="0.9" /><path d="M28 37l4 7 4-7" fill="#1FB5C9" /></svg>

                  </Hub>}
                  name={v.team.emp} sub={v.team.o} />
              </Reveal>
              <div className="order-1 lg:order-2">
                <Title overline={v.team.o} title={v.team.t} intro={v.team.x} />
                <Reveal delay={100}><Points items={v.team.points} /></Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 2C. ORGANISEZ LE TRAVAIL */}
        <section id="collaboration" className="relative py-20 md:py-28">
          <div className={container}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Title overline={v.work.o} title={v.work.t} intro={v.work.x} />
                <Reveal delay={100}><Points items={v.work.points} single /></Reveal>
              </div>
              <Reveal delay={150}>
                <Orbit dense items={v.work.orbit} icons={[MessageSquare, Mail, Rss, Users, LayoutGrid, Video, Database, Cloud, FileText, FolderKanban, ListChecks, Vote]}
                  center={<Hub badge={<Video className="w-[18px] h-[18px]" strokeWidth={1.8} />}><Users className="w-12 h-12 md:w-14 md:h-14" strokeWidth={1.5} /></Hub>}
                  name={v.work.team} sub={v.work.teamSub} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2D. PILOTEZ VOS FINANCES */}
        <section id="finance" className="relative py-20 md:py-28 bg-[#0A0C24]">
          <div className={container}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Title overline={v.fin.o} title={v.fin.t} intro={v.fin.x} />
                <Reveal delay={100}><Points items={v.fin.points} single /></Reveal>
              </div>
              <Reveal delay={150}>
                <Orbit items={v.fin.orbit} icons={[FileText, Receipt, PiggyBank, FolderKanban, CheckCircle2, CreditCard, BarChart3, LayoutDashboard]}
                  center={<Hub badge={<Wallet className="w-[18px] h-[18px]" strokeWidth={1.8} />}>
                    <svg viewBox="0 0 64 64" className="w-14 h-14 md:w-16 md:h-16" fill="none" aria-hidden="true">
                      <path d="M8 54h48" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
                      <rect x="12" y="38" width="8" height="14" rx="2" fill="currentColor" fillOpacity="0.35" />
                      <rect x="24" y="30" width="8" height="22" rx="2" fill="currentColor" fillOpacity="0.5" />
                      <rect x="36" y="24" width="8" height="28" rx="2" fill="currentColor" fillOpacity="0.7" />
                      <rect x="48" y="14" width="8" height="38" rx="2" fill="currentColor" fillOpacity="0.9" />
                      <path d="M10 34 L24 24 L36 20 L52 8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M45 8h7v7" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Hub>}
                  name={v.fin.center} sub={v.fin.o} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. CONNECTED PLATFORM */}
        <section id="flow" className="relative py-20 md:py-24">
          <div className={container}>
            <Title overline={v.flow.o} title={v.flow.t} center />
            <Reveal delay={100} className="mt-10 mx-auto max-w-[900px] space-y-4">
              {[v.flow.a, v.flow.b].map((steps, k) => (
                <div key={k} className={`flex flex-wrap justify-center items-center gap-y-3 ${k ? 'opacity-70' : ''}`}>
                  {steps.map((s, i) => (
                    <div key={s + i} className="flex items-center">
                      <span className={`text-[13.5px] font-medium px-4 py-2 rounded-full border ${i === steps.length - 1 ? 'border-[#3FA9F5]/40 bg-[#3FA9F5]/10 text-[#CDEBFF]' : k ? 'border-white/10 bg-white/[0.03] text-[#D6D3E4]' : 'border-[#A76CFF]/40 bg-[#772F9F]/20 text-white'}`}>{s}</span>
                      {i < steps.length - 1 && <ChevronRight className={`mx-1.5 w-4 h-4 text-[#8D89A0] ${rtl ? 'rotate-180' : ''}`} />}
                    </div>
                  ))}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* 4. SYN'IA — text only */}
        <section id="synia" className="relative py-14 md:py-16 border-t border-white/5">
          <Reveal className={`${container} max-w-[760px] text-center`}>
            <p className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#C9A9FF]"><Sparkles className="w-3.5 h-3.5" />{v.ai.o}</p>
            <h2 className="mt-3 font-display text-[22px] md:text-[28px] font-semibold leading-tight">{v.ai.t}</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[#B8B5C8]">{v.ai.x}</p>
          </Reveal>
        </section>

        {/* 5. MODULARITY */}
        <section id="modules" className="relative py-16 md:py-20 border-t border-white/5">
          <div className={container}>
            <Title title={v.modular.t} intro={v.modular.x} center />
            <Reveal delay={100} className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[14px] text-[#D6D3E4] max-w-[820px] mx-auto">
              {v.modular.items.map((m, i) => (
                <span key={m} className="flex items-center gap-4">{m}{i < v.modular.items.length - 1 && <span className="text-[#A76CFF]">·</span>}</span>
              ))}
            </Reveal>
          </div>
        </section>

        {/* 6. TRUST */}
        <section id="trust" className="relative py-16 md:py-20 bg-[#0A0C24]">
          <div className={container}>
            <Title overline={v.trust.o} title={v.trust.t} center />
            <Reveal delay={100} className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {v.trust.items.map(([h, d], k) => { const I = [KeyRound, ShieldCheck, Layers, Headphones][k]; return (
                <div key={h} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <span className={`${iconBox} w-9 h-9`} style={iconBg}><I className="w-4 h-4" /></span>
                  <p className="mt-4 font-semibold text-[15px]">{h}</p>
                  <p className="mt-1.5 text-[13px] leading-[1.6] text-[#B8B5C8]">{d}</p>
                </div>
              ); })}
            </Reveal>
          </div>
        </section>

        {/* 6B. PARTNER */}
        <section id="partenaire" className="relative py-16 md:py-20">
          <Reveal className={`${container} max-w-[860px] text-center`}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2DD4C4]">{v.partner.o}</p>
            <h2 className="mt-3 font-display text-[26px] md:text-[36px] font-bold tracking-[-0.02em] leading-tight">{v.partner.t}</h2>
            <p className="mt-4 text-[15px] md:text-[17px] leading-relaxed text-[#B8B5C8]">{v.partner.x}</p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2">
              {v.partner.steps.map((st, i) => (
                <div key={st} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2">
                  <span className="inline-flex items-center gap-2.5 rounded-full border border-[#2DD4C4]/35 bg-gradient-to-r from-[#2DD4C4]/15 to-[#7B5CF0]/15 px-4 py-2 text-[13.5px] font-medium text-white whitespace-nowrap">
                    <span className="grid place-items-center w-6 h-6 rounded-full bg-gradient-to-br from-[#2DD4C4] to-[#7B5CF0] text-[11px] font-bold">{i + 1}</span>{st}
                  </span>
                  {i < v.partner.steps.length - 1 && <ChevronRight className={`w-4 h-4 text-[#8D89A0] rotate-90 sm:rotate-0 ${rtl ? 'sm:rotate-180' : ''}`} />}
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 7. FINAL CTA */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(60% 70% at 50% 100%, rgba(119,47,159,0.4) 0%, rgba(7,9,29,0) 70%)' }} aria-hidden />
          <Reveal className={`relative ${container} text-center`}>
            <h2 className="mx-auto max-w-[820px] font-display font-bold tracking-[-0.02em] leading-[1.12] text-[clamp(1.8rem,4.4vw,3rem)]">{v.final.t}</h2>
            <div className="mt-9 flex justify-center"><a href="#" onClick={openWa(c.waDemo)} className={glassBtn} style={glow}>{v.final.cta}{arrow}</a></div>
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
