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
      className={`rounded-2xl transition-shadow duration-300 ${
        variant === 'trust'
          ? 'bg-gradient-to-br from-[hsl(278,54%,98%)] to-white'
          : 'bg-card'
      } ${open ? 'shadow-[0_10px_36px_-18px_rgba(23,10,45,0.28)]' : 'shadow-[0_2px_10px_-6px_rgba(23,10,45,0.18)]'}`}
    >
      <button
        id={btnId}
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={item.title}
        className="w-full text-start p-5 md:p-7 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:flex md:gap-5 md:items-start"
      >
        <span className="flex items-center gap-3.5 md:block md:shrink-0">
          <span
            className="relative shrink-0 grid place-items-center w-11 h-11 md:w-12 md:h-12 rounded-[10px] text-white overflow-hidden backdrop-blur-lg shadow-[0_10px_28px_-12px_hsl(278_60%_28%/0.6),inset_0_1px_0_hsl(0_0%_100%/0.25)]"
            style={{
              background:
                'linear-gradient(145deg, hsl(278 60% 22% / 0.95) 0%, hsl(278 54% 32% / 0.85) 40%, hsl(290 58% 46% / 0.68) 100%)',
            }}
            aria-hidden
          >
            <span
              className="pointer-events-none absolute inset-x-0 -top-1/2 h-full opacity-55"
              style={{ background: 'linear-gradient(180deg, hsl(0 0% 100% / 0.45), transparent)' }}
            />
            <Icon size={22} strokeWidth={1.75} className="relative" />
          </span>
          <span className="font-display text-[16px] md:hidden font-semibold leading-snug text-foreground">
            {item.title}
          </span>
        </span>
        <span className="block flex-1 min-w-0 mt-3 md:mt-0">
          <span className="hidden md:block font-display text-[19px] font-semibold leading-snug text-foreground">
            {item.title}
          </span>
          <span className="md:mt-2 block text-[14.5px] md:text-[15px] leading-[1.65] text-secondary-color">
            {item.shortDescription}
          </span>
          <span className="mt-3.5 md:mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-primary">
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
          <div className="px-5 md:px-7 pb-6 md:pb-7 pt-0 ps-5 md:ps-[6.25rem]">
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
