import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Manage Gyms, Trainers, Clients and more.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
