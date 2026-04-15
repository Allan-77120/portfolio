"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const skills = [
  { name: "React", logo: "/react.svg" },
  { name: "Next.js", logo: "/nextjs_dark.svg" },
  { name: "Express", logo: "/expressjsdark.svg" },
  { name: "MongoDB", logo: "/mongodb-icon-dark.svg" },
  { name: "Vercel", logo: "/vercel.svg" },
{ name: "Node", logo: "/nodejs.svg" },
];

function SkillCard({ skill }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/8 text-white/70 text-sm">
      <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
      {skill.name}
    </div>
  );
}
export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#0a0a0a] overflow-hidden">

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 mb-10">
          <h2 className="text-4xl font-semibold text-white">Mes Skills</h2>
        </div>

        {/* Carrousel horizontal */}
        <div className="flex overflow-x-scroll space-x-6 px-6 snap-x snap-mandatory scrollbar-hide justify-center">
          {skills.map((skill, i) => (
            <div key={i} className="flex-shrink-0 w-40 snap-center">
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}


