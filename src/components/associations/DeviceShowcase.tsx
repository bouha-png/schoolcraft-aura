import desktopAsset from '@/assets/synapse-dashboard.png.asset.json';
import mobileAsset from '@/assets/synapse-mobile.png.asset.json';

const DeviceShowcase = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12 pt-14 pb-6 md:pt-20 md:pb-10">
        <div className="relative flex items-end justify-center">
          {/* MacBook */}
          <div className="w-full max-w-[880px]">
            <div className="relative rounded-[14px] md:rounded-[18px] bg-[#1c1c1f] p-[0.7%] shadow-[0_30px_70px_-40px_rgba(20,10,40,0.55)]">
              <div className="rounded-[9px] md:rounded-[12px] overflow-hidden bg-white">
                <img
                  src={desktopAsset.url}
                  alt="Synapse Associations — tableau de bord sur ordinateur"
                  className="block w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Base */}
            <div className="relative mx-auto h-[10px] md:h-[14px] w-[112%] max-w-none -ml-[6%] rounded-b-[10px] bg-gradient-to-b from-[#d5d5da] to-[#a9a9b2]">
              <div className="absolute left-1/2 top-0 h-[4px] md:h-[5px] w-[14%] -translate-x-1/2 rounded-b-full bg-[#8e8e98]" />
            </div>
          </div>

          {/* iPhone */}
          <div className="absolute -bottom-6 md:-bottom-8 right-0 md:right-2 w-[27%] max-w-[190px] min-w-[92px]">
            <div className="relative rounded-[16px] md:rounded-[28px] bg-[#1c1c1f] p-[3.5%] shadow-[0_24px_50px_-24px_rgba(20,10,40,0.5)]">
              <div className="relative rounded-[12px] md:rounded-[22px] overflow-hidden bg-white">
                <img
                  src={mobileAsset.url}
                  alt="Synapse Associations — tableau de bord sur mobile"
                  className="block w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute left-1/2 top-[2%] h-[3.5%] w-[34%] -translate-x-1/2 rounded-full bg-[#1c1c1f]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
