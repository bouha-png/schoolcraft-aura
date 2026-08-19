import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import portalChoice from '@/i18n/portalChoice';

const TrustStatement = () => {
  const { lang } = useLanguage();
  const c = portalChoice[lang] ?? portalChoice.fr;

  return (
    <p className="relative z-10 mt-12 flex items-center justify-center gap-2.5 text-[14px] text-[#8D89A0] px-5">
      <ShieldCheck className="w-4 h-4 text-[#7C4DFF]" aria-hidden />
      {c.trust}
    </p>
  );
};

export default TrustStatement;
