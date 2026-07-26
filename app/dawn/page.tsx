"use client";

import Sidebar from "./components/Sidebar";
import WelcomeHero from "./components/WelcomeHero";
import TreatmentPlanCard from "./components/TreatmentPlanCard";
import TodayEvents from "./components/TodayEvents";

export default function DawnDashboard() {
  return (
    <div className="fixed inset-0 z-50 flex bg-dawn-bg text-dawn-ink" dir="rtl">
      <Sidebar />

      <main className="h-full flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-5 pb-28 pt-8 md:px-10 md:pb-14 md:pt-12">
          <WelcomeHero name="חגי" />
          <TreatmentPlanCard />
          <TodayEvents />
        </div>
      </main>
    </div>
  );
}
