import Image from "next/image";
import Hero from "@/components/Hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
export default function Home() {
  return (
    <main className="bg-[#0b0b12] text-white">
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}
