import { GraduationCap, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import portalChoice from '@/i18n/portalChoice';
import ProductCard from './ProductCard';
import SpotlightItem from './SpotlightItem';
import educationAsset from '@/assets/portal-education-wide.png.asset.json';
import associationsNew from '@/assets/portal-associations-v2.jpg';
import educationAssetAr from '@/assets/portal-education-wide-ar.png.asset.json';
import businessImage from '@/assets/business-card-handshake-v2.jpg';

const ProductGateway = () => {
  const { lang } = useLanguage();
  const c = portalChoice[lang] ?? portalChoice.fr;
  const isRtl = lang === 'ar';
  const educationImage = isRtl ? educationAssetAr.url : educationAsset.url;
  const associationsImage = associationsNew;

  return (
    <section className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        <SpotlightItem className="hero-animate hero-delay-3">
          <ProductCard
            category={c.education.category}
            productName={c.education.shortName}
            description={c.education.description}
            image={educationImage}
            imageAlt={c.education.name}
            icon={GraduationCap}
            ctaLabel={c.education.cta}
            ctaShort={c.education.ctaShort}
            href="/education"
            status="active"
            isRtl={isRtl}
            eager
          />
        </SpotlightItem>
        <SpotlightItem className="hero-animate hero-delay-3">
          <ProductCard
            category={c.association.category}
            productName={c.association.shortName}
            description={c.association.description}
            image={associationsImage}
            imageAlt={c.association.name}
            icon={Users}
            ctaLabel={c.association.cta}
            ctaShort={c.association.ctaShort}
            href="/associations"
            status="active"
            isRtl={isRtl}
          />
        </SpotlightItem>
        <SpotlightItem className="hero-animate hero-delay-3 lg:col-span-2">
          <ProductCard
            category={c.business.category}
            brand="Synapse"
            productName={c.business.shortName}
            description={c.business.description}
            image={businessImage}
            imageAlt={c.business.name}
            icon={Briefcase}
            ctaLabel={c.business.cta}
            ctaShort={c.business.ctaShort}
            href="/business"
            status="active"
            isRtl={isRtl}
            mirrorImage={isRtl}
          />
        </SpotlightItem>
      </div>
    </section>

  );
};

export default ProductGateway;
