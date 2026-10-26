export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-white/[0.04] px-3 py-1 font-mono text-xs text-slate-300">
      {children}
    </span>
  );
}
export function TagList({ items }: { items: readonly string[] }) {
  return <div className="flex flex-wrap gap-2">{items.map((t) => <Tag key={t}>{t}</Tag>)}</div>;
}
