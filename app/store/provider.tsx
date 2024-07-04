"use client";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface Props {
  children: React.ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
