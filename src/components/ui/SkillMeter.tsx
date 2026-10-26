"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { setupGsap } from "@/lib/gsap";

export function SkillMeter({ name, level }: { name: string; level: number }) {
  const bar = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const gsap = setupGsap();
    gsap.fromTo(bar.current, { scaleX: 0 }, {
      scaleX: level / 100, duration: 1.4, ease: "power3.out", transformOrigin: "left",
      scrollTrigger: { trigger: bar.current, start: "top 92%", once: true },
    });
  }, { scope: bar });
  return (
    <div>
      <div className="mb-1.5 flex justify-between font-mono text-xs"><span className="text-slate-200">{name}</span><span className="text-slate-500">{level}%</span></div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <div ref={bar} className="h-full w-full rounded-full bg-gradient-to-r from-accent to-accent-cyan" style={{ transform: `scaleX(${level / 100})`, transformOrigin: "left" }} />
      </div>
    </div>
  );
}
