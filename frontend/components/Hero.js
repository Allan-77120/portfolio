"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">

      
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-[#0a0a0a] to-zinc-800" />

      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      
      <div className="relative z-10 text-center px-6 w-full max-w-2xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Développeur
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">
            Full-Stack
          </span>
        </motion.h1>

       
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto text-white/40 text-base sm:text-lg mb-10 leading-relaxed"
        >
          Je conçois et développe des applications web modernes,
          du design à la mise en production.
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors text-center"
          >
            Mes projets
          </a>
          <a
            href="#skills"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white/70 text-sm hover:bg-white/10 transition-colors text-center"
          >
            Mes skills
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white/70 text-sm hover:bg-white/10 transition-colors text-center"
          >
            Me contacter
          </a>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

    </section>
  );
}
