import React, { FC } from "react";
import Footer from "../shared/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-grey text-white">
      <header className="h-[56px] flex items-center bg-black px-14">
        <h1 className="font-rubik font-bold text-base">Gym Buddies</h1>
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
