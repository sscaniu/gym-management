import React, { FC, useState } from "react";
import Image from "next/image";
import { DateRangePicker as ReactDateRangePicker } from "react-date-range";
import OutsideClickHandler from "react-outside-click-handler";
import moment from "moment";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./override.css";

export interface ValueProps {
  from: Date | null;
  to: Date | null;
}

interface DateRangePickerProps {
  size?: "sm" | "lg";
  label?: string;
  fullWidth?: boolean;
  error?: boolean;
  id?: string;
  value: ValueProps;
  onChange: (e: ValueProps) => void;
}

const DateRangePicker: FC<DateRangePickerProps> = ({
  label,
  id,
  error = false,
  fullWidth = false,
  value,
  size = "sm",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSelect = (date: any) => {
    onChange({ from: date.default.startDate, to: date.default.endDate });
  };

  const sizeStyles = {
    lg: "h-14",
    sm: "h-12",
  };

  return (
    <div className={`${fullWidth ? `w-full` : ``} grid gap-2 font-jost date-range-picker`}>
      {label && (
        <label
          htmlFor={id}
          className={`font-jost font-semibold text-xs uppercase ${
            error ? `text-danger` : `text-white`
          }`}
        >
          {label}
        </label>
      )}
      <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
        <div className="relative bg-black">
          <div
            className={`${
              sizeStyles[size]
            } flex items-center relative border-2 px-5 ${
              error
                ? `border-danger`
                : `border-white focus-within:border-info hover:border-info`
            } rounded-sm shadow`}
            onClick={() => setIsOpen(true)}
          >
            <span className="">
              {value.from && (
                <span>{moment(value.from).format("MMMM DD, YYYY")} - </span>
              )}
              {value.to && (
                <span>{moment(value.to).format("MMMM DD, YYYY")}</span>
              )}
            </span>
            <Image
              src="/calendar.png"
              width={24}
              height={24}
              alt="Calendar"
              className="absolute top-1/2 right-3 -translate-y-1/2"
            />
          </div>
          {isOpen && (
            <div className="absolute -bottom-2 translate-y-full">
              <ReactDateRangePicker
                ranges={[
                  {
                    startDate: value.from ? value.from : new Date(),
                    endDate: value.to ? value.to : new Date(),
                    key: "default",
                  },
                ]}
                onChange={handleSelect}
                direction="vertical"
              />
            </div>
          )}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default DateRangePicker;
