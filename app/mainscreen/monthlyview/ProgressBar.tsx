"use client";
import { useState } from "react";

interface IProgressBar {
  income: number;
  expense: number;
  dest: number;
}

export default function ProgressBar({ expense, income, dest }: IProgressBar) {
  const [expensesWidth, setExpensesWidth] = useState((expense / income) * 100);
  const [destPlacement, setDestPlacement] = useState((dest / income) * 100);

  return (
    <section className="w-full bg-green-primary h-[18px] flex rounded-[10px] relative">
      <div
        style={{ width: `${expensesWidth}%` }}
        className="bg-green-dark rounded-[10px]"
      ></div>
      <div
        className="absolute h-full flex flex-col"
        style={{ left: `${destPlacement}%` }}
      >
        <div className="bg-white w-[2px] h-full relative">
          <div className="bg-[#2E384D] h-2 w-2 absolute top-[26px] -translate-y-1/2 rotate-45 translate-x-1/3"></div>
          <div className="bg-[#2E384D] py-[6px] px-2 text-white flex rounded-sm absolute top-[26px] translate-x-1/2 gap-1">
            <p>היעד</p>
            <span className="flex ">
              <p className="font-bold">₪{dest}</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
