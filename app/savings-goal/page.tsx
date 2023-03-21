"use client";

import InputField from "../components/InputField";
import PageTitle from "../components/PageTitle";
import ProgressBar from "../personal-info/ProgressBar";
import NisIcon from "../../public/images/nis.svg";
import Button from "../components/Button";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { handleError, isClientSide } from "../utils";
import { getLoggedUser, setLoggedUser } from "../utils/storage";

export default function SavingGoal() {
  const router = useRouter();
  const loggedUser = getLoggedUser();
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

  const handleSave = async () => {
    const resp = await fetch("/api/savings", {
      method: "POST",
      body: JSON.stringify({ goal, accountId: loggedUser?.account.id })
    });

    if (resp.ok) {
      setLoggedUser({
        ...loggedUser!,
        account: {
          ...loggedUser!.account,
          monthlySavings: goal as number
        }
      });
      router.replace("/notification");
    } else {
      handleError(resp);
    }
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

      <Button className="mt-16" onClick={handleSave} disable={!goal}>
        המשך
      </Button>
    </div>
  );
}
