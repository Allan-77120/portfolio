"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AstroDex",
    label: "Application mobile",
    desc: "Une app pour capturer les astres.",
    tech: ["React Native", "Node.js", "MongoDB", "Express"],
    video: "/video.mp4",
    accent: "from-orange-400/30 via-pink-500/20 to-violet-500/25",
    type: "mobile",
  },
  {
    title: "Maison de sante",
    label: "Site vitrine",
    desc: "Une presentation de la Maison de sante du Provinois.",
    tech: ["Next.js", "React", "Responsive UI"],
    href: "https://maison-sante-provinois.vercel.app",
    accent: "from-sky-400/30 via-blue-500/20 to-slate-800/30",
    type: "website",
  },
];

function ProjectFrame({ children, accent }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#0d0f12] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
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

          <div className="relative w-[160px] rounded-[2.05rem] border border-white/15 bg-black p-2 shadow-[0_24px_55px_rgba(0,0,0,0.55)] sm:w-[160px]">
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
    <section id="projects" className="bg-[#0a0a0a] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
         
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Mes projets
          </h2>
          
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.25 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06] sm:p-7"
            >
              <div className="grid items-center gap-8 lg:grid-cols-[0.84fr_1.16fr]">
                <div className="order-2 lg:order-1">
                  <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/55">
                    {project.label}
                  </div>

                  <h3 className="max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                    {project.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                    >
                      Voir le site
                    </a>
                  )}
                </div>

                <div className="order-1 lg:order-2">
                  {project.type === "mobile" ? (
                    <MobilePreview project={project} onExpand={openVideo} />
                  ) : (
                    <WebsitePreview project={project} />
                  )}
                </div>
              </div>
            </motion.article>
          ))}
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
