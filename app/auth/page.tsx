"use client";
import { useState } from "react";
import VerificationInput from "react-verification-input";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";

export default function Approve() {
  const [value, setValue] = useState("");
  return (
    <div className="h-full flex flex-col justify-center items-center px-5 w-full text-gray-400">
      <div className="text-center">
        <PageTitle className="text-2xl text-black">התחברות</PageTitle>
        <p className="mt-8">שלחנו קוד אימות ב-SMS למספר</p>
        <p className="mt-4 text-black">052-3554728</p>
        <p className="mt-5">יש להזין אותו כעת:</p>

        <div dir="ltr" className="mt-3 h-20">
          <VerificationInput
            value={value}
            autoFocus
            validChars="0-9"
            inputProps={{ type: "tel", autoComplete: "one-time-code" }}
            length={5}
            placeholder=""
            classNames={{
              container: "container",
              character:
                "rounded-full w-12 h-20 border border-green-100 flex items-center justify-center text-black",
              characterInactive: "bg-white",
              characterSelected: "outline-none border-green-300"
            }}
            onChange={(newVal) => setValue(newVal)}
          />
        </div>
      </div>
      <div className="flex flex-col w-full text-center mt-20">
        <Button disable={!value || value.length !== 5} href="/welcome">
          אישור
        </Button>
        <a
          href="#"
          className={`mt-4 underline ${
            !value ? "text-green-300" : "text-gray-200"
          }`}
        >
          שלחו לי שוב את הקוד
        </a>
      </div>
    </div>
  );
}
