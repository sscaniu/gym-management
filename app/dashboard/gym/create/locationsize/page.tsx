"use client";
import React, { useState } from "react";
import CardSelect, { OptionConfig } from "@/app/components/shared/CardSelect";
import WizardHeader from "@/app/components/shared/WizardHeader";

const LocationSize = () => {
  const [selectedOption, setSelectedOption] = useState<string | number>();
  const options: OptionConfig[] = [
    {
      id: "small",
      name: "Small",
      description: "Membership size between 1-20 clients",
      iconPath: "/images/dashboard/small.png",
    },
    {
      id: "medium",
      name: "Medium",
      description: "Membership size between 21-60 clients",
      iconPath: "/images/dashboard/medium.png",
    },
    {
      id: "large",
      name: "Large",
      description: "Membership size between 61-100+ clients",
      iconPath: "/images/dashboard/large.png",
    },
  ];

  return (
    <div className="grid gap-[70px]">
      <WizardHeader
        name="Location Size"
        description="Which of the following choices best describes this gym’s membership size?"
        hrefLeft="./address"
        hrefRight="./staffsize"
      />
      <CardSelect
        options={options}
        active={selectedOption}
        onSelect={(id) => setSelectedOption(id)}
      />
    </div>
  );
};

export default LocationSize;
