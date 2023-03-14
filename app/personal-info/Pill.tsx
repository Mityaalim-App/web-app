import { ReactElement } from "react";

interface Props {
  children: string;
  active?: boolean;
  onClick: (item: string) => void;
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
      {children}
    </div>
  );
}
export default Pill;
