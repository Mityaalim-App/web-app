"use client";

import Image from "next/image";
import { ReactElement } from "react";

export interface IButtonProps {
  children: ReactElement[] | string;
  disable?: boolean;
  outlined?: boolean;
  icon?: ReactElement | null;
  onClick?: () => void;
}
export default function Button({
  children,
  disable = false,
  outlined = false,
  icon = null,
  onClick = () => {}
}: IButtonProps) {
  const IconComponent = () => icon;
  const buttonClasses = () => {
    const classes = [
      "w-full rounded-full flex items-center justify-center py-2 px-4"
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

  return (
    <button className={buttonClasses()} onClick={onClick} disabled={disable}>
      <span className="w-6 h-6 ml-1">{icon && <IconComponent />}</span>
      <span>{children}</span>
    </button>
  );
}
