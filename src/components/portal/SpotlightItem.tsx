import { useEffect, useRef, useState, ReactNode } from 'react';

/**
 * On small screens, highlights the card closest to the viewport center while scrolling.
 * On desktop (lg+) the effect is neutralised via CSS.
 */
const SpotlightItem = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setFocused(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setFocused(entry.isIntersecting),
      { rootMargin: '-42% 0px -42% 0px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-focused={focused}
      className={`transition-[transform,opacity,filter] duration-500 ease-out will-change-transform ${
        focused ? 'scale-100 opacity-100 blur-0' : 'scale-[0.955] opacity-[0.62] blur-[1px]'
      } lg:scale-100 lg:opacity-100 lg:blur-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightItem;
