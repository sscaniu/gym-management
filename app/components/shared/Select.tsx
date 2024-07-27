import React, { FC } from "react";
import Image from "next/image";
import ReactSelect, {
  components,
  OptionProps,
  DropdownIndicatorProps,
  MultiValueProps,
} from "react-select";

export interface SelectOption {
  value: string | number;
  label: string | number;
}

const CustomOption: FC<OptionProps<SelectOption>> = (props) => {
  const { isSelected, isFocused, data } = props;

  return (
    <components.Option
      {...props}
      className="h-12 !p-0 !bg-transparent mb-0.5 last:mb-0"
    >
      <div
        className={`flex items-center h-12 px-[22px] relative border-[3px] rounded-sm ${
          isSelected
            ? `bg-info/30 border-info`
            : `border-transparent hover:bg-warning/10`
        }`}
      >
        <span className="font-jost font-semibold text-base">{data.label}</span>
        {isSelected && (
          <Image
            src="/check.png"
            width={24}
            height={24}
            alt="Check"
            className="absolute top-1/2 right-2.5 -translate-y-1/2"
          />
        )}
      </div>
    </components.Option>
  );
};

const CustomDropdownIndicator: FC<DropdownIndicatorProps> = (props) => {
  const { selectProps } = props;

  return (
    <components.DropdownIndicator {...props} className="!px-3">
      <Image
        src="/caret.png"
        width={24}
        height={24}
        alt="Arrow down"
        className={`transition-all ${
          selectProps.menuIsOpen ? `rotate-180` : `rotate-0`
        }`}
      />
    </components.DropdownIndicator>
  );
};

const CustomMultiValue = (props: MultiValueProps<any>) => {
  const { data, index, getValue } = props;
  return (
    <span className="mr-1">
      {data.label}
      {getValue().length - 1 === index ? `` : `,`}
    </span>
  );
};

interface SelectProps {
  label?: string;
  multiple?: boolean;
  options?: SelectOption[];
  placeholder?: string;
  fullWidth?: boolean;
  className?: string;
  error?: boolean;
  value?: SelectOption | SelectOption[] | null;
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
    <div className={`${fullWidth ? `w-full` : ``} grid gap-2`}>
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
          control: () =>
            `${sizeStyles[size]} !bg-black !border-2 rounded !shadow-none text-white !border-white ${className}`,
          indicatorSeparator: () => `hidden`,
          menu: () => `border-2 border-white !bg-black !rounded !mt-1`,
          menuList: () => `!p-0`,
          singleValue: () => `!text-white`,
          multiValue: () => `!bg-transparent`,
          valueContainer: () => `!px-5`,
        }}
        isSearchable={searchable}
        isClearable={clearable}
        hideSelectedOptions={false}
        closeMenuOnSelect={false}
        components={{
          // @ts-ignore
          Option: CustomOption,
          MultiValue: CustomMultiValue,
          DropdownIndicator: CustomDropdownIndicator,
        }}
      />
    </div>
  );
};

export default Select;
