"use client";

import { useState } from "react";
import InputField from "../components/InputField";
import PageTitle from "../components/PageTitle";
import UserIcon from "public/images/user.svg";
import FamilyIcon from "public/images/family.svg";
import AtSignIcon from "public/images/at-sign.svg";
import BirthDateInput from "./BirthDateInput";
import Pill, { IPillChildren } from "./Pill";
import Button from "../components/Button";
import ProgressBar from "./ProgressBar";
import { MarriageStatus, KidsStatus, User, Account } from "@prisma/client";
import { kidsStatuses, marriageStatuses } from "./personaInfo.consts";
import { useRouter } from "next/navigation";
import { getLoggedUser } from "../utils/storage";
import { handleError, isClientSide } from "../utils";

export default function PersonalInfo() {
  const router = useRouter();
  const loggedUser = getLoggedUser();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [selectedMarriageStatus, setSelectedMarriageStatus] = useState<
    MarriageStatus | undefined
  >(undefined);
  const [selectedKidsStatus, setSelectedKidsStatus] = useState<
    KidsStatus | undefined
  >(undefined);

  const onPillClicked = (status: IPillChildren, isKidsStatus: boolean) => {
    if (isKidsStatus) {
      setSelectedKidsStatus(status.value);
    } else {
      setSelectedMarriageStatus(status.value);
    }
  };

  const handleSave = async (e: any) => {
    e.preventDefault();
    const user: Partial<User> = {
      id: loggedUser ? loggedUser.id + "" : undefined,
      email,
      firstName,
      lastName,
      dob,
    };
    const account: Partial<Account> = {
      id: loggedUser?.account.id,
      kidsStatus: selectedKidsStatus,
      marriageStatus: selectedMarriageStatus,
    };

    const resp = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ user, account }),
    });

    if (isClientSide() && resp.ok) {
      router.replace("/savings-goal");
    } else {
      handleError(resp);
    }
  };

  const isFormValid = () => {
    return (
      !!firstName &&
      !!lastName &&
      !!email &&
      !!dob &&
      !!selectedMarriageStatus &&
      !!selectedKidsStatus &&
      isEmailValid()
    );
  };

  const isEmailValid = () => {
    const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !email || emailRegexp.test(email);
  };

  return (
    <div className="px-5 mt-10 flex flex-col items-center pb-10">
      <ProgressBar step={1} />
      <PageTitle>נשמח להכיר</PageTitle>
      <form action="" className="w-full flex flex-col gap-2">
        <InputField
          value={firstName}
          name="firstName"
          placeholder="שם פרטי"
          icon={<UserIcon />}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputField
          value={lastName}
          name="lastName"
          placeholder="שם משפחה"
          icon={<FamilyIcon />}
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputField
          value={email}
          type="email"
          name="email"
          placeholder="דוא”ל"
          icon={<AtSignIcon />}
          error={isEmailValid() ? undefined : "האימייל אינו בפורמט נכון"}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PageTitle className="text-right my-4">תאריך לידה</PageTitle>
        <div className="date-wrapper">
          <div className="flex text-gray-400 font-normal mb-1">
            <span className="flex-1 text-center"> שנה </span>
            <span className="flex-1 text-center"> חודש </span>
            <span className="flex-1 text-center"> יום </span>
          </div>
          <BirthDateInput onChange={(fullDate) => setDob(fullDate)} />
        </div>

        <PageTitle className="text-right mt-4">סטטוס משפחתי</PageTitle>
        <p className="text-gray-400 mt-1">סמנו את כל האופציות המתאימות</p>
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {marriageStatuses.map((item) => (
            <Pill
              key={item.value}
              onClick={(status) => onPillClicked(status, false)}
              active={selectedMarriageStatus === item.value}
            >
              {item}
            </Pill>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {kidsStatuses.map((item) => (
            <Pill
              key={item.value}
              onClick={(status) => onPillClicked(status, true)}
              active={selectedKidsStatus === item.value}
            >
              {item}
            </Pill>
          ))}
        </div>
        <Button className="mt-10" onClick={handleSave} disable={!isFormValid()}>
          המשך
        </Button>
      </form>
    </div>
  );
}
