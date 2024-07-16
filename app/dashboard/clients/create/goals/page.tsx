/*Interface to add a new trainer to an account*/
"use client";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/app/store/features/client/clientSlice";
import TextField from "@/app/components/shared/TextField";
import Select, { SelectOption } from "@/app/components/shared/Select";
import WizardHeader from "@/app/components/shared/WizardHeader";

const ClientGoals = () => {
  const dispatch = useDispatch();
  const client = useSelector((state: any) => state.client);

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(change({ target: e.target.name, value: e.target.value }));
  };

  const handleSelect = (option: any, target: string) => {
    dispatch(change({ target: [target], value: option.value }));
  };

  const types: SelectOption[] = [
    { value: 1, label: "Active" },
    { value: 2, label: "In Active" },
  ];

  const locations: SelectOption[] = [
    { value: 1, label: "Queens Location" },
    { value: 2, label: "Queens Location1" },
  ];

  const durations: SelectOption[] = [
    { value: 1, label: "Amanda Moore" },
    { value: 2, label: "Billy Smith" },
  ];

  return (
    <div className="grid gap-7">
      <WizardHeader
        name="Client Goals"
        description="What are the key improvements that the client would like to see?"
        hrefLeft="./contact"
        hrefRight="./locations"
        disableRight={
          client.primary_goal_type === "" ||
          client.primary_goal_meeting_frequency === "" ||
          client.primary_goal_program_duration === ""
        }
      />
      <div className="grid grid-cols-2 gap-11 items-start">
        <div className="w-full shadow-sm rounded-sm bg-black">
          <div className="font-rubik text-[28px] leading-[48px] px-[46px] py-3.5 border-b border-b-white">
            Primary Goal
          </div>
          <div className="grid gap-6 px-6 py-4">
            <Select
              label="Type"
              value={client.primary_goal_type}
              onChange={(option: SelectOption) => handleSelect(option, "primary_goal_type")}
              options={types}
            />
            <Select
              label="Meeting Frequency"
              value={client.primary_goal_meeting_frequency}
              onChange={(option: SelectOption) =>
                handleSelect(option, "primary_goal_meeting_frequency")
              }
              options={locations}
            />
            <TextField
              type="date"
              label="Program Duration"
              id="primary_goal_program_duration"
              name="primary_goal_program_duration"
              value={client.primary_goal_program_duration}
              onChange={handleChange}
            />
            <TextField
              label="Details"
              id="primary_goal_details"
              name="primary_goal_details"
              value={client.primary_goal_details}
              onChange={handleChange}
              multiple
            />
          </div>
        </div>
        <div className="w-full shadow-sm rounded-sm bg-black">
          <div className="font-rubik text-[28px] leading-[48px] px-[46px] py-3.5 border-b border-b-white">
            Secondary Goal (Optional)
          </div>
          <div className="grid gap-6 px-6 py-4">
          <Select
              label="Type"
              value={client.secondary_goal_type}
              onChange={(option: SelectOption) => handleSelect(option, "secondary_goal_type")}
              options={types}
            />
            <Select
              label="Meeting Frequency"
              value={client.secondary_goal_meeting_frequency}
              onChange={(option: SelectOption) =>
                handleSelect(option, "secondary_goal_meeting_frequency")
              }
              options={locations}
            />
            <TextField
              type="date"
              label="Program Duration"
              id="secondary_goal_program_duration"
              name="secondary_goal_program_duration"
              value={client.secondary_goal_program_duration}
              onChange={handleChange}
            />
            <TextField
              label="Details"
              id="secondary_goal_details"
              name="secondary_goal_details"
              value={client.secondary_goal_details}
              onChange={handleChange}
              multiple
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientGoals;
