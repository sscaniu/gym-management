"use client";
import React, { useState } from "react";
import CardSelect, { OptionConfig } from "@/app/components/shared/CardSelect";
import WizardHeader from "@/app/components/shared/WizardHeader";

const GymSpecialty = () => {
  const [selectedOption, setSelectedOption] = useState<any>([]);
  const options: OptionConfig[] = [
    {
      id: "fitness",
      name: "General Fitness",
      description: "Traditional gym with weights, and exercise machines.",
      iconPath: "/fitness.png",
    },
    {
      id: "crossfit",
      name: "Crossfit",
      description: "High intensity workouts like, HIIT, tabata, and boxing. ",
      iconPath: "/crossfit.png",
    },
    {
      id: "yoga",
      name: "Yoga",
      description: "Exercises that balance the mind and body. ",
      iconPath: "/yoga.png",
    },
    {
      id: "other",
      name: "Other",
      description: "Your gym provides another kind of fitness program.",
      iconPath: "/other.png",
    },
  ];

  const handleSelect = (id: string | number) => {
    const clonedSelectedOption = [...selectedOption];
    const index = clonedSelectedOption.indexOf(id);
    if (index > -1) {
      clonedSelectedOption.splice(index, 1);
    } else {
      clonedSelectedOption.push(id);
    }

    setSelectedOption([...clonedSelectedOption]);
  };

  return (
    <div className="grid gap-[70px]">
      <WizardHeader
        name="Gym Specialty"
        description="Which of the following choices best describes this gym’s fitness program?"
        hrefLeft="./staffsize"
        hrefRight="./review"
      />
      <CardSelect
        options={options}
        active={selectedOption}
        onSelect={(id) => handleSelect(id)}
        multiple
      />
    </div>
  );
};

export default GymSpecialty;
