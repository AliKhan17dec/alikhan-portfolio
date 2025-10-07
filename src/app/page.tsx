import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutUs";
import SkillsSection from "../components/Skills";
import HardSkillsSection from "../components/portfolios";
import ContactSection from "../components/contact";


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <HardSkillsSection />
      <ContactSection />
    </>
  );
}
