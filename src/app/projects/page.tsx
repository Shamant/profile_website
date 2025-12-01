import { PageIntro } from "@/components/page-intro";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Projects"
        description="Startups, research builds, and technical internships I’ve helped ship—covering everything from local business AI copilots to healthtech infrastructure."
      />
      <ProjectsSection />
    </>
  );
}

