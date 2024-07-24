"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/app/store/features/gym/gymSlice";
import CardSelect, { OptionConfig } from "@/app/components/shared/CardSelect";
import WizardHeader from "@/app/components/shared/WizardHeader";

const options: OptionConfig[] = [
  {
    id: "fitness",
    name: "General Fitness",
    description: "Traditional gym with weights, and exercise machines.",
    iconPath: "/images/dashboard/fitness.png",
  },
  {
    id: "crossfit",
    name: "Crossfit",
    description: "High intensity workouts like, HIIT, tabata, and boxing. ",
    iconPath: "/images/dashboard/crossfit.png",
  },
  {
    id: "yoga",
    name: "Yoga",
    description: "Exercises that balance the mind and body. ",
    iconPath: "/images/dashboard/yoga.png",
  },
  {
    id: "other",
    name: "Other",
    description: "Your gym provides another kind of fitness program.",
    iconPath: "/images/dashboard/other.png",
  },
];

const GymSpecialty = () => {
  const dispatch = useDispatch();
  const gym = useSelector((state: any) => state.gym);
  const [selectedOptions, setSelectedOptions] = useState<any>([]);

  useEffect(() => {
    const filteredOptions = options.filter(
      (option) => selectedOptions.indexOf(option.id) > -1
    );
    dispatch(change({ target: "specialty", value: filteredOptions }));
  }, [selectedOptions]);

  useEffect(() => {
    const specialty = gym.specialty?.map((item: OptionConfig) => item.id) || [];
    setSelectedOptions([...selectedOptions, ...specialty]);
  }, []);

  return (
    <div className="w-full max-w-7xl px-9 py-10 mx-auto">
      <div className="grid gap-[70px]">
        <WizardHeader
          name="Gym Specialty"
          description="Which of the following choices best describes this gym’s fitness program?"
          hrefLeft="./staffsize"
          hrefRight="./review"
          disableRight={selectedOptions.length === 0}
        />
        <CardSelect
          options={options}
          active={selectedOptions}
          onSelect={setSelectedOptions}
          multiple
        />
      </div>
    </div>
  );
};

export default GymSpecialty;
