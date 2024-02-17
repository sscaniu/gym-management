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
      {/*Main Container Grid*/}
      <div className={'flex flex-col w-full h-screen'}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
