"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { AchievementText } from "@/components/ui/AchievementText";
import { motion } from "framer-motion";

export function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="relative bg-surface px-6 py-28 md:py-40 border-y border-hairline">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="tracked font-mono text-[11px] text-rose-deep">— {t.experience.kicker}</p>
          </Reveal>
          <Reveal className="md:col-span-9">
            <h2
              className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] text-ink [&_em]:not-italic [&_em]:font-light [&_em]:italic [&_em]:text-rose-deep"
              dangerouslySetInnerHTML={{ __html: t.experience.title }}
            />
          </Reveal>
        </div>

        <ol className="mt-16 space-y-14 md:space-y-20 border-l border-hairline pl-6 md:pl-10">
          {t.experience.items.map((item, idx) => (
            <li key={item.period} className="relative">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute -left-[33px] md:-left-[49px] top-2 inline-flex h-3 w-3 items-center justify-center rounded-full bg-rose"
                aria-hidden
              >
                <span className="absolute h-6 w-6 rounded-full border border-rose/40" />
              </motion.span>

              <div className="grid gap-6 md:grid-cols-12">
                <Reveal className="md:col-span-3">
                  <p className="font-mono text-[11px] tracked text-muted">{item.period}</p>
                  <p className="mt-2 font-mono text-[11px] tracked text-muted">{item.location}</p>
                </Reveal>

                <div className="md:col-span-9">
                  <Reveal>
                    <h3 className="font-display text-2xl text-ink md:text-3xl">{item.role}</h3>
                    <p className="mt-1 font-mono text-[12px] tracked text-rose-deep">{item.company}</p>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <p className="mt-5 max-w-2xl text-ink-soft leading-relaxed">{item.summary}</p>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <ul className="mt-5 max-w-2xl space-y-2 text-ink-soft">
                      {item.bullets.map((b) => (
                        <li key={b} className="relative pl-5 leading-relaxed">
                          <span className="absolute left-0 top-[0.55em] h-[5px] w-[5px] rounded-full bg-sage-deep" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  <Reveal delay={0.25}>
                    <p className="mt-6 font-display text-lg italic text-ink md:text-xl">
                      <AchievementText>{item.highlight}</AchievementText>
                    </p>
                  </Reveal>
                </div>
              </div>
              {idx < t.experience.items.length - 1 && (
                <div className="mt-12 hairline md:hidden" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
