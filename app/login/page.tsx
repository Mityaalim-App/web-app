"use client";

import Image from "next/image";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import CellIcon from "public/images/cellphone.svg";
import {
  ChangeEvent as ReactChangeEvent,
  useState,
  MouseEvent as ReactMouseEvent
} from "react";
import InputField from "../components/InputField";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOnChange = (e: ReactChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleLogin = async (e: ReactMouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const resp = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({ phone: phoneNumber })
    });
    console.log(resp);
  };

  return (
    <div className="flex flex-col items-center pt-8 pb-20 justify-between h-full px-5">
      <div className="flex flex-col items-center px-8">
        <Image src="/images/leaves.svg" alt="Logo" width={200} height={190} />
        <PageTitle className="mt-14 text-2xl">איזה כיף שבאת</PageTitle>
        <p className="text-center mt-5 max-w-[250px] leading-7">
          כדי להתחבר יישלח לך קוד אימות חד-פעמי ב-SMS
        </p>
        <InputField
          value={phoneNumber}
          placeholder="טלפון נייד"
          icon={<CellIcon />}
          onChange={handleOnChange}
        />
      </div>
      <Button disable={!phoneNumber} onClick={handleLogin}>
        אישור
      </Button>
    </div>
  );
}
