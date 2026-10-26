"use client";
import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";

/** 3D pointer-tilt wrapper. Disabled on touch devices. */
export function TiltCard({ children, className = "", max = 8 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={(e) => {
        if (!fine()) return;
        const r = ref.current!.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(ref.current, { transformPerspective: 900, rotateY: px * max, rotateX: -py * max, duration: 0.4, ease: "power2.out" });
      }}
      onPointerLeave={() => gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" })}
    >
      {children}
    </div>
  );
}
