import { TagList } from "./Tag";

export type TimelineItem = {
  title: string; subtitle: string; period: string;
  points?: readonly string[]; tags?: readonly string[];
};

export function Timeline({ items }: { items: readonly TimelineItem[] }) {
  return (
    <ol className="relative ml-3 border-l border-line">
      {items.map((it) => (
        <li key={it.title + it.period} data-reveal className="relative pb-10 pl-8 last:pb-0">
          <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-accent-cyan shadow-[0_0_14px_#22d3ee]" />
          <div className="glass p-5 sm:p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-lg font-semibold text-white sm:text-xl">{it.title}</h3>
              <span className="font-mono text-xs text-accent-cyan">{it.period}</span>
            </div>
            <p className="mt-1 text-sm text-slate-400">{it.subtitle}</p>
            {it.points && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed marker:text-accent">
                {it.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            )}
            {it.tags && it.tags.length > 0 && <div className="mt-4"><TagList items={it.tags} /></div>}
          </div>
        </li>
      ))}
    </ol>
  );
}
