import type { CSSProperties, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Review-only control: keep the design without navigation or booking actions. */
export function BookingButton({ children, className, style, "aria-label": label }: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  "aria-label"?: string;
}) {
  return (
    <Button type="button" variant="ghost" disabled aria-label={label} style={style}
      className={cn("h-auto whitespace-normal shadow-none disabled:pointer-events-auto disabled:cursor-default disabled:opacity-100", className)}>
      {children}
    </Button>
  );
}