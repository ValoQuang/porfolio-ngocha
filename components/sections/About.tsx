"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="tracked font-mono text-[11px] text-rose-deep">— {t.about.kicker}</p>
        </Reveal>

        <div className="md:col-span-9">
          <Reveal>
            <h2
              className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-ink"
              dangerouslySetInnerHTML={{ __html: t.about.title }}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              {t.about.body}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-hairline pt-8">
              {t.about.stats.map((s) => (
                <div key={s.label}>
                  <dt className="tracked font-mono text-[10px] text-muted">{s.label}</dt>
                  <dd className="mt-2 font-display text-3xl text-ink md:text-4xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
