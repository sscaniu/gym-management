import React, { FC } from "react";
import Image from "next/image";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon: string;
  position?: "left" | "right";
}
const ActionButton: FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  position = "left",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 h-[52px] flex ${
        position === `left` ? `flex-row` : `flex-row-reverse`
      } items-center gap-4 px-4 disabled:opacity-50 hover:bg-dark rounded-lg active:bg-[#303853] focus-visible:bg-[#303853] focus-visible:outline focus-visible:outline-2 focus-visible:outline-info focus-visible:outline-offset-2`}
    >
      <Image src={icon} width={24} height={24} alt="button" />
      <span className="font-jost font-medium text-sm whitespace-nowrap">
        {children}
      </span>
    </button>
  );
};

export default ActionButton;
