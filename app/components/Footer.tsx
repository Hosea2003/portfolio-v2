"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-primary bg-[#0a0a0f] px-6 py-12 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/80 bg-slate-800/50">
              <span className="text-lg font-bold text-slate-300">RH</span>
            </div>
            <p className="text-sm text-slate-200">{t("description")}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-primary/80">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {["work", "experience", "contact"].map(link => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-sm text-slate-400 transition-colors hover:text-primary"
                  >
                    {tNav(link)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-primary/80">
              Connect
            </h3>
            <div className="flex gap-4">
              {["GitHub", "LinkedIn", "Twitter"].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  <span className="text-sm">{social}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white pt-8 text-center">
          <p className="text-sm text-slate-50">
            © {currentYear} {t("allRightsReserved")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
