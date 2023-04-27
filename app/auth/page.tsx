"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import VerificationInput from "react-verification-input";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import { formatPhoneNumber, handleError, isClientSide } from "../utils";
import { getLoggedUser } from "../utils/storage";

export default function Approve() {
  const router = useRouter();
  const loggedUser = getLoggedUser();
  const [code, setCode] = useState("");

  /**
   * if the user is not logged in, redirect him to login page
   */
  if (isClientSide() && !loggedUser) {
    return router.replace("/login");
  }

  const handleResend = async () => {
    const resp = await fetch("/api/sms", {
      method: "POST",
      body: JSON.stringify({ phone: loggedUser?.phoneNumber }),
    });

    if (!resp.ok) {
      handleError(resp);
    }
  };

  const redirectUser = () => {
    //if the user finished the registration process
    if (loggedUser?.account.isVerified) {
      router.replace("/home");
    } else {
      //if the user still haven't filled the basic details
      if (!loggedUser?.firstName) {
        router.replace("/personal-info");
      } else if (!loggedUser?.account.monthlySavings) {
        //if the user have not filled the savings goal
        router.replace("/savings-goal");
      } else {
        //the user did not fill the notifications info
        router.replace("/notification");
      }
    }
  };

  const verifyNumber = async () => {
    const resp = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({ code }),
    });

    if (resp.ok) {
      redirectUser();
    } else {
      handleError(resp);
    }
  };

  return (
    <div className="h-full flex flex-col justify-center items-center px-5 w-full text-gray-400">
      <div className="text-center">
        <PageTitle className="text-2xl text-black">התחברות</PageTitle>
        <p className="mt-8">שלחנו קוד אימות ב-SMS למספר</p>
        <p className="mt-4 text-black">
          {formatPhoneNumber(loggedUser?.phoneNumber)}
        </p>
        <p className="mt-5">יש להזין אותו כעת:</p>

        <div dir="ltr" className="mt-3 h-20">
          <VerificationInput
            value={code}
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
              characterSelected: "outline-none border-green-300",
            }}
            onChange={setCode}
          />
        </div>
      </div>
      <div className="flex flex-col w-full text-center mt-20">
        <Button disable={!code || code.length !== 5} onClick={verifyNumber}>
          אישור
        </Button>
        <a
          href="#"
          className={`mt-4 underline ${
            !code ? "text-green-300" : "text-gray-200"
          }`}
          onClick={handleResend}
        >
          שלחו לי שוב את הקוד
        </a>
      </div>
    </div>
  );
}
