import ScoreDisplay from "@/app/components/ScoreDisplay";
import CoinIcon from "public/images/coin-icon.svg";
import FullLeafIcon from "public/images/leaf-icon-green.svg";
import MityaalimLogo from "public/images/mityaalim-logo-plus-text.svg";

export default function HeaderComp() {
  return (
    <header className="flex items-center justify-between pt-10 pb-3 px-4 bg-white">
      <MityaalimLogo className=" h-7 w-32 " />
      <div className="flex gap-x-2">
        <ScoreDisplay
          score={24563}
          style="font-bold text-lg"
          icon={<CoinIcon />}
        />
        <ScoreDisplay
          score={2500}
          style="font-bold text-lg"
          icon={<FullLeafIcon />}
        />
      </div>
    </header>
  );
}
