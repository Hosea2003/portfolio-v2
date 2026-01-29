"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Handle form submission here (e.g., send to API)
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full bg-[#08080c] px-6 py-32 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Let&apos;s Work
              <br />
              Together
            </h2>
            <p className="mb-8 text-lg text-slate-400">
              I&apos;m currently available for new projects. Whether you have a
              question or just want to say hi, I&apos;ll try my best to get back
              to you!
            </p>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 inline-flex items-center gap-3 rounded-2xl border-2 border-slate-500/40 bg-linear-to-r from-slate-800/80 to-slate-700/80 px-6 py-4 shadow-lg shadow-slate-900/50 backdrop-blur-sm"
            >
              <div className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-300 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-slate-200"></span>
              </div>
              <span className="font-medium text-slate-200">
                Open to Collaborations
              </span>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-slate-500">
                  Email
                </h3>
                <a
                  href="mailto:mahefaniairindra@gmail.com"
                  className="text-xl text-white transition-colors hover:text-slate-300"
                >
                  mahefaniairindra@gmail.com
                </a>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-slate-500">
                  Phone
                </h3>
                <a
                  href="tel:+26838062851"
                  className="text-xl text-white transition-colors hover:text-slate-300"
                >
                  +268 38 06 285 61
                </a>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-slate-500">
                  Social
                </h3>
                <div className="flex gap-4">
                  {[
                    { name: "GitHub", url: "#" },
                    { name: "LinkedIn", url: "#" },
                    { name: "Twitter", url: "#" },
                  ].map(social => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="text-slate-400 transition-colors hover:text-white"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative overflow-hidden rounded-2xl border border-[#2a2a2a] p-8 backdrop-blur-sm"
            >
              <div className="space-y-6">
                {/* Name field */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-[#2a2a2a] bg-(--color-card-alt) px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-[#2a2a2a] bg-[var(--color-card-alt)] px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Subject
                  </label>
                  <input
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    type="text"
                    id="subject"
                    className="w-full rounded-lg border border-[#2a2a2a] bg-[var(--color-card-alt)] px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20"
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    id="message"
                    rows={6}
                    className="w-full resize-none rounded-lg border border-[#2a2a2a] bg-[var(--color-card-alt)] px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-lg bg-linear-to-br from-slate-200 via-slate-100 to-slate-300 px-8 py-4 font-semibold text-slate-900 shadow-lg shadow-slate-900/50 transition-all hover:shadow-xl hover:shadow-slate-700/50"
                >
                  <span className="relative z-10">
                    {isSubmitted ? "Message Sent!" : "Send Message"}
                  </span>
                  <div className="absolute inset-0 -z-10 bg-linear-to-br from-slate-100 via-white to-slate-200 opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.button>
              </div>

              {/* Success message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-lg bg-slate-700/30 p-4 text-center text-slate-300"
                >
                  Thank you! I&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
