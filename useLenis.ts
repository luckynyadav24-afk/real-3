import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, setLenis } from "../lib/anim";

/** Boot Lenis smooth scroll and sync it with GSAP's ScrollTrigger. */
export function useLenis() {
  useEffect(() => {
    const l = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 1,
      touchMultiplier: 1.7,
      smoothWheel: true,
    });
    setLenis(l);

    l.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => l.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 600);

    return () => {
      gsap.ticker.remove(raf);
      window.removeEventListener("load", refresh);
      window.clearTimeout(t);
      l.destroy();
      setLenis(null);
    };
  }, []);
}
