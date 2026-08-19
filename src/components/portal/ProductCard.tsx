import { Link } from 'react-router-dom';
import { ArrowRight, Clock, LucideIcon } from 'lucide-react';

export interface ProductCardProps {
  category: string;
  brand?: string;
  productName: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  ctaLabel: string;
  href?: string;
  status?: 'active' | 'disabled';
  isRtl?: boolean;
  eager?: boolean;
}

const ProductCard = ({
  category,
  brand = 'Synapse',
  productName,
  description,
  image,
  imageAlt,
  icon: Icon,
  ctaLabel,
  href,
  status = 'active',
  isRtl = false,
  eager = false,
}: ProductCardProps) => {
  const active = status === 'active' && !!href;

  const overlay = isRtl
    ? 'linear-gradient(270deg, rgba(7,9,29,0.98) 0%, rgba(7,9,29,0.90) 35%, rgba(7,9,29,0.50) 62%, rgba(7,9,29,0.12) 100%)'
    : 'linear-gradient(90deg, rgba(7,9,29,0.98) 0%, rgba(7,9,29,0.90) 35%, rgba(7,9,29,0.50) 62%, rgba(7,9,29,0.12) 100%)';

  const content = (
    <>
      <img
        src={image}
        alt={imageAlt}
        loading={eager ? 'eager' : 'lazy'}
        style={{ objectPosition: isRtl ? 'center left' : 'center right' }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0" style={{ background: overlay }} aria-hidden />

      <div className="relative h-full flex flex-col justify-center p-4 sm:p-6 md:p-8">
        {/* Glass panel */}
        <div className="max-w-[420px] rounded-[22px] border border-white/15 bg-white/[0.07] backdrop-blur-2xl backdrop-saturate-150 p-5 sm:p-7 ltr:text-left rtl:text-right shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_20px_50px_-30px_rgba(0,0,0,0.9)]">
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-white/20 bg-white/[0.12] backdrop-blur-md text-[#C9A9FF]">
          <Icon className="w-5 h-5" aria-hidden />
        </span>

        <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#A76CFF]">{category}</p>

        <p className="mt-3 text-[17px] sm:text-lg font-medium text-[#B8B5C8]">{brand}</p>
        <h2 className="font-display font-bold tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,7vw,3rem)] text-[#F7F7FB]">
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(100deg,#F7F7FB 0%,#C9A9FF 100%)' }}
          >
            {productName}
          </span>
        </h2>

        <span className="mt-5 block h-[3px] w-10 rounded-full bg-[#7C4DFF]" aria-hidden />

        <p className="mt-5 max-w-[300px] text-[15px] leading-[1.6] text-[#CFCDDC]">{description}</p>


        <span
          className={
            active
              ? 'mt-8 inline-flex w-fit items-center gap-2 h-[52px] px-7 rounded-full text-[16px] font-semibold text-white transition-all duration-300'
              : 'mt-8 inline-flex w-fit items-center gap-2 h-[52px] px-6 rounded-full text-[15px] font-medium text-[#B8B5C8] border border-white/15 bg-white/[0.10] backdrop-blur-md'
          }
          style={
            active
              ? { background: 'linear-gradient(100deg,#7C4DFF 0%,#A76CFF 100%)', boxShadow: '0 12px 30px -12px rgba(124,77,255,0.7)' }
              : undefined
          }
        >
          {active ? (
            <>
              {ctaLabel}
              <ArrowRight
                className={`w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`}
                aria-hidden
              />
            </>
          ) : (
            <>
              <Clock className="w-[18px] h-[18px]" aria-hidden />
              {ctaLabel}
            </>
          )}
        </span>
        </div>
      </div>
    </>

  );

  const base =
    'group relative block overflow-hidden rounded-[28px] border border-white/10 bg-[#0E1030]/70 backdrop-blur-sm min-h-[400px] sm:min-h-[420px] transition-all duration-300 ease-out';

  if (!active) {
    return (
      <div className={`${base} opacity-95`} style={{ boxShadow: '0 24px 60px -30px rgba(0,0,0,0.9)' }} aria-label={`${brand} ${productName} — ${ctaLabel}`}>
        {content}
      </div>
    );
  }

  return (
    <Link
      to={href!}
      aria-label={`${brand} ${productName} — ${ctaLabel}`}
      className={`${base} hover:-translate-y-1 hover:border-[#A76CFF]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A76CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07091D] hover:shadow-[0_30px_70px_-30px_rgba(124,77,255,0.55)]`}
      style={{ boxShadow: '0 24px 60px -30px rgba(0,0,0,0.9)' }}
    >
      {content}
    </Link>
  );
};

export default ProductCard;
