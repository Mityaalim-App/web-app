"use client";

import { ReactElement } from "react";
import PageTitle from "./PageTitle";

export interface ITextContainerProps {
  title: string | ReactElement<any, string>[];
  text: string | ReactElement<any, string>[];
}

export default function TextContainer({ text, title }: ITextContainerProps) {
  return (
    <div className="bg-green-light flex flex-col opacity-95 items-center justify-center w-[320px] z-10 h-[257px] mt-16 rounded-3xl gap-y-1">
      <PageTitle className="text-2xl">{title}</PageTitle>
      <p className="mt-2 pr-8 pl-8 text-base">{text}</p>
    </div>
  );
}
