"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AstroDex",
    label: "Application mobile",
    desc: "Application mobile React Native avec authentification, capture de photos et sauvegarde des observations astronomiques via une API Node/Express.",
    tech: ["React Native", "Node.js", "MongoDB", "Express"],
    video: "/video.mp4",
    accent: "from-orange-400/30 via-pink-500/20 to-violet-500/25",
    type: "mobile",
  },
  {
    title: "Comparateur APY Solana",
    label: "Application web",
    desc: "Application Next.js permettant de comparer les rendements DeFi sur Solana avec filtres par protocole, niveau de risque et type d’actif.",
    tech: ["Next.js", "React", "Solana", "DeFi"],
    href: "https://comparateur-apy-solana.vercel.app/",
    image: "/image_ecran_site.png",
    alt: "Capture d'accueil du comparateur APY Solana",
    accent: "from-emerald-400/25 via-cyan-500/20 to-violet-500/25",
    type: "apy",
  },
  {
    title: "Maison de sante",
    label: "Projet client",
    desc: "Site vitrine pour une maison de santé en ouverture, pensé pour présenter les praticiens, les horaires, l’accès et les informations pratiques",
    tech: ["Next.js", "React", "Responsive UI"],
    href: "https://maison-sante-provinois.vercel.app",
    accent: "from-sky-400/30 via-blue-500/20 to-slate-800/30",
    type: "website",
  },
];

const projectListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const projectCardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ProjectFrame({ children, accent }) {
  return (
    <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0d0f12] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="absolute inset-x-10 top-0 h-24 rounded-full bg-white/10 blur-3xl" />
      <div className="relative rounded-[1.5rem] border border-white/10 bg-[#090b0e]">
        {children}
      </div>
    </div>
  );
}

function MobilePreview({ project, onExpand }) {
  return (
    <ProjectFrame accent={project.accent}>
      <div className="grid aspect-[16/10] place-items-center overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_36%,transparent_70%)] px-5 py-5 sm:px-7 sm:py-7">
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="absolute h-[70%] w-[14rem] rounded-full bg-white/8 blur-3xl sm:w-[17rem]" />

          <div className="relative w-[150px] rounded-[2.05rem] border border-white/15 bg-black p-2 shadow-[0_24px_55px_rgba(0,0,0,0.55)] sm:w-[150px]">
            <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/10" />
            <div className="overflow-hidden rounded-[1.7rem] bg-[#050505]">
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                onClick={(event) =>
                  onExpand(project.video, event.currentTarget.currentTime)
                }
                className="aspect-[9/19] w-full cursor-pointer object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </ProjectFrame>
  );
}

function ApyPreview({ project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition duration-300 hover:scale-[1.01]"
    >
      <ProjectFrame accent={project.accent}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#050806]">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority={false}
          />
        </div>
      </ProjectFrame>
    </a>
  );
}

function WebsitePreview({ project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition duration-300 hover:scale-[1.01]"
    >
      <ProjectFrame accent={project.accent}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
          <Image
            src="/image.png"
            alt="Capture d'accueil du site Maison de sante"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority={false}
          />
        </div>
      </ProjectFrame>
    </a>
  );
}

export default function Projects() {
  const [expandedVideo, setExpandedVideo] = useState(null);
  const [videoTime, setVideoTime] = useState(0);

  const openVideo = (video, currentTime) => {
    setVideoTime(currentTime);
    setExpandedVideo(video);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0a0a0a] px-4 py-24 sm:px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
          <div className="mb-10 max-w-2xl">
            <div className="mb-5 h-px w-24 bg-gradient-to-r from-white/10 via-white/35 to-white/10" />

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Mes projets
            </h2>
          </div>

          <motion.div
            variants={projectListVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="flex flex-col gap-5"
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={projectCardVariants}
                className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#101114] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#14161a] sm:p-5 lg:p-6"
              >
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="relative grid items-center gap-8 lg:grid-cols-[0.84fr_1.16fr]">
                  <div className="order-2 lg:order-1">
                    <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/55">
                      {project.label}
                    </div>

                    <h3 className="max-w-md text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                      {project.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.type === "mobile" && (
                      <button
                        type="button"
                        onClick={() => openVideo(project.video, 0)}
                        className="mt-8 inline-flex items-center rounded-2xl border border-white/10 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                      >
                        Découvrir le projet
                      </button>
                    )}

                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center rounded-2xl border border-white/10 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                      >
                        Voir le site
                      </a>
                    )}
                  </div>

                  <div className="order-1 lg:order-2">
                    {project.type === "mobile" ? (
                      <MobilePreview project={project} onExpand={openVideo} />
                    ) : project.type === "apy" ? (
                      <ApyPreview project={project} />
                    ) : (
                      <WebsitePreview project={project} />
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      {expandedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setExpandedVideo(null)}
        >
          <video
            src={expandedVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-lg rounded-3xl md:h-[80vh] md:w-auto"
            ref={(element) => {
              if (element) {
                element.currentTime = videoTime;
              }
            }}
          />
        </div>
      )}
    </section>
  );
}
