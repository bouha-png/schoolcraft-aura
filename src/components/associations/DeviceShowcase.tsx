import desktopAsset from '@/assets/synapse-dashboard.png.asset.json';
import mobileAsset from '@/assets/synapse-mobile.png.asset.json';

interface DeviceShowcaseProps {
  title: string;
  isRtl?: boolean;
}

const DeviceShowcase = ({ title, isRtl = false }: DeviceShowcaseProps) => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1080px] px-5 sm:px-8 lg:px-12 pt-8 pb-12 md:pt-10 md:pb-16">
        <h2
          dir={isRtl ? 'rtl' : 'ltr'}
          className="text-center font-display text-[clamp(1.45rem,4.2vw,2rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#07091D]"
        >
          {title}
        </h2>

        <div className="relative mt-7 md:mt-9 flex items-end justify-center">
          {/* MacBook */}
          <div className="w-full max-w-[580px] md:max-w-[660px]">
            <div className="relative rounded-[11px] md:rounded-[15px] bg-[#1c1c1f] p-[0.55%] shadow-[0_22px_55px_-34px_rgba(20,10,40,0.42)]">
              <div className="rounded-[7px] md:rounded-[10px] overflow-hidden bg-white">
                <img
                  src={desktopAsset.url}
                  alt="Synapse Associations — tableau de bord sur ordinateur"
                  className="block w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Base */}
            <div className="relative mx-auto h-[8px] md:h-[11px] w-[103%] max-w-none -ml-[1.5%] rounded-b-[7px] md:rounded-b-[9px] bg-gradient-to-b from-[#d5d5da] to-[#a9a9b2]">
              <div className="absolute left-1/2 top-0 h-[2.5px] md:h-[3.5px] w-[11%] -translate-x-1/2 rounded-b-full bg-[#8e8e98]" />
            </div>
          </div>

          {/* iPhone */}
          <div
            className={`absolute -bottom-3 md:-bottom-5 ${
              isRtl ? '-left-1 md:left-4' : '-right-1 md:right-4'
            } w-[22%] max-w-[140px] min-w-[78px]`}
          >
            <div className="relative rounded-[13px] md:rounded-[22px] bg-[#1c1c1f] p-[2.8%] shadow-[0_16px_38px_-18px_rgba(20,10,40,0.42)]">
              <div className="relative rounded-[9px] md:rounded-[16px] overflow-hidden bg-white">
                <img
                  src={mobileAsset.url}
                  alt="Synapse Associations — tableau de bord sur mobile"
                  className="block w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute left-1/2 top-[2%] h-[2.8%] w-[28%] -translate-x-1/2 rounded-full bg-[#1c1c1f]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
