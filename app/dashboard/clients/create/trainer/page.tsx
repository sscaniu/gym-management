"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/app/store/features/client/clientSlice";
import WizardHeader from "@/app/components/shared/WizardHeader";

interface Option {
  id: string | number;
  name: string;
  description: string;
  iconPath: string;
  gym: string;
  trainingCount: number;
}

const options: Option[] = [
  {
    id: "1",
    name: "Amanda Moore",
    description: "Yoga Trainer",
    iconPath: "/images/dashboard/trainers/1.png",
    gym: "Queen’s Gym",
    trainingCount: 3,
  },
  {
    id: "2",
    name: "Brent Bonds",
    description: "General Trainer",
    iconPath: "/images/dashboard/trainers/2.png",
    gym: "Queen’s Gym",
    trainingCount: 3,
  },
  {
    id: "3",
    name: "Claire McKinney",
    description: "Yoga Trainer",
    iconPath: "/images/dashboard/trainers/3.png",
    gym: "Queen’s Gym",
    trainingCount: 3,
  },
];

const ClientTrainer = () => {
  const dispatch = useDispatch();
  const client = useSelector((state: any) => state.client.client);

  const [selectedOption, setSelectedOption] = useState<any>();

  useEffect(() => {
    const option = options.filter(
      (item: Option) => item.id === selectedOption
    )[0];
    dispatch(change({ target: "trainer", value: option }));
  }, [selectedOption]);

  useEffect(() => {
    setSelectedOption(client.trainer?.id || null);
  }, []);

  return (
    <div className="w-full max-w-7xl px-9 py-10 mx-auto">
      <div className="grid gap-[70px]">
        <WizardHeader
          name="Select Trainer"
          description="Which trainer would be the best match for this client?"
          hrefLeft="./locations"
          hrefRight="./review"
          disableRight={!selectedOption}
        />
        <div className="flex gap-[52px]">
          {options.map((option: Option) => (
            <div key={option.id} className="w-full min-h-[348px]">
              <div
                className={`h-full flex flex-col items-center gap-4 rounded-sm shadow-sm bg-black p-5 pb-7 cursor-pointer border-[5px] ${
                  selectedOption === option.id
                    ? `border-warning`
                    : `border-black`
                } hover:border-warning`}
                onClick={() => setSelectedOption(option.id)}
              >
                <Image
                  src={option.iconPath}
                  width={150}
                  height={150}
                  alt={option.description}
                  className={"mx-auto flex-shrik-0 rounded-full"}
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-rubik font-bold text-2xl text-center">
                    {option.name}
                  </h3>
                  <p className="font-jost font-semibold text-base text-center">
                    {option.description}
                  </p>
                </div>
                <div className="w-full flex gap-7">
                  <div className="w-full flex flex-col items-center gap-2 bg-[#131722] p-2 rounded-[15px]">
                    <Image
                      src="/location.png"
                      width={20}
                      height={20}
                      alt={option.gym}
                    />
                    <span className="font-jost font-semibold text-base">
                      {option.gym}
                    </span>
                  </div>
                  <div className="w-full flex flex-col items-center gap-2 bg-[#131722] p-2 rounded-[15px]">
                    <Image
                      src="/man.png"
                      width={20}
                      height={20}
                      alt="Training"
                    />
                    <span className="font-jost font-semibold text-base">
                      Training {option.trainingCount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTrainer;
