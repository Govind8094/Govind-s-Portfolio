import type { projects } from "@/data/profile";
import { TagList } from "@/components/ui/Tag";
import { SalesChart, SchemaDiagram } from "./ProjectVisuals";

type Project = (typeof projects)[number];

export function ProjectCard({ project, flip }: { project: Project; flip?: boolean }) {
  return (
    <article data-reveal className="grid grid-cols-[minmax(0,1fr)] items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={flip ? "lg:order-2" : ""}>
        <span className="font-mono text-sm text-accent-cyan">Project {project.no}</span>
        <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-4xl">{project.title}</h2>
        <div className="mt-4"><TagList items={project.stack} /></div>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-relaxed marker:text-accent sm:text-base">
          {project.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>
      <div>{project.visual === "chart" ? <SalesChart /> : <SchemaDiagram />}</div>
    </article>
  );
}
