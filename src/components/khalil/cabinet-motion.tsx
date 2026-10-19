import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/khalil/cabinet-hero.jpg";
import tour from "@/assets/khalil/cabinet-camera-desktop.mp4.asset.json";
import webTour from "@/assets/khalil/cabinet-camera-desktop.webm.asset.json";
import tourMobile from "@/assets/khalil/cabinet-camera-tour-mobile.mp4.asset.json";
import webTourMobile from "@/assets/khalil/cabinet-camera-tour-mobile.webm.asset.json";

type Sources = { webm: string; mp4: string };

/** Photo-based camera film with a static fallback and accessible playback. */
export function CabinetMotion({ onStart }: { onStart?: () => void }) {
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [sources, setSources] = useState<Sources | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry?.isIntersecting ?? false);
    });
    observer.observe(element);
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduced(preference.matches);
    updatePreference();
    if (preference.matches) onStart?.();
    preference.addEventListener("change", updatePreference);
    // Small screens get the lighter, lower-resolution film (90% mobile traffic).
    const compact = window.matchMedia("(max-width: 639px)");
    const updateSources = () => setSources(compact.matches ? { webm: webTourMobile.url, mp4: tourMobile.url } : { webm: webTour.url, mp4: tour.url });
    updateSources();
    compact.addEventListener("change", updateSources);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", updatePreference);
      compact.removeEventListener("change", updateSources);
    };
  }, []);

  useEffect(() => {
    const player = video.current;
    if (!player) return;
    if (paused || !visible || reduced) player.pause();
    else void player.play().catch((error: unknown) => {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setPaused(true);
      onStart?.();
    });
  }, [paused, visible, reduced, sources]);

  return (
    <div ref={root} className="absolute inset-0 overflow-hidden" data-paused={paused || !visible || reduced}>
      <img src={hero} alt="Réception, sièges en cannage et fresque du Cabinet Dr Khalil" width={1376} height={768} className="absolute inset-0 h-full w-full object-cover object-left sm:object-center" />
      {!reduced && sources && <video key={sources.mp4} ref={video} poster={hero} onPlaying={onStart} muted playsInline preload="auto" aria-label="Visite du cabinet : mouvement de caméra de la réception vers la fresque" className="absolute inset-0 h-full w-full object-cover object-left sm:object-center"><source src={sources.webm} type="video/webm" /><source src={sources.mp4} type="video/mp4" /></video>}
      <div className="cabinet-film-caption pointer-events-none absolute inset-0" aria-hidden="true" />
      <Button type="button" variant="outline" size="icon" className="absolute right-4 top-4 z-20 border-border/70 bg-background/85 text-primary backdrop-blur-sm motion-reduce:hidden" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Reprendre l’animation" : "Mettre l’animation en pause"} title={paused ? "Reprendre l’animation" : "Mettre l’animation en pause"} aria-pressed={paused}>
        {paused ? <Play /> : <Pause />}
      </Button>
    </div>
  );
}
