"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ButtonHTMLAttributes,
  MouseEvent as ReactMouseEvent,
  ReactElement
} from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement[] | ReactElement | string;
  disable?: boolean;
  outlined?: boolean;
  icon?: ReactElement | null;
  href?: string;
  className?: string;
  onClick?: (e: ReactMouseEvent<HTMLButtonElement>) => void;
}
export default function Button({
  children,
  disable = false,
  outlined = false,
  icon = null,
  href = undefined,
  className = "",
  onClick = (e: ReactMouseEvent<HTMLButtonElement>) => {}
}: IButtonProps) {
  const IconComponent = () => icon;
  const buttonClasses = () => {
    const classes = [
      "w-full rounded-full flex items-center justify-center py-2 px-4",
      className
    ];
    if (disable) {
      classes.push(
        outlined
          ? "border border-green-100 text-green-100"
          : "bg-green-100 text-white"
      );
    } else {
      classes.push(
        outlined
          ? "border border-green-300 text-green-300"
          : "bg-green-300 text-white"
      );
    }
    return classes.join(" ");
  };

  return href ? (
    <Link href={href} className={buttonClasses()}>
      <span className="w-6 h-6 ml-1">{icon && <IconComponent />}</span>
      <span>{children}</span>
    </Link>
  ) : (
    <button className={buttonClasses()} onClick={onClick} disabled={disable}>
      <span className="w-6 h-6 ml-1">{icon && <IconComponent />}</span>
      <span>{children}</span>
    </button>
  );
}
