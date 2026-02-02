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
  url?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "WebapiGroup",
    category: "Monitoring Dashboard",
    image: "/images/wegroupapi.jpg",
    description:
      "Collaborated with WebApiGroup on their platform - API monitoring dashboard with real-time analytics and performance tracking",
    tags: ["Next.js", "ShadCn", "React Query", "NestJs", "TypeORM"],
    gradient: "from-slate-700/20 to-slate-500/20",
    url: "https://webapi.group/",
  },
  {
    id: 2,
    title: "Rico",
    category: "Marketplace",
    image: "/images/rico.png",
    description:
      "Mobile application for finding and selling goods with intuitive user interface",
    tags: ["NextJs", "Firebase", "React Native"],
    gradient: "from-slate-500/20 to-slate-600/20",
  },
  {
    id: 3,
    title: "SingSong",
    category: "Mobile Application",
    image: "/images/singsong.png",
    description:
      "Mobile app available on Playstore to find camp songs with admin panel for content management",
    tags: ["Next.js"],
    gradient: "from-slate-600/20 to-slate-500/20",
    url: "https://singsong.mahefaniaina.com",
  },
  {
    id: 4,
    title: "Addiction Recovery",
    category: "Healthcare Platform",
    image: "/images/addiction-recovery.png",
    description:
      "Mobile and web platform connecting doctors specialized in addictions (drugs, alcohol, tobacco) with patients",
    tags: ["Next.js"],
    gradient: "from-slate-500/20 to-slate-600/20",
    url: "https://www.addictionrecovery.mg",
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
                className="relative block w-full overflow-hidden rounded-2xl border border-primary/20 bg-[var(--color-card)] backdrop-blur-sm transition-all hover:border-primary/40"
              >
                {/* Project card content */}
                <div className="aspect-4/3 w-full overflow-hidden bg-[var(--color-card-alt)] relative">
                  {project.url ? (
                    // Website preview using iframe
                    <>
                      <iframe
                        src={project.url}
                        className="h-full w-full pointer-events-none scale-100 origin-top-left"
                        title={project.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </>
                  ) : (
                    // Project Image
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110 bg-[var(--color-card-alt)]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                    </>
                  )}
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
            className="relative max-w-4xl overflow-hidden rounded-3xl border border-primary/20 bg-[var(--color-card)]"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-card-alt)]/80 text-white backdrop-blur-sm transition-colors hover:bg-[#2a2a2a]"
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

            <div className="h-96 w-full overflow-hidden bg-[var(--color-card-alt)]">
              {selectedProject.url ? (
                <iframe
                  src={selectedProject.url}
                  className="h-full w-full"
                  title={selectedProject.title}
                />
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-contain bg-[var(--color-card-alt)]"
                />
              )}
            </div>

            <div className="p-8">
              <h3 className="mb-2 text-3xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="mb-4 text-slate-400">{selectedProject.category}</p>
              <p className="mb-6 text-lg text-slate-300">
                {selectedProject.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedProject.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#2a2a2a] bg-[var(--color-card-alt)] px-4 py-2 text-sm text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-black transition-all hover:bg-primary/90"
                >
                  Visit Website
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
