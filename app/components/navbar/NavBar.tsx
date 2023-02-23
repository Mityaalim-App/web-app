"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MainMenu } from "../mainmenu/MainMenu";
import { NavIcon } from "./NavIcon";

export default function NavBar() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const navBtn = [
    {
      text: "בית",
      src: "home",
      router: "",
    },
    {
      text: "נתונים",
      src: "data",
      router: "data",
    },
    {
      text: "הטבות",
      src: "gift",
      router: "gift",
    },
  ];

  const openModal = () => {
    let elModal: HTMLElement = document.getElementById("menu-modal")!;
    if (elModal.style.right === "-100%") elModal.style.right = "0";
    else elModal.style.right = "-100%";
    setShowMenu(!showMenu);
  };

  return (
    <>
      <section className="flex justify-around items-center w-full h-16 fixed bottom-0 border-t border-green-light bg-white ">
        {navBtn.map((item, index) => {
          return (
            <NavIcon
              key={index}
              srcGrey={`/images/${item.src}-icon-grey.svg`}
              srcGreen={`/images/${item.src}-icon-green.svg`}
              text={item.text}
              onClick={() => router.push(`/${item.router}`)}
              path={`/${item.router}`}
            />
          );
        })}

        <div
          className=" flex flex-col justify-center items-center gap-1"
          onClick={openModal}
        >
          {!showMenu ? (
            <Image
              src="/images/menu-icon-grey.svg"
              width={24}
              height={24}
              alt=""
            />
          ) : (
            <Image
              src="/images/menu-icon-green.svg"
              width={24}
              height={24}
              alt=""
            />
          )}
          <p>תפריט</p>
        </div>
      </section>
      <MainMenu openModal={openModal} />
    </>
  );
}
