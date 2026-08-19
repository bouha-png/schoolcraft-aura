import mockupAsset from '@/assets/synapse-mockup-office.png.asset.json';

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

        <div className="relative mt-7 md:mt-9 flex justify-center">
          <img
            src={mockupAsset.url}
            alt="Synapse Associations — tableau de bord sur ordinateur et mobile"
            className="w-full max-w-[920px] h-auto object-contain rounded-[12px] md:rounded-[16px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
