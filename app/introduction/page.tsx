"use client";
import Image from "next/image";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import { useState } from "react";
import TextContainer from "../components/TextContainer";
import IntroSection from "./IntroSection";

//// מרכוז טקסט
export default function Introduction() {
  const [isMale, setIsMale] = useState<boolean>(false);

  return (
    <section className="flex flex-col items-center pt-8 pb-[76px] justify-between h-full px-5 ">
      <Image
        src="/images/mityaalim-logo-text.png"
        width={125}
        height={50}
        alt="logo"
        className="mb-16 pb-4"
      />
      {isMale ? (
        <IntroSection
          image={{
            src: "male-person.svg",
            className: "absolute top-12 left-0 w-[230px] h-[520px]",
          }}
          text="תסייע לך לסדר את התזרים החודשי על מנת לחסוך יותר, ללמוד ממומחים כיצד להתייעל כלכלית ותזכה אותך בהטבות!"
          title="אפליקציית מתייעלים"
          onClick={() => setIsMale(!isMale)}
          isMale={isMale}
        />
      ) : (
        <IntroSection
          image={{
            src: "female-person.svg",
            className: "absolute top-20 left-0 w-[170px] h-[525px]",
          }}
          text="הינה יוזמה ללא כוונת רווחת אשר פועלת להנגשת ידע פיננסי וכלים על מנת שכל אחד יוכל לחיות ולבנות את חייהם בצורה בריאה פיננסית"
          title="מתייעלים"
          onClick={() => setIsMale(!isMale)}
          isMale={isMale}
        />
      )}
    </section>
  );
}
