import { MouseEventHandler, ReactElement } from "react";

interface IDailyProps {
  title: string;
  icon?: ReactElement | null;
  onClick: MouseEventHandler
}

export default function WeeklyTask({
  title,
  icon = null,
  onClick
}: IDailyProps) {
  const IconComponent = () => icon;
  return (
    <section className="flex justify-between items-center shadow-main rounded-lg h-32 text-xl">
      <div className={`flex flex-col items-center justify-center gap-x-4 text-black-300"`}>
        <span className="h-14 w-14">
          <IconComponent />
        </span>
        <span className=" w-28">{title}</span>
      </div>
    </section>
  );
}
