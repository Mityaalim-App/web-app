"use client";

import { useEffect, useState } from "react";
import { Days } from "@prisma/client";
import "react-datepicker/dist/react-datepicker.css";

import PageTitle from "../components/PageTitle";
import ProgressBar from "../personal-info/ProgressBar";

import Button from "../components/Button";
import Pill, { IPillChildren } from "../personal-info/Pill";
import DatePicker from "../components/DatePicker";
import { roundTime } from "../utils";
import { useRouter } from "next/navigation";

const days: IPillChildren[] = [
  { label: "ראשון", value: Days.SUNDAY },
  { label: "שני", value: Days.MONDAY },
  { label: "שלישי", value: Days.TUESDAY },
  { label: "רביעי", value: Days.WEDNESDAY },
  { label: "חמישי", value: Days.THURSDAY },
  { label: "שישי", value: Days.FRIDAY },
  { label: "שבת", value: Days.SATURDAY }
];

export default function WeeklyNotification() {
  const router = useRouter();
  const [selectedDays, setSelectedDays] = useState<Days[]>([]);
  const [time, setTime] = useState<Date | null>(roundTime(new Date()));
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleDaySelected = (day: IPillChildren) => {
    if (selectedDays.includes(day.value)) {
      // if the day already exists, remove it
      setSelectedDays(selectedDays.filter((item) => item !== day.value));
    } else {
      // add the newly selected day
      setSelectedDays([...selectedDays, day.value]);
    }
  };

  useEffect(() => {
    setIsFormValid(!!selectedDays.length && !!time);
  }, [selectedDays, time]);

  const handleSave = async () => {
    const resp = await fetch("/api/notifications", {
      method: "POST",
      body: JSON.stringify({ time, selectedDays })
    });

    if (resp.ok) {
      router.replace("/home");
    }
  };

  return (
    <div className="py-10 px-9">
      <ProgressBar step={3} />
      <PageTitle>תזכורת שבועית</PageTitle>
      <p className="text-center mt-6 leading-8">
        הקפדה על תיעוד ההוצאות וההכנסות תאפשר התקדמות לעבר היעד שהצבת
      </p>
      <p className="text-center text-gray-400 leading-8 mt-6">
        *נשמח לסייע בכך ולשלוח לך הודעת תזכורת
      </p>
      <h3 className="font-bold mt-8">באיזה יום לשלוח?</h3>
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        {days.map((day) => (
          <Pill
            key={day.value}
            onClick={handleDaySelected}
            active={selectedDays.includes(day.value)}
          >
            {day}
          </Pill>
        ))}
      </div>

      <h3 className="font-bold mt-8">באיזו שעה?</h3>
      <DatePicker onChange={setTime} />
      <Button className="mt-16" onClick={handleSave} disable={!isFormValid}>
        המשך
      </Button>
    </div>
  );
}
