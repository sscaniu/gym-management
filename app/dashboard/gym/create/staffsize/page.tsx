"use client";
import React, { useState } from "react";
import CardSelect, { OptionConfig } from "@/app/components/shared/CardSelect";
import WizardHeader from "@/app/components/shared/WizardHeader";

const StaffSize = () => {
  const [selectedOption, setSelectedOption] = useState<string | number>();
  const options: OptionConfig[] = [
    {
      id: 1,
      name: "Just me",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.",
      iconPath: "/images/dashboard/circle.png",
    },
    {
      id: 2,
      name: "Up to 5 trainers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.",
      iconPath: "/images/dashboard/circle.png",
    },
    {
      id: 3,
      name: "6 to 12 trainers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.",
      iconPath: "/images/dashboard/circle.png",
    },
    {
      id: 4,
      name: "Custom",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet.",
      iconPath: "/images/dashboard/circle.png",
    },
  ];

  return (
    <div className="grid gap-12">
      <WizardHeader
        name="Staff Size"
        description="How many trainers work this gym location?"
        hrefLeft="./locationsize"
        hrefRight="./specialty"
      />
      <CardSelect
        options={options}
        active={selectedOption}
        onSelect={(id) => setSelectedOption(id)}
      />
    </div>
  );
}

export default StaffSize;