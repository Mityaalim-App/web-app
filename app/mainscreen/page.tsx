import WeeklyView from "./weeklyview/WeeklyView";

export default function MainScreen() {
  return (
    <section className="bg-gray-250 flex flex-col gap-y-6 pb-20">
      <WeeklyView />
    </section>
  );
}
