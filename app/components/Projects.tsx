"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "WeGroupAPI",
    category: "Monitoring Dashboard",
    image: "/projects/wegroupapi.jpg",
    description:
      "API monitoring dashboard with real-time analytics and performance tracking",
    tags: ["Next.js", "ShadCn", "React Query", "NestJs", "TypeORM"],
    gradient: "from-slate-700/20 to-slate-500/20",
  },
  {
    id: 2,
    title: "Rico",
    category: "Marketplace",
    image: "/projects/rico.jpg",
    description:
      "Mobile application for finding and selling goods with intuitive user interface",
    tags: ["React Native", "Mobile Development"],
    gradient: "from-slate-500/20 to-slate-600/20",
  },
  {
    id: 3,
    title: "EasyVecto",
    category: "Design Tool",
    image: "/projects/easyvecto.jpg",
    description:
      "Logo transformation application built with modern React stack",
    tags: ["React", "Next.js", "NestJs"],
    gradient: "from-slate-600/20 to-slate-700/20",
  },
  {
    id: 4,
    title: "SingSong",
    category: "Mobile Application",
    image: "/projects/singsong.jpg",
    description:
      "Mobile app available on Playstore to find camp songs with admin panel for content management",
    tags: ["React Native", "React", "Next.js"],
    gradient: "from-slate-600/20 to-slate-500/20",
  },
  {
    id: 5,
    title: "Recover",
    category: "Healthcare Platform",
    image: "/projects/recover.jpg",
    description:
      "Mobile and web platform connecting doctors specialized in addictions (drugs, alcohol, tobacco) with patients",
    tags: ["React Native", "React", "Next.js"],
    gradient: "from-slate-500/20 to-slate-600/20",
  },
  {
    id: 6,
    title: "We Paint Well",
    category: "Service Platform",
    image: "/projects/wepaintwell.jpg",
    description:
      "Mobile and web application for painting services with booking system",
    tags: ["React Native", "React", "Web & Mobile"],
    gradient: "from-slate-600/20 to-slate-500/20",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#08080c] px-6 py-32 md:px-12 lg:px-24"
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
            Selected Work
          </h2>
          <p className="text-lg text-slate-400">
            A collection of projects I&apos;ve worked on
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <button
                onClick={() => setSelectedProject(project)}
                className="relative block w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all hover:border-slate-700"
              >
                {/* Project card content */}
                <div className="aspect-4/3 w-full overflow-hidden bg-linear-to-br from-slate-800 to-slate-900">
                  {/* Placeholder gradient background */}
                  <div
                    className={`h-full w-full bg-linear-to-br ${project.gradient} opacity-40 transition-opacity group-hover:opacity-60`}
                  />

                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                        className="mb-4 text-6xl font-bold text-white/10"
                      >
                        {String(project.id).padStart(2, "0")}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Card info */}
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold uppercase tracking-wider text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm text-slate-500">
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">{project.category}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    className="text-white"
                  >
                    <span className="text-sm font-medium">View Project</span>
                  </motion.div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative max-w-4xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-900"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-white backdrop-blur-sm transition-colors hover:bg-slate-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div
              className={`h-96 w-full bg-linear-to-br ${selectedProject.gradient}`}
            />

            <div className="p-8">
              <h3 className="mb-2 text-3xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="mb-4 text-slate-400">{selectedProject.category}</p>
              <p className="mb-6 text-lg text-slate-300">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
