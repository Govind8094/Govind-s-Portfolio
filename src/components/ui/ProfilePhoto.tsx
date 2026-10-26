import Image from "next/image";
import { profile } from "@/data/profile";

/** Framed profile image with animated gradient ring. Uses next/image (AVIF/WebP, responsive). */
export function ProfilePhoto({ priority = false, className = "" }: { priority?: boolean; className?: string }) {
  return (
    <div className={`relative mx-auto aspect-[4/5] w-full max-w-sm ${className}`}>
      <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-accent via-accent-cyan to-accent-pink opacity-70 blur-xl" />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/15 bg-surface">
        <Image
          src={profile.photo}
          alt={`${profile.name} — profile photo`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 80vw, 384px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
        <div className="absolute inset-x-4 bottom-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 font-mono text-xs text-white backdrop-blur">
          <span className="h-2 w-2 animate-pulseDot rounded-full bg-emerald-400" /> Open to work
        </div>
      </div>
    </div>
  );
}
