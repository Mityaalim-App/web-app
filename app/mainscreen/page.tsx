import HeroComp from "./components/HeroComp";
import HeaderComp from "../components/HeaderComp";
import DailyView from "./dailyview/DailyView";

export default function MainScreen() {
  return (
    <section className="bg-gray-100 flex flex-col gap-y-6 pb-20">
      <div className="flex flex-col gap-y-1">
        <HeaderComp />
        <HeroComp />
      </div>
      <DailyView />
    </section>
  );
}
