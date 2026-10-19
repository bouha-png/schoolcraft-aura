import { BookingButton } from "./booking-button";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowLeft, CalendarDays, Menu, X } from "lucide-react";
import { CABINET, phonesConfirmed } from "./cabinet";

/** Branche fine inspirée de la fresque : tiges asymétriques, fleurs claires, oiseau à touche rouge. */
export function Branch({ className = "", bird = true }: { className?: string; bird?: boolean }) {
  return (
    <svg viewBox="0 0 320 200" className={className} aria-hidden="true" fill="none">
      <g stroke="var(--espresso)" strokeLinecap="round" opacity="0.75">
        <path d="M0 150 C60 140 110 110 170 96 S260 70 318 40" strokeWidth="1.6" />
        <path d="M92 124 C100 100 96 82 110 62" strokeWidth="1" />
        <path d="M170 96 C190 112 214 116 236 128" strokeWidth="1" />
        <path d="M232 72 C240 56 252 48 270 44" strokeWidth="0.9" />
        <path d="M40 146 C44 160 54 168 66 172" strokeWidth="0.8" />
      </g>
      {[[110, 62], [124, 104], [236, 128], [270, 44], [196, 88], [66, 172], [300, 48], [150, 102]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          {[0, 72, 144, 216, 288].map((r) => (
            <ellipse key={r} rx="2.6" ry="5" cy="-4.5" transform={`rotate(${r})`} fill="var(--blossom)" stroke="var(--sand)" strokeWidth="0.5" />
          ))}
          <circle r="1.6" fill="var(--honey)" />
        </g>
      ))}
      {bird && (
        <g transform="translate(206 78)">
          <path d="M0 0 C6 -8 18 -8 22 -2 C26 2 22 8 14 8 C8 8 2 5 0 0Z" fill="var(--sand)" stroke="var(--espresso)" strokeWidth="0.6" />
          <path d="M14 1 C18 2 20 5 18 7 C15 7 13 5 14 1Z" fill="var(--bird)" />
          <path d="M22 -2 L27 -1 L22 1Z" fill="var(--espresso)" />
          <path d="M0 0 L-9 -3 L-7 3Z" fill="var(--espresso)" opacity="0.8" />
          <circle cx="20" cy="-2" r="0.9" fill="var(--espresso)" />
        </g>
      )}
      <ellipse cx="280" cy="150" rx="2.4" ry="4.4" transform="rotate(30 280 150)" fill="var(--blossom)" />
      <ellipse cx="250" cy="176" rx="2" ry="3.8" transform="rotate(-20 250 176)" fill="var(--blossom)" />
    </svg>
  );
}

/** Cercle doré pâle de la fresque, utilisé comme forme de fond. */
export function GoldCircle({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`pointer-events-none absolute rounded-full bg-gold/60 ${className}`} />;
}

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-honey-deep/40 bg-card font-display text-lg text-primary ${className}`} aria-hidden="true">
      <span className="absolute inset-1.5 rounded-full bg-gold/50" />
      <span className="relative">K</span>
    </span>
  );
}

/** Encadré visible pour une information non confirmée. */
export function APreciser({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-dashed border-honey-deep/40 bg-notice px-4 py-3 text-sm text-notice-foreground">
      <span className="font-semibold">À fournir par le cabinet · </span>
      {children}
    </p>
  );
}

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/le-cabinet", label: "Le cabinet" },
  { to: "/medecins", label: "Les médecins" },
  { to: "/contact", label: "Accès & contact" },
] as const;

/** Chaque spécialité est signalée par un losange doré, sur sa propre ligne. */
export function DoctorSpecialties({ items, className = "" }: { items: string[]; className?: string }) {
  if (!items.length) {
    return (
      <p className={`mt-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-wall-foreground/65 ${className}`}>
        Spécialité à préciser
      </p>
    );
  }
  return (
    <ul className={`mt-3 flex flex-col gap-2 ${className}`}>
      {items.map((s) => (
        <li
          key={s}
          className="flex items-start gap-2 text-[0.6125rem] font-medium uppercase leading-[1.4] tracking-[0.08em] text-wall-foreground/75 sm:gap-2.5 sm:text-[0.7rem] sm:tracking-[0.18em]"
        >
          <span aria-hidden="true" className="mt-[0.55em] h-[5px] w-[5px] shrink-0 rotate-45 bg-gold/85" />
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:h-20 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${CABINET.name}, accueil`}>
          <Monogram />
          <span className="min-w-0">
            <span className="block truncate font-display text-xl leading-none text-primary sm:text-2xl">{CABINET.name}</span>
            <span className="mt-1 hidden text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:block">Maârif · Casablanca</span>
          </span>
        </Link>
        <nav className="mx-auto hidden items-center gap-7 text-sm lg:flex" aria-label="Navigation principale">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:font-medium">
              {n.label}
            </Link>
          ))}
        </nav>
        <BookingButton className="ms-auto hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-flex">
          <CalendarDays className="h-4 w-4" /> Prendre rendez-vous
        </BookingButton>
        <button type="button" onClick={() => setOpen((o) => !o)} className="ms-auto grid h-11 w-11 place-items-center rounded-full border border-border sm:ms-0 lg:hidden" aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav id="menu-mobile" className="border-t border-border bg-background px-4 pb-6 pt-2 lg:hidden" aria-label="Navigation mobile">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b border-border/60 py-4 font-display text-2xl text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

/** Bouton de réservation fixe sur mobile. */
export function MobileBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
      <BookingButton className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground">
        <CalendarDays className="h-4 w-4" /> Prendre rendez-vous
      </BookingButton>
    </div>
  );
}

export function SiteFooter() {
  const phones = phonesConfirmed();
  return (
    <footer className="relative overflow-clip bg-espresso pb-24 text-espresso-foreground sm:pb-0">
      <div className="absolute inset-0 bg-slats opacity-30" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">{CABINET.name}</p>
          <p className="mt-3 text-sm leading-relaxed opacity-80">
            {CABINET.address.line1}<br />{CABINET.address.line2}<br />{CABINET.address.line3}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] opacity-70">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="opacity-85 hover:opacity-100 hover:underline">{n.label}</Link></li>)}
            <li><BookingButton className="opacity-85 hover:opacity-100 hover:underline">Prendre rendez-vous</BookingButton></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.2em] opacity-70">Contact</p>
          {phones.length ? (
            <ul className="mt-4 space-y-2">{phones.map((p) => <li key={p.href}><a href={p.href} className="hover:underline">{p.display}</a></li>)}</ul>
          ) : (
            <p className="mt-4 opacity-80">Téléphone et horaires publiés après confirmation par le cabinet.</p>
          )}
          <p className="mt-6 text-xs opacity-60">Mentions légales, INPE et Ordre des médecins : informations à valider avant mise en ligne.</p>
        </div>
      </div>
      <div className="relative border-t border-espresso-foreground/15 px-4 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} {CABINET.name} · Proposition de site — prototype non publié
      </div>
    </footer>
  );
}

/** Flèche de retour visible en haut de page : historique du navigateur si disponible, sinon la page d'accueil. */
export function BackButton({ fallback = "/", label = "Retour" }: { fallback?: string; label?: string }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        const st = window.history.state as { __TSR_index?: number } | null;
        if ((st?.__TSR_index ?? 0) > 0) window.history.back();
        else navigate({ to: fallback });
      }}
      className="-ms-2 inline-flex min-h-11 items-center gap-1.5 rounded-full px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      <ArrowLeft className="h-4 w-4" /> {label}
    </button>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Aller au contenu</a>
      <SiteHeader />
      <main id="contenu" className="flex-1">{children}</main>
      <SiteFooter />
      <MobileBookingBar />
    </div>
  );
}

export function seo(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
