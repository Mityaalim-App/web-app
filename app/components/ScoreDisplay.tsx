import Image from "next/image";

export interface IScoreDisplayProps {
  bgColor: string;
  borderColor: string;
  textColor: string;
  score: number;
  src: string;
}

export default function ScoreDisplay({
  bgColor,
  borderColor,
  textColor,
  score,
  src,
}: IScoreDisplayProps) {
  return (
    <div className="flex relative">
      <div
        className="w-[75px] flex items-center relative h-6 rounded-xl"
        style={{
          backgroundColor: bgColor,
          borderColor: borderColor,
          color: textColor,
        }}
      >
        <p className="pr-4">{score}</p>
      </div>
      <Image
        className="fixed left-2 "
        src={`/images/${src}`}
        alt=""
        height={26}
        width={33}
      />
    </div>
  );
}
