import type { Metadata } from "next";
import Footer from "../components/shared/footer";

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
      {children}
      <Footer />
    </div>
  )
}
