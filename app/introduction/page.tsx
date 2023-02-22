"use client";
import Image from "next/image";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import { useState } from "react";
import TextContainer from "../components/TextContainer";


export default function Introduction() {
    const [isSlide, setIsSlide] = useState<boolean>(false);



    return (
        <section className="flex flex-col items-center pt-8 pb-20 justify-between h-full px-5 ">
            <Image
                src="/images/mityaalim-logo-text.png"
                width={125}
                height={50}
                alt="logo"
                className="mb-16 pb-4"
            />
            {isSlide ? <section className="transition-opacity duration-200">
                <Image
                    src='/images/male-person.svg'
                    width={330}
                    height={525}
                    alt=''
                    className=" absolute top-20 left-0 transform"
                />
                <div className="flex flex-col gap-y-20">
                    <TextContainer title='אפליקציית מתייעלים' txt='תסייע לך לסדר את התזרים החודשי על מנת לחסוך יותר, ללמוד ממומחים כיצד להתייעל כלכלית ותזכה אותך בהטבות!'></TextContainer>
                    <div className="flex items-center justify-center gap-x-2 " onClick={() => setIsSlide(!isSlide)}>
                        <div className="h-2.5 w-2.5 border-solid border-2 border-green-light rounded-3xl "></div>
                        <div className="w-8 h-2.5 bg-green-primary rounded-3xl"></div>
                    </div>
                    <div className="w-full mt-10">
                        <Button href="/personal-info">המשך</Button>
                    </div>
                </div>
            </section> :

                <section>
                    <Image
                        src='/images/female-person.svg'
                        width={250}
                        height={525}
                        alt=''
                        className=" absolute top-28 left-0 transform"
                    />
                    <div className="flex flex-col gap-y-20">
                        <TextContainer title='מתייעלים' txt='הינה יוזמה ללא כוונת רווחת אשר פועלת להנגשת ידע פיננסי וכלים על מנת שכל אחד יוכל לחיות ולבנות את חייהם בצורה בריאה פיננסית'></TextContainer>
                        <div className="flex items-center justify-center gap-x-2" onClick={() => setIsSlide(!isSlide)}>
                            <div className="w-8 h-2.5 bg-green-primary rounded-3xl"></div>
                            <div className="h-2.5 w-2.5 border-solid border-2 border-green-light rounded-3xl "></div>
                        </div>
                        <div className="w-full mt-10">
                            <Button href="/personal-info">המשך</Button>
                        </div>
                    </div>
                </section>}
        </section>
    )
}