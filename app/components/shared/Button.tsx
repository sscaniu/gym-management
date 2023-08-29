"use client";

import { ReactNode, useState } from "react";

export default function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-md bg-black focus-visible:outline-black hover:bg-white hover:text-black hover:outline hover:outline-black px-16 py-4 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {children}
    </button>
  );
}
