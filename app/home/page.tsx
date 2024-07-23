"use client";

import HeroComp from "./components/HeroComp";
import HeaderComp from "../components/HeaderComp";
import WeeklyView from "./weeklyview/WeeklyView";
import DailyView from "./dailyview/DailyView";
import MonthlyView from "./monthlyview/MonthlyView";
import { getLoggedUser } from "../utils/storage";

export default function MainScreen() {

  const loggedUser = getLoggedUser();

  return (
    <section className="bg-gray-100 flex flex-col gap-y-6 pb-20">
      <div className="flex flex-col gap-y-1">
        <HeaderComp/>
        <HeroComp name={loggedUser?.firstName} saved={24563}/>
      </div>
      <DailyView />
      <WeeklyView />
      <MonthlyView />
    </section>
  );
}
