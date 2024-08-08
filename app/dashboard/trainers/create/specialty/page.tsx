"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/app/store/features/trainer/trainerSlice";
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
    id: "pilates",
    name: "Pilates",
    description: "Exercises that can be performed on a mat or other equipment",
    iconPath: "/images/dashboard/pilates.png",
  },
  {
    id: "gymnastics",
    name: "Gymnastics",
    description:
      "Agility and coordination exercises includes Artistic, Acrobatics, Rhythmic, Etc.",
    iconPath: "/images/dashboard/gymnastics.png",
  },
  {
    id: "strongman",
    name: "Strongman",
    description:
      "High-intensity resistance training with functional movements patterns ",
    iconPath: "/images/dashboard/strongman.png",
  },
];

const TrainerSpecialty = () => {
  const dispatch = useDispatch();
  const trainer = useSelector((state: any) => state.trainer.trainer);
  const [selectedOptions, setSelectedOptions] = useState<any>([]);

  useEffect(() => {
    const filteredOptions = options.filter(
      (option) => selectedOptions.indexOf(option.id) > -1
    );
    dispatch(change({ target: "specialty", value: filteredOptions }));
  }, [selectedOptions]);

  useEffect(() => {
    const specialty =
      trainer.specialty?.map((item: OptionConfig) => item.id) || [];
    setSelectedOptions([...selectedOptions, ...specialty]);
  }, []);

  return (
    <div className="w-full max-w-7xl px-9 py-10 mx-auto">
      <div className="grid gap-[70px]">
        <WizardHeader
          name="Trainer Specialities"
          description="Which of the following choices best describes this trainer’s speciality?"
          hrefLeft="./contact"
          hrefRight="./locations"
          disableRight={selectedOptions.length === 0}
        />
        <CardSelect
          options={options}
          active={selectedOptions}
          onSelect={setSelectedOptions}
          max={2}
          multiple
        />
      </div>
    </div>
  );
};

export default TrainerSpecialty;
