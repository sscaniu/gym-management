import React, { FC, useState } from "react";
import Eye from "../assets/Eye";

interface TextFieldProps {
  type?: "text" | "email" | "password";
  label?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  size?: "sm" | "lg";
  value?: string;
  onChange?: () => void;
  required?: boolean;
  className?: string;
  fullWidth?: boolean;
  startAdornment?: string | React.ReactNode;
  endAdornment?: string | React.ReactNode;
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
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const sizeStyles = {
    lg: "h-14",
    sm: "h-12",
  };

  return (
    <div className="w-full grid gap-2">
      {label && (
        <label htmlFor={id} className="font-jost font-semibold text-xs uppercase">
          {label}
        </label>
      )}
      <div className="flex border-2 border-white rounded-sm shadow">
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
          className={`${fullWidth ? `w-full` : ``} ${
            sizeStyles[size]
          } font-jost font-semibold text-base bg-transparent border-0 focus:border-white focus:ring-0 focus:outline-none ${className} ${
            startAdornment ? `pl-0` : `pl-[22px]`
          } ${endAdornment ? `pr-0` : `pr-[22px]`}`}
          placeholder={placeholder}
          required={required}
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
    </div>
  );
};

export default TextField;
