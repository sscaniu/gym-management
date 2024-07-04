"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/app/store/features/gym/gymSlice";
import CardSelect, { OptionConfig } from "@/app/components/shared/CardSelect";
import WizardHeader from "@/app/components/shared/WizardHeader";

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

const LocationSize = () => {
  const dispatch = useDispatch();
  const gym = useSelector((state: any) => state.gym);

  const [selectedOption, setSelectedOption] = useState<any>();


  useEffect(() => {
    const option = options.filter((item: OptionConfig) => item.id === selectedOption)[0];
    dispatch(change({ target: "locationSize", value: option }));
  }, [selectedOption])

  useEffect(() => {
    setSelectedOption(gym.locationSize?.id || null);
  }, []);

  return (
    <div className="grid gap-[70px]">
      <WizardHeader
        name="Location Size"
        description="Which of the following choices best describes this gym’s membership size?"
        hrefLeft="./address"
        disableRight={!selectedOption}
        hrefRight="./staffsize"
      />
      <CardSelect
        options={options}
        active={selectedOption}
        onSelect={setSelectedOption}
      />
    </div>
  );
};

export default LocationSize;
