import scanditekLogo from '@/assets/scanditek-logo.png.asset.json';
import LanguageSelector from './LanguageSelector';

const PortalHeader = () => (
  <header dir="ltr" className="relative z-30 w-full">
    <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 h-20 md:h-24 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <img src={scanditekLogo.url} alt="ScandiTek" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
        <div className="leading-tight">
          <p className="font-display font-semibold text-[15px] md:text-base text-[#F7F7FB] tracking-tight">ScandiTek</p>
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-[#8D89A0]">Future Technology</p>
        </div>
      </div>
      <LanguageSelector />
    </div>
  </header>
);

export default PortalHeader;
