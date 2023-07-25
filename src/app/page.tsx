// "use client";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
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
    </main>
  );
}
