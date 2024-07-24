"use client";

import React, { FC, useState } from "react";
import Tabs, { TabType } from "@/app/components/shared/Tabs";

import GymRevenue from "@/app/components/containers/Billing/GymRevenue";
import Select, { SelectOption } from "@/app/components/shared/Select";
import DateRangePicker, {
  ValueProps,
} from "@/app/components/shared/DateRangePicker";
import Button from "@/app/components/shared/Button";
import IncomeType from "@/app/components/containers/Billing/IncomeType";
import TotalMembers from "@/app/components/containers/Billing/TotalMembers";
import TotalTrainers from "@/app/components/containers/Billing/TotalTrainers";
import Transactions from "@/app/components/containers/Billing/Transactions";
import CustomerAmount from "@/app/components/containers/Billing/CustomerAmount";

const tabs: TabType[] = [
  { id: "this_month", label: "This Month" },
  { id: "last_month", label: "Last Month" },
  { id: "this_year", label: "This Year" },
  { id: "custom", label: "Custom Range" },
];

const locations: SelectOption[] = [{ value: "all", label: "All Gyms" }];

const Billing: FC = () => {
  const [selectedTab, setSelectedTab] = useState<string | number>("custom");
  const [selectedLocations, setSelectedLocations] = useState<
    SelectOption | SelectOption[]
  >({
    value: "all",
    label: "All Gyms",
  });
  const [duration, setDuration] = useState<ValueProps>({
    from: null,
    to: null,
  });

  return (
    <div>
      <div className="bg-black">
        <div className="w-full max-w-7xl px-14 mx-auto">
          <h2 className="font-rubik font-bold text-5xl py-10">Billing</h2>
          <Tabs
            items={tabs}
            active={selectedTab}
            onChange={(tab: string | number) => setSelectedTab(tab)}
          />
        </div>
      </div>
      <div className="w-full max-w-7xl px-14 py-10 mx-auto">
        <div className="flex gap-6 items-end mb-10">
          <div className="w-full max-w-[266px]">
            <Select
              label="Location"
              options={locations}
              value={selectedLocations}
              onChange={(e: SelectOption | SelectOption[]) =>
                setSelectedLocations(e)
              }
              multiple
            />
          </div>
          <div className="w-full max-w-[320px]">
            <DateRangePicker
              label="Time Duration"
              onChange={(e: ValueProps) => setDuration(e)}
              value={duration}
            />
          </div>
          <Button className="w-[150px]" color="warning">
            Go
          </Button>
        </div>
        <div className="grid gap-6 mb-6">
          <div className="flex gap-6">
            <GymRevenue />
            <TotalMembers />
          </div>
          <div className="flex gap-6">
            <IncomeType />
            <TotalTrainers />
          </div>
        </div>
        <div className="mb-14">
          <CustomerAmount />
        </div>
        <Transactions />
      </div>
    </div>
  );
};

export default Billing;
