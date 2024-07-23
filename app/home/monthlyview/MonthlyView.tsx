"use client";
import { MouseEventHandler, ReactElement, useState } from "react";
import ExspenseIcon from "public/images/exspense.svg";
import MotionlessIcon from "public/images/motionless.svg";
import BowAndArrowIcon from "public/images/bow-and-arrow.svg";
import ViewTitle from "../components/ViewTitle";

const monthNames = [
  "ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני",
  "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"
];

function getMonthName(date: number) {
  return monthNames[date];
}

export default function DailyView() {
  const [currMonth, setCurrMounth] = useState(new Date().getMonth());
  let monthName = "חודש "+ getMonthName(currMonth);
  const expense = 3000;
  const income = 10000;
  const target = 2000;

  return (
      <section className="flex flex-col gap-y-4 bg-white px-4 pb-5 mx-4 rounded-xl relative overflow-hidden">
        <ViewTitle
          title={monthName}
          score={125}
          style={ false ? "text-green-300" : "text-gray-300" }
        />       

        <div className="flex text-gray-300 justify-between rtl">
          <span className="text-right">
            הוצאת <span className="text-orange-500 font-bold">₪{expense.toLocaleString('he-IL')}</span>
          </span>
          <span>
            מתוך <span className="text-green-300 font-bold">₪{income.toLocaleString('he-IL')}</span>
          </span>
        </div>
        <div className="w-full h-6 bg-green-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-orange-500 rounded-full relative" 
            style={{ width: `${(expense / income) * 100}%`,
                  boxShadow: '0 0 0 1px white',
                  filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.7))'}}
          ></div>
        </div>
        <div className="inline-flex items-center bg-black text-white rounded-lg border border-pink-500 w-fit">
          <div className="flex items-center px-3 py-2">
            <BowAndArrowIcon className="w-5 h-5  flex-shrink-0" />
            <span className="text-base pr-3">היעד ₪<span className="font-bold">{target.toLocaleString('he-IL')}</span></span>
          </div>
        </div>
        <span className="text-gray-300 mb-3">נותר לך להוצאות:</span>
        
        <div className="absolute bottom-0 left-0 right-0 h-[85px] bg-green-200 rounded-b-xl flex items-center justify-between px-4"></div>
        <div className="relative z-100 flex items-center justify-between w-full">
          <span className= "text-2xl text-white">₪<span className="text-4xl font-bold">{(income-expense-target).toLocaleString('he-IL')}</span></span>
          <button className="bg-green-300 text-white font-bold px-6 py-4 rounded-full">
            לאן הולך הכסף?
          </button>    
        </div>
      </section>
  );
}