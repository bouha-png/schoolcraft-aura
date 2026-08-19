import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const languages = [
  { code: 'fr' as const, label: 'Français', short: 'FR' },
  { code: 'ar' as const, label: 'العربية', short: 'AR' },
  { code: 'no' as const, label: 'Norsk', short: 'NO' },
  { code: 'en' as const, label: 'English', short: 'EN' },
];

const LanguageSelector = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find((l) => l.code === lang) ?? languages[0];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={current.label}
        className="flex items-center gap-1 h-8 pl-3 pr-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-xl text-[12px] font-semibold tracking-wide text-[#F7F7FB] hover:border-[#A76CFF]/60 hover:bg-white/[0.12] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A76CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07091D]"
      >
        <span>{current.short}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-[#B8B5C8] transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden />
          <ul
            role="listbox"
            className="absolute z-50 top-[calc(100%+8px)] ltr:right-0 rtl:left-0 min-w-[150px] rounded-xl border border-white/12 bg-[#0E1030]/80 backdrop-blur-2xl shadow-2xl shadow-black/60 overflow-hidden origin-top animate-scale-in"
          >
            {languages.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={lang === l.code}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 min-h-[40px] text-[13px] transition-colors ${
                    lang === l.code ? 'bg-white/10 text-[#F7F7FB]' : 'text-[#B8B5C8] hover:bg-white/5 hover:text-[#F7F7FB]'
                  }`}
                >
                  <span className="w-6 text-[11px] font-semibold tracking-wider text-[#8D89A0]">{l.short}</span>
                  <span className="flex-1 ltr:text-left rtl:text-right">{l.label}</span>
                  {lang === l.code && <Check className="w-3.5 h-3.5 text-[#A76CFF]" />}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>

  );
};

export default LanguageSelector;
