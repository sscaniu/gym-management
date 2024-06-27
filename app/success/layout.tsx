import React, { FC } from "react";
import type { Metadata } from "next";
import AuthLayout from "../components/layouts/Auth";

export const metadata: Metadata = {
  title: "Register",
  description: "Manage Gyms, Trainers, Clients and more.",
};

interface Props {
  children: React.ReactNode;
}

const RegisterLayout: FC<Props> = ({ children }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default RegisterLayout;
