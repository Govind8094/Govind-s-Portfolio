import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Marquee } from "@/components/sections/Marquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Marquee />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
