"use client";
import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type Props = { id: string; index: string; title: string; subtitle?: string; children: ReactNode };

/** Shared layout for every inner page: heading + scroll-reveal scope. */
export function PageShell({ id, index, title, subtitle, children }: Props) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} id={id} className="container-x scroll-mt-16 py-16 sm:py-24 lg:py-28">
      <header data-reveal className="mb-12 sm:mb-16">
        <span className="font-mono text-sm text-accent-cyan">{index} /</span>
        <h2 className="mt-2 font-display text-3xl font-bold text-white min-[400px]:text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}
