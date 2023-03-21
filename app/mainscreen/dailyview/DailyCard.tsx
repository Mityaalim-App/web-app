import Image from "next/image";
import { ReactElement } from "react";

interface IDailyCardProps {
  icon?: ReactElement | null;
  text: string;
}

export default function DailyCard({ icon = null, text }: IDailyCardProps) {
  const IconComponent = () => icon;
  return (
    <div className=" h-32 flex-1 shadow-main rounded-xl flex flex-col items-center justify-center gap-2">
      <span className="h-14 w-14">
        <IconComponent />
      </span>
      <span>{text}</span>
    </div>
  );
}
