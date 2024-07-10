import React, { ChangeEvent, FC } from "react";

interface Option {
  value: string | number;
  label: string | number;
}

interface SelectProps {
  value: string | number;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  options: Option[];
  className?: string;
}

const Select: FC<SelectProps> = ({ value, onChange, label, options, className }) => {
  return (
    <div className={className}>
      <select
        value={value}
        onChange={onChange}
        className="w-full h-10 bg-[#0F142452] border border-white rounded font-rubik text-sm focus:ring-0 focus:border-white appearance-none px-[26px]"
      >
        {options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
