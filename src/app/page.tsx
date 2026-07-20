import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutUs";
import HardSkillsSection from "../components/portfolios";
import ContactSection from "../components/contact";
import SkillCodeEditor from "@/components/Skills";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillCodeEditor />
      <HardSkillsSection />
      <ContactSection />
      
    </>
  );
}
