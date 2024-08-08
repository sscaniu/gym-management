"use client";

import React, { FC } from "react";
import Gym from "../components/containers/Dashboard/Gym";
import Trainer from "../components/containers/Dashboard/Trainer";
import Client from "../components/containers/Dashboard/Client";
import Calendar from "../components/containers/Dashboard/Calendar";
import Resources from "../components/containers/Dashboard/Resources";

const Dashboard: FC = () => {
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
          <Trainer />
          <Client />
          <Calendar />
          <Resources />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
