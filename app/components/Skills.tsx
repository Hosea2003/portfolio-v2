"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RiNextjsFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#0a0a0f] px-6 py-32 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-12 text-center text-5xl font-bold tracking-tight text-white md:text-7xl"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            Core Skills
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {[
              {
                name: "Next.js",
                icon: <RiNextjsFill className="h-16 w-16" />,
              },
              {
                name: "NestJS",
                icon: <SiNestjs className="h-16 w-16" />,
              },
              {
                name: "React Native",
                icon: <TbBrandReactNative className="h-16 w-16" />,
              },
              {
                name: "Supabase",
                icon: <RiSupabaseFill className="h-16 w-16" />,
              },
              {
                name: "Firebase",
                icon: <IoLogoFirebase className="h-16 w-16" />,
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20, rotate: -10 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, rotate: 0 }
                    : { opacity: 0, y: 20, rotate: -10 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
                className="group flex flex-col items-center gap-3"
              >
                <div className="text-primary transition-all duration-300 group-hover:text-primary/80">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-slate-400 transition-colors group-hover:text-primary">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
