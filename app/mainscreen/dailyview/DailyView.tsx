import Image from "next/image";
import ViewTitle from "../components/ViewTitle";
import DailyCard from "./DailyCard";
import IncomeIcon from "public/images/income-icon.svg";
import OutcomeIcon from "public/images/outcome-icon.svg";
import NoMovementIcon from "public/images/no-movement-icon.svg";

export default function DailyView() {
  return (
    <section className="flex flex-col gap-y-4 bg-white px-3 pb-3 mx-4 rounded-xl gap-3">
      <ViewTitle score={15} title="דיווח יומי" style="text-gray-400" />
      <main className="flex gap-3">
        <DailyCard icon={<IncomeIcon />} text="הכנסה" />
        <DailyCard icon={<NoMovementIcon />} text="ללא תנועה" />
        <DailyCard icon={<OutcomeIcon />} text="הוצאה" />
      </main>
    </section>
  );
}
