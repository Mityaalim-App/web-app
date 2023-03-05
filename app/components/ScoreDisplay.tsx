import LeafIcon from "public/images/leaf-icon.svg";
import GreenLeafIcon from "public/images/leaf-icon-green.svg";
import CoinIcon from "public/images/coin-icon.svg";

export interface IScoreDisplayProps {
  score: number;
  isBold: boolean;
  isLeaf: boolean;
}

export default function ScoreDisplay({
  score,
  isBold,
  isLeaf,
}: IScoreDisplayProps) {
  return (
    <div className="flex items-center gap-x-1">
      {isBold ? <p className="font-bold">{score}</p> : <p>{score}</p>}
      {isLeaf ? (
        isBold ? (
          <GreenLeafIcon className="h-4 w-4" />
        ) : (
          <LeafIcon className="h-6 w-6" />
        )
      ) : (
        <CoinIcon className="h-4 w-4" />
      )}
    </div>
  );
}
