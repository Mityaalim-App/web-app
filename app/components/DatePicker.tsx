import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import ClockIcon from "../../public/images/clock.svg";

interface IDatePickerProps {
  onChange: (date: Date) => void;
}
export default function DatePicker({ onChange }: IDatePickerProps) {
  const [time, setTime] = useState<Date | null>(new Date());

  const handleOnChange = (date: Date) => {
    setTime(date);
    onChange(date);
  };

  return (
    <div className="relative">
      <ReactDatePicker
        selected={time}
        onChange={handleOnChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="time"
        dateFormat="HH:mm"
        timeFormat="HH:mm"
        popperPlacement="bottom-end"
        popperClassName="w-full"
        className="flex items-center p-4 border border-gray-300 text-black outline-none
          placeholder:text-gray-400 mt-4 w-full rounded-[4px] focus-within:border-green-300 group transition-all"
      />
      <ClockIcon className="w-6 h-6 absolute left-2 top-8" />
    </div>
  );
}
