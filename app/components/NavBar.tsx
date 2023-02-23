'use client'

import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation'
import { useState } from "react";
import PageTitle from "./PageTitle";


export default function NavBar() {
    const router = useRouter()
    const pathname = usePathname()
    const [showMenu, setShowMenu] = useState(false)

    const openModal = () => {
        let elModal: HTMLElement = document.getElementById("menu-modal")!
        if (elModal.style.right === '-100%') elModal.style.right = "0"
        else elModal.style.right = "-100%"
        setShowMenu(!showMenu)
    }

    return (
        <>
            <section className="flex justify-around items-center w-full h-16 fixed bottom-0 border-t border-green-light ">
                <div className=" flex flex-col justify-center items-center gap-1" onClick={() => router.push('/')}>
                    <Image
                        src={pathname === '/' ? '/images/home-icon-green.svg' : '/images/home-icon-grey.svg'}
                        width={24}
                        height={24}
                        alt=''
                    />
                    <p>בית</p>
                </div>
                <div className=" flex flex-col justify-center items-center gap-1" >
                    <Image
                        src='/images/data-icon-grey.svg'
                        width={24}
                        height={24}
                        alt=''
                    />
                    <p>נתונים</p>
                </div>
                <div className=" flex flex-col justify-center items-center gap-1">
                    <Image
                        src='/images/gift-icon-grey.svg'
                        width={24}
                        height={24}
                        alt=''
                    />
                    <p>הטבות</p>
                </div>
                <div className=" flex flex-col justify-center items-center gap-1" onClick={openModal}>
                    {!showMenu ?
                        <Image
                            src='/images/menu-icon-grey.svg'
                            width={24}
                            height={24}
                            alt=''
                        /> :
                        <Image
                            src='/images/menu-icon-green.svg'
                            width={24}
                            height={24}
                            alt=''
                        />
                    }
                    <p>תפריט</p>
                </div>
            </section>
            <section id="menu-modal" className="flex flex-col pt-16 pb-10 fixed h-screen w-4/5 top-0 bg-gray-50 z-10 gap-12 rounded-tl-40 shadow-nav-bar transition-[right]" style={{ right: '-100%' }}>
                <div className='absolute top-5 left-5' onClick={openModal}>
                    <Image
                        src='/images/x-icon.svg'
                        width={24}
                        height={24}
                        alt=''
                    />
                </div>
                <header className="flex justify-between pr-9 pl-12 ga">
                    <div className="flex gap-3">
                        <Image
                            src='/images/user-no-image-icon.svg'
                            width={50}
                            height={50}
                            alt=''
                        />
                        <div>
                            <p>שם משתמש</p>
                            <PageTitle className="text-2xl">שלום יונתן</PageTitle>
                        </div>
                    </div>
                    <Image
                        src='/images/pen-icon.svg'
                        width={20}
                        height={20}
                        alt=''
                    />
                </header>
                <main className="flex flex-col gap-8 pr-12">
                    <div className="text-lg font-semibold">ניהול חשבון</div>
                    <div className="text-lg font-semibold">הגדרות יעדים</div>
                    <div className="text-lg font-semibold">הגדרות</div>
                    <div className="text-lg font-semibold">שאלות ותשובות</div>
                    <div className="text-lg font-semibold">צור קשר</div>
                    <div className="text-lg font-semibold">חיבור חשבונות</div>
                    <div className="text-lg font-semibold">הזמן חברים</div>
                    <div className="text-lg font-semibold">ניתוק</div>
                </main>
            </section>
        </>
    )
}