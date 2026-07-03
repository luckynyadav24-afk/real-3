import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/* ---- Smooth-scroll singleton ---- */
let _lenis: Lenis | null = null;

export const setLenis = (l: Lenis | null) => {
  _lenis = l;
};

export function scrollTo(
  target: string | HTMLElement | number,
  opts: Record<string, unknown> = {}
) {
  _lenis?.scrollTo(target, { offset: 0, duration: 1.6, ...opts });
}

export function stopScroll() {
  _lenis?.stop();
}
export function startScroll() {
  _lenis?.start();
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, ScrollTrigger };
