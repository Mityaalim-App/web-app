"use client";

import { ChangeEventHandler, InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number | undefined;
  className?: string;
  icon?: JSX.Element | null;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}
export default function InputField({
  value = "",
  className = "",
  icon = null,
  ...props
}: Props) {
  const IconElement = () => icon;
  return (
    <div
      className={`flex items-center p-4 border border-gray-300 text-black 
    placeholder:text-gray-400 mt-4 w-full rounded-[4px] focus-within:border-green-300 group transition-all ${className}`}
    >
      <input value={value} className="outline-none w-full" {...props} />
      <span className="min-w-[24px]  w-6 h-6 text-gray-400 group-focus-within:text-black transition-all">
        {icon && <IconElement />}
      </span>
    </div>
  );
}
