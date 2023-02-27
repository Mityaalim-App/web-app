import PageTitle from "@/app/components/PageTitle";
import ExpenseIncomeTitle from "./ExpenseIncomeTitle";
import ProgressBar from "./ProgressBar";

export default function MonthlyView() {
  return (
    <section className=" flex flex-col gap-y-4 bg-white p-4 mx-4 rounded-xl">
      <header className="flex justify-between h-10 items-center">
        <PageTitle>חודש יוני</PageTitle>
        {/* <ScoreDisplay
          src="leaf-icon.svg"
          bgColor="#FFFFFF"
          textColor="#187718"
          borderColor="#B7E1B8"
          score={300}
        /> */}
      </header>
      <main className="flex flex-col gap-y-2">
        <div className="flex justify-between ">
          <ExpenseIncomeTitle title="הוצאות" amount={3000} />
          <ExpenseIncomeTitle title="מתוך" amount={10000} />
        </div>
        <ProgressBar income={10000} expense={3000} dest={2000} />
        <div className="mt-8 flex flex-col gap-y-1">
          <p>נותר לך להוצאות :</p>
          <div className="flex justify-between">
            <span className="flex items-end text-3xl">
              <p className="text-5xl text-[#2E384D] font-bold ">
                {10000 - 3000 - 2000}
              </p>
              {/* <p>{income-expense-dest}</p> */}₪
            </span>
            <div className="text-green-primary flex items-end">
              <p>לאן הולך הכסף?</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
