"use client";
import { useState } from "react";
import VerificationInput from "react-verification-input";
import Button from "../components/shared/Button";
import PageTitle from "../components/shared/PageTitle";

export default function Approve() {
  const [value, setValue] = useState("");
  return (
    <div className="h-full flex flex-col justify-center items-center px-5 w-full">
      <div className="text-center">
        <PageTitle className="text-2xl">התחברות</PageTitle>
        <p className="mt-8">שלחנו קוד אימות ב-SMS למספר</p>
        <p className="mt-2 font-bold">052-3554728</p>
        <p className="mt-5">יש להזין אותו כעת:</p>

        <div dir="ltr" className="mt-2 h-20">
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
                "rounded-full w-12 h-20 border border-green-light flex items-center justify-center",
              characterInactive: "bg-white",
              characterSelected: "bg-green-light"
            }}
            onChange={(newVal) => setValue(newVal)}
          />
        </div>
      </div>
      <div className="flex flex-col w-full text-center mt-20">
        <Button disable={!value || value.length !== 5} href="/welcome">
          אישור
        </Button>
        <a href="#" className="mt-2 underline">
          שלחו לי שוב את הקוד
        </a>
      </div>
    </div>
  );
}
