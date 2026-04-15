"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [expandedVideo, setExpandedVideo] = useState(null);
  const [videoTime, setVideoTime] = useState(0);

  const projects = [
    {
      title: "AstroDex",
      desc: "Une application mobile pour capturer les astres.",
      tech: ["React Native", "Node.js", "mongoDB", "express"],
      video: "/video.mp4",
    },
    {
      title: "Projet 2",
      desc: "Maison de santé du Provinois",
      tech: ["Next.js", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="px-4 sm:px-6 py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-10">
          Mes Projets
        </h2>

        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition duration-300 hover:-translate-y-1"
            >
              {/* ☝️ grid-cols-1 sur mobile, grid-cols-2 sur md+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">

                {/* TEXTE */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-white/60 text-sm">{project.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* VIDEO */}
                {project.video ? (
                  <div className="flex items-center justify-center">
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      onClick={e => {
                        setVideoTime(e.currentTarget.currentTime);
                        setExpandedVideo(project.video);
                      }}
                      // ☝️ w-full sur mobile, hauteur fixe sur md+
                      className="w-full md:h-80 md:w-auto object-contain rounded-2xl cursor-pointer"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-48 sm:h-72 rounded-2xl border border-white/10 bg-white/5">
                    <span className="text-white/20 text-sm">
                      Aperçu bientôt disponible
                    </span>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal vidéo */}
      {expandedVideo && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={() => setExpandedVideo(null)}
        >
          <video
            src={expandedVideo}
            autoPlay
            loop
            muted
            playsInline
            // ☝️ max-w-full pour ne pas déborder sur mobile
            className="w-full max-w-lg md:h-[80vh] md:w-auto rounded-2xl"
            ref={el => {
              if (el) el.currentTime = videoTime;
            }}
          />
        </div>
      )}
    </section>
  );
}

