"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { setLocale } from "../actions/locale";

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const switchLocale = async (newLocale: string) => {
    if (newLocale === locale) return;

    startTransition(async () => {
      // Set locale in cookie via server action
      await setLocale(newLocale);
      // Reload to apply new locale
      //   window.location.reload();
    });
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-primary/30 bg-[var(--color-card-alt)] p-1">
      <button
        onClick={() => switchLocale("en")}
        disabled={isPending}
        className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
          locale === "en"
            ? "bg-primary text-black"
            : "text-slate-400 hover:text-white"
        } disabled:opacity-50`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("fr")}
        disabled={isPending}
        className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
          locale === "fr"
            ? "bg-primary text-black"
            : "text-slate-400 hover:text-white"
        } disabled:opacity-50`}
      >
        FR
      </button>
    </div>
  );
}
