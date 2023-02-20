import { FC, HTMLAttributes as ReactHtmlAttributes, ReactElement } from "react";

export interface IPageTitleProps {
  children: ReactElement[] | string;
  className?: string;
}
export default function PageTitle({
  children,
  className = "text-2xl"
}: IPageTitleProps) {
  return <h1 className={`font-bold text-center ${className}`}>{children}</h1>;
}
