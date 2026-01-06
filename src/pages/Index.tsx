import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import CoreCapabilities from "@/components/CoreCapabilities";
import TwoPillars from "@/components/TwoPillars";
import PrestigeStrip from "@/components/PrestigeStrip";
import ProjectShowcase from "@/components/ProjectShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Vision />
      <CoreCapabilities />
      <TwoPillars />
      <PrestigeStrip />
      <ProjectShowcase />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
