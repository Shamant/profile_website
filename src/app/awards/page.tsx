import { PageIntro } from "@/components/page-intro";
import { AwardsSection } from "@/components/sections/awards-section";

export default function AwardsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Awards"
        title="Leadership, service, and recognition"
        description="Tracking milestones that celebrate collaboration, perseverance, and impact beyond the lab or classroom."
      />
      <AwardsSection />
    </>
  );
}

