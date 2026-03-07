import Navigation from '@/components/landing/Navigation';
import Hero from '@/components/landing/Hero';
import PlatformOverview from '@/components/landing/PlatformOverview';
import Modules from '@/components/landing/Modules';
import UserPortals from '@/components/landing/UserPortals';
import AISection from '@/components/landing/AISection';

import Adoption from '@/components/landing/Adoption';
import ScandiTek from '@/components/landing/ScandiTek';
import Pricing from '@/components/landing/Pricing';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <PlatformOverview />
        <AISection />
        <Modules />
        <UserPortals />
        
        <Adoption />
        <ScandiTek />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
