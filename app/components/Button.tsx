"use client";

import Link from "next/link";
import {
  ButtonHTMLAttributes,
  MouseEvent as ReactMouseEvent,
  ReactElement,
} from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement[] | ReactElement | string;
  disable?: boolean;
  outlined?: boolean;
  icon?: ReactElement | null;
  href?: string;
  className?: string;
  onClick?: (e: any) => void;
}
export default function Button({
  children,
  disable = false,
  outlined = false,
  icon = null,
  href = undefined,
  className = "",
  onClick = (e: any) => {},
}: IButtonProps) {
  const IconComponent = () => icon;
  const buttonClasses = () => {
    const classes = [
      "w-full rounded-full flex items-center justify-center py-2 px-4",
      className,
      className,
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

  const handleOnclick = (e: any) => {
    if (disable) {
      e.preventDefault();
    } else {
      onClick(e);
    }
  };

  return href ? (
    <Link href={href} className={buttonClasses()} onClick={handleOnclick}>
      <span className="w-6 h-6 ml-1">{icon && <IconComponent />}</span>
      <span>{children}</span>
    </Link>
  ) : (
    <button className={buttonClasses()} onClick={onClick} disabled={disable}>
      {icon && (
        <span className="w-6 h-6 ml-1">
          <IconComponent />
        </span>
      )}
      {icon && (
        <span className="w-6 h-6 ml-1">
          <IconComponent />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
