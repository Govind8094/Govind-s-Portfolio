import { PageShell } from "@/components/ui/PageShell";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <PageShell id="contact" index="04" title="Let's connect" subtitle="Hiring or collaborating? Download my resume, message me directly, or find me on social.">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          <div data-reveal className="glass space-y-4 p-6">
            <h2 className="font-display text-xl font-semibold text-white">Looking for a Data Analyst?</h2>
            <p className="text-sm text-slate-400">Grab my resume or reach out directly — I reply fast.</p>
            <div className="flex flex-wrap gap-3">
              <Button href={profile.resume} download><Icon name="download" width={16} height={16} /> Download resume</Button>
              <Button href={`mailto:${profile.email}`} variant="ghost"><Icon name="email" width={16} height={16} /> Email me</Button>
            </div>
            <p className="flex items-center gap-2 font-mono text-xs text-slate-500"><Icon name="pin" width={14} height={14} /> {profile.location}</p>
          </div>
          <div data-reveal>
            <h2 className="mb-4 font-mono text-sm text-accent-cyan">Find me online</h2>
            <SocialLinks withHandle />
          </div>
        </div>
        <div data-reveal><ContactForm /></div>
      </div>
    </PageShell>
  );
}
