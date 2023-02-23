import Image from "next/image";
import PageTitle from "../PageTitle";
import { MenuButton } from "./MenuButton";

interface IMainMenu {
  openModal: () => void;
}

export function MainMenu({ openModal }: IMainMenu) {
  const menuBtn = [
    "ניהול חשבון",
    "הגדרות יעדים",
    "הגדרות",
    "שאלות ותשובות",
    "צור קשר",
    "חיבור חשבונות",
    "הזמן חברים",
    "ניתוק",
  ];

  return (
    <section
      id="menu-modal"
      className="flex flex-col pt-16 pb-10 fixed h-screen w-4/5 top-0 bg-gray-50 z-10 gap-12 rounded-tl-40 shadow-nav-bar transition-[right]"
      style={{ right: "-100%" }}
    >
      <div className="absolute top-5 left-5" onClick={openModal}>
        <Image src="/images/x-icon.svg" width={24} height={24} alt="" />
      </div>
      <header className="flex justify-between pr-9 pl-12 ga">
        <div className="flex gap-3">
          <Image
            src="/images/user-no-image-icon.svg"
            width={50}
            height={50}
            alt=""
          />
          <div>
            <p>שם משתמש</p>
            <PageTitle className="text-2xl">שלום יונתן</PageTitle>
          </div>
        </div>
        <Image src="/images/pen-icon.svg" width={20} height={20} alt="" />
      </header>
      <main className="flex flex-col gap-8 pr-12">
        {menuBtn.map((btnText, idx) => {
          return <MenuButton text={btnText} key={idx} />;
        })}
      </main>
    </section>
  );
}
