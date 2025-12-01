import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HomeHighlights } from "@/components/sections/home-highlights";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeHighlights />
      <ContactSection />
    </>
  );
}
