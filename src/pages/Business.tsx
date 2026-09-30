import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ArrowRight, Users, FolderKanban, UserRound, Wallet, FileText, Video, Mail, MessageSquare, Cloud, Contact,
  UserCog, GraduationCap, CalendarCheck, Sparkles, CheckCircle2, Hash, Paperclip, Radio, Award, ShoppingBag,
  PlayCircle, Calendar, ChevronRight,
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import business from '@/i18n/business';
import LanguageSelector from '@/components/portal/LanguageSelector';
import scanditekLogo from '@/assets/scanditek-logo.png.asset.json';
import heroImg from '@/assets/business-hero.jpg';
import prodOlive from '@/assets/prod-olive.jpg';
import prodCeramic from '@/assets/prod-ceramic.jpg';
import prodLeather from '@/assets/prod-leather.jpg';
import prodCoffee from '@/assets/prod-coffee.jpg';
import courseOnboarding from '@/assets/course-onboarding-v2.jpg';
import courseCustomer from '@/assets/course-customer.jpg';
import courseDigital from '@/assets/course-digital-v2.jpg';
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

  const nodeIcons = [Users, FolderKanban, UserRound, Wallet, FileText, Video];
  const toolIcons = [Mail, MessageSquare, Video, Cloud, FolderKanban, Contact, UserCog, Wallet, GraduationCap, CalendarCheck];
  const [collab, organise, teams, pilot, crm] = c.universes;

  const Universe = ({ u, visual, flip }: { u: typeof collab; visual: ReactNode; flip?: boolean }) => (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className={flip ? 'lg:order-2' : ''}>
        <Title overline={u.overline} title={u.title} intro={u.text} />
        <Reveal delay={100}><Tags items={u.tags} /></Reveal>
      </div>
      <Reveal delay={150} className={flip ? 'lg:order-1' : ''}>{visual}</Reveal>
    </div>
  );

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
        {/* HERO */}
        <section id="hero" className="relative min-h-[94vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt={c.hero.imgAlt} width={1376} height={768} className="w-full h-full object-cover" style={{ objectPosition: 'center right', transform: rtl ? 'scaleX(-1)' : undefined }} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(${rtl ? 270 : 90}deg, rgba(7,9,29,0.97) 0%, rgba(7,9,29,0.82) 34%, rgba(7,9,29,0.45) 62%, rgba(7,9,29,0.2) 100%)` }} aria-hidden />
            <div className="absolute inset-x-0 bottom-0 h-48" style={{ background: 'linear-gradient(180deg, rgba(7,9,29,0) 0%, #07091D 100%)' }} aria-hidden />
          </div>
          <div className={`relative z-10 ${container} pt-32 pb-24 md:pt-40 md:pb-32 grid lg:grid-cols-12 gap-10 items-center`}>
            <div className="lg:col-span-7">
              <p className="hero-animate hero-delay-1 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#A76CFF]">{c.hero.label}</p>
              <h1 className="hero-animate hero-delay-1 mt-6 font-display font-bold tracking-[-0.02em] leading-[1.04] text-[clamp(2.5rem,7vw,4.6rem)] text-[#F7F7FB]">
                {c.hero.title1}<br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(100deg,#F7F7FB 0%,#C9A9FF 55%,#7CC8FF 100%)' }}>{c.hero.title2}</span>
              </h1>
              <p className="hero-animate hero-delay-2 mt-7 max-w-[560px] text-[16px] md:text-[18px] leading-[1.65] text-[#CFCDDC]">{c.hero.subtitle}</p>
              <div className="hero-animate hero-delay-3 mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#" onClick={openWa(c.waDemo)} className={glassBtn} style={glow}>{c.hero.cta}{arrow}</a>
                <a href="#problem" className={ghostBtn}>{c.hero.cta2}</a>
              </div>
            </div>
            {/* Connected environment */}
            <div className="hidden lg:block lg:col-span-5 hero-animate hero-delay-3">
              <div className={`${panel} bg-[#0B0E26]/70 p-6 max-w-[420px] ms-auto`}>
                <div className="relative grid grid-cols-3 gap-3">
                  {c.hero.nodes.map((n, i) => {
                    const Icon = nodeIcons[i];
                    return (
                      <div key={n} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center">
                        <span className={`${iconBox} w-9 h-9 mx-auto`} style={iconBg}><Icon className="w-4 h-4" strokeWidth={1.75} /></span>
                        <p className="mt-2 text-[12px] text-[#D6D3E4]">{n}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="relative mt-4 rounded-2xl border border-[#A76CFF]/45 bg-[#772F9F]/25 px-4 py-3 flex items-center justify-between">
                  <span className="font-display text-[14px] font-semibold">{c.hero.hub}</span>
                  <span className="flex gap-1">{[0, 1, 2].map((d) => <span key={d} className="h-1.5 w-1.5 rounded-full bg-[#7CC8FF] animate-pulse" style={{ animationDelay: `${d * 200}ms` }} />)}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="relative py-20 md:py-28">
          <div className={container}>
            <Title title={c.problem.title} center />
            <div className="mt-12 flex flex-wrap justify-center items-center gap-2.5 max-w-[900px] mx-auto">
              {c.problem.tools.map((t, i) => {
                const Icon = toolIcons[i];
                return (
                  <Reveal key={t} delay={i * 50} className="flex items-center gap-2.5">
                    <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.035] text-[14px] text-[#CFCDDC]"><Icon className="w-4 h-4 text-[#8D89A0]" />{t}</span>
                    {i < c.problem.tools.length - 1 && <span className="text-[#5E5A75]">+</span>}
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={500} className="mt-10 flex flex-col items-center">
              <span className="h-14 w-px bg-gradient-to-b from-white/5 to-[#A76CFF]" />
              <div className="mt-2 rounded-[22px] border border-[#A76CFF]/55 px-10 py-6 text-center" style={{ ...iconBg, ...glow }}>
                <p className="font-display text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold">{c.problem.result}</p>
              </div>
              <p className="mt-7 max-w-[560px] text-center text-[17px] md:text-[19px] leading-[1.6] text-[#E6E4F0]">{c.problem.text}</p>
            </Reveal>
          </div>
        </section>

        {/* UNIVERSES */}
        <section className="relative py-16 md:py-24 bg-[#0A0C24]">
          <div className={`${container} space-y-24 md:space-y-32`}>
            <Universe u={collab} visual={
              <div className={`${panel} p-5`}>
                <div className="grid sm:grid-cols-[1fr_170px] gap-4">
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.07] p-4">
                    <p className="flex items-center gap-1.5 text-[13px] font-semibold"><Hash className="w-4 h-4 text-[#A76CFF]" />{collab.v[0]}</p>
                    <div className="mt-4 space-y-3 text-[13px]">
                      <div className="flex gap-2.5"><span className="h-7 w-7 rounded-full bg-[#772F9F]/60 grid place-items-center text-[11px]">SI</span><p className="rounded-xl rounded-ss-none bg-white/[0.06] px-3 py-2 text-[#E6E4F0]">{collab.v[1]}</p></div>
                      <div className="ms-9 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-[12px] text-[#CFCDDC]"><Paperclip className="w-3.5 h-3.5" />{collab.v[3]}</div>
                      <div className="flex gap-2.5"><span className="h-7 w-7 rounded-full bg-[#3FA9F5]/40 grid place-items-center text-[11px]">YB</span><p className="rounded-xl rounded-ss-none bg-white/[0.06] px-3 py-2 text-[#E6E4F0]">{collab.v[2]}</p></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-[#A76CFF]/35 bg-[#772F9F]/15 p-4">
                      <Video className="w-4 h-4 text-[#C9A9FF]" />
                      <p className="mt-2 text-[13px] font-semibold">{collab.v[4]}</p>
                      <p className="text-[12px] text-[#B8B5C8]">{collab.v[5]}</p>
                      <span className="mt-3 inline-block text-[12px] px-3 py-1 rounded-full bg-white/10">{collab.v[6]}</span>
                    </div>
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                      <p className="flex items-center gap-1.5 text-[12px] text-[#B8B5C8]"><Calendar className="w-3.5 h-3.5" />{collab.v[7]}</p>
                      <div className="mt-2 space-y-1.5"><Bar w="70%" tone="cyan" /><Bar w="45%" /></div>
                    </div>
                  </div>
                </div>
              </div>
            } />

            <Universe flip u={organise} visual={
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
            } />

            <Universe u={teams} visual={
              <div className={`${panel} p-6`}>
                <div className="flex items-center gap-3">
                  <span className="h-11 w-11 rounded-full bg-gradient-to-br from-[#772F9F] to-[#3FA9F5] grid place-items-center text-[14px] font-semibold">SI</span>
                  <div><p className="text-[15px] font-semibold">{teams.v[5]}</p><p className="text-[12px] text-[#B8B5C8]">{teams.v[6]}</p></div>
                </div>
                <div className="mt-6"><Chain steps={teams.v.slice(0, 5)} rtl={rtl} /></div>
                <div className="mt-6 rounded-2xl border border-[#3FA9F5]/30 bg-[#3FA9F5]/[0.07] p-4 flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-[#7CC8FF]" />
                  <div className="flex-1"><p className="text-[13px] text-[#E6E4F0]">{teams.v[7]}</p><div className="mt-2"><Bar w="60%" tone="cyan" /></div></div>
                </div>
              </div>
            } />

            <Universe flip u={pilot} visual={
              <div className={`${panel} p-6`}>
                <div className="flex items-center justify-between"><p className="text-[14px] font-semibold">{pilot.v[0]}</p><span className="text-[12px] text-[#8D89A0]">{pilot.v[5]}</span></div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {pilot.v.slice(1, 4).map((k, i) => (
                    <div key={k} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
                      <p className="text-[12px] text-[#B8B5C8]">{k}</p>
                      <div className="mt-3"><Bar w={`${[72, 54, 81][i]}%`} tone={i === 1 ? 'cyan' : 'violet'} /></div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <p className="text-[12px] text-[#B8B5C8]">{pilot.v[4]}</p>
                  <div className="mt-3 h-28 flex items-end gap-2">
                    {[40, 55, 48, 68, 62, 80, 74, 90].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i % 2 ? 'linear-gradient(180deg,#A76CFF,#772F9F55)' : 'linear-gradient(180deg,#5CE1E6,#3FA9F555)' }} />
                    ))}
                  </div>
                </div>
              </div>
            } />

            <Universe u={crm} visual={
              <div className={`${panel} p-6`}>
                <div className="mx-auto w-fit rounded-2xl border border-[#A76CFF]/55 px-6 py-4 text-center" style={iconBg}>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#E0CCFF]">{crm.v[1]}</p>
                  <p className="mt-1 font-display text-[18px] font-semibold">{crm.v[0]}</p>
                </div>
                <div className="mx-auto h-6 w-px bg-[#A76CFF]/50" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {crm.v.slice(2).map((s) => (
                    <div key={s} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[13px] text-center text-[#E6E4F0]">{s}</div>
                  ))}
                </div>
              </div>
            } />
          </div>
        </section>

        {/* BOOKING */}
        <section className="relative py-20 md:py-28">
          <div className={`${container} grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            <div>
              <Title overline={c.booking.overline} title={c.booking.title} intro={c.booking.text} />
              <Reveal delay={100} className="mt-8"><Chain steps={c.booking.steps} rtl={rtl} tone="cyan" /></Reveal>
            </div>
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
        </section>

        {/* SELL + SHOP + EVENTS */}
        <section className="relative py-20 md:py-28 bg-[#0A0C24]">
          <div className={container}>
            <Title overline={c.sell.overline} title={c.sell.title} intro={c.sell.text} center />
            <Reveal delay={100} className="flex justify-center"><div className="max-w-[760px] [&>div]:justify-center"><Tags items={c.sell.tags} /></div></Reveal>

            <div className="mt-16 grid lg:grid-cols-2 gap-6">
              <Reveal className={`${panel} p-6 md:p-7`}>
                <span className={`${iconBox} w-10 h-10`} style={iconBg}><ShoppingBag className="w-5 h-5" strokeWidth={1.75} /></span>
                <h3 className="mt-5 font-display text-[22px] font-semibold">{c.shop.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-[#B8B5C8]">{c.shop.text}</p>
                <div className="mt-6 grid grid-cols-[1fr_auto] gap-4 md:gap-6 items-center">
                  <ol className="space-y-4">
                    {c.shop.flow.map((f, i) => (
                      <li key={f.t} className="flex gap-3">
                        <span className="shrink-0 grid place-items-center w-8 h-8 rounded-full text-[13px] font-bold text-white border border-[#A76CFF]/55" style={iconBg}>{i + 1}</span>
                        <div>
                          <p className="text-[14px] font-semibold text-white leading-snug">{f.t}</p>
                          <p className="mt-0.5 text-[12.5px] leading-[1.5] text-[#B8B5C8]">{f.d}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
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
                </div>
                <div className="mt-10"><Chain steps={c.shop.steps} rtl={rtl} /></div>
              </Reveal>

              <Reveal delay={120} className={`${panel} p-6 md:p-7`}>
                <span className={`${iconBox} w-10 h-10`} style={iconBg}><Radio className="w-5 h-5" strokeWidth={1.75} /></span>
                <h3 className="mt-5 font-display text-[22px] font-semibold">{c.events.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-[#B8B5C8]">{c.events.text}</p>
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
                <Tags items={c.events.tags} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* TRAINING */}
        <section className="relative py-20 md:py-28">
          <div className={`${container} grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            <Reveal delay={150} className="lg:order-2">
              <div className={`${panel} p-5 md:p-6`}>
                {(() => { const covers = [courseOnboarding, courseCustomer, courseDigital]; const pct = [100, 65, 30]; const t = c.training.v; return (<>
                  <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03]">
                    <div className="relative h-40 md:h-48">
                      <img src={covers[1]} alt="" loading="lazy" width={992} height={672} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D26] via-[#0B0D26]/30 to-transparent" />
                      <span className="absolute top-3 start-3 rounded-full bg-black/45 backdrop-blur px-2.5 py-1 text-[11px] text-white flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5" />{t[3]}</span>
                      <span className="absolute bottom-3 end-3 grid place-items-center w-11 h-11 rounded-full bg-[#772F9F]/80 border border-[#A76CFF]/60 backdrop-blur"><PlayCircle className="w-5 h-5 text-white" /></span>
                    </div>
                    <div className="p-4">
                      <p className="text-[15px] font-semibold">{t[1]}</p>
                      <div className="mt-3 flex items-center gap-3"><Bar w={`${pct[1]}%`} tone="violet" /><span className="text-[12px] font-semibold text-[#C9A8FF] shrink-0">{pct[1]}%</span></div>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {[0, 2].map((i) => (
                      <div key={i} className="rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03]">
                        <div className="relative h-24">
                          <img src={covers[i]} alt="" loading="lazy" width={992} height={672} className="absolute inset-0 w-full h-full object-cover" />
                          {pct[i] === 100 && <span className="absolute top-2 end-2 grid place-items-center w-6 h-6 rounded-full bg-[#3FA9F5]"><CheckCircle2 className="w-4 h-4 text-white" /></span>}
                        </div>
                        <div className="p-3">
                          <p className="text-[12.5px] font-medium leading-snug min-h-[2.2em]">{t[i]}</p>
                          <div className="mt-2 flex items-center gap-2"><Bar w={`${pct[i]}%`} tone={pct[i] === 100 ? 'cyan' : 'violet'} /><span className="text-[11px] text-[#B8B4CC] shrink-0">{pct[i]}%</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-2 rounded-xl border border-[#3FA9F5]/30 bg-[#3FA9F5]/10 px-4 py-3 text-[13px] text-[#CDEBFF]"><Award className="w-4 h-4" />{t[4]}</div>
                </>); })()}
              </div>
            </Reveal>
            <div className="lg:order-1">
              <Title overline={c.training.overline} title={c.training.title} intro={c.training.text} />
              <Reveal delay={100}><Tags items={c.training.tags} /></Reveal>
            </div>
          </div>
        </section>

        {/* WORKSPACES */}
        <section className="relative py-20 md:py-28 bg-[#0A0C24]">
          <div className={container}>
            <Title overline={c.workspaces.overline} title={c.workspaces.title} intro={c.workspaces.text} center />
            <Workspaces c={c.workspaces} />
          </div>
        </section>

        {/* EVERYTHING CONNECTS */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }} aria-hidden />
          <div className={`relative ${container}`}>
            <Title title={c.connect.title} intro={c.connect.text} center />
            <div className="mt-14 grid lg:grid-cols-2 gap-6">
              {c.connect.flows.map((f, i) => (
                <Reveal key={f.title} delay={i * 120} className={`${panel} p-6 md:p-8`}>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#A76CFF]">0{i + 1}</p>
                  <h3 className="mt-3 font-display text-[22px] font-semibold">{f.title}</h3>
                  <ol className="mt-6 relative">
                    <span className="absolute top-2 bottom-2 start-[11px] w-px bg-gradient-to-b from-[#A76CFF] to-[#3FA9F5]" aria-hidden />
                    {f.steps.map((s) => (
                      <li key={s} className="relative flex items-center gap-4 py-2">
                        <span className="relative z-10 h-6 w-6 rounded-full border border-[#A76CFF]/60 bg-[#0E1030] grid place-items-center"><span className="h-2 w-2 rounded-full bg-[#A76CFF]" /></span>
                        <span className="text-[15px] text-[#E6E4F0]">{s}</span>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SYN'IA */}
        <section className="relative py-20 md:py-28 bg-[#0A0C24]">
          <div className={container}>
            <Title overline={c.ai.overline} title={c.ai.title} intro={c.ai.text} center />
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {c.ai.items.map((it, i) => (
                <Reveal key={it.action} delay={i * 60} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[12px] text-[#8D89A0]">{it.ctx}</p>
                  <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-[#A76CFF]/40 bg-[#772F9F]/20 px-3 py-2.5">
                    <Sparkles className="w-4 h-4 text-[#C9A9FF] shrink-0" />
                    <span className="text-[14px] text-white">{it.action}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section className="relative py-20 md:py-28">
          <div className={container}>
            <Title title={c.modules.title} intro={c.modules.text} center />
            <Reveal className="mt-12 mx-auto max-w-[920px] flex flex-wrap justify-center gap-2.5">
              {c.modules.items.map((m, i) => (
                <span key={m} className={`text-[14px] font-medium px-4 py-2.5 rounded-xl transition-transform hover:-translate-y-0.5 ${i % 4 === 0 ? 'border border-[#A76CFF]/45 bg-[#772F9F]/25 text-white' : 'border border-white/10 bg-white/[0.035] text-[#D6D3E4]'}`}>{m}</span>
              ))}
            </Reveal>
            <p className="mt-6 text-center text-[14px] text-[#8D89A0]">{c.modules.note}</p>
          </div>
        </section>

        {/* FINAL */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(60% 70% at 50% 100%, rgba(119,47,159,0.4) 0%, rgba(7,9,29,0) 70%)' }} aria-hidden />
          <Reveal className={`relative ${container} text-center`}>
            <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.02] text-[clamp(2.6rem,7.5vw,5.4rem)]">
              {c.final.title1}<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(100deg,#F7F7FB 0%,#C9A9FF 55%,#7CC8FF 100%)' }}>{c.final.title2}</span>
            </h2>
            <p className="mx-auto mt-7 max-w-[620px] text-[16px] md:text-[19px] leading-[1.65] text-[#CFCDDC]">{c.final.text}</p>
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
        className={`fixed z-40 bottom-8 md:bottom-10 ${rtl ? 'left-5 md:left-8' : 'right-5 md:right-8'} inline-flex items-center gap-2 h-12 px-5 rounded-full text-[14px] font-semibold text-white border border-[#A76CFF]/50 backdrop-blur-xl whitespace-nowrap transition-all duration-500 ${showFloating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        style={{ background: 'linear-gradient(145deg, rgba(62,24,86,0.92) 0%, rgba(94,37,128,0.88) 40%, rgba(119,47,159,0.78) 100%)', ...glow }}
      >
        {c.floating}{arrow}
      </a>
    </div>
  );
};

const Workspaces = ({ c }: { c: { names: string[]; inside: string[]; v: string[] } }) => {
  const [active, setActive] = useState(0);
  return (
    <Reveal className="mt-12">
      <div className="flex flex-wrap justify-center gap-2">
        {c.names.map((n, i) => (
          <button key={n} onClick={() => setActive(i)} className={`text-[14px] px-4 py-2 rounded-full border transition-colors ${active === i ? 'border-[#A76CFF]/60 bg-[#772F9F]/35 text-white' : 'border-white/10 bg-white/[0.03] text-[#B8B5C8] hover:text-white'}`}>{n}</button>
        ))}
      </div>
      <div className={`${panel} mt-6 mx-auto max-w-[960px] p-5 md:p-6`}>
        <div className="flex items-center justify-between">
          <p className="font-display text-[18px] font-semibold">{c.names[active]}</p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 rtl:space-x-reverse">{['#772F9F', '#3FA9F5', '#A76CFF', '#5CE1E6'].map((col) => <span key={col} className="h-7 w-7 rounded-full border-2 border-[#0E1030]" style={{ background: col }} />)}</div>
            <span className="text-[12px] text-[#8D89A0]">{4 + active * 2} {c.v[0]}</span>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {c.inside.map((x) => <div key={x} className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-3 text-[13px] text-[#E6E4F0]">{x}</div>)}
        </div>
        <div className="mt-5 pt-4 border-t border-white/10 grid sm:grid-cols-3 gap-2">
          {c.v.slice(1).map((a) => <p key={a} className="flex items-center gap-2 text-[12px] text-[#CFCDDC]"><Dot />{a}</p>)}
        </div>
      </div>
    </Reveal>
  );
};

export default Business;
