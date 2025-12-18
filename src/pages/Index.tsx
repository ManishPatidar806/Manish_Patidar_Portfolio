import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection  />
      <AboutSection />
      <div id="skills">
        <SkillsSection />
      </div>
      <ProjectsSection />
      <div id="experience">
        <ExperienceSection />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
