import { PageShell } from "@/components/ui/PageShell";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/data/profile";

export function ProjectsSection() {
  return (
    <PageShell id="projects" index="03" title="Projects" subtitle="End-to-end data work: from raw data and schema design to dashboards and insight.">
      <div className="space-y-24 sm:space-y-32">
        {projects.map((p, i) => <ProjectCard key={p.id} project={p} flip={i % 2 === 1} />)}
      </div>
    </PageShell>
  );
}
