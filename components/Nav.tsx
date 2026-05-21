"use client";

import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export function Nav() {
  const { t } = useI18n();
  const items: Array<[string, string]> = [
    ["#about", t.nav.about],
    ["#process", t.nav.process],
    ["#experience", t.nav.experience],
    ["#bootcamp", t.nav.bootcamp],
    ["#skills", t.nav.skills],
    ["#voices", t.nav.voices],
    ["#contact", t.nav.contact],
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed left-1/2 top-5 z-40 hidden -translate-x-1/2 md:flex"
    >
      <ul className="flex items-center gap-1 rounded-full border border-hairline bg-surface/85 px-2 py-1.5 backdrop-blur-md shadow-sm">
        {items.map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              className="rounded-full px-3 py-1.5 text-[11px] tracked font-mono text-muted hover:text-ink hover:bg-surface-2 transition"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
