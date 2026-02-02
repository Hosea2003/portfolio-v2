"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("work"), href: "#work" },
    { name: t("experience"), href: "#experience" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a0f]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/50">
            <span className="text-sm font-bold text-slate-300">RH</span>
          </div>
        </a>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {item.name}
            </a>
          ))}{" "}
          <LanguageSwitcher />{" "}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onBlur={() => setTimeout(() => setIsMobileMenuOpen(false), 150)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden bg-[#0a0a0f]/95 backdrop-blur-md"
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-400 transition-colors hover:text-white border-b border-slate-800 pb-4 last:border-b-0"
            >
              {item.name}
            </a>
          ))}{" "}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>{" "}
        </div>
      </motion.div>
    </motion.nav>
  );
}
