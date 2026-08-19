import { GraduationCap, Users } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import portalChoice from '@/i18n/portalChoice';
import ProductCard from './ProductCard';
import SpotlightItem from './SpotlightItem';
import educationAsset from '@/assets/portal-education-wide.png.asset.json';
import associationsAsset from '@/assets/portal-associations-wide.png.asset.json';
import educationAssetAr from '@/assets/portal-education-wide-ar.png.asset.json';
import associationsAssetAr from '@/assets/portal-associations-wide-ar.png.asset.json';

const ProductGateway = () => {
  const { lang } = useLanguage();
  const c = portalChoice[lang] ?? portalChoice.fr;
  const isRtl = lang === 'ar';
  const educationImage = isRtl ? educationAssetAr.url : educationAsset.url;
  const associationsImage = isRtl ? associationsAssetAr.url : associationsAsset.url;

  return (
    <section className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        <SpotlightItem className="hero-animate hero-delay-3">
          <ProductCard
            category={c.education.category}
            productName={c.education.shortName}
            description={c.education.description}
            image={educationAsset.url}
            imageAlt={c.education.name}
            icon={GraduationCap}
            ctaLabel={c.education.cta}
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
            image={associationsAsset.url}
            imageAlt={c.association.name}
            icon={Users}
            ctaLabel={c.association.cta}
            status="disabled"
            isRtl={isRtl}
          />
        </SpotlightItem>
      </div>
    </section>

  );
};

export default ProductGateway;
