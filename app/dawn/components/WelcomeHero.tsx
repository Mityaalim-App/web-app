"use client";

import { Syringe, Repeat } from "lucide-react";

interface WelcomeHeroProps {
  name?: string;
}

const journeyStats = [
  {
    key: "transfers",
    label: "החזרות",
    value: 1,
    icon: Repeat,
    iconClass: "bg-dawn-pink-soft text-dawn-pink"
  },
  {
    key: "retrievals",
    label: "שאיבות",
    value: 2,
    icon: Syringe,
    iconClass: "bg-dawn-primary-soft text-dawn-primary"
  }
];

export default function WelcomeHero({ name = "חגי" }: WelcomeHeroProps) {
  return (
    <section>
      <div className="relative overflow-hidden rounded-[2rem] shadow-main">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/dawn-hero.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white/85 via-white/40 to-transparent" />
        <div className="relative flex min-h-[220px] flex-col items-end justify-center px-7 py-10 text-right md:min-h-[260px] md:px-10">
          <span className="mb-2 text-sm font-semibold tracking-wide text-dawn-primary-strong">
            ברוך הבא
          </span>
          <h1 className="text-3xl font-bold leading-tight text-dawn-ink text-balance md:text-4xl">
            ערב טוב, {name}
          </h1>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-dawn-muted text-pretty">
            אנחנו איתך בכל שלב בדרך. הנה מבט-על על המסע שלך.
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-lg font-bold text-dawn-ink">המסע שלך</h2>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-4">
        {journeyStats.map(({ key, label, value, icon: Icon, iconClass }) => (
          <div
            key={key}
            className="flex items-center justify-between rounded-3xl border border-dawn-line bg-dawn-surface px-5 py-5 shadow-main"
          >
            <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${iconClass}`}>
              <Icon className="h-5 w-5" strokeWidth={2.1} />
            </span>
            <div className="text-right">
              <p className="text-sm font-medium text-dawn-muted">{label}</p>
              <p className="text-2xl font-bold text-dawn-ink">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
