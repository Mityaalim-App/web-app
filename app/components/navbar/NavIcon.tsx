import Image from "next/image";
import { usePathname } from "next/navigation";

interface INavIconProps {
  srcGreen: string;
  srcGrey: string;
  text: string;
  path: string;
  onClick: () => void;
}

export function NavIcon({
  srcGreen,
  srcGrey,
  text,
  onClick,
  path,
}: INavIconProps) {
  const pathname = usePathname();

  return (
    <div
      className=" flex flex-col justify-center items-center gap-1"
      onClick={onClick}
    >
      <Image
        src={pathname === path ? srcGreen : srcGrey}
        width={24}
        height={24}
        alt=""
      />
      <p>{text}</p>
    </div>
  );
}
