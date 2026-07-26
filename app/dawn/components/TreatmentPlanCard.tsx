"use client";

import {
  Sparkles,
  FileText,
  Flag,
  Ruler,
  Droplet,
  Activity,
  PersonStanding
} from "lucide-react";

const milestones = [
  { key: "start", icon: Flag, tone: "flag" },
  { key: "measure", icon: Ruler, tone: "teal" },
  { key: "retrieval", icon: Droplet, tone: "pink" },
  { key: "monitor", icon: Activity, tone: "coral" }
];

const toneStyles: Record<string, string> = {
  flag: "bg-dawn-surface border-dawn-line text-dawn-muted",
  teal: "bg-dawn-teal-soft border-dawn-teal/40 text-dawn-teal",
  pink: "bg-dawn-pink-soft border-dawn-pink/40 text-dawn-pink",
  coral: "bg-dawn-primary-soft border-dawn-primary/40 text-dawn-primary"
};

export default function TreatmentPlanCard() {
  return (
    <section className="mt-8 rounded-[2rem] border border-dawn-line bg-dawn-surface p-6 shadow-main md:p-8">
      <div className="flex flex-col gap-4 sm:flex-row-reverse sm:items-start sm:justify-between">
        <div className="text-right">
          <span className="mb-2 inline-flex items-center gap-x-1.5 text-sm font-semibold text-dawn-primary">
            <Sparkles className="h-4 w-4" strokeWidth={2.2} />
            תוכנית פעילה
          </span>
          <h3 className="text-2xl font-bold text-dawn-ink">בדיקה שאיבה והחזרה</h3>
          <div className="mt-3 flex flex-wrap justify-end gap-2">
            <span className="rounded-full border border-dawn-primary/30 bg-dawn-primary-soft px-3 py-1 text-xs font-semibold text-dawn-primary-strong">
              שאיבה + החזרה (עובר טרי)
            </span>
            <span className="rounded-full border border-dawn-lavender/40 bg-dawn-lavender-soft px-3 py-1 text-xs font-semibold text-dawn-lavender">
              PGD/PGTA
            </span>
          </div>
        </div>

        <button className="inline-flex shrink-0 items-center gap-x-2 self-start rounded-2xl border border-dawn-line bg-dawn-bg px-4 py-2.5 text-sm font-semibold text-dawn-ink transition hover:border-dawn-primary/40 hover:text-dawn-primary">
          <FileText className="h-4 w-4" strokeWidth={2.1} />
          סיכום תוכנית
        </button>
      </div>

      {/* Timeline */}
      <div className="mt-10">
        <div className="relative">
          {/* track */}
          <div className="absolute inset-x-1 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-dawn-line" />
          {/* progress (from right start toward current) */}
          <div className="absolute top-1/2 right-1 h-1.5 w-[14%] -translate-y-1/2 rounded-full bg-dawn-primary/70" />

          <div className="relative flex items-center justify-between">
            {milestones.map(({ key, icon: Icon, tone }) => (
              <span
                key={key}
                className={`flex h-11 w-11 items-center justify-center rounded-full border-2 shadow-sm ${toneStyles[tone]}`}
              >
                <Icon className="h-5 w-5" strokeWidth={2.1} />
              </span>
            ))}

            {/* current position runner */}
            <span className="flex flex-col items-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-dawn-primary text-white shadow-[0_8px_18px_-6px_rgba(240,128,90,0.8)]">
                <PersonStanding className="h-6 w-6" strokeWidth={2.2} />
              </span>
            </span>

            {/* end flag */}
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-dawn-ink text-white shadow-sm">
              <Flag className="h-5 w-5" strokeWidth={2.1} />
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="font-medium text-dawn-muted">יום 40</span>
          <span className="rounded-full bg-dawn-primary-soft px-3 py-1 font-semibold text-dawn-primary-strong">
            יום 1 במחזור
          </span>
          <span className="font-medium text-dawn-muted">יום 1 · וסת</span>
        </div>
      </div>
    </section>
  );
}
