import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import scanditekLogo from '@/assets/scanditek-logo.png.asset.json';
import { useLanguage } from '@/i18n/LanguageContext';
import portalChoice from '@/i18n/portalChoice';

const PortalFooter = () => {
  const { lang } = useLanguage();
  const c = portalChoice[lang] ?? portalChoice.fr;

  const legal = {
    privacy: lang === 'no' ? 'Personvern' : lang === 'en' ? 'Privacy' : lang === 'ar' ? 'الخصوصية' : 'Confidentialité',
    terms: lang === 'no' ? 'Vilkår' : lang === 'en' ? 'Terms' : lang === 'ar' ? 'الشروط' : 'Mentions légales',
    synclasse: lang === 'ar' ? "سين'كلاس قانوني" : "Syn'Classe " + (lang === 'no' ? 'juridisk' : lang === 'fr' ? 'légal' : 'legal'),
  };

  return (
    <footer dir="ltr" className="relative z-10 mt-20 md:mt-24 border-t border-white/[0.08] bg-[#07091D]">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-3 ltr:text-left rtl:text-right">
          <div className="flex items-start gap-4">
            <img src={scanditekLogo.url} alt="" className="w-20 h-20 object-contain shrink-0" />
            <div>
              <p className="font-display font-semibold text-sm text-[#F7F7FB]">ScandiTek</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#8D89A0] mt-0.5">Future Technology</p>
              <p className="text-[13px] text-[#8D89A0] leading-relaxed mt-3">{c.footer}</p>
            </div>
          </div>

          <div className="space-y-3">
            <a href="mailto:contact@scanditek.ma" className="flex items-center gap-2.5 text-[14px] text-[#B8B5C8] hover:text-[#F7F7FB] transition-colors">
              <Mail className="w-4 h-4 shrink-0 text-[#8D89A0]" aria-hidden /> contact@scanditek.ma
            </a>
            <a href="tel:+212614615816" className="flex items-center gap-2.5 text-[14px] text-[#B8B5C8] hover:text-[#F7F7FB] transition-colors">
              <Phone className="w-4 h-4 shrink-0 text-[#8D89A0]" aria-hidden /> +212 6 14 61 58 16
            </a>
          </div>

          <div className="space-y-3">
            <p className="flex items-center gap-2.5 text-[14px] text-[#B8B5C8]">
              <MapPin className="w-4 h-4 shrink-0 text-[#8D89A0]" aria-hidden /> Technopark, Casablanca, Maroc
            </p>
            <p className="flex items-center gap-2.5 text-[14px] text-[#B8B5C8]">
              <MapPin className="w-4 h-4 shrink-0 text-[#8D89A0]" aria-hidden /> Oslo, Norway
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#8D89A0]">
            © {new Date().getFullYear()} ScandiTek. Synapse Education · Synapse Associations
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px]">
            <Link to="/confidentialite" className="text-[#B8B5C8] hover:text-[#F7F7FB] transition-colors">{legal.privacy}</Link>
            <Link to="/cgu" className="text-[#B8B5C8] hover:text-[#F7F7FB] transition-colors">{legal.terms}</Link>
            <Link to="/synclasse-legal" className="text-[#B8B5C8] hover:text-[#F7F7FB] transition-colors">{legal.synclasse}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default PortalFooter;
