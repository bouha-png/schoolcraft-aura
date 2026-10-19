import { BookingButton } from "@/components/khalil/booking-button";
import { useEffect, useState, type CSSProperties } from "react";
import "@/components/khalil/khalil.css";
import { ArrowRight } from "lucide-react";
import { CabinetMotion } from "@/components/khalil/cabinet-motion";
import { DoctorSpecialties, PageShell } from "@/components/khalil/site";
import { CABINET, DOCTORS } from "@/components/khalil/cabinet";
import { SoinsSection } from "@/components/khalil/soins";

export default function DrKhalil() {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Cabinet Dr Khalil — Maârif, Casablanca";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Figtree:wght@400;500;600&display=swap";
    document.head.appendChild(font);
    return () => { document.title = prevTitle; meta.remove(); font.remove(); };
  }, []);
  return (
    <PageShell>
      <section className="relative isolate overflow-clip bg-background">
        <div className="relative aspect-[25/27] w-full sm:aspect-auto sm:h-[min(650px,72vh)] sm:min-h-[480px]">
          <CabinetMotion onStart={() => setStarted(true)} />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-6xl px-5 pb-4 sm:px-6 sm:pb-10">
          <div data-started={started} className="hero-title pointer-events-auto max-w-xl text-primary-foreground text-soft-shadow">
            <p className="title-detail mb-2 text-[0.6rem] font-medium tracking-normal sm:mb-3 sm:text-[0.7rem]" style={{ animationDelay: "0.2s" }}>MAÂRIF · CASABLANCA</p>
            <h1 className="text-[2.25rem] leading-none tracking-normal sm:text-[4.25rem] sm:leading-[0.95]" aria-label="Cabinet Dr Khalil">
              {["Cabinet", "Dr Khalil"].map((line, li) => (
                <span key={line} className="inline sm:block" aria-hidden="true">
                  {li > 0 && <span className="sm:hidden"> </span>}
                  {Array.from(line).map((ch, ci) => (
                    <span key={ci} className="title-letter" style={{ "--i": li * 8 + ci } as CSSProperties}>{ch === " " ? "\u00A0" : ch}</span>
                  ))}
                </span>
              ))}
            </h1>
            <span className="title-line mt-2 block h-px w-24 bg-gold sm:mt-5" aria-hidden="true" />
            <p className="title-detail mt-2 text-[0.7rem] leading-relaxed sm:mt-4 sm:text-sm" style={{ animationDelay: "2.1s" }}>Dr Mohamed Khalil <span className="px-1" aria-hidden="true">·</span> Dr Hajar Khalil</p>
            <BookingButton className="title-detail mt-3 inline-flex min-h-11 items-center gap-3 rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground shadow-lift transition-transform [text-shadow:none] hover:-translate-y-0.5 sm:mt-5 sm:min-h-12 sm:px-6 sm:text-sm" style={{ animationDelay: "2.5s" }}>
              Prendre rendez-vous <ArrowRight className="h-4 w-4" />
            </BookingButton>
          </div>
        </div>
      </section>

      <section id="medecins" className="relative scroll-mt-20 border-y border-border bg-secondary">
        <div className="absolute inset-0 bg-slats opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
          <p className="eyebrow">Les médecins</p>
          <h2 className="mt-3 text-4xl leading-tight text-primary sm:text-5xl">Vos médecins</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {DOCTORS.map((d) => {
              const flip = d.id === "hajar";
              return (
                <article key={d.id} className="relative overflow-hidden rounded-[2rem] bg-wall text-wall-foreground shadow-soft">
                  {d.photo ? (
                    <img src={d.photo.src} srcSet={d.photo.srcSet} sizes={d.photo.sizes} alt={d.photo.alt} loading="lazy" className={`absolute inset-y-0 h-full w-[45%] object-cover object-top ${flip ? "right-0" : "left-0"}`} style={{ maskImage: `linear-gradient(to ${flip ? "left" : "right"}, black 45%, transparent 92%)`, WebkitMaskImage: `linear-gradient(to ${flip ? "left" : "right"}, black 45%, transparent 92%)` }} />
                  ) : (
                    <div className={`absolute inset-y-0 grid w-[45%] place-items-center bg-sand bg-cane px-3 text-center text-xs text-muted-foreground ${flip ? "right-0" : "left-0"}`}>Photo de {d.name} à fournir</div>
                  )}
                  <div className={`relative flex h-[14.5rem] flex-col justify-center py-5 sm:h-[15rem] sm:py-6 ${flip ? "pl-5 pr-[43%] sm:pl-7 sm:pr-[48%]" : "pl-[43%] pr-5 sm:pl-[48%] sm:pr-7"}`}>
                    <h3 className="whitespace-nowrap text-[1.4rem] leading-tight text-wall-foreground sm:text-3xl">{d.name}</h3>
                    <span className="mt-2 block h-px w-14 bg-gold/80" aria-hidden="true" />
                    <DoctorSpecialties items={d.specialties} />
                    {d.bio && <p className="mt-3 text-sm leading-relaxed text-wall-foreground/80">{d.bio}</p>}
                    <div className="mt-auto pt-5">
                      <BookingButton className="inline-flex min-h-8 items-center gap-1.5 rounded-full bg-wall-foreground px-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-wall shadow-lift transition-transform hover:-translate-y-0.5">
                        Réserver <ArrowRight className="h-3 w-3" />
                      </BookingButton>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <SoinsSection />

      <section id="le-cabinet" className="relative scroll-mt-20 overflow-clip">
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-10 sm:px-6 sm:pt-28 sm:pb-14">
          <p className="eyebrow">L’esprit du lieu</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-primary sm:text-5xl">Bois miel, cannage et lumière douce</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Ivoire, sable et touches de brun profond, courbes arrondies et végétation discrète : le cabinet a été conçu pour que chaque visite se déroule dans le calme.
          </p>
          <a href="#carte" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline">
            Découvrir le cabinet <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <iframe
          id="carte"
          title="Localisation du Cabinet Dr Khalil sur Google Maps"
          src={`https://maps.google.com/maps?q=${encodeURIComponent("Boulevard Bir Anzarane, Maârif, Casablanca")}&z=16&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[340px] w-full border-0 sm:h-[460px]"
        />
        <div className="flex justify-center bg-card px-4 py-5">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Boulevard Bir Anzarane, Maârif, Casablanca")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Ouvrir dans Google Maps <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="relative overflow-clip rounded-[2rem] bg-espresso px-6 py-14 text-espresso-foreground sm:px-14">
          <p className="eyebrow !text-gold">Nous trouver</p>
          <h2 className="mt-4 max-w-xl text-4xl sm:text-5xl">{CABINET.address.line1}</h2>
          <p className="mt-3 opacity-80">{CABINET.address.line2} · {CABINET.address.line3}</p>
        </div>
      </section>
    </PageShell>
  );
}
