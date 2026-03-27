import { AboutSection } from "@/components/about-section";
import { CompanyStorySection } from "@/components/company-story-section";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing-section";
import { ServicesSection } from "@/components/services-section";
import { VideoInfoSection } from "@/components/video-info-section";
import { Footer } from "@/layouts/footer";
import { Header } from "@/layouts/header";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 bg-white">
        <HeroSection />
        <CompanyStorySection />
        <AboutSection />
        <ServicesSection />
        <VideoInfoSection />
        <PricingSection />
        <ContactCtaSection />
      </main>
      <Footer />
    </>
  );
}
