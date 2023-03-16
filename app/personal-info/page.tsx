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
import { MarriageStatus, KidsStatus } from "@prisma/client";

interface Props {}
export default function PersonalInfo({}: Props) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [selectedMarriageStatus, setSelectedMarriageStatus] =
    useState<string>("");
  const [selectedKidsStatus, setSelectedKidsStatus] = useState<string>("");

  const marriageStatuses = [
    {
      label: "רווק",
      value: MarriageStatus.SINGLE
    },
    {
      label: "נשוי",
      value: MarriageStatus.MARRIED
    },
    {
      label: "גרוש",
      value: MarriageStatus.DIVORCED
    },
    {
      label: "אלמן",
      value: MarriageStatus.WIDOW
    }
  ];

  const kidsStatuses = [
    { label: "עם ילדים", value: KidsStatus.HAVE_KIDS },
    { label: "ללא ילדים", value: KidsStatus.NO_KIDS },
    { label: "לא מעוניין לשתף", value: KidsStatus.NA }
  ];

  const onPillClicked = (status: IPillChildren, isKidsStatus: boolean) => {
    if (isKidsStatus) {
      setSelectedKidsStatus(status.value);
    } else {
      setSelectedMarriageStatus(status.value);
    }
  };

  return (
    <div className="px-5 mt-10 flex flex-col items-center pb-10">
      <span className="text-gray-300 text-sm">1/3</span>
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
        <Button className="mt-10">המשך</Button>
      </form>
    </div>
  );
}
