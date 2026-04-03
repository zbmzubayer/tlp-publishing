import { AboutSection } from "@/components/about-section";
import { CompanyStorySection } from "@/components/company-story-section";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing-section";
import { ServicesSection } from "@/components/services-section";
import { VideoInfoSection } from "@/components/video-info-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyStorySection />
      <AboutSection />
      <ServicesSection />
      <VideoInfoSection />
      <PricingSection />
      <ContactCtaSection />
    </>
  );
}
