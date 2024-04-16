import type { Metadata } from "next";
import Footer from "../components/shared/footer";
import { rubik } from "../components/shared/font"

export const metadata: Metadata = {
  title: "Login",
  description: "Manage Gyms, Trainers, Clients and more.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={'flex flex-col w-full h-screen'}>
      <header className="flex inset-x-0 top-0 z-50 h-16 bg-oxford-blue p-4 text-white">
        <div className={`${rubik.className} text-[16px] font-bold`}>
          Gym Buddies
        </div>
      </header>
      {children}
      <Footer />
    </div>
  )
}
