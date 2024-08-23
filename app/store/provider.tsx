"use client";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};
