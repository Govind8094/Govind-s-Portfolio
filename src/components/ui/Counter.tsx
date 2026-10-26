"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { setupGsap } from "@/lib/gsap";

type Props = { value: number; suffix?: string; className?: string };

/** Counts up from 0 when scrolled into view. SSR renders the final value (no-JS safe). */
export function Counter({ value, suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    const gsap = setupGsap();
    const el = ref.current!;
    const obj = { n: 0 };
    gsap.to(obj, {
      n: value, duration: 1.8, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => { el.textContent = Math.round(obj.n).toLocaleString() + suffix; },
    });
    el.textContent = "0" + suffix;
  }, { scope: ref, dependencies: [value, suffix] });
  return <span ref={ref} className={className}>{value.toLocaleString() + suffix}</span>;
}
