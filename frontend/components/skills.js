"use client";

import Image from "next/image";

const skillGroups = [
  {
    title: "Frontend",
    desc: "Interfaces rapides, modernes et pensées pour offrir une expérience fluide et engageante.",
    className:
      "md:col-span-2 bg-[linear-gradient(145deg,rgba(18,18,20,0.96),rgba(10,10,10,0.92))]",
    accent: "from-white/8 via-white/[0.03] to-transparent",
    layout: "double",
    skills: [
      { name: "React", logo: "/react.svg" },
      { name: "Next.js", logo: "/nextjs_dark.svg" },
    ],
  },
  {
    title: "Backend",
    desc: "Architecture claire, API robustes et logique metier bien structuree.",
    className:
      "md:col-span-2 bg-[linear-gradient(145deg,rgba(20,20,22,0.96),rgba(11,11,13,0.92))]",
    accent: "from-white/7 via-white/[0.02] to-transparent",
    layout: "double",
    skills: [
      { name: "Node.js", logo: "/nodejs.svg" },
      { name: "Express", logo: "/expressjsdark.svg" },
    ],
  },
  {
    title: "Database",
    desc: "Structuration efficace des données pour garantir performance et évolutivité.",
    className:
      "md:col-span-1 bg-[linear-gradient(145deg,rgba(17,17,19,0.96),rgba(9,9,11,0.92))]",
    accent: "from-white/7 via-white/[0.02] to-transparent",
    layout: "single",
    skills: [{ name: "MongoDB", logo: "/mongodb-icon-dark.svg" }],
  },
  {
    title: "Deployment",
    desc: "Déploiement simple, rapide et optimisé pour la production.",
    className:
      "md:col-span-1 bg-[linear-gradient(145deg,rgba(17,17,19,0.96),rgba(9,9,11,0.92))]",
    accent: "from-white/7 via-white/[0.02] to-transparent",
    layout: "single",
    skills: [{ name: "Vercel", logo: "/vercel.svg" }],
  },
];

function SkillCard({ skill }) {
  return (
    <div className="flex items-center gap-3 rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-3 transition duration-300 hover:bg-white/[0.07]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/25">
        <Image
          src={skill.logo}
          alt={skill.name}
          width={32}
          height={32}
          className="h-7 w-7 object-contain"
        />
      </div>
      <div className="text-sm font-semibold text-white">{skill.name}</div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#0a0a0a] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Mes skills
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={`relative overflow-hidden rounded-[2rem] border border-white/10 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] ${group.className}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${group.accent}`} />
              <div className="absolute inset-x-10 top-0 h-24 rounded-full bg-white/6 blur-3xl" />

              <div className="relative">
                <div className="mb-5">
                  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/55">
                    {group.title}
                  </div>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                    {group.desc}
                  </p>
                </div>

                <div
                  className={
                    group.layout === "double"
                      ? "grid gap-3 sm:grid-cols-2"
                      : "grid gap-3"
                  }
                >
                  {group.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
