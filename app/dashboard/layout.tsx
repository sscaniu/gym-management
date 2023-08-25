import type { Metadata } from "next";
import Header from "./header";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage Gyms",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
