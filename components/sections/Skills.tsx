"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="relative bg-surface px-6 py-28 md:py-40 border-y border-hairline">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="tracked font-mono text-[11px] text-rose-deep">— {t.skills.kicker}</p>
          </Reveal>
          <Reveal className="md:col-span-9">
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-ink">
              {t.skills.title}
            </h2>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-2 md:gap-x-16">
          {t.skills.list.map((s, idx) => (
            <li key={s.label} className="group">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-xl text-ink">{s.label}</span>
                <span className="font-mono text-[11px] tracked text-muted">{s.level}%</span>
              </div>
              <div className="relative mt-3 h-[3px] w-full overflow-hidden rounded-full bg-hairline">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 1.4, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, var(--sage), var(--rose))",
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
