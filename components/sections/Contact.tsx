"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

const profile = {
  email: "lethingocha1205@gmail.com",
  phone: "+84 334 178 835",
  location: "District 12, Ho Chi Minh City",
  reference: {
    name: "Phan Ngoc Son — Business Management",
    phone: "+84 914 588 586",
    email: "sonpn@supership.com",
  },
};

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="tracked font-mono text-[11px] text-rose-deep">— {t.contact.kicker}</p>
          </Reveal>

          <div className="md:col-span-9">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05] text-ink">
                {t.contact.title}
              </h2>
              <p className="mt-6 max-w-xl text-ink-soft md:text-lg">{t.contact.body}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
                <div className="bg-surface p-6">
                  <p className="tracked font-mono text-[10px] text-muted">{t.contact.emailLabel}</p>
                  <a href={`mailto:${profile.email}`} className="mt-2 block font-display text-lg text-ink hover:text-rose-deep">
                    {profile.email}
                  </a>
                </div>
                <div className="bg-surface p-6">
                  <p className="tracked font-mono text-[10px] text-muted">{t.contact.phoneLabel}</p>
                  <p className="mt-2 font-display text-lg text-ink">{profile.phone}</p>
                </div>
                <div className="bg-surface p-6">
                  <p className="tracked font-mono text-[10px] text-muted">{t.contact.locationLabel}</p>
                  <p className="mt-2 font-display text-lg text-ink">{profile.location}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-2xl border border-hairline bg-surface-2 p-6 md:p-8">
                <p className="tracked font-mono text-[10px] text-muted">{t.contact.referenceLabel}</p>
                <p className="mt-2 font-display text-xl text-ink">{profile.reference.name}</p>
                <p className="mt-1 font-mono text-sm text-ink-soft">
                  {profile.reference.phone} · {profile.reference.email}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href={`mailto:${profile.email}`}
                className="mt-12 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 font-mono text-[12px] tracked text-bg transition hover:bg-rose-deep"
              >
                {t.contact.cta}
                <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>

        <footer className="mt-24 flex flex-col items-center gap-3 border-t border-hairline pt-10 text-center md:flex-row md:justify-between md:text-left">
          <p className="font-mono text-[11px] tracked text-muted">© {new Date().getFullYear()} · Le Thi Ngoc Ha</p>
          <p className="font-mono text-[11px] tracked text-muted">{t.footer}</p>
        </footer>
      </div>
    </section>
  );
}
