"use client";

import { useI18n } from "@/lib/i18n";

export function Marquee() {
  const { t } = useI18n();
  const items = t.marquee;
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y border-hairline bg-surface-2/60 py-6"
      aria-hidden
    >
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-12">
            <span className="font-display text-2xl italic text-ink-soft md:text-3xl">
              {item}
            </span>
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-rose"
              aria-hidden
            />
          </span>
        ))}
      </div>
    </div>
  );
}
