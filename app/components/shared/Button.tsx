import React, { FC } from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  color?: "primary" | "danger" | "warning" | "success" | "dark" | "white";
  variant?: "filled" | "outlined" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className,
  disabled = false,
  loading = false,
  fullWidth = false,
  size = "md",
  variant = "filled",
  color = "primary",
  href,
}) => {
  const router = useRouter();
  const variantStyles = {
    filled: {
      white: "bg-white text-dark",
      primary: "bg-primary text-dark",
      danger: "bg-danger text-dark",
      warning: "bg-warning text-dark",
      success: "bg-success text-dark",
      dark: "bg-dark text-dark",
    },
    outlined: {
      white: "border-2 border-white hover:bg-white text-white hover:text-black",
      primary:
        "border-2 border-primary hover:bg-primary text-primary hover:text-black",
      danger:
        "border-2 border-danger hover:bg-danger text-danger hover:text-black",
      warning:
        "border-2 border-warning hover:bg-warning text-warning hover:text-black",
      success:
        "border-2 border-success hover:bg-success text-success hover:text-black",
      dark: "border-2 border-dark hover:bg-dark text-dark hover:text-black",
    },
    link: {
      white: "text-white",
      primary: "text-primary",
      danger: "text-danger",
      warning: "text-warning",
      success: "text-success",
      dark: "text-dark",
    },
  };

  const roundedStyle = {
    filled: "rounded-sm",
    outlined: "rounded",
    link: "rounded-none"
  };

  const sizeStyles = {
    sm: "h-10 text-sm",
    md: "h-12 text-base",
    lg: "h-14 text-base",
  };

  const handleClick = () => {
    if (href) {
      router.push(href);
      return;
    }
    onClick && onClick();
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${
        fullWidth ? `w-full` : ``
      } font-jost font-semibold px-4 transition disabled:opacity-50 ${className} ${
        variantStyles[variant][color]
      } ${sizeStyles[size]} ${roundedStyle[variant]}`}
      disabled={disabled || loading}
    >
      {children}
    </button>
  );
};

export default Button;
