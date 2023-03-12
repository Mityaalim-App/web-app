import ScoreDisplay from "@/app/components/ScoreDisplay";
import CompletedIcon from "public/images/completed-icon.svg";
import MoreIcon from "public/images/more-icon.svg";
import { ReactElement } from "react";

interface IWeeklyLetterProps {
  title: string;
  isCompleted: boolean;
  score: number;
  isTrophy?: boolean;
  icon?: ReactElement | null;
  style?: string;
}

export default function WeeklyTask({
  title,
  isCompleted,
  icon = null,
  score,
  isTrophy,
  style,
}: IWeeklyLetterProps) {
  const IconComponent = () => icon;
  return (
    <section className="flex justify-between items-center shadow-main rounded-lg h-16 text-xl">
      <div className={`flex items-center justify-center gap-x-4 ${style}`}>
        <span
          className=" h-14 w-14"
          style={{
            filter: isCompleted && !isTrophy ? "grayscale(0.95)" : "",
          }}
        >
          <IconComponent />
        </span>
        <span className=" w-28">{title}</span>
      </div>
      <div className="flex gap-x-1 pl-2">
        <ScoreDisplay
          score={score}
          style={isCompleted ? "text-green-primary" : "text-gray-550"}
        />
        {!isTrophy &&
          (isCompleted ? (
            <CompletedIcon className="h-6 w-5" />
          ) : (
            <MoreIcon className="h-6 w-5" />
          ))}
      </div>
    </section>
  );
}
