"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
};

const styles = {
  primary: "bg-gradient-to-r from-accent to-accent-cyan text-white shadow-lg shadow-accent/25 hover:shadow-accent/40",
  ghost: "border border-line bg-white/[0.03] text-slate-200 hover:bg-white/[0.08]",
};

export function Button({ href, children, variant = "primary", external, download, className = "" }: Props) {
  const ref = useMagnetic<HTMLAnchorElement>();
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm max-[479px]:w-full font-medium transition-shadow ${styles[variant]} ${className}`;
  if (external || download || /^(mailto|tel):/.test(href)) {
    return (
      <a ref={ref} href={href} className={cls} download={download || undefined}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return <Link ref={ref} href={href} className={cls}>{children}</Link>;
}
