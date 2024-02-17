"use client";

import React, { ReactNode } from "react";

export enum ButtonTypes {
  Button = "button",
  Submit = "submit",
  React = "reset",
}

export enum ButtonStyles {
  Primary = "primary",
  Secondary = "secondary",
}

export function Button({
  type,
  onClick,
  disabled,
  text,
  icon,
  style,
}: {
  type?: ButtonTypes;
  onClick?: React.FC;
  disabled?: boolean;
  text: string;
  icon?: React.ReactNode;
  style?: ButtonStyles;
}) {
  console.log(style);
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      disabled={disabled || false}
      className={`${icon ? "inline-flex items-center gap-x-2" : ""
        } rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
      ${style == ButtonStyles.Primary
          ? "text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"
          : ""
        }
      ${style == ButtonStyles.Secondary
          ? "ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-gray-900 bg-white"
          : ""
        }
      `}
    >
      {text}
    </button>
  );
}
