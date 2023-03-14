"use client";

import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  onChange: (fullDate: string) => void;
}
export default function BirthDateInput({ onChange }: Props) {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [fullDate, setFullDate] = useState<string>("");

  useEffect(() => {
    if (day && month && year) {
      const date = `${day}/${month}/${year}`;
      setFullDate(date);
      onChange(date);
    } else {
      onChange("");
    }
  }, [day, month, year, onChange]);

  function isValidDayInput(input: string) {
    const regex = /^([1-9]|[1-2][0-9]|3[0-1])$/; // matches 01-09, 10-29, 30
    return regex.test(input);
  }
  function isValidMonthInput(input: string) {
    const regex = /^([1-9]|[1-2][0-2])$/; // matches 01-09, 10-29, 30
    return regex.test(input);
  }
  function isValidYearInput(year: string) {
    const regex = /^([1-2])/; // matches years between 1000-2999
    return regex.test(year);
  }

  const handleDay = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || isValidDayInput(value)) {
      setDay(value);
    }
  };
  const handleMonth = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || isValidMonthInput(value)) {
      setMonth(value);
    }
  };
  const handleYear = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || isValidYearInput(value)) {
      setYear(value);
    }
  };

  return (
    <div className="flex items-center p-4 border border-gray-400  w-full rounded-[4px]">
      <input
        value={year}
        type="text"
        className="w-1/3 outline-none text-center"
        tabIndex={3}
        onChange={handleYear}
        placeholder="1980"
      />
      <span className="px-2">|</span>
      <input
        value={month}
        type="text"
        className="w-1/3 outline-none text-center"
        tabIndex={2}
        onChange={handleMonth}
        placeholder="1"
      />
      <span className="px-2">|</span>
      <input
        value={day}
        type="text"
        className="w-1/3 outline-none text-center"
        tabIndex={1}
        onChange={handleDay}
        placeholder="1"
      />
    </div>
  );
}
