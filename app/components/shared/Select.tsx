import React, { FC } from "react";
import ReactSelect from "react-select";

export interface SelectOption {
  value: string | number;
  label: string | number;
}

interface SelectProps {
  label?: string;
  multiple?: boolean;
  options?: SelectOption[];
  placeholder?: string;
  fullWidth?: boolean;
  className?: string;
  error?: boolean;
  value?: string | number;
  onChange?: (e: any) => void;
  size?: "sm" | "lg";
  searchable?: boolean;
  clearable?: boolean;
}

const Select: FC<SelectProps> = ({
  label,
  options = [],
  multiple = false,
  className,
  fullWidth = false,
  error = false,
  onChange,
  size = "sm",
  searchable = false,
  clearable = false,
  placeholder = "Select an option",
}) => {
  const sizeStyles = {
    lg: "h-14 border-2 font-jost font-semibold text-base bg-transparent",
    sm: "h-12 border-2 font-jost font-semibold text-base bg-transparent",
  };

  return (
    <div className={`${fullWidth ? `w-full` : ``} grid gap-2 ${className}`}>
      {label && (
        <label
          className={`font-jost font-semibold text-xs uppercase ${
            error ? `text-danger` : `text-white`
          }`}
        >
          {label}
        </label>
      )}
      <ReactSelect
        options={options}
        isMulti={multiple}
        onChange={onChange}
        placeholder={placeholder}
        classNames={{
          option: ({ isSelected }) =>
            `h-12 border-y-2 ${sizeStyles[size]} ${
              isSelected
                ? `border-y-2 border-info !bg-info/30`
                : `!bg-transparent border-transparent`
            }`,
          control: () =>
            `${sizeStyles[size]} !bg-transparent !border-2 !border-white rounded !shadow-none text-white`,
          indicatorSeparator: () => `hidden`,
          menu: () => `border-2 border-white !bg-black !rounded !mt-1`,
          menuList: () => `!p-0`,
          singleValue: () => `!text-white`,
          multiValue: () => `!bg-transparent`,
          valueContainer: () => `!px-5`,
        }}
        isSearchable={searchable}
        isClearable={clearable}
        components={{
          MultiValue: ({ data, index, getValue }) => (
            <span className="mr-1">
              {data.label}
              {getValue().length - 1 === index ? `` : `,`}
            </span>
          ),
        }}
      />
    </div>
  );
};

export default Select;
