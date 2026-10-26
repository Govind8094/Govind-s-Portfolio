"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { profile } from "@/data/profile";
import { useTyped } from "@/hooks/useTyped";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { TiltCard } from "@/components/ui/TiltCard";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const typed = useTyped(profile.roles);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("[data-char]", { yPercent: 110, opacity: 0, rotate: 6, duration: 1, stagger: 0.035 })
        .from("[data-in]", { y: 30, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
        .from("[data-photo]", { scale: 0.85, opacity: 0, rotate: -4, duration: 1.2 }, "-=1");
    });
    return () => mm.revert();
  }, { scope: root });

  return (
    <section ref={root} id="home" className="container-x grid min-h-dvh grid-cols-[minmax(0,1fr)] content-center pb-16 pt-24 sm:pt-28 lg:grid-cols-[1.2fr_1fr] lg:gap-x-16">
      {/* Mobile: badge → name → roles → PHOTO → summary → buttons. Desktop: text left, photo right. */}
        <p data-in className="order-1 inline-flex w-fit items-center lg:col-start-1 gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-1.5 font-mono text-xs text-slate-300">
          <span className="h-2 w-2 animate-pulseDot rounded-full bg-emerald-400" /> Available for opportunities · 2026
        </p>
        <h1 className="order-2 mt-6 lg:col-start-1 font-display text-[2.75rem] font-bold leading-[1.05] text-white min-[400px]:text-5xl sm:text-7xl xl:text-8xl" aria-label={profile.name}>
          <span className="block text-2xl font-medium text-slate-400 sm:text-3xl">Hi, I&apos;m</span>
          {profile.name.split(" ").map((word, wi) => (
            <span key={wi} className="mr-4 inline-block overflow-hidden pb-2 align-bottom" aria-hidden>
              {word.split("").map((c, i) => (
                <span key={i} data-char className="grad-text inline-block">{c}</span>
              ))}
            </span>
          ))}
        </h1>
        <p data-in className="order-3 mt-4 min-h-8 lg:col-start-1 font-mono text-base text-accent-cyan sm:text-xl">
          {typed}<span className="animate-pulseDot">▍</span>
        </p>
        <p data-in className="order-5 mt-6 max-w-xl lg:col-start-1 text-base leading-relaxed text-slate-400 sm:text-lg">{profile.summary}</p>
        <div data-in className="order-6 mt-8 flex flex-col lg:col-start-1 gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
          <Button href="#projects">View projects <Icon name="arrow" width={16} height={16} /></Button>
          <Button href={profile.resume} download variant="ghost"><Icon name="download" width={16} height={16} /> Resume</Button>
          <Button href="#contact" variant="ghost">Contact me</Button>
        </div>
        <div data-in className="order-7 mt-8 lg:col-start-1"><SocialLinks /></div>

      <div data-photo className="order-4 mx-auto mt-8 w-full max-w-[15rem] min-[480px]:max-w-xs lg:col-start-2 lg:row-span-6 lg:row-start-1 lg:mt-0 lg:max-w-none lg:self-center">
        <TiltCard max={10}><ProfilePhoto priority /></TiltCard>
      </div>
    </section>
  );
}
