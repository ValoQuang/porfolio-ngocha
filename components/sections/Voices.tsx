"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

export function Voices() {
  const { t } = useI18n();

  return (
    <section id="voices" className="relative bg-surface px-6 py-28 md:py-40 border-y border-hairline">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="tracked font-mono text-[11px] text-rose-deep">— {t.voices.kicker}</p>
          </Reveal>
          <div className="md:col-span-9">
            <Reveal>
              <h2
                className="font-display text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-ink"
                dangerouslySetInnerHTML={{ __html: t.voices.title }}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-ink-soft leading-relaxed md:text-lg">
                {t.voices.body}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.voices.placeholders.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.08}>
              <figure className="relative flex h-full flex-col justify-between rounded-2xl border border-hairline bg-bg p-8 md:p-10">
                <span
                  aria-hidden
                  className="absolute left-6 top-4 font-display text-6xl leading-none text-rose/40"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-12 font-display text-xl italic leading-snug text-muted md:text-2xl">
                  …
                </blockquote>
                <figcaption className="mt-10 border-t border-hairline pt-4">
                  <p className="font-mono text-[10px] tracked text-rose-deep">{p.tag}</p>
                  <p className="mt-1 font-mono text-[11px] text-muted">{p.note}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
