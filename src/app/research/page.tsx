import { PageIntro } from "@/components/page-intro";
import { ResearchSection } from "@/components/sections/research-section";

export default function ResearchPage() {
  return (
    <>
      <PageIntro
        eyebrow="Research"
        title="Research & Publications"
        description="Selected papers and workshops covering theory of mind benchmarks, applied AI, and student research accepted to NAACL SRW 2025."
      />
      <ResearchSection />
    </>
  );
}

