const WORDS = ["PYTHON", "SQL", "PANDAS", "NUMPY", "MS SQL SERVER", "MONGODB", "EXCEL", "RBAC", "SALESFORCE", "DATA VIZ"];
export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line py-5" aria-hidden>
      <div className="flex w-max animate-marquee gap-10 font-display text-2xl font-bold text-white/15 sm:text-4xl">
        {[...WORDS, ...WORDS].map((w, i) => <span key={i}>{w} <span className="text-accent/50">✦</span></span>)}
      </div>
    </div>
  );
}
