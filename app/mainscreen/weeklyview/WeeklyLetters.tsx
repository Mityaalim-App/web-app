"use client";
import { useState } from "react";
import Letter from "./Letter";

export default function WeeklyLetters() {
  const letters: string[] = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];
  const [currDay, setCurrDay] = useState(new Date().getDay());

  ///tried useEffect and ref but it needed a refresh to update the letters
  const dynamicClassNameGetter = (index: number) => {
    if (currDay === index)
      return "text-white bg-green-primary rounded-full font-bold";
    else if (currDay > index) return "text-gray-250";
    else return "text-green-primary font-bold";
  };

  return (
    <div className="flex w-full gap-2 items-center text-center justify-between">
      {letters.map((letter, index) => {
        return (
          <Letter
            key={index}
            letter={letter}
            style={dynamicClassNameGetter(index)}
          />
        );
      })}
    </div>
  );
}
