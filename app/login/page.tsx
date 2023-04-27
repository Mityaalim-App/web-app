"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import CellIcon from "public/images/cellphone.svg";
import {
  ChangeEvent as ReactChangeEvent,
  useState,
  MouseEvent as ReactMouseEvent,
} from "react";
import InputField from "../components/InputField";
import { IStoreState, useMainStore } from "@/store";
import { setLoggedUser } from "../utils/storage";
import { handleError } from "../utils";
import LeavesImage from "public/images/leaves.svg";

export default function Login() {
  const router = useRouter();
  const setPhoneInStore = useMainStore((state: IStoreState) => state.setPhone);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOnChange = (e: ReactChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10)
      setPhoneNumber(() => {
        return e.target.value;
      });
  };

  const handleLogin = async (e: ReactMouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const resp = await fetch("/api/account", {
      method: "POST",
      body: JSON.stringify({ phone: phoneNumber }),
    });

    if (!resp.ok) {
      return handleError(resp);
    }

    const newAccount = await resp.json();
    setPhoneInStore(phoneNumber);
    setLoggedUser(newAccount);
    router.replace("/auth");
  };

  const isPhoneValid = () => {
    //accepts only cellular numbers
    const regex =
      /^(?:0(5)(?:0|1|2|3|4|5|6|7|8|9))(?:-?\d){7}$|^(0(?=5)(?:-?\d){9})$/;
    return regex.test(phoneNumber);
  };

  return (
    <div className="flex flex-col items-center pt-8 pb-20 justify-between h-full px-5">
      <div className="flex flex-col items-center px-8">
        <LeavesImage className="h-[200px] w-[200px]" />
        <PageTitle className="mt-14 text-2xl">איזה כיף שבאת</PageTitle>
        <p className="text-center mt-5 max-w-[250px] leading-7 text-gray-400">
          כדי להתחבר יישלח לך קוד אימות חד-פעמי ב-SMS
        </p>
        <InputField
          value={phoneNumber}
          placeholder="טלפון נייד"
          icon={<CellIcon />}
          onChange={handleOnChange}
        />
      </div>
      <Button disable={!isPhoneValid()} onClick={handleLogin}>
        אישור
      </Button>
    </div>
  );
}
