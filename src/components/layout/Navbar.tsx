"use client";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";

export function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll-spy: highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const els = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${open ? "bg-bg" : scrolled ? "border-b border-line bg-bg/70 backdrop-blur-xl" : ""}`}>
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold text-white">
          govind<span className="text-accent-cyan">.</span>dev
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const isActive = active === l.href;
            return (
              <a key={l.href} href={l.href} aria-current={isActive ? "true" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition ${isActive ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"}`}>
                {l.label}
              </a>
            );
          })}
          <a href={profile.resume} download className="ml-2 rounded-full bg-gradient-to-r from-accent to-accent-cyan px-4 py-2 text-sm font-medium text-white">
            Resume
          </a>
        </nav>

        <button className="grid h-11 w-11 place-items-center md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          <span className="relative block h-3 w-6">
            <i className={`absolute left-0 h-0.5 w-6 bg-white transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <i className={`absolute left-0 h-0.5 w-6 bg-white transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="container-x flex h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto pb-10 pt-4 md:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={`border-b border-line py-3.5 font-display text-2xl sm:text-3xl ${active === l.href ? "text-white" : "text-slate-400"}`}>
              {l.label}
            </a>
          ))}
          <a href={profile.resume} download className="mt-6 rounded-full bg-gradient-to-r from-accent to-accent-cyan py-3 text-center font-medium text-white">Download Resume</a>
        </nav>
      )}
    </header>
  );
}
