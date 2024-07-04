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
  const [selectedOptions, setSelectedOptions] = useState<any>([]);

  useEffect(() => {
    const filteredOptions = options.filter(
      (option) => selectedOptions.indexOf(option.id) > -1
    );
    dispatch(change({ target: "locations", value: filteredOptions }));
  }, [selectedOptions]);

  useEffect(() => {
    const locations =
      trainer.locations?.map((item: OptionConfig) => item.id) || [];
    setSelectedOptions([...selectedOptions, ...locations]);
  }, []);

  return (
    <div className="grid gap-[70px]">
      <WizardHeader
        name="Trainer Gym Location"
        description="Which gym in this trainer’s primary location?"
        hrefLeft="./specialty"
        hrefRight="./review"
        disableRight={selectedOptions.length === 0}
      />
      <CardSelect
        options={options}
        active={selectedOptions}
        onSelect={setSelectedOptions}
        multiple
        max={2}
      />
    </div>
  );
};

export default TrainerLocations;
