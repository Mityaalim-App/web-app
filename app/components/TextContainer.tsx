"use client";

import { ReactElement } from "react";
import PageTitle from "./PageTitle";


export interface ITextContainerProps {
    // children?: ReactElement[] | ReactElement | string;
    title: string | ReactElement<any, string>[];
    txt: string | ReactElement<any, string>[]
    type?: string | null
    props?: string | null
    key?: string | null
}

export default function TextContainer(props: ITextContainerProps) {

    return (
        <div className="bg-green-light flex flex-col opacity-95 items-center justify-center w-full z-10 h-[320px] mt-16 rounded-3xl">
            <PageTitle className="text-2xl">{props.title}</PageTitle>
            <p className="mt-2 pr-8 pl-8 text-base">{props.txt}</p>
        </div>
    )
}