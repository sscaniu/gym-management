"use client";

import React, { FC } from "react";
import Gym from "@/app/components/containers/Gym/Gym";
import Trainer from "@/app/components/containers/Gym/Trainer";
import Client from "@/app/components/containers/Gym/Client";
import Calendar from "@/app/components/containers/Gym/Calendar";
import Resources from "@/app/components/containers/Gym/Resources";

const GymDashboard: FC = () => {
  return (
    <div>
      <div className="bg-black pt-10 pb-12">
        <div className="w-full max-w-7xl mx-auto px-14">
          <h3 className="font-rubik font-bold text-[40px]">
            [User Name]’s Dashboard
          </h3>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-14 py-16">
        <div className="grid grid-cols-2 gap-11">
          <Gym />
          <Calendar />
          <Trainer />
          <Client />
          <Resources />
        </div>
      </div>
    </div>
  );
};

export default GymDashboard;
