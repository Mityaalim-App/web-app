import HeaderComp from "../components/HeaderComp";
import HeroComp from "./components/HeroComp";
import MonthlyView from "./monthlyview/MonthlyView";

export default function MainScreen() {
  return (
    <section className="bg-grey-100 flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-1">
        <HeaderComp />
        <HeroComp />
      </div>
      <MonthlyView />
    </section>
  );
}
