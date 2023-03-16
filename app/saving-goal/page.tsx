"use client";

import InputField from "../components/InputField";
import PageTitle from "../components/PageTitle";
import ProgressBar from "../personal-info/ProgressBar";
import NisIcon from "../../public/images/nis.svg";
import Button from "../components/Button";
import { ChangeEvent, useState } from "react";

function SavingGoal() {
  const [goal, setGoal] = useState<number>();

  const handleGoalChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replaceAll(",", "");
    if (isNaN(+value)) return;

    if (!value) {
      setGoal(undefined);
      return;
    }
    setGoal(+value);
  };
  return (
    <div className="py-10 px-9">
      <ProgressBar step={2} />
      <PageTitle>יעד חיסכון חודשי</PageTitle>
      <p className="text-center mt-6 leading-8">
        קביעת יעד חודשי לחיסכון תאפשר לנו להציב מטרות להתייעלות ולהשתפר בהשגתן
      </p>
      <p className="text-center text-gray-400 leading-8">
        זה לא חייב להיות מדוייק, בהמשך תכירו את עצמכם טוב יותר ותוכלו לקבוע יעד
        מתאים יותר
      </p>

      <InputField
        value={goal?.toLocaleString()}
        placeholder="היעד שלך החודש"
        icon={<NisIcon />}
        className="mt-9"
        onChange={handleGoalChanged}
      />

      <Button className="mt-16">המשך</Button>
    </div>
  );
}
export default SavingGoal;
