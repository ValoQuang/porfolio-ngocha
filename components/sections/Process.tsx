"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  const { t } = useI18n();

  return (
    <section id="process" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="tracked font-mono text-[11px] text-rose-deep">— {t.process.kicker}</p>
          </Reveal>
          <div className="md:col-span-9">
            <Reveal>
              <h2
                className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-ink [&_em]:not-italic [&_em]:font-light [&_em]:italic [&_em]:text-rose-deep"
                dangerouslySetInnerHTML={{ __html: t.process.title }}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
                {t.process.body}
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-3">
          {t.process.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <li className="group relative flex h-full flex-col bg-surface p-8 md:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] tracked text-rose-deep">{step.number}</span>
                  <span className="font-mono text-[10px] tracked text-muted">STEP</span>
                </div>
                <h3 className="mt-10 font-display text-4xl leading-tight text-ink md:text-5xl">
                  {step.title}
                </h3>
                <p className="mt-6 max-w-sm text-ink-soft leading-relaxed">
                  {step.body}
                </p>
                <span
                  aria-hidden
                  className="mt-10 inline-block h-[2px] w-12 origin-left bg-rose transition-transform duration-700 ease-out group-hover:scale-x-150"
                />
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
