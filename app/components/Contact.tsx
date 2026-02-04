"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(t("form.error"));
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full bg-[#08080c] px-6 py-32 md:px-12 lg:px-24"
    >
      <motion.div style={{ y }} className="mx-auto max-w-7xl">
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
              {t("title")}
            </h2>
            <p className="mb-8 text-lg text-slate-100">{t("subtitle")}</p>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 inline-flex items-center gap-3 rounded-2xl border-2 border-primary/40 bg-primary/10 px-6 py-4 shadow-lg shadow-primary/20 backdrop-blur-sm"
            >
              <div className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
              </div>
              <span className="font-medium text-primary">
                Open to Collaborations
              </span>
            </motion.div>

            {/* Contact info */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-primary/80">
                  {t("email")}
                </h3>
                <a
                  href="mailto:mahefaniairindra@gmail.com"
                  className="text-xl text-white transition-colors hover:text-slate-50"
                >
                  mahefaniairindra@gmail.com
                </a>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-primary/80">
                  {t("phone")}
                </h3>
                <a
                  href="tel:+26838062851"
                  className="text-xl text-white transition-colors hover:text-slate-50"
                >
                  +268 38 06 285 61
                </a>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-primary/80">
                  {t("social")}
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
                      className="text-slate-50 transition-colors hover:text-white"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div> */}
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
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    {t("form.name")}
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-[#2a2a2a] bg-(--color-card-alt) px-4 py-3 text-white placeholder-gray-300 outline-none transition-colors focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20"
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
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    {t("form.email")}
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
                    className="w-full rounded-lg border border-[#2a2a2a] bg-[var(--color-card-alt)] px-4 py-3 text-white placeholder-gray-300 outline-none transition-colors focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20"
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
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    {t("form.subject")}
                  </label>
                  <input
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    type="text"
                    id="subject"
                    className="w-full rounded-lg border border-[#2a2a2a] bg-[var(--color-card-alt)] px-4 py-3 text-white placeholder-gray-300 outline-none transition-colors focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20"
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
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    id="message"
                    rows={6}
                    className="w-full resize-none rounded-lg border border-[#2a2a2a] bg-[var(--color-card-alt)] px-4 py-3 text-white placeholder-gray-300 outline-none transition-colors focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20"
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
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-full bg-primary px-8 py-4 font-bold text-lg text-black shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">
                    {isSubmitting
                      ? t("form.sending")
                      : isSubmitted
                        ? t("form.success")
                        : t("form.send")}
                  </span>
                  <div className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black">
                    {isSubmitting ? (
                      <svg
                        className="h-5 w-5 text-primary animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5 text-primary transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    )}
                  </div>
                </motion.button>
              </div>

              {/* Success message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-lg border border-primary/30 bg-primary/10 p-4 text-center text-primary"
                >
                  Thank you! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {/* Error message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-lg border border-red-400/30 bg-red-400/10 p-4 text-center text-red-400"
                >
                  {error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
