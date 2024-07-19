import React from "react";
import PrimaryGoal from "./PrimaryGoal";
import SecondaryGoal from "./SecondaryGoal";

const ClientProfile = () => {
  return (
    <div className="grid grid-cols-2 gap-14">
      <PrimaryGoal />
      <SecondaryGoal />
    </div>
  );
};

export default ClientProfile;
