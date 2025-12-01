import { PageIntro } from "@/components/page-intro";
import { AboutSection } from "@/components/sections/about-section";

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Engineering with circularity and community in mind"
        description="Learn about my academic foundation, professional interests, and the experiences that inform my approach to electrical and computer engineering."
      />
      <AboutSection />
    </>
  );
}

