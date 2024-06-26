"use client";

import Link from "next/link";
import { rubik } from "./font";
import clsx from "clsx";

export enum ButtonStyles {
  Primary = "primary",
  Secondary = "secondary",
}

export function Button({
  text,
  href,
  style,
  addCSS,
  width,
}: {
  text: string;
  href?: string;
  style: ButtonStyles;
  addCSS?: string;
  width: string;
}) {
  const calcCSS = addCSS == undefined ? "" : addCSS;

  return (
    <Link
      key={text}
      href={href == undefined ? "" : href}
      className={clsx(
        `flex  ',
        'h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:opacity-100 md:flex-none md:justify-start md:p-2 md:px-3 opacity-50`,
        {
          [rubik.className]: true,
          [width]: true,
          [calcCSS]: true,
          "text-button-1": style === ButtonStyles.Primary,
          "bg-button-1-bg": style === ButtonStyles.Primary,
          "text-button-2": style === ButtonStyles.Secondary,
          "bg-button-2-bg border-solid border-button-2-border border-2":
            style === ButtonStyles.Secondary,
        }
      )}
    >
      <p
        className={`${rubik.className} text-[16px] hidden md:block flex-1 text-center`}
      >
        {text}
      </p>
    </Link>
  );
}
