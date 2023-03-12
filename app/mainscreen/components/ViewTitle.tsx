import PageTitle from "@/app/components/PageTitle";
import ScoreDisplay from "@/app/components/ScoreDisplay";
import { ReactElement } from "react";

interface IViewTitleProps {
  title: string;
  score: number;
  style?: string | null;
}

export default function ViewTitle({
  title,
  score,
  style = null,
}: IViewTitleProps) {
  return (
    <header className="flex justify-between h-10 items-center">
      <PageTitle className="text-xl">{title}</PageTitle>
      <ScoreDisplay style={style} score={score} />
    </header>
  );
}
