"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Experience {
  id: number;
  year: string;
  role: string;
  company: string;
  description: string;
  type: "freelance" | "employment";
}

const experiences: Experience[] = [
  {
    id: 1,
    year: "2024 - Present",
    role: "Freelance Full Stack Developer",
    company: "Independent",
    description:
      "Building custom web applications and digital experiences for clients worldwide. Specializing in React, Next.js, and modern web technologies.",
    type: "freelance",
  },
  {
    id: 2,
    year: "2022 - 2024",
    role: "Senior Frontend Developer",
    company: "Tech Company",
    description:
      "Led frontend development for enterprise applications, mentored junior developers, and established design system standards.",
    type: "employment",
  },
  {
    id: 3,
    year: "2020 - 2022",
    role: "Full Stack Developer",
    company: "Digital Agency",
    description:
      "Developed and maintained multiple client projects using React, Node.js, and cloud services.",
    type: "employment",
  },
  {
    id: 4,
    year: "2019 - 2020",
    role: "Junior Developer",
    company: "Startup",
    description:
      "Started career building features for a SaaS platform and learning modern development practices.",
    type: "employment",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#0a0a0f] px-6 py-32 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="mb-4 font-serif text-5xl font-bold tracking-tight text-white md:text-7xl">
            Experience
          </h2>
          <p className="text-lg text-slate-400">
            My professional journey and expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-linear-to-b from-purple-500/50 via-pink-500/50 to-transparent md:block md:left-1/2" />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-start gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-purple-500 bg-[#0a0a0f] md:block md:left-1/2">
                  <div className="absolute inset-0 animate-ping rounded-full bg-purple-500 opacity-20" />
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-slate-700 md:p-8"
                  >
                    {/* Freelance badge */}
                    {exp.type === "freelance" && (
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                        <span className="text-xs font-medium uppercase tracking-wider text-green-400">
                          Currently Freelancing
                        </span>
                      </div>
                    )}

                    <div className="mb-3 text-sm font-medium uppercase tracking-wider text-purple-400">
                      {exp.year}
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="mb-4 text-lg font-medium text-slate-300">
                      {exp.company}
                    </div>
                    <p className="text-slate-400">{exp.description}</p>

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-600/10 to-pink-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden w-1/2 md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 rounded-2xl border border-slate-800 bg-slate-900/30 p-8 backdrop-blur-sm md:p-12"
        >
          <h3 className="mb-8 text-2xl font-bold text-white md:text-3xl">
            Core Skills
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {[
              "React & Next.js",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "Framer Motion",
              "PostgreSQL",
              "AWS & Vercel",
              "UI/UX Design",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-center text-sm font-medium text-slate-300 transition-colors hover:border-purple-500/50 hover:text-white"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
