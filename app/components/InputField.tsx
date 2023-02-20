import { ChangeEventHandler, InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
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
    <div className="flex items-center p-4 border border-gray-650 mt-4 w-full rounded-[4px]">
      <input
        value={value}
        className={`outline-none w-full ${className}`}
        {...props}
      />
      <span className="w-6 h-6 text-gray-550">{icon && <IconElement />}</span>
    </div>
  );
}
