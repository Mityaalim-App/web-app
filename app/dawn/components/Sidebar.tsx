"use client";

import { useState } from "react";
import { Home, CalendarDays, Sparkles, User } from "lucide-react";

const navItems = [
  { key: "home", label: "בית", icon: Home },
  { key: "calendar", label: "יומן", icon: CalendarDays },
  { key: "journey", label: "המסע שלך", icon: Sparkles },
  { key: "profile", label: "פרופיל", icon: User }
];

function DawnWordmark() {
  return (
    <div className="flex items-center gap-x-2">
      <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-dawn-primary-soft">
        <Sparkles className="h-5 w-5 text-dawn-primary" strokeWidth={2.2} />
      </span>
      <span className="text-2xl font-bold tracking-tight text-dawn-ink">
        Dawn
      </span>
    </div>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState("home");

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden h-full w-72 shrink-0 flex-col border-l border-dawn-line bg-dawn-surface/70 px-6 py-8 backdrop-blur-sm md:flex">
        <div className="px-2">
          <DawnWordmark />
        </div>

        <nav className="mt-12 flex flex-col gap-y-2">
          {navItems.map(({ key, label, icon: Icon }) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                className={`group flex items-center gap-x-3 rounded-2xl px-4 py-3.5 text-right transition-all ${
                  isActive
                    ? "bg-dawn-primary text-white shadow-[0_10px_24px_-8px_rgba(240,128,90,0.7)]"
                    : "text-dawn-muted hover:bg-dawn-primary-soft/60 hover:text-dawn-ink"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${
                    isActive ? "text-white" : "text-dawn-muted group-hover:text-dawn-primary"
                  }`}
                  strokeWidth={2.1}
                />
                <span className="flex-1 text-base font-semibold">{label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto rounded-3xl bg-gradient-to-b from-dawn-lavender-soft to-dawn-primary-soft/60 p-5">
          <p className="text-sm font-semibold text-dawn-ink">זקוקה לתמיכה?</p>
          <p className="mt-1 text-xs leading-relaxed text-dawn-muted">
            הצוות שלנו כאן בשבילך בכל שלב במסע.
          </p>
          <button className="mt-3 w-full rounded-xl bg-dawn-surface py-2.5 text-sm font-semibold text-dawn-primary shadow-sm transition hover:shadow-md">
            שיחה עם יועצת
          </button>
        </div>
      </aside>

      {/* Mobile bottom bar */}
      <nav className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-around border-t border-dawn-line bg-dawn-surface/90 px-2 py-2 backdrop-blur-md md:hidden">
        {navItems.map(({ key, label, icon: Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={`flex flex-1 flex-col items-center gap-y-1 rounded-2xl py-2 text-xs font-semibold transition ${
                isActive ? "text-dawn-primary" : "text-dawn-muted"
              }`}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-xl transition ${
                  isActive ? "bg-dawn-primary-soft" : "bg-transparent"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={2.1} />
              </span>
              {label}
            </button>
          );
        })}
      </nav>
    </>
  );
}
