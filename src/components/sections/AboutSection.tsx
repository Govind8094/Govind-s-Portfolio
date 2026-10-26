import { PageShell } from "@/components/ui/PageShell";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { TiltCard } from "@/components/ui/TiltCard";
import { SkillMeter } from "@/components/ui/SkillMeter";
import { TagList } from "@/components/ui/Tag";
import { Timeline } from "@/components/ui/Timeline";
import { Button } from "@/components/ui/Button";
import { certifications, experience, profile, skills } from "@/data/profile";

export function AboutSection() {
  return (
    <PageShell id="about" index="01" title="About me" subtitle="Data-minded engineer with a security-first mindset.">
      <section className="grid grid-cols-[minmax(0,1fr)] items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div data-reveal><TiltCard><ProfilePhoto /></TiltCard></div>
        <div data-reveal className="space-y-5 text-base leading-relaxed sm:text-lg">
          <p className="font-display text-2xl font-semibold text-white sm:text-3xl">I turn messy datasets into clear decisions.</p>
          <p>{profile.summary}</p>
          <p>A cybersecurity internship at Salesforce added a security-first mindset — I care about access control, data protection and the integrity of the data I work with.</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href={profile.resume} download>Download resume</Button>
            <Button href="#contact" variant="ghost">Contact me</Button>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <h2 data-reveal className="mb-8 font-display text-2xl font-bold text-white sm:text-3xl">Technical skills</h2>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-5 md:grid-cols-2">
          <div data-reveal className="glass space-y-5 p-6">
            <h3 className="font-mono text-sm text-accent-cyan">Languages</h3>
            {skills.languages.map((s) => <SkillMeter key={s.name} {...s} />)}
          </div>
          {skills.groups.map((g) => (
            <div key={g.title} data-reveal className="glass p-6">
              <h3 className="mb-4 font-mono text-sm text-accent-cyan">{g.title}</h3>
              <TagList items={g.items} />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2 data-reveal className="mb-8 font-display text-2xl font-bold text-white sm:text-3xl">Internship experience</h2>
        <Timeline items={experience.map((e) => ({ title: e.role, subtitle: e.company, period: e.period, points: e.points, tags: e.tags }))} />
      </section>

      <section className="mt-24">
        <h2 data-reveal className="mb-8 font-display text-2xl font-bold text-white sm:text-3xl">Achievements &amp; certifications</h2>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <TiltCard key={c.title}>
              <div data-reveal className="glass h-full p-5 transition hover:border-accent/50">
                <span className="font-mono text-xs text-accent-cyan">{c.date}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{c.title}</h3>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
