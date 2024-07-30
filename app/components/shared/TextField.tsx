import React, { ChangeEvent, FC, useState } from "react";
import Eye from "../assets/Eye";

interface TextFieldProps {
  type?: "text" | "email" | "password" | "date";
  label?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  size?: "sm" | "lg";
  value?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  className?: string;
  fullWidth?: boolean;
  startAdornment?: string | React.ReactNode;
  endAdornment?: string | React.ReactNode;
  error?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

const TextField: FC<TextFieldProps> = ({
  type = "text",
  label,
  placeholder,
  name,
  id,
  size = "sm",
  value,
  onChange,
  required,
  className = "",
  fullWidth = false,
  startAdornment,
  endAdornment,
  error,
  multiple = false,
  disabled = false,
  readonly = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const sizeStyles = {
    lg: "h-14",
    sm: "h-12",
  };

  return (
    <div className={`${fullWidth ? `w-full` : ``} grid gap-2`}>
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
      {multiple ? (
        <div className="flex flex-col items-end gap-2">
          <textarea
            id={id}
            name={name}
            value={value}
            autoComplete={name}
            onChange={onChange}
            className={`w-full h-[192px] font-jost font-semibold text-base bg-black border-0 focus:border-white focus:ring-0 focus:outline-none border-2 ${
              error ? `border-danger` : `border-white focus:border-info`
            } ${disabled ? `opacity-50` : ``} ${
              readonly ? `border-white/50` : ``
            } rounded-sm shadow resize-none`}
          />
          <span className="font-jost font-semibold text-xs">
            {value?.length || 0}/150
          </span>
        </div>
      ) : (
        <div
          className={`${sizeStyles[size]} flex border-2 bg-black ${
            disabled ? `opacity-50` : ``
          } ${readonly ? `border-white/50` : ``} ${
            error ? `border-danger` : `border-white focus-within:border-info`
          } rounded-sm shadow`}
        >
          {startAdornment && (
            <div className="h-full flex flex-shrink-0 items-center justify-center font-jost text-[32px] px-3.5">
              {startAdornment}
            </div>
          )}
          <input
            id={id}
            name={name}
            type={showPassword ? `text` : type}
            autoComplete={name}
            value={value}
            onChange={onChange}
            className={`w-full h-full font-jost font-semibold text-base bg-black border-0 focus:border-white focus:ring-0 focus:outline-none ${
              error ? `text-danger` : `text-white`
            } ${className} ${startAdornment ? `pl-0` : `pl-[22px]`} ${
              endAdornment ? `pr-0` : `pr-[22px]`
            }`}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            readOnly={readonly}
          />
          {endAdornment && (
            <div className="h-full flex flex-shrink-0 items-center justify-center font-jost text-[32px] px-3.5">
              {endAdornment}
            </div>
          )}
          {type === "password" && (
            <button
              type="button"
              className="h-full flex flex-shrink-0 items-center justify-center font-jost text-[32px] px-3.5 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Eye />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TextField;
