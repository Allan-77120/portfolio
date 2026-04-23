"use client";

import Image from "next/image";

const skillGroups = [
  {
    title: "Frontend",
    desc: "Interfaces rapides, modernes et pensées pour offrir une expérience fluide et engageante.",
    className: "md:col-span-2",
    layout: "double",
    skills: [
      { name: "React", logo: "/react.svg" },
      { name: "Next.js", logo: "/nextjs_dark.svg" },
    ],
  },
  {
    title: "Backend",
    desc: "Architecture claire, API robustes et logique métier bien structurée.",
    className: "md:col-span-2",
    layout: "double",
    skills: [
      { name: "Node.js", logo: "/nodejs.svg" },
      { name: "Express", logo: "/expressjsdark.svg" },
    ],
  },
  {
    title: "Database",
    desc: "Structuration efficace des données pour garantir performance et évolutivité.",
    className: "md:col-span-1",
    layout: "single",
    skills: [{ name: "MongoDB", logo: "/mongodb-icon-dark.svg" }],
  },
  {
    title: "Deployment",
    desc: "Déploiement simple, rapide et optimisé pour la production.",
    className: "md:col-span-1",
    layout: "single",
    skills: [{ name: "Vercel", logo: "/vercel.svg" }],
  },
];

function SkillCard({ skill }) {
  return (
    <div className="group flex items-center gap-3 rounded-[1.2rem] border border-white/10 bg-[#101114] px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#14161a]">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] transition group-hover:border-white/20 group-hover:bg-white/[0.09]">
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
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0a0a0a] px-4 py-24 sm:px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025)_0%,transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
          <div className="mb-10 max-w-2xl">
            <div className="mb-5 h-px w-24 bg-gradient-to-r from-white/10 via-white/35 to-white/10" />

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Mes skills
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className={`group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#101114] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#14161a] ${group.className}`}
              >
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-5">
                    <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/55">
                      {group.title}
                    </div>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
                      {group.desc}
                    </p>
                  </div>

                  <div
                    className={
                      group.layout === "double"
                        ? "mt-auto grid gap-3 sm:grid-cols-2"
                        : "mt-auto grid gap-3"
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
      </div>
    </section>
  );
}
