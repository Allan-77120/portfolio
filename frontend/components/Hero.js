"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-[#0a0a0a] to-zinc-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl"
        >
          Développeur
          <span className="block bg-gradient-to-r from-zinc-300 to-zinc-600 bg-clip-text text-transparent">
            Full-Stack
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/45 sm:text-lg"
        >
          Je conçois et développe des applications web modernes,
          du design à la mise en production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="w-full rounded-2xl bg-white px-8 py-4 text-center text-base font-medium text-black transition-colors hover:bg-zinc-200 sm:w-auto"
          >
            Mes projets
          </a>
          <a
            href="#skills"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-center text-base text-white/75 transition-colors hover:bg-white/10 sm:w-auto"
          >
            Mes skills
          </a>
          <a
            href="#contact"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-center text-base text-white/75 transition-colors hover:bg-white/10 sm:w-auto"
          >
            Me contacter
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
