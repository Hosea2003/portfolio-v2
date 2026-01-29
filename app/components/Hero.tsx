"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a0f] px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-slate-600/15 via-slate-500/10 to-slate-700/15 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Logo or initial - animated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-400/30 bg-slate-800/50 backdrop-blur-sm">
            <span className="text-2xl font-bold text-slate-300">RH</span>
          </div>
        </motion.div>

        {/* Role/Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-slate-400"
        >
          Full Stack Developer
        </motion.div>

        {/* Main name with stagger animation */}
        <motion.h1
          className="mb-6 text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl"
          style={{ fontFamily: "var(--font-bricolage)" }}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            RINDRA
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            HOSEA
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12 text-sm font-medium uppercase tracking-[0.3em] text-slate-400"
        >
          React • Next.js • React Native
        </motion.div>

        {/* Services Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-12 overflow-hidden w-full max-w-4xl"
        >
          <div className="relative h-32 flex items-center">
            <motion.div
              animate={{
                x: [0, -1600],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
              className="flex gap-4 whitespace-nowrap"
            >
              {[
                { title: "Backend Development", tech: "NestJS • Django" },
                { title: "Frontend Development", tech: "React • Next.js" },
                { title: "Mobile Development", tech: "React Native" },
                { title: "API Design", tech: "REST • GraphQL" },
                { title: "Full Stack Solutions", tech: "End-to-End" },
                { title: "Backend Development", tech: "NestJS • Django" },
                { title: "Frontend Development", tech: "React • Next.js" },
                { title: "Mobile Development", tech: "React Native" },
                { title: "API Design", tech: "REST • GraphQL" },
                { title: "Full Stack Solutions", tech: "End-to-End" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="inline-flex flex-col justify-center rounded-lg border border-slate-700 bg-slate-800/50 px-8 py-6 backdrop-blur-sm min-w-[280px]"
                >
                  <span className="text-base font-semibold text-white mb-1">
                    {service.title}
                  </span>
                  <span className="text-sm text-slate-400">{service.tech}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-slate-600/50 bg-linear-to-br from-slate-200 via-slate-100 to-slate-300 px-8 py-4 text-sm font-medium text-slate-900 shadow-lg shadow-slate-900/50 transition-all hover:border-slate-400 hover:shadow-xl hover:shadow-slate-700/50"
          >
            <span className="relative z-10 font-semibold">
              Available for Freelance
            </span>
            <svg
              className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-slate-100 to-slate-200 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
