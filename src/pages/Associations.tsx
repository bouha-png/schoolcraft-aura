import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import associations from '@/i18n/associations';
import LanguageSelector from '@/components/portal/LanguageSelector';
import scanditekLogo from '@/assets/scanditek-logo.png.asset.json';
import heroAsset from '@/assets/association-header-page1-new.png.asset.json';
import EcosystemSection from '@/components/associations/EcosystemSection';

const Associations = () => {
  const { lang } = useLanguage();
  const c = associations[lang as keyof typeof associations] ?? associations.fr;
  const isRtl = lang === 'ar';

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07091D]">
      <header dir="ltr" className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 h-24 md:h-28 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={scanditekLogo.url} alt="ScandiTek" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            <span className="text-[13px] md:text-sm font-medium text-[#CFCDDC] group-hover:text-white transition-colors">
              ← {c.back}
            </span>
          </Link>
          <LanguageSelector />
        </div>
      </header>

      <main dir={isRtl ? 'rtl' : 'ltr'}>
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroAsset.url}
              alt={c.hero.imgAlt}
              loading="eager"
              className="w-full h-full object-cover"
              style={{ objectPosition: isRtl ? 'center left' : 'center right' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: isRtl
                  ? 'linear-gradient(270deg, rgba(7,9,29,0.94) 0%, rgba(7,9,29,0.82) 38%, rgba(7,9,29,0.45) 68%, rgba(7,9,29,0.25) 100%)'
                  : 'linear-gradient(90deg, rgba(7,9,29,0.94) 0%, rgba(7,9,29,0.82) 38%, rgba(7,9,29,0.45) 68%, rgba(7,9,29,0.25) 100%)',
              }}
              aria-hidden
            />
            <div
              className="absolute inset-x-0 bottom-0 h-40"
              style={{ background: 'linear-gradient(180deg, rgba(7,9,29,0) 0%, #07091D 100%)' }}
              aria-hidden
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
            <div className={`max-w-[680px] ${isRtl ? 'text-right ms-auto' : 'text-left'}`}>
              <p className="hero-animate hero-delay-1 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#A76CFF]">
                {c.hero.overline}
              </p>
              <h1 className="hero-animate hero-delay-1 mt-6 font-display font-bold tracking-[-0.02em] leading-[1.05] text-[clamp(2.4rem,7vw,4.2rem)] text-[#F7F7FB]">
                {c.hero.title1}
                <br />
                {c.hero.title2}
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(100deg,#F7F7FB 0%,#A76CFF 100%)' }}
                >
                  {c.hero.titleHighlight}
                </span>
              </h1>
              <p className="hero-animate hero-delay-2 mt-7 max-w-[520px] text-[16px] md:text-[18px] leading-[1.65] text-[#CFCDDC]">
                {c.hero.subtitle}
              </p>
              <div className={`hero-animate hero-delay-3 mt-10 flex flex-col sm:flex-row gap-4 ${isRtl ? 'sm:justify-end items-stretch sm:items-center' : 'items-stretch sm:items-center'}`}>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center h-[54px] px-8 rounded-full text-[16px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(100deg,#7C4DFF 0%,#A76CFF 100%)',
                    boxShadow: '0 14px 34px -14px rgba(124,77,255,0.75)',
                  }}
                >
                  {c.hero.cta}
                </a>
                <a
                  href="#platform"
                  className="inline-flex items-center justify-center gap-2 h-[54px] px-7 rounded-full text-[16px] font-medium text-[#F7F7FB] border border-white/15 bg-white/[0.08] backdrop-blur-md transition-colors hover:bg-white/[0.14]"
                >
                  {c.hero.discover}
                  <span aria-hidden className={isRtl ? 'rotate-180' : ''}>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <EcosystemSection />
      </main>
    </div>
  );
};

export default Associations;
