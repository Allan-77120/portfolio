"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  {
    name: "GitHub",
    username: "@Allan-77120",
    url: "https://github.com/Allan-77120",
    icon: "/github_dark.svg",
  },
  {
    name: "CV",
    username: "Consulter mon CV",
    url: "/CV%20Allan.pdf",
    icon: "/icon_cv.webp",
    iconClassName: "h-6 w-6 object-contain sm:h-7 sm:w-7",
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
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0a0a0a] px-4 py-24 sm:px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025)_0%,transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <div className="mb-5 h-px w-24 bg-gradient-to-r from-white/10 via-white/35 to-white/10" />

              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Me contacter
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/50 sm:text-base">
                N&apos;hésitez pas à me retrouver sur ces différentes plateformes :
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:gap-4 xl:grid-cols-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative min-h-40 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#101114] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#14161a]"
                >
                  <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="flex h-full flex-col items-center justify-center gap-5">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] transition group-hover:border-white/20 group-hover:bg-white/[0.09]">
                      <Image
                        src={link.icon}
                        alt={link.name}
                        width={28}
                        height={28}
                        className={
                          link.iconClassName ||
                          "h-5 w-5 object-contain sm:h-6 sm:w-6"
                        }
                      />
                    </div>

                    <div className="min-h-11">
                      <p className="text-sm font-medium text-white">
                        {link.name}
                      </p>
                      <p className="mt-1 break-words text-xs leading-5 text-white/45">
                        {link.username}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
