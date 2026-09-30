import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES, type Lang } from './modulesData';

const LABEL: Record<Lang, string> = { fr: 'Explorer', en: 'Explore', no: 'Utforsk', ar: 'استكشف' };

export default function ExploreGroup({ id, lang, center }: { id: string; lang: string; center?: boolean }) {
  const l = (['fr', 'en', 'no', 'ar'].includes(lang) ? lang : 'fr') as Lang;
  const cat = CATEGORIES.find((c) => c.id === id);
  if (!cat) return null;
  const I = cat.icon;
  return (
    <div className={`mt-8 flex ${center ? 'justify-center' : ''}`}>
      <Link
        to={`/business/categorie/${cat.id}`}
        className="group inline-flex items-center gap-3 h-12 ps-2 pe-5 rounded-full font-semibold text-white bg-gradient-to-r from-[#772F9F] to-[#A76CFF] shadow-[0_12px_30px_-10px_rgba(167,108,255,0.7)] hover:scale-[1.03] transition"
      >
        <span className="grid place-items-center w-8 h-8 rounded-full bg-white/15"><I className="w-4 h-4" /></span>
        {LABEL[l]} : {cat.name[l]}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
      </Link>
    </div>
  );
}
