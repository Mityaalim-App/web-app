import MonthlyView from "./monthlyview/MonthlyView";

export default function MainScreen() {
  return (
    <section className="bg-[#E8E8E8] h-full flex flex-col gap-y-6">
      <MonthlyView />
    </section>
  );
}
