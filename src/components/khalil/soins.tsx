import { BookingButton } from "./booking-button";
import { CalendarDays, ChevronDown, ChevronRight, Clock3 } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { SOIN_GROUPS, type SoinGroup } from "./cabinet";

const todo = "text-muted-foreground/70 italic";

/** Bandeau de réservation sous la photo, partagé par les pages du cabinet. */
export function BookingStrip() {
  return (
    <div className="relative border-b border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6">
        <div className="flex items-center gap-4">
          <span className="hidden h-10 w-10 shrink-0 place-items-center text-honey-deep sm:grid"><CalendarDays className="h-6 w-6" /></span>
          <div>
            <p className="font-medium text-primary">Votre rendez-vous en ligne</p>
            <p className="mt-1 text-sm text-muted-foreground">Votre consultation avec le Dr Mohamed Khalil ou le Dr Hajar Khalil.</p>
          </div>
        </div>
        <BookingButton className="inline-flex items-center justify-center gap-3 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-honey-deep">
          Prendre rendez-vous <ChevronRight className="h-4 w-4" />
        </BookingButton>
      </div>
    </div>
  );
}

/** Présentation des soins par catégorie : bandeau photo, texte dépliable et cartes « Réserver ». */
export function SoinsSection() {
  return (
    <section id="soins" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow">Nos soins</p>
        <h2 className="mt-3 text-4xl text-primary sm:text-5xl">Des soins pensés pour vous</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">Chaque rendez-vous commence par un temps d’écoute.</p>
      </div>
      <div className="space-y-14">
        {SOIN_GROUPS.map((g, gi) => (
          <SoinCategory key={gi} g={g} />
        ))}
      </div>
    </section>
  );
}

function SoinCategory({ g }: { g: SoinGroup }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {g.image ? (
        <figure className="full-bleed relative overflow-hidden">
          <picture>
            {g.image.mobileSrc && <source media="(max-width: 639px)" srcSet={g.image.mobileSrc} />}
            <img
              src={g.image.src}
              srcSet={g.image.srcSet}
              sizes={g.image.sizes}
              alt={g.image.alt}
              width={1000}
              height={1250}
              loading="lazy"
              decoding="async"
              className="banner-clip aspect-[10/9] w-full object-cover sm:aspect-[5/2]"
              style={{ "--pos-m": g.image.pos?.m ?? "50% 45%", "--pos-d": g.image.pos?.d ?? "50% 55%" } as CSSProperties}
            />
          </picture>
          <figcaption className="bg-band-wall absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-6xl px-5 pb-6 pt-16 sm:px-6 sm:pb-9 sm:pt-28">
              <h3 className={`font-sans text-sm font-semibold uppercase tracking-[0.18em] sm:text-base ${g.heading ? "text-wall-foreground" : "italic text-wall-foreground/70"}`}>
                {g.heading ?? "Catégorie à compléter"}
              </h3>
              <span className="mt-3 block h-px w-28 bg-gold/80 sm:w-32" aria-hidden="true" />
            </div>
          </figcaption>
        </figure>
      ) : (
        <h3 className={`border-b border-border pb-3 font-sans text-sm font-semibold uppercase tracking-[0.16em] ${g.heading ? "text-primary" : todo}`}>
          {g.heading ?? "Catégorie à compléter"}
        </h3>
      )}

      {g.about ? (
        <div className="full-bleed bg-wall">
          <div className="mx-auto max-w-6xl px-5 pb-8 pt-6 sm:px-6 sm:pb-11 sm:pt-8">
            <AboutBlock g={g} open={open} setOpen={setOpen} />
          </div>
        </div>
      ) : (
        <p className={`mt-6 max-w-3xl text-[15px] leading-relaxed ${todo}`}>Présentation de la catégorie à fournir.</p>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {g.soins.map((s) => {
          const detail = [s.durationMin ? `${s.durationMin} min` : null, s.price].filter(Boolean).join(" · ");
          return (
            <article key={s.id} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <div className="flex flex-1 flex-col p-5">
                <h4 className={`mb-4 mt-1 font-display text-2xl leading-tight ${s.title ? "text-primary" : todo}`}>{s.title ?? "Nom du soin à compléter"}</h4>
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
                  <p className={`flex items-center gap-2 text-xs font-medium ${detail ? "text-primary" : todo}`}><Clock3 className="h-4 w-4 shrink-0" /> {detail || "Durée · tarif à compléter"}</p>
                  <BookingButton className="shrink-0 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-honey-deep" aria-label={`Réserver${s.title ? ` : ${s.title}` : ""}`}>
                    Réserver
                  </BookingButton>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

/** Texte de présentation d'une catégorie, posé sur le panneau brun qui suit le bandeau. */
function AboutBlock({
  g,
  open,
  setOpen,
}: {
  g: SoinGroup;
  open: boolean;
  setOpen: (updater: (o: boolean) => boolean) => void;
}) {
  return (
    <>
      {g.intro && (
        <p className="max-w-3xl text-base font-medium leading-relaxed text-wall-foreground sm:text-lg">{g.intro}</p>
      )}
      {open && (
        <div id={`soins-apropos-${g.heading}`} className="mt-3 max-w-3xl space-y-3 text-[15px] leading-relaxed text-wall-foreground/80 sm:text-base">
          {g.about?.split("\n\n").map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      )}
      <div className="mt-4 flex max-w-3xl justify-end">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={`soins-apropos-${g.heading}`}
          className="inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold tracking-wide text-sage-soft underline-offset-4 transition-colors hover:underline"
        >
          {open ? "Réduire" : "En savoir plus"}
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
    </>
  );
}
