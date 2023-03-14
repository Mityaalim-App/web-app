"use client";

import { useState } from "react";
import InputField from "../components/InputField";
import PageTitle from "../components/PageTitle";
import UserIcon from "public/images/user.svg";
import FamilyIcon from "public/images/family.svg";
import AtSignIcon from "public/images/at-sign.svg";
import BirthDateInput from "./BirthDateInput";
import Pill from "./Pill";
import Button from "../components/Button";
import ProgressBar from "./ProgressBar";

interface Props {}
export default function PersonalInfo({}: Props) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const statuses = [
    "רווק",
    "נשוי",
    "גרוש",
    "אלמן",
    "עם ילדים",
    "ללא ילדים",
    "לא מעוניין לשתף"
  ];

  const onPillClicked = (status: string) => {
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses((prev) => prev.filter((stat) => stat !== status));
    } else {
      setSelectedStatuses((prev) => [...prev, status]);
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
          <div className="flex text-gray-300 font-normal">
            <span className="flex-1 text-center"> שנה </span>
            <span className="flex-1 text-center"> חודש </span>
            <span className="flex-1 text-center"> יום </span>
          </div>
          <BirthDateInput onChange={(fullDate) => setDob(fullDate)} />
        </div>

        <PageTitle className="text-right mt-4">סטטוס משפחתי</PageTitle>
        <p className="text-gray-400 mt-1">סמנו את כל האופציות המתאימות</p>
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {statuses.map((item) => (
            <Pill
              key={item}
              onClick={onPillClicked}
              active={selectedStatuses.includes(item)}
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
