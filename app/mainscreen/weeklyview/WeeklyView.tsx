"use client";
import ViewTitle from "../components/ViewTitle";
import Button from "@/app/components/Button";
import { ReactElement, useEffect, useState } from "react";
import WeeklyTask from "./WeeklyTask";
import VideoIcon from "public/images/video-icon.svg";
import PodcastIcon from "public/images/podcast-icon.svg";
import OpenBookIcon from "public/images/open-book-icon.svg";
import TrophyIcon from "public/images/trophy-icon.svg";
import WeeklyLetters from "./WeeklyLetters";

interface ITasks {
  title: string;
  isCompleted: boolean;
  icon?: ReactElement | null;
}

export default function WeeklyView() {
  const tasks: ITasks[] = [
    {
      title: "וידאו",
      icon: <VideoIcon />,
      isCompleted: true,
    },
    {
      title: "פודקאסט",
      icon: <PodcastIcon />,
      isCompleted: true,
    },
    {
      title: "מאמר",
      icon: <OpenBookIcon />,
      isCompleted: true,
    },
  ];
  const [isTasksCompleted, setIsTasksCompleted] = useState(true);
  const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);

  useEffect(() => {
    tasks.forEach(({ isCompleted }) => {
      if (!isCompleted) setIsTasksCompleted(false);
    });
  });

  return (
    <section className="flex flex-col gap-y-4 bg-white px-4 pb-5 mx-4 rounded-xl">
      <ViewTitle
        title="משימות השבוע"
        score={250}
        style={isTasksCompleted ? "text-green-primary" : ""}
      />
      <WeeklyLetters />
      <main className="flex flex-col gap-4">
        <div className="flex flex-col gap-y-3">
          {(!isTasksCompleted || isShowMoreClicked) &&
            tasks.map(({ title, icon, isCompleted }, index) => (
              <WeeklyTask
                title={title}
                icon={icon}
                isCompleted={isCompleted}
                key={index}
                score={25}
                style={isCompleted ? "text-gray-250" : "text-gray-dark"}
              />
            ))}
          {isTasksCompleted && (
            <span className="border-green-light border-2 rounded-lg">
              <WeeklyTask
                title={"סיימת את משימות השבוע"}
                icon={<TrophyIcon />}
                isCompleted={true}
                score={250}
                isTrophy={isTasksCompleted}
                style="text-base"
              />
            </span>
          )}
        </div>
        {isTasksCompleted && !isShowMoreClicked && (
          <Button onClick={() => setIsShowMoreClicked(!isShowMoreClicked)}>
            תנו לי עוד
          </Button>
        )}
      </main>
    </section>
  );
}
