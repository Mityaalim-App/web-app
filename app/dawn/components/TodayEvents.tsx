"use client";

import { ChevronLeft, Droplet, Pill, Stethoscope } from "lucide-react";

const events = [
  {
    key: "bleeding",
    title: "דגדג",
    tag: "דימום/וסת",
    tagClass: "bg-dawn-pink-soft text-dawn-pink",
    icon: Droplet,
    iconClass: "bg-dawn-pink-soft text-dawn-pink"
  },
  {
    key: "medication",
    title: "נטילת תרופה",
    tag: "בוקר · 08:00",
    tagClass: "bg-dawn-lavender-soft text-dawn-lavender",
    icon: Pill,
    iconClass: "bg-dawn-lavender-soft text-dawn-lavender"
  },
  {
    key: "checkup",
    title: "בדיקת דם ואולטרסאונד",
    tag: "מרפאה · 10:30",
    tagClass: "bg-dawn-teal-soft text-dawn-teal",
    icon: Stethoscope,
    iconClass: "bg-dawn-teal-soft text-dawn-teal"
  }
];

export default function TodayEvents() {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between">
        <button className="text-sm font-semibold text-dawn-primary transition hover:text-dawn-primary-strong">
          לכל היומן
        </button>
        <h2 className="text-lg font-bold text-dawn-ink">אירועים להיום</h2>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {events.map(({ key, title, tag, tagClass, icon: Icon, iconClass }) => (
          <button
            key={key}
            type="button"
            className="group flex items-center gap-x-4 rounded-3xl border border-dawn-line bg-dawn-surface px-4 py-4 text-right shadow-main transition hover:border-dawn-primary/30"
          >
            <ChevronLeft className="h-5 w-5 shrink-0 text-dawn-muted transition group-hover:text-dawn-primary" />
            <div className="flex flex-1 items-center justify-end gap-x-3">
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tagClass}`}>
                {tag}
              </span>
              <span className="text-base font-semibold text-dawn-ink">{title}</span>
            </div>
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${iconClass}`}>
              <Icon className="h-5 w-5" strokeWidth={2.1} />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
