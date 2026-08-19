import { useLanguage } from '@/i18n/LanguageContext';
import portalChoice from '@/i18n/portalChoice';

const PortalHero = () => {
  const { lang } = useLanguage();
  const c = portalChoice[lang] ?? portalChoice.fr;

  return (
    <section className="relative z-10 text-center px-5 sm:px-8">
      <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.20em] text-[#A76CFF] hero-animate hero-delay-1">
        {c.overline}
      </p>
      <h1 className="mt-4 sm:mt-6 font-display font-bold tracking-[-0.02em] leading-[1.05] text-[#F7F7FB] text-[clamp(2.25rem,7vw,4.5rem)] hero-animate hero-delay-1">
        {c.title}
        <br />
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(100deg,#A76CFF 0%,#C9A9FF 45%,#7C4DFF 100%)' }}
        >
          {c.titleHighlight}
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-[620px] text-[16px] sm:text-[19px] leading-[1.65] text-[#B8B5C8] hero-animate hero-delay-2">
        {c.subtitle}
      </p>
    </section>
  );
};

export default PortalHero;
