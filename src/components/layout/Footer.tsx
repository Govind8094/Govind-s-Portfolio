import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-mono text-xs text-slate-500">© {new Date().getFullYear()} {profile.name} · {profile.location}</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
