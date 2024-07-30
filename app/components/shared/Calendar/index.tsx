import React from "react";
import Image from "next/image";
import { Calendar as ReactCalendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./override.css";

interface CalendarProps {
  value: Date;
  onChange: (e: Date) => void;
  selectedDates?: Date[];
}

const Calendar: React.FC<CalendarProps> = ({
  value = new Date(),
  onChange,
  selectedDates = [],
}) => {
  const hasData = (date: Date) => {
    return selectedDates.some(
      (dataDate) =>
        dataDate.getDate() === date.getDate() &&
        dataDate.getMonth() === date.getMonth() &&
        dataDate.getFullYear() === date.getFullYear()
    );
  };

  return (
    <div className="font-jost calendar relative">
      <Image
        src="/arrow-left.png"
        width={24}
        height={24}
        alt="previous"
        className="absolute top-2.5 left-2.5 pointer-events-none"
      />
      <Image
        src="/arrow-right.png"
        width={24}
        height={24}
        alt="next"
        className="absolute top-2.5 right-2.5 pointer-events-none"
      />

      <ReactCalendar
        date={value}
        onChange={onChange}
        dayContentRenderer={(day) => {
          const dateToCheck = new Date(day);

          return (
            <div className="day-content">
              {day.getDate()}
              {hasData(dateToCheck) && <span className="dot"></span>}
            </div>
          );
        }}
        showMonthAndYearPickers={false}
      />
    </div>
  );
};

export default Calendar;
