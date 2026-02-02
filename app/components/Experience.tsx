"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RiNextjsFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.7], ["0%", "100%"]);

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
          <p className="text-lg text-slate-100">
            My professional journey and expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/10 hidden md:block -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-primary shadow-[0_0_10px_var(--color-primary)]"
            />
          </div>

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
                <div className="absolute left-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-[#0a0a0f] md:block md:left-1/2">
                  <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-20" />
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="group">
                    {/* Freelance badge */}
                    {exp.type === "freelance" && (
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-primary/40 bg-primary/10 px-3 py-1 shadow-lg shadow-primary/20">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                        <span className="text-xs font-medium uppercase tracking-wider text-primary">
                          Currently Freelancing
                        </span>
                      </div>
                    )}

                    <div className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-50">
                      {exp.year}
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="mb-4 text-lg font-medium text-slate-50">
                      {exp.company}
                    </div>
                    <p className="text-slate-100">{exp.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden w-1/2 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
