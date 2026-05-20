"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="paper-grain relative min-h-dvh overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* soft scandinavian background blooms */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--rose), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--sage), transparent)" }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="tracked mb-8 font-mono text-[11px] text-rose-deep md:text-xs"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-rose align-middle drift" />
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.95] tracking-tight text-ink"
          >
            {t.hero.title1}
            <span className="block italic font-light text-rose-deep">
              {t.hero.title2}.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[12px] tracked font-mono text-bg transition hover:bg-rose-deep"
            >
              {t.hero.cta}
              <span className="transition group-hover:translate-x-1" aria-hidden>↓</span>
            </a>
            <p className="font-mono text-[11px] tracked text-muted">{t.hero.meta}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 md:justify-self-end"
        >
          <div className="relative mx-auto w-[78%] max-w-[360px]">
            <div className="portrait-ring drift">
              <div className="overflow-hidden rounded-full border border-hairline bg-surface">
                <Image
                  src="/images/ngocha-portrait.png"
                  alt="Le Thi Ngoc Ha"
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover"
                  priority
                />
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -bottom-4 -right-2 rounded-full border border-hairline bg-surface px-4 py-2 font-mono text-[10px] tracked text-muted shadow"
            >
              EST · 2018
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
