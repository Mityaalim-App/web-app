"use client";

import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactElement } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement[] | ReactElement | string;
  disable?: boolean;
  outlined?: boolean;
  icon?: ReactElement | null;
  href?: string;
  className?: string;
  onClick?: () => void;
}
export default function Button({
  children,
  disable = false,
  outlined = false,
  icon = null,
  href = undefined,
  className = "",
  onClick = () => {},
}: IButtonProps) {
  const IconComponent = () => icon;
  const buttonClasses = () => {
    const classes = [
      "w-full rounded-full flex items-center justify-center py-2 px-4",
      className,
    ];
    if (disable) {
      classes.push(
        outlined
          ? "border border-green-light text-green-light"
          : "bg-green-light text-white"
      );
    } else {
      classes.push(
        outlined
          ? "border border-green-primary text-green-primary"
          : "bg-green-primary text-white"
      );
    }
    return classes.join(" ");
  };

  return href ? (
    <Link href={href} className={buttonClasses()}>
      {icon && (
        <span className="w-6 h-6 ml-1">
          {" "}
          <IconComponent />
        </span>
      )}
      <span>{children}</span>
    </Link>
  ) : (
    <button className={buttonClasses()} onClick={onClick} disabled={disable}>
      {icon && (
        <span className="w-6 h-6 ml-1">
          {" "}
          <IconComponent />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
