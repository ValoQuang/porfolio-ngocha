"use client";

import { useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export function Utilities() {
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="fixed right-5 top-5 z-50 flex items-center gap-2 rounded-full border border-hairline bg-surface/85 px-2 py-1.5 backdrop-blur-md shadow-sm"
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={`${t.utilities.theme}: ${theme === "dark" ? t.utilities.dark : t.utilities.light}`}
        className="group flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] tracked text-ink hover:bg-surface-2 transition"
      >
        <span aria-hidden className="text-base leading-none">
          {theme === "dark" ? "☾" : "☀"}
        </span>
        <span className="font-mono">{theme === "dark" ? t.utilities.dark : t.utilities.light}</span>
      </button>

      <span className="h-4 w-px bg-hairline" aria-hidden />

      <div className="flex items-center text-[11px] tracked font-mono" role="group" aria-label={t.utilities.language}>
        <button
          type="button"
          onClick={() => setLang("en")}
          aria-pressed={lang === "en"}
          className={`rounded-full px-2.5 py-1 transition ${
            lang === "en" ? "bg-ink text-bg" : "text-muted hover:text-ink"
          }`}
        >
          {t.utilities.en}
        </button>
        <button
          type="button"
          onClick={() => setLang("vi")}
          aria-pressed={lang === "vi"}
          className={`rounded-full px-2.5 py-1 transition ${
            lang === "vi" ? "bg-ink text-bg" : "text-muted hover:text-ink"
          }`}
        >
          {t.utilities.vi}
        </button>
      </div>
    </motion.div>
  );
}
