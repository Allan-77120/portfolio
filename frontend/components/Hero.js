"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-[#0a0a0a] to-zinc-800" />
      
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Disponible pour des projets
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Développeur
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
            Full-Stack
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto text-white/40 text-lg mb-10 leading-relaxed"
        >
          Je conçois et développe des applications web modernes,
          du design à la mise en production.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors"
          >
            Mes projets
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white/70 text-sm hover:bg-white/10 transition-colors"
          >
            Me contacter
          </a>
<a
            href="#skills"
            className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white/70 text-sm hover:bg-white/10 transition-colors"
          >
            Mes skills
          </a>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

    </section>
  );
}
