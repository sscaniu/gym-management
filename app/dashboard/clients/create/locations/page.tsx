"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/app/store/features/client/clientSlice";
import CardSelect, { OptionConfig } from "@/app/components/shared/CardSelect";
import WizardHeader from "@/app/components/shared/WizardHeader";

const options: OptionConfig[] = [
  {
    id: "1",
    name: "Brooklyn Gym",
    description: "132 Stuyvesant Ave Brooklyn, NY 11221",
    iconPath: "/images/dashboard/small.png",
  },
  {
    id: "2",
    name: "Brooklyn Gym",
    description: "132 Stuyvesant Ave Brooklyn, NY 11221",
    iconPath: "/images/dashboard/small.png",
  },
];

const ClientLocations = () => {
  const dispatch = useDispatch();
  const client = useSelector((state: any) => state.client);
  const [selectedOptions, setSelectedOptions] = useState<any>([]);

  useEffect(() => {
    const filteredOptions = options.filter(
      (option) => selectedOptions.indexOf(option.id) > -1
    );
    dispatch(change({ target: "locations", value: filteredOptions }));
  }, [selectedOptions]);

  useEffect(() => {
    const locations =
      client.locations?.map((item: OptionConfig) => item.id) || [];
    setSelectedOptions([...selectedOptions, ...locations]);
  }, []);

  return (
    <div className="w-full max-w-7xl px-9 py-10 mx-auto">
      <div className="grid gap-[70px]">
        <WizardHeader
          name="Gym Client Location"
          description="Which gym in this client’s primary location?"
          hrefLeft="./goals"
          hrefRight="./trainer"
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
    </div>
  );
};

export default ClientLocations;
