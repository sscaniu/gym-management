"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/app/store/features/gym/gymSlice";
import CardSelect, { OptionConfig } from "@/app/components/shared/CardSelect";
import WizardHeader from "@/app/components/shared/WizardHeader";

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

const StaffSize = () => {
  const dispatch = useDispatch();
  const gym = useSelector((state: any) => state.gym.gym);
  const [selectedOption, setSelectedOption] = useState<any>();

  useEffect(() => {
    const option = options.filter(
      (item: OptionConfig) => item.id === selectedOption
    )[0];
    dispatch(change({ target: "staffSize", value: option }));
  }, [selectedOption]);

  useEffect(() => {
    setSelectedOption(gym.staffSize?.id || null);
  }, []);

  return (
    <div className="w-full max-w-7xl px-9 py-10 mx-auto">
      <div className="grid gap-12">
        <WizardHeader
          name="Staff Size"
          description="How many trainers work this gym location?"
          hrefLeft="./locationsize"
          hrefRight="./specialty"
          disableRight={!selectedOption}
        />
        <CardSelect
          options={options}
          active={selectedOption}
          onSelect={setSelectedOption}
        />
      </div>
    </div>
  );
};

export default StaffSize;
