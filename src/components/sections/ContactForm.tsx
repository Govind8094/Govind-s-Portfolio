"use client";
import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";

/** No backend needed: composes a mailto: draft in the visitor's mail app. */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(f.get("subject") || `Opportunity for ${profile.name}`));
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field = "w-full rounded-xl border border-line bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-accent focus:bg-white/[0.07]";

  return (
    <form onSubmit={onSubmit} className="glass space-y-4 p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block"><span className="mb-1.5 block font-mono text-xs text-slate-400">Your name</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Jane Recruiter" /></label>
        <label className="block"><span className="mb-1.5 block font-mono text-xs text-slate-400">Your email</span>
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="jane@company.com" /></label>
      </div>
      <label className="block"><span className="mb-1.5 block font-mono text-xs text-slate-400">Subject</span>
        <input name="subject" className={field} placeholder="Data Analyst opportunity" /></label>
      <label className="block"><span className="mb-1.5 block font-mono text-xs text-slate-400">Message</span>
        <textarea name="message" required rows={5} className={`${field} resize-y`} placeholder="Tell me about the role…" /></label>
      <button className="w-full rounded-full bg-gradient-to-r from-accent to-accent-cyan px-6 py-3 text-sm font-medium text-white transition hover:shadow-lg hover:shadow-accent/30">
        Send message
      </button>
      <p role="status" className="min-h-5 text-center font-mono text-xs text-slate-400">
        {sent ? "Opening your mail app… if nothing happens, email me directly." : "Opens your email app with the message pre-filled."}
      </p>
    </form>
  );
}
