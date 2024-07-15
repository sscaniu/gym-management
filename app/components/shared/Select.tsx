import React, { ChangeEvent, FC } from "react";

interface Option {
  value: string | number;
  label: string | number;
}

interface SelectProps {
  id: string;
  name: string;
  value: string | number;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  options: (Option | string | number)[];
  className?: string;
  size?: "sm" | "md" | "lg";
  error?: boolean;
  fullWidth?: boolean;
}

const Select: FC<SelectProps> = ({
  value,
  onChange,
  label,
  options,
  className,
  id,
  name,
  size = "sm",
  error,
  fullWidth,
}) => {
  const sizeStyles = {
    lg: "h-14 border-2 font-jost font-semibold text-base px-[22px] bg-transparent",
    md: "h-12 border-2 font-jost font-semibold text-base px-[22px] bg-transparent",
    sm: "h-10 font-rubik text-sm px-[26px] bg-[#0F142452]",
  };

  return (
    <div className={`${fullWidth ? `w-full` : ``} grid gap-2 ${className}`}>
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
      <select
        value={value}
        onChange={onChange}
        className={`w-full border border-white rounded focus:ring-0 focus:border-white text-white appearance-none ${sizeStyles[size]}`}
        id={id}
        name={name}
      >
        {options.map((option: Option | number | string) => (
          <option
            key={typeof option === "object" ? option.value : option}
            value={typeof option === "object" ? option.value : option}
            className="text-black"
          >
            {typeof option === "object" ? option.label : option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
