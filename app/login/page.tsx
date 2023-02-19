"use client";

import Image from "next/image";
import Button from "../components/shared/Button";
import PageTitle from "../components/shared/PageTitle";
import CellIcon from "public/images/cellphone.svg";
import { ChangeEvent as ReactChangeEvent, useState } from "react";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOnChange = (e: ReactChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="flex flex-col items-center pt-8 pb-20 justify-between h-full px-5">
      <div className="flex flex-col items-center px-8">
        <Image src="/images/leaves.svg" alt="Logo" width={200} height={190} />
        <PageTitle className="mt-14 text-2xl">איזה כיף שבאת</PageTitle>
        <p className="text-center">
          כדי להתחבר יישלח לך קוד אימות חד-פעמי ב-SMS
        </p>
        <div className="flex items-center px-4 py-2 border mt-4">
          <input
            type="text"
            placeholder="טלפון נייד"
            className=" outline-none"
            onChange={handleOnChange}
          />
          <span className="w-6 h-6 text-gray-550">
            <CellIcon />
          </span>
        </div>
      </div>
      <Button disable={!phoneNumber} href="/auth">
        אישור
      </Button>
    </div>
  );
}
