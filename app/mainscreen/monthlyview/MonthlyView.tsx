import ViewTitle from "../components/ViewTitle";
import ExpenseIncomeTitle from "./ExpenseIncomeTitle";
import ProgressBar from "./ProgressBar";
import Button from "../../components/Button";

export default function MonthlyView() {
  return (
    <section className=" flex flex-col gap-y-4 bg-white mx-4 rounded-xl shadow-main">
      <main className="flex flex-col gap-y-2 px-3">
        <ViewTitle score={300} title="חודש יוני" />
        <div className=" flex flex-col gap-y-3">
          <div className="flex justify-between">
            <ExpenseIncomeTitle title="הוצאות" amount={3000} isIncome={false} />
            <ExpenseIncomeTitle title="מתוך" amount={10000} isIncome={true} />
          </div>
          <ProgressBar income={10000} expense={3000} dest={2000} />
        </div>

        <div className="bg-black-dest text-white flex h-9 items-center justify-center w-32 gap-x-1 rounded-lg border-2 border-red-500 mt-7 px-3">
          <p>🎯</p>
          <p>היעד</p>
          <span className="flex ">
            <p className="font-bold">₪{2000}</p>
          </span>
        </div>
      </main>

      <div className="mt-2 flex flex-col gap-y-1">
        <p className="text-green-middle px-3">נותר לך להוצאות :</p>
        <div className="bg-green-progressBarIncome flex justify-between p-3 rounded-b-xl">
          <span className="flex items-end text-3xl text-white">
            <p className="text-5xl font-bold ">{10000 - 3000 - 2000}</p>₪
          </span>
          <Button className=" w-36">לאן הולך הכסף?</Button>
        </div>
      </div>
    </section>
  );
}
