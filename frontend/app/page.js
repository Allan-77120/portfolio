import Image from "next/image";
import Hero from "@/components/Hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <main className="bg-[#0b0b12] text-white">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
