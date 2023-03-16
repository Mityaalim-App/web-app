import HeaderComp from "../components/HeaderComp";
import HeroComp from "./components/HeroComp";

export default function MainScreen() {
  return (
    <section className="bg-gray-200 flex flex-col gap-y-6 pb-20">
      <div className="flex flex-col gap-y-1">
        <HeaderComp />
        <HeroComp />
      </div>
    </section>
  );
}
