import PortalHeader from '@/components/portal/PortalHeader';
import PortalHero from '@/components/portal/PortalHero';
import ProductGateway from '@/components/portal/ProductGateway';
import TrustStatement from '@/components/portal/TrustStatement';
import PortalFooter from '@/components/portal/PortalFooter';

const PortalChoice = () => (
  <div className="relative min-h-screen overflow-x-hidden flex flex-col bg-[#07091D]">
    {/* Ambient background */}
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(70% 50% at 50% 0%, rgba(37,20,90,0.85) 0%, rgba(7,9,29,0) 70%), radial-gradient(50% 40% at 85% 25%, rgba(86,108,255,0.14) 0%, rgba(7,9,29,0) 70%)',
      }}
      aria-hidden
    />
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-[900px] opacity-[0.05]"
      style={{
        backgroundImage:
          'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 20%, black, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 20%, black, transparent 80%)',
      }}
      aria-hidden
    />
    <div
      className="pointer-events-none absolute left-1/2 top-[420px] h-px w-[1400px] -translate-x-1/2 opacity-40"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(167,108,255,0.55), transparent)' }}
      aria-hidden
    />

    <PortalHeader />

    <main className="relative flex-1">
      <div className="pt-4 md:pt-6 lg:pt-8 pb-12 md:pb-16">
        <PortalHero />
      </div>
      <ProductGateway />
      <TrustStatement />
    </main>

    <PortalFooter />
  </div>
);

export default PortalChoice;
