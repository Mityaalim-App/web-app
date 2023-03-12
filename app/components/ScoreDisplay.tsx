import Image from "next/image";
import LeafIcon from "public/images/leaf-icon.svg";
import { ReactElement } from "react";

export interface IScoreDisplayProps {
  score: number;
  style: string | null;
  icon?: ReactElement | null;
}

export default function ScoreDisplay({
  score,
  style = null,
  icon = null,
}: IScoreDisplayProps) {
  const IconComponent = () => icon;
  return (
    <div className={`flex items-center gap-x-1 text-base ${style}`}>
      <span>{score}</span>
      <span className="w-6 h-6 ml-1">
        {icon === null ? <LeafIcon /> : <IconComponent />}
      </span>
    </div>
  );
}
