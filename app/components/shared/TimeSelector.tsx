import React, { FC } from "react";
import Select, { SelectOption } from "./Select";

interface TimeSelectorOption {
  label?: string;
  value?: SelectOption | SelectOption[] | null;
  onChange?: (e: any) => void;
  size?: "sm" | "lg";
  className?: string;
}

const options: SelectOption[] = [
  { value: 0, label: "08:00" },
  { value: 1, label: "08:30" },
  { value: 2, label: "09:00" },
  { value: 3, label: "09:30" },
  { value: 4, label: "10:00" },
  { value: 5, label: "10:30" },
  { value: 6, label: "11:00" },
  { value: 7, label: "11:30" },
  { value: 8, label: "12:00" },
  { value: 9, label: "12:30" },
  { value: 10, label: "13:00" },
  { value: 11, label: "13:30" },
];

const TimeSelector: FC<TimeSelectorOption> = ({
  label,
  value,
  onChange,
  size = "sm",
  className,
}) => {
  return (
    <Select
      label={label}
      value={value}
      onChange={onChange}
      options={options}
      size={size}
      className={className}
      placeholder="Select"
    />
  );
};

export default TimeSelector;
