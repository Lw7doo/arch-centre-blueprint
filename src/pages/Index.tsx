import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import AboutSection from "@/components/AboutSection";
import CoreCapabilities from "@/components/CoreCapabilities";
import TwoPillars from "@/components/TwoPillars";
import PrestigeStrip from "@/components/PrestigeStrip";
import ParallaxDivider from "@/components/ParallaxDivider";
import ProjectShowcase from "@/components/ProjectShowcase";
import ServicesOverview from "@/components/ServicesOverview";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TwoPillars />
      <Vision />
      <AboutSection />
      <CoreCapabilities />
      <PrestigeStrip />
      <ParallaxDivider />
      <ProjectShowcase />
      <ServicesOverview />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
