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
    year: "Aug 2024 - Present",
    role: "Freelance Full Stack Developer",
    company: "Independent",
    description:
      "Development of new features for mobile and web applications with React Native and Next.js. Created Rico (marketplace app), WeGroupAPI (monitoring dashboard), EasyVecto (logo transformation app), and We Paint Well (painting services platform).",
    type: "freelance",
  },
  {
    id: 2,
    year: "Feb 2024 - Aug 2024",
    role: "Full Stack Developer",
    company: "Praktek",
    description:
      "Development of web and mobile applications using React ecosystem. Focused on writing unit tests and ensuring code quality across projects.",
    type: "employment",
  },
  {
    id: 3,
    year: "Sep 2023 - Dec 2023",
    role: "Developer Intern",
    company: "Futurmap",
    description:
      "Integrated project management functionalities in the company's ERP system using Django and Angular. Gained experience in enterprise software development.",
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
          <h2
            className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            Experience
          </h2>
          <p className="text-lg text-slate-400">
            My professional journey and expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-linear-to-b from-slate-500/50 via-slate-400/50 to-transparent md:block md:left-1/2" />

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
                <div className="absolute left-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-slate-400 bg-[#0a0a0f] md:block md:left-1/2">
                  <div className="absolute inset-0 animate-ping rounded-full bg-slate-400 opacity-20" />
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[var(--color-card)] p-6 backdrop-blur-sm transition-all hover:border-slate-700 md:p-8"
                  >
                    {/* Freelance badge */}
                    {exp.type === "freelance" && (
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-slate-500/40 bg-linear-to-r from-slate-800/80 to-slate-700/80 px-3 py-1 shadow-lg shadow-slate-900/50">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-slate-200" />
                        <span className="text-xs font-medium uppercase tracking-wider text-slate-200">
                          Currently Freelancing
                        </span>
                      </div>
                    )}

                    <div className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-400">
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
                    <div className="absolute inset-0 -z-10 bg-linear-to-br from-slate-600/10 to-slate-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
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
          className="mt-24 rounded-2xl border border-[#2a2a2a] bg-[var(--color-card)]/60 p-8 backdrop-blur-sm md:p-12"
        >
          <h3 className="mb-8 text-2xl font-bold text-white md:text-3xl">
            Core Skills
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {[
              "React & Next.js",
              "React Native",
              "Node.js & NestJs",
              "TypeScript",
              "TypeORM",
              "React Query",
              "Git/GitHub",
              "Firebase & Supabase",
              "Docker",
              "Django & Angular",
              "ShadCn UI",
              "Mobile Development",
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
                className="rounded-xl border border-[#2a2a2a] bg-[var(--color-card-alt)] px-4 py-3 text-center text-sm font-medium text-slate-300 transition-colors hover:border-slate-500/50 hover:text-white"
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
