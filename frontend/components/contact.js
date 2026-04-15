"use client";

import { motion } from "framer-motion";

const links = [
  {
    name: "GitHub",
    username: "@Allan-77120",
    url: "https://github.com/Allan-77120",
    icon: "/github_dark.svg",
  },
  {
    name: "LinkedIn",
    username: "Allan Christoph",
    url: "https://www.linkedin.com/in/allan-christoph-32705b171",
    icon: "/linkedin.svg",
  },
  {
    name: "Email",
    username: "Allan Christoph",
    url: "mailto:christoph.Allan77120@gmail.com",
    icon: "/gmail.svg",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0a0a0a] overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-white mb-3"
        >
          Me contacter
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white/40 text-m mb-10"
        >
          N’hésitez pas à me retrouver sur ces différentes plateformes :
        </motion.p>

        <div className="flex flex-col gap-4">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] hover:-translate-y-1 transition duration-300 group"
            >
              <div className="flex items-center gap-4">
                <img src={link.icon} alt={link.name} className="w-6 h-6" />
                <div>
                  <p className="text-white font-medium text-sm">{link.name}</p>
                  <p className="text-white/40 text-xs">{link.username}</p>
                </div>
              </div>

              {/* Arrow */}
              <svg
                className="w-4 h-4 text-white/30 group-hover:text-white/70 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
