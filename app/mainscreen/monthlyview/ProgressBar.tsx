"use client";
import { useState } from "react";
import PolygonIcon from "public/images/polygon-icon.svg";

interface IProgressBar {
  income: number;
  expense: number;
  dest: number;
}

export default function ProgressBar({ expense, income, dest }: IProgressBar) {
  const [expensesWidth, setExpensesWidth] = useState((expense / income) * 100);
  const [destPlacement, setDestPlacement] = useState((dest / income) * 100);

  return (
    <section className="w-full bg-green-200 h-5 flex rounded-xl relative">
      <div
        style={{ width: `${expensesWidth}%` }}
        className="bg-orange-primary rounded-xl border-l-2 border-white"
      ></div>
      <div
        className="absolute h-full flex flex-col"
        style={{ left: `${destPlacement}%` }}
      >
        <div className="bg-black w-[2px] h-full relative">
          <div className="absolute top-6 -right-1 translate-x-1/4">
            <PolygonIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
