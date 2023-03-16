"use client";

import { KidsStatus, MarriageStatus } from "@prisma/client";

export interface IPillChildren {
  label: string;
  value: any;
}
interface Props {
  children: IPillChildren;
  active?: boolean;
  onClick: (item: IPillChildren) => void;
}
function Pill({ children, onClick, active = false }: Props) {
  const activeClasses = "bg-green-200 text-white border-green-300";
  const notActiveClasses = "bg-gray-100 border-gray-400 text-gray-400";

  const getClasses = () => {
    const classes = ["border  rounded-full py-1 px-4 w-max cursor-pointer"];
    if (active) {
      classes.push(activeClasses);
    } else {
      classes.push(notActiveClasses);
    }

    return classes.join(" ");
  };
  return (
    <div className={getClasses()} onClick={() => onClick(children)}>
      {children.label}
    </div>
  );
}
export default Pill;
