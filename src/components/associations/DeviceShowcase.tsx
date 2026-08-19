import desktopAsset from '@/assets/synapse-dashboard.png.asset.json';
import mobileAsset from '@/assets/synapse-mobile.png.asset.json';

interface DeviceShowcaseProps {
  title: string;
  isRtl?: boolean;
}

const DeviceShowcase = ({ title, isRtl = false }: DeviceShowcaseProps) => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-12 pt-10 pb-2 md:pt-14 md:pb-4">
        <h2
          className={`text-center font-display text-[clamp(1.5rem,4.5vw,2.1rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[#07091D] ${
            isRtl ? 'rtl-text' : ''
          }`}
        >
          {title}
        </h2>

        <div className="relative mt-8 md:mt-10 flex items-end justify-center">
          {/* MacBook */}
          <div className="w-full max-w-[620px] md:max-w-[700px]">
            <div className="relative rounded-[12px] md:rounded-[16px] bg-[#1c1c1f] p-[0.6%] shadow-[0_24px_60px_-36px_rgba(20,10,40,0.45)]">
              <div className="rounded-[8px] md:rounded-[11px] overflow-hidden bg-white">
                <img
                  src={desktopAsset.url}
                  alt="Synapse Associations — tableau de bord sur ordinateur"
                  className="block w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Base */}
            <div className="relative mx-auto h-[9px] md:h-[12px] w-[104%] max-w-none -ml-[2%] rounded-b-[8px] md:rounded-b-[10px] bg-gradient-to-b from-[#d5d5da] to-[#a9a9b2]">
              <div className="absolute left-1/2 top-0 h-[3px] md:h-[4px] w-[12%] -translate-x-1/2 rounded-b-full bg-[#8e8e98]" />
            </div>
          </div>

          {/* iPhone */}
          <div
            className={`absolute -bottom-4 md:-bottom-6 ${
              isRtl ? '-left-1 md:left-2' : '-right-1 md:right-2'
            } w-[24%] max-w-[150px] min-w-[86px]`}
          >
            <div className="relative rounded-[14px] md:rounded-[24px] bg-[#1c1c1f] p-[3%] shadow-[0_18px_42px_-20px_rgba(20,10,40,0.45)]">
              <div className="relative rounded-[10px] md:rounded-[18px] overflow-hidden bg-white">
                <img
                  src={mobileAsset.url}
                  alt="Synapse Associations — tableau de bord sur mobile"
                  className="block w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute left-1/2 top-[2%] h-[3%] w-[30%] -translate-x-1/2 rounded-full bg-[#1c1c1f]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
