import React from "react";
import Contact from "./Contact";
import Membership from "./Membership";

const ClientProfile = () => {
  return (
    <div className="grid grid-cols-2 gap-14">
      <Contact />
      <Membership />
    </div>
  );
};

export default ClientProfile;
