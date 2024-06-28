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
      <div className={"flex flex-col w-full h-screen"}>
        <Header />
        <div className="flex-1 bg-grey text-white">
          <div className="w-full max-w-7xl mx-auto pt-8 pb-7 px-16">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
