import { PageShell } from "@/components/ui/PageShell";
import { Timeline } from "@/components/ui/Timeline";
import { education } from "@/data/profile";

export function EducationSection() {
  return (
    <PageShell id="education" index="02" title="Education" subtitle="B.Tech in Computer Science Engineering with a focus on databases, OOP and statistics.">
      <Timeline items={education.map((e) => ({ title: e.school, subtitle: e.degree, period: e.period, tags: e.tags }))} />
    </PageShell>
  );
}
