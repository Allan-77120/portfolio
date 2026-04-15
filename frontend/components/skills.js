"use client";
import Image from "next/image";
export default function Skills() {
  const skills = [
    { name: "React", logo: "/react.svg" },
    { name: "Next.js", logo: "/nextjs_dark.svg" },
    { name: "Express", logo: "/expressjsdark.svg" },
    { name: "MongoDB", logo: "/mongodb-icon-dark.svg" },
    { name: "Vercel", logo: "/vercel.svg" },
    { name: "Node", logo: "/nodejs.svg" },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Mes Skills
          </h2>
        </div>

        
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white/70 text-sm">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
