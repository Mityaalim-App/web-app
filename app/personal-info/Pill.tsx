import { ReactElement } from "react";

interface Props {
  children: string;
  outlined?: boolean;
  active?: boolean;
  onClick: (item: string) => void;
}
function Pill({ children, onClick, outlined = false, active = false }: Props) {
  const activeClasses = "bg-green-primary text-white border-green-light";
  return (
    <div
      className={`${
        outlined
          ? active
            ? activeClasses
            : "bg-white border-gray-dark"
          : active
          ? activeClasses
          : "bg-gray-100 border-gray-dark"
      } border  rounded-full py-1 px-4 w-max cursor-pointer`}
      onClick={() => onClick(children)}
    >
      {children}
    </div>
  );
}
export default Pill;
