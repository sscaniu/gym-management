"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/app/store/features/trainer/trainerSlice";
import CardSelect, { OptionConfig } from "@/app/components/shared/CardSelect";
import WizardHeader from "@/app/components/shared/WizardHeader";

const options: OptionConfig[] = [
  {
    id: "Brooklyn",
    name: "Brooklyn Gym",
    description: "132 Stuyvesant Ave Brooklyn, NY 11221",
    iconPath: "/images/dashboard/small.png",
  },
  {
    id: "Queen",
    name: "Queen’s Gym",
    description: "Moon Street Queen’s, NY 11237",
    iconPath: "/images/dashboard/medium.png",
  },
];

const TrainerLocations = () => {
  const dispatch = useDispatch();
  const trainer = useSelector((state: any) => state.trainer);
  const [selectedOption, setSelectedOption] = useState<any>([]);

  const handleSelect = (id: string | number) => {
    const clonedSelectedOption = [...selectedOption];
    const index = clonedSelectedOption.indexOf(id);
    if (index > -1) {
      clonedSelectedOption.splice(index, 1);
    } else {
      clonedSelectedOption.push(id);
    }

    const selectedOptions = options.filter(
      (option) => clonedSelectedOption.indexOf(option.id) > -1
    );
    dispatch(change({ target: "locations", value: selectedOptions }));

    setSelectedOption([...clonedSelectedOption]);
  };

  useEffect(() => {
    const locations = trainer.locations?.map((item: OptionConfig) => item.id) || [];
    setSelectedOption([...selectedOption, ...locations]);
  }, []);

  return (
    <div className="grid gap-[70px]">
      <WizardHeader
        name="Trainer Gym Location"
        description="Which gym in this trainer’s primary location?"
        hrefLeft="./specialty"
        hrefRight="./review"
        disableRight={selectedOption.length === 0}
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

export default TrainerLocations;
