"use client";

import { MouseEventHandler, ReactElement } from "react";
import ExspenseIcon from "public/images/exspense.svg";
import MotionlessIcon from "public/images/motionless.svg";
import IncomeIcon from "public/images/income.svg";
import ViewTitle from "../components/ViewTitle";
import DailyTask from "./DailyTask";


interface ITasks {
    title: string;
    icon?: ReactElement | null;
    onClick: MouseEventHandler
  }
  
  export default function DailyView() {
    const onTaskClick : MouseEventHandler<HTMLElement> = (event) => {

    }

    const tasks: ITasks[] = [
      {
        title: "הוצאה",
        icon: <ExspenseIcon />,
        onClick: onTaskClick,
      },
      {
        title: "ללא תנועה",
        icon: <MotionlessIcon />,
        onClick: onTaskClick,
      },
      {
        title: "הכנסה",
        icon: <IncomeIcon />,
        onClick: onTaskClick,
      },
    ];

    return (
        <section className="flex flex-col gap-y-4 bg-white px-4 pb-5 mx-4 rounded-xl">
            <ViewTitle
                title="דיווח יומי"
                score={15}
                style={ false ? "text-green-300" : "text-gray-300"}
            />
            <main className="flex flex-col gap-4">
                <div className="flex text-center justify-between">
                    {tasks.map(({ title, icon, onClick }, index) => (
                        <DailyTask
                            title={title}
                            icon={icon}
                            key={index}
                            onClick={onClick}
                        />
                    ))}
                </div>
            </main>
        </section>
    );
}