"use client";
import ViewTitle from "../components/ViewTitle";
import ExpenseIncomeTitle from "./ExpenseIncomeTitle";
import ProgressBar from "./ProgressBar";
import Button from "../../components/Button";
import { useState } from "react";

export default function MonthlyView() {
  const [month, setMonth] = useState(
    new Date().toLocaleString("he-IL", { month: "long" })
  );

  return (
    <section className=" flex flex-col gap-y-4 bg-white mx-4 rounded-xl shadow-main">
      <main className="flex flex-col gap-y-2 px-3">
        <ViewTitle score={300} title={`חודש ${month}`} />
        <div className=" flex flex-col gap-y-3">
          <div className="flex justify-between">
            <ExpenseIncomeTitle
              title="הוצאות"
              amount={3000}
              style="text-orange-primary"
            />
            <ExpenseIncomeTitle
              title="מתוך"
              amount={10000}
              style="text-green-300"
            />
          </div>
          <ProgressBar income={10000} expense={3000} dest={2000} />
        </div>

        <div className="bg-black text-white flex h-9 items-center justify-center w-32 gap-x-1 rounded-lg border-2 border-red-500 mt-6 px-3">
          <p>🎯</p>
          <p>היעד</p>
          <span className="flex ">
            <p className="font-bold">₪{(2000).toLocaleString()}</p>
          </span>
        </div>
      </main>
      <div className="mt-1 flex flex-col gap-y-1">
        <p className="text-gray-400">נותר לך להוצאות :</p>
        <div className="bg-green-200 flex justify-between p-3 rounded-b-xl">
          <div className="flex items-end  text-white text-5xl font-bold ">
            <span>{(10000 - 3000 - 2000).toLocaleString()}</span>
            <span className="font-normal text-3xl">₪</span>
          </div>
          <Button className=" max-content mr-16 text-sm font-bold ">
            לאן הולך הכסף?
          </Button>
        </div>
      </div>
    </section>
  );
}
