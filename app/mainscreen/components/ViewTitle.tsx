import PageTitle from "@/app/components/PageTitle";
// import ScoreDisplay from "@/app/components/ScoreDisplay";

interface IViewTitleProps {
  title: string;
  score: number;
}

export default function ViewTitle({ title, score }: IViewTitleProps) {
  return (
    <header className="flex justify-between h-10 items-center">
      <PageTitle className="text-xl">{title}</PageTitle>
      {/* <ScoreDisplay
        src="leaf-icon.svg"
        bgColor="#FFFFFF"
        textColor="#187718"
        borderColor="#B7E1B8"
        score={score}
      /> */}
    </header>
  );
}
