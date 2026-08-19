import { useId } from 'react';
import { ChevronDown } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ModuleItem } from '@/i18n/associationsModules';

interface Props {
  item: ModuleItem;
  open: boolean;
  onToggle: () => void;
  moreLabel: string;
  lessLabel: string;
  variant?: 'default' | 'trust';
}

const ExpandableModuleCard = ({ item, open, onToggle, moreLabel, lessLabel, variant = 'default' }: Props) => {
  const id = useId();
  const panelId = `${id}-panel`;
  const btnId = `${id}-button`;
  const Icon = ((Icons as unknown as Record<string, LucideIcon>)[item.icon] ?? Icons.Circle) as LucideIcon;

  return (
    <div
      className={`rounded-2xl border transition-shadow duration-300 ${
        variant === 'trust'
          ? 'border-primary/15 bg-gradient-to-br from-[hsl(278,54%,98%)] to-white'
          : 'border-border-subtle bg-card'
      } ${open ? 'shadow-[0_10px_36px_-18px_rgba(23,10,45,0.28)]' : 'shadow-[0_2px_10px_-6px_rgba(23,10,45,0.18)]'}`}
    >
      <button
        id={btnId}
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={item.title}
        className="w-full text-start p-6 md:p-7 flex gap-4 md:gap-5 items-start rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <span
          className="shrink-0 grid place-items-center w-12 h-12 rounded-[14px] text-primary"
          style={{ background: 'linear-gradient(140deg, hsl(278 54% 96%), hsl(266 60% 93%))' }}
          aria-hidden
        >
          <Icon size={24} strokeWidth={1.75} />
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-display text-[17px] md:text-[19px] font-semibold leading-snug text-foreground">
            {item.title}
          </span>
          <span className="mt-2 block text-[15px] leading-[1.65] text-secondary-color">{item.shortDescription}</span>
          <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-primary">
            {open ? lessLabel : item.cta ?? moreLabel}
            <ChevronDown
              size={18}
              strokeWidth={2}
              className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              aria-hidden
            />
          </span>
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-6 md:px-7 pb-7 pt-0 ps-6 md:ps-[6.25rem]">
            <div className="h-px w-full bg-border-subtle mb-5" />
            {item.expandedParagraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-[1.75] text-secondary-color mb-3">
                {p}
              </p>
            ))}
            {item.bullets && (
              <ul className="my-3 space-y-1.5">
                {item.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-[15px] leading-[1.7] text-secondary-color">
                    <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {item.bulletsAfter?.map((p, i) => (
              <p key={i} className="text-[15px] leading-[1.75] text-secondary-color mb-3">
                {p}
              </p>
            ))}
            <p className="mt-4 font-display text-[15px] md:text-[16px] font-semibold leading-[1.6] text-foreground">
              {item.outcome.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableModuleCard;
