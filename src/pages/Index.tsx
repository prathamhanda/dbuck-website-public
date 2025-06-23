
import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhyDBuckSection from "@/components/landing/WhyDBuckSection";
import AboutSection from "@/components/landing/AboutSection";
import FoundersSection from "@/components/landing/FoundersSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhyDBuckSection />
      <AboutSection />
      <FoundersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
