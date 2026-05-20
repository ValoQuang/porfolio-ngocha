"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

type Frame = {
  ratio: string;
  caption: string;
  span?: string;
};

const frames: Frame[] = [
  { ratio: "aspect-[4/5]", caption: "Day 01 · Field briefing", span: "md:col-span-5 md:row-span-2" },
  { ratio: "aspect-[4/3]", caption: "Day 01 · Team forming", span: "md:col-span-4" },
  { ratio: "aspect-square", caption: "Night 01 · Reflection circle", span: "md:col-span-3" },
  { ratio: "aspect-[4/3]", caption: "Day 02 · Sunrise exercise", span: "md:col-span-3" },
  { ratio: "aspect-[3/4]", caption: "Day 02 · Closing speech", span: "md:col-span-4" },
  { ratio: "aspect-[16/10]", caption: "Group · Final portrait", span: "md:col-span-8" },
];

export function Bootcamp() {
  const { t } = useI18n();

  return (
    <section id="bootcamp" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="tracked font-mono text-[11px] text-rose-deep">— {t.bootcamp.kicker}</p>
          </Reveal>
          <Reveal className="md:col-span-8">
            <h2
              className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] text-ink [&_em]:not-italic [&_em]:font-light [&_em]:italic [&_em]:text-rose-deep"
              dangerouslySetInnerHTML={{ __html: t.bootcamp.title }}
            />
            <p className="mt-6 max-w-2xl text-ink-soft leading-relaxed md:text-lg">{t.bootcamp.body}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {t.bootcamp.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-hairline bg-surface px-3 py-1 font-mono text-[10px] tracked text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 grid auto-rows-[1fr] grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
          {frames.map((f, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`frame ${f.ratio} ${f.span ?? "md:col-span-4"}`}
            >
              <div className="mat">
                <div className="text-center">
                  <p className="mat-label">{f.caption}</p>
                  <p className="mt-1 font-display text-base italic text-muted">photo · soon</p>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-sm text-muted">
            <span className="font-mono tracked text-[10px] text-rose-deep">{t.bootcamp.note}</span>
            {t.bootcamp.noteText}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
