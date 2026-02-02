"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a0f] px-4 sm:px-6 md:px-8"
    >
      {/* Animated background elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(204,251,6,0.2)_0%,_rgba(204,251,6,0.1)_50%,_rgba(204,251,6,0.2)_100%)] blur-3xl" />
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(204,251,6,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(204,251,6,0.18)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(circle_at_center,black_0%,black_45%,transparent_70%)]" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-7xl px-2 sm:px-4"
      >
        {/* Logo or initial - animated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-[var(--color-card-alt)] backdrop-blur-sm">
            <span className="text-2xl font-bold text-primary">RH</span>
          </div>
        </motion.div>

        {/* Role/Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary/80"
        >
          Full Stack Developer
        </motion.div>

        {/* Main name with stagger animation */}
        <motion.h1
          className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-8xl lg:text-9xl"
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
          className="mb-12 text-sm font-medium uppercase tracking-[0.3em] text-primary/70"
        >
          React • Next.js • React Native
        </motion.div>

        {/* Services Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-12 overflow-hidden w-full max-w-4xl -mx-4 sm:mx-0"
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
                  className="inline-flex flex-col justify-center rounded-lg border border-primary/20 bg-(--color-card) px-6 py-5 backdrop-blur-sm min-w-60 sm:min-w-70 sm:px-8 sm:py-6"
                >
                  <span className="text-sm font-semibold text-white mb-1 sm:text-base">
                    {service.title}
                  </span>
                  <span className="text-xs text-primary/80 sm:text-sm">
                    {service.tech}
                  </span>
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
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-primary/50 bg-primary/30 px-8 py-4 text-sm font-medium text-black shadow-lg shadow-primary/30 transition-all hover:bg-primary/35 hover:shadow-xl hover:shadow-primary/40"
          >
            <span className="relative z-10 font-semibold text-slate-200">
              Hire me
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
            <div className="absolute inset-0 -z-10 bg-primary/80 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
