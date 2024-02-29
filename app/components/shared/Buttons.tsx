"use client";

import Link from "next/link";
import { rubik } from "./font";

export enum ButtonStyles {
  Primary = "primary",
  Secondary = "secondary"
}

export function Button({
  text,
  href,
  style,
  addCSS,
  width
}: {
  text: string,
  href?: string,
  style: ButtonStyles,
  addCSS?: string,
  width: string

}) {

  return (

    <Link
      key={text}
      href={href == undefined ? "" : href}
      className={`flex ${width} text-button-1 h-[48px] grow items-center justify-center gap-2 rounded-md bg-button-1-bg p-3 text-sm font-medium hover:opacity-100 md:flex-none md:justify-start md:p-2 md:px-3 opacity-50 ${addCSS == undefined ? "" : addCSS}`}>

      <p className={`${rubik.className} hidden md:block flex-1 text-center`}>{text}</p>
    </Link>




  );
}
