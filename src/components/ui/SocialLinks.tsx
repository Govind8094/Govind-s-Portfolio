import { socials } from "@/data/profile";
import { Icon } from "./Icons";

/** Renders only socials that have an href configured. */
export function SocialLinks({ withHandle = false }: { withHandle?: boolean }) {
  const list = socials.filter((s) => s.href);
  return (
    <ul className={withHandle ? "grid gap-3 sm:grid-cols-2" : "flex flex-wrap gap-3"}>
      {list.map((s) => (
        <li key={s.id}>
          <a
            href={s.href}
            aria-label={s.label}
            {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="glass group flex items-center gap-3 px-4 py-3 text-slate-300 transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-white"
          >
            <Icon name={s.id} className="shrink-0 text-accent-cyan" />
            {withHandle && (
              <span className="min-w-0">
                <span className="block text-sm font-medium text-white">{s.label}</span>
                <span className="block truncate font-mono text-xs text-slate-500">{s.handle}</span>
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
