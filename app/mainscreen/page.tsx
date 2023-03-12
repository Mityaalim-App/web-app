import MonthlyView from "./monthlyview/MonthlyView";

export default function MainScreen() {
  return (
    <section className="bg-grey-100 flex flex-col gap-y-6">
      <MonthlyView />
    </section>
  );
}
