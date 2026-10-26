"use client";
import { stats } from "@/data/profile";
import { Counter } from "@/components/ui/Counter";
import { useReveal } from "@/hooks/useReveal";

export function StatsStrip() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="container-x pb-24">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} data-reveal className="glass p-4 text-center sm:p-6">
            <Counter value={s.value} suffix={s.suffix} className="grad-text block font-display text-xl font-bold min-[380px]:text-2xl sm:text-4xl lg:text-5xl" />
            <p className="mt-2 font-mono text-[11px] text-slate-400 sm:text-xs">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
