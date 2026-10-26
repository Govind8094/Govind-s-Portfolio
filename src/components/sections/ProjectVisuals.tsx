"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { setupGsap } from "@/lib/gsap";

/** Illustrative monthly-sales bars (decorative; not real dataset values). */
const BARS = [42, 55, 48, 62, 58, 70, 66, 78, 72, 88, 94, 100];

export function SalesChart() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const gsap = setupGsap();
    gsap.fromTo(".bar", { scaleY: 0 }, {
      scaleY: 1, duration: 1, stagger: 0.06, ease: "power3.out", transformOrigin: "bottom",
      scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
    });
  }, { scope: ref });
  return (
    <div ref={ref} className="glass p-5" role="img" aria-label="Illustrative monthly sales bar chart">
      <div className="mb-4 flex items-center justify-between font-mono text-xs text-slate-400">
        <span>superstore_dashboard.xlsx</span><span className="text-emerald-400">● KPI view</span>
      </div>
      <div className="flex h-36 items-end gap-1 sm:h-48 sm:gap-1.5">
        {BARS.map((h, i) => (
          <div key={i} className="bar flex-1 rounded-t bg-gradient-to-t from-accent to-accent-cyan" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-2 flex justify-between font-mono text-[10px] text-slate-500">
        {"JFMAMJJASOND".split("").map((m, i) => <span key={i}>{m}</span>)}
      </div>
    </div>
  );
}

const SQL = `SELECT s.name, AVG(p.marks) AS avg_marks,
       SUM(CASE WHEN a.status='P' THEN 1 ELSE 0 END) AS present
FROM students s
JOIN attendance a  ON a.student_id = s.student_id
JOIN performance p ON p.student_id = s.student_id
GROUP BY s.name;`;

export function SchemaDiagram() {
  const tbl = "fill-surface stroke-accent/60";
  return (
    <div className="glass p-5">
      <div className="overflow-x-auto"><svg viewBox="0 0 420 220" className="w-full min-w-[340px]" role="img" aria-label="3NF schema: students linked to attendance and performance">
        <g className="stroke-accent-cyan/70" fill="none" strokeWidth="1.5" strokeDasharray="4 4">
          <path d="M210 70 V95 H80 V120" /><path d="M210 70 V95 H340 V120" />
        </g>
        <rect x="130" y="10" width="160" height="60" rx="10" className={tbl} />
        <text x="210" y="32" textAnchor="middle" className="fill-white text-[13px] font-semibold">students</text>
        <text x="210" y="52" textAnchor="middle" className="fill-slate-400 font-mono text-[10px]">PK student_id · details</text>
        <rect x="10" y="120" width="140" height="70" rx="10" className={tbl} />
        <text x="80" y="142" textAnchor="middle" className="fill-white text-[13px] font-semibold">attendance</text>
        <text x="80" y="162" textAnchor="middle" className="fill-slate-400 font-mono text-[10px]">FK student_id</text>
        <text x="80" y="177" textAnchor="middle" className="fill-slate-400 font-mono text-[10px]">date · status</text>
        <rect x="270" y="120" width="140" height="70" rx="10" className={tbl} />
        <text x="340" y="142" textAnchor="middle" className="fill-white text-[13px] font-semibold">performance</text>
        <text x="340" y="162" textAnchor="middle" className="fill-slate-400 font-mono text-[10px]">FK student_id</text>
        <text x="340" y="177" textAnchor="middle" className="fill-slate-400 font-mono text-[10px]">subject · marks</text>
        <text x="210" y="212" textAnchor="middle" className="fill-accent-cyan font-mono text-[10px]">3NF · indexed on student_id</text>
      </svg></div>
      <pre className="mt-4 overflow-x-auto rounded-xl bg-black/40 p-4 font-mono text-[11px] leading-relaxed text-slate-300 sm:text-xs">{SQL}</pre>
    </div>
  );
}
