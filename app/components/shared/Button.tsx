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
      white:
        "bg-white text-black hover:bg-white hover:shadow-white/30 active:bg-white-dark active:shadow-white/30",
      primary:
        "bg-primary text-black hover:bg-primary hover:shadow-primary/30 active:bg-primary-dark active:shadow-primary/30",
      danger:
        "bg-danger text-black hover:bg-danger hover:shadow-danger/30 active:bg-danger-dark active:shadow-danger/30",
      warning:
        "bg-warning text-black hover:bg-warning hover:shadow-warning/30 active:bg-warning-dark active:shadow-warning/30",
      success:
        "bg-success text-black hover:bg-success hover:shadow-success/30 active:bg-success-dark active:shadow-success/30",
      dark: "bg-dark text-black hover:bg-dark hover:shadow-dark/30 active:bg-dark-dark active:shadow-dark/30",
    },
    outlined: {
      white:
        "border-2 border-white hover:bg-white/20 text-white active:bg-white/40 focus-visible:bg-white/80",
      primary:
        "border-2 border-primary hover:bg-primary/20 text-primary active:bg-primary/40 focus-visible:bg-primary/80",
      danger:
        "border-2 border-danger hover:bg-danger/20 text-danger active:bg-danger/40 focus-visible:bg-danger/80",
      warning:
        "border-2 border-warning hover:bg-warning/20 text-warning active:bg-warning/40 focus-visible:bg-warning/80",
      success:
        "border-2 border-success hover:bg-success/20 text-success active:bg-success/40 focus-visible:bg-success/80",
      dark: "border-2 border-dark hover:bg-dark/20 text-dark active:bg-dark/40 focus-visible:bg-dark/80",
    },
    link: {
      white: "text-white",
      primary: "text-primary",
      danger: "text-danger hover:bg-[#401D25] active:bg-[#2F161C] focus:bg-[#401D25] focus:outline-danger",
      warning: "text-warning",
      success: "text-success",
      dark: "text-dark",
    },
  };

  const roundedStyle = {
    filled: "rounded-sm",
    outlined: "rounded",
    link: "rounded-lg",
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

  const disableButtonStyles = {
    filled: "disabled:bg-disable disabled:hover:shadow-none",
    outlined: "disabled:opacity-50 disabled:hover:bg-transparent",
    link: "",
  };

  const activeButtonStyles = {
    filled: "active:shadow-md",
    outlined: "active:outline outline-2 outline-offset-4",
    link: "",
  };

  const hoverButtonStyles = {
    filled: "hover:shadow-md",
    outlined: "",
    link: "",
  };

  const focusButtonStyles = {
    filled:
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-info focus-visible: outline-offset-2",
    outlined: "focus-visible:outline-none focus-visible:text-dark",
    link: "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:ring-0",
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${
        fullWidth ? `w-full` : ``
      } font-jost font-semibold px-4 transition box-border ${
        disableButtonStyles[variant]
      } ${activeButtonStyles[variant]} ${hoverButtonStyles[variant]} ${
        focusButtonStyles[variant]
      } ${className} ${variantStyles[variant][color]} ${sizeStyles[size]} ${
        roundedStyle[variant]
      }`}
      disabled={loading || disabled}
    >
      {children}
    </button>
  );
};

export default Button;
