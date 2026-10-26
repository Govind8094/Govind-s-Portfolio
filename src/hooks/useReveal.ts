"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { setupGsap } from "@/lib/gsap";

/**
 * Scroll-reveals every `[data-reveal]` descendant (staggered, once).
 * Honors prefers-reduced-motion.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useGSAP(
    () => {
      const gsap = setupGsap();
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]", ref.current).forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );
  return ref;
}
