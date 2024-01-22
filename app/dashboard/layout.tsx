import type { Metadata } from "next";
import Header from "./header";
import Footer from "./footer";

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
      <div className={`h-96 w-full`}>{children}</div>
      {/* <Footer /> */}
    </>
  );
}
