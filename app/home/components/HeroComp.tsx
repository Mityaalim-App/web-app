"use client";

import { useEffect, useState } from "react";
import MaleAndFemaleMityaalim from "public/images/male-and-female-mityaalim.svg";
import CloudIcon from "public/images/cloud.svg";

interface IHeroCompProps {
  name: string | undefined,
  saved: number,
}

export default function HeroComp({ name, saved } : IHeroCompProps) {
  const [currDate, setCurrDate] = useState(new Date().toLocaleDateString());

  return (
    <section className="flex flex-col pt-8 relative overflow-x-hidden h-52 px-4 gap-y-1">
      <span className="text-green-300">{currDate}</span>
      <div className=" h-36 flex items-center text-white bg-gradient-to-b from-green-200 to-green-100 shadow-main font-bold rounded-xl relative">
        <span className=" w-52 text-xl leading-8 px-4 py-5">
          <span className="text-3xl">{name} </span>
          מתחילת ההתייעלות חסכתם{" "}
          <span className="text-black text-2xl">
            ₪{saved.toLocaleString()}
          </span>
        </span>
        <CloudIcon className="absolute top-5 h-5 w-20 right-36  -scale-x-100 " />
        <CloudIcon className="absolute top-16 h-5 w-16 right-36" />
        <CloudIcon className="absolute -bottom-0 h-11 right-0 -scale-x-100 " />
      </div>
      <MaleAndFemaleMityaalim className=" absolute w-48 h-52 -left-4 -top-0" />
    </section>
  );
}
