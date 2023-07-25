// "use client";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FooterSection } from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { SkillSection } from "@/components/SkillSection";
import { Testimonials } from "@/components/Testimonials";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <WorkSection />
      <Testimonials />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
