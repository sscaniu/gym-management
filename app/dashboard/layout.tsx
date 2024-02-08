import type { Metadata } from "next";
import Header from "../components/shared/header";
import Footer from "../components/shared/footer";

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
      <div className={`h-full w-full`}>{children}</div>
      <Footer />
    </>
  );
}
