import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/shared/Button";
import Select, { SelectOption } from "@/app/components/shared/Select";
import TextField from "@/app/components/shared/TextField";

interface ContactType {
  type: string;
  meeting_frequency: string;
  program_duration: string;
  details: string;
}

const PrimaryGoal = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [info, setInfo] = useState<ContactType>({
    type: "",
    meeting_frequency: "",
    program_duration: "",
    details: "",
  });

  const handleSelect = (option: any, target: string) => {
    setInfo({ ...info, [target]: option.label });
  };

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleToggleEdit = () => setEditMode(!editMode);
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
    <div className="w-full bg-black shadow-sm rounded-sm p-6 pb-9">
      <div className="flex items-center justify-between pb-4 border-b border-b-white">
        <h2 className="font-rubik font-bold text-2xl">Primary Goal</h2>
        {!editMode && (
          <Image
            src="/images/dashboard/pen.png"
            width={16}
            height={16}
            alt=""
            className="cursor-pointer"
            onClick={handleToggleEdit}
          />
        )}
      </div>
      <div className="grid gap-4 font-jost text-base pt-8">
        {!editMode ? (
          <>
            <p>
              <span className="font-bold">Type: </span>
              <span>{info.type}</span>
            </p>
            <p>
              <span className="font-bold">Meeting Frequency: </span>
              <span>{info.meeting_frequency}</span>
            </p>
            <p>
              <span className="font-bold">Duration: </span>
              <span>{info.program_duration}</span>
            </p>
            <p>
              <span className="font-bold">Details: </span>
              <span>{info.details}</span>
            </p>
          </>
        ) : (
          <div className="grid gap-12">
            <div className="grid gap-4">
              <Select
                label="Type"
                value={info.type}
                onChange={(option) => handleSelect(option, "type")}
                options={types}
              />
              <Select
                label="Meeting Frequency"
                value={info.meeting_frequency}
                onChange={(option) => handleSelect(option, "meeting_frequency")}
                options={locations}
              />
              <Select
                label="Program Duration"
                onChange={(option) => handleSelect(option, "meeting_frequency")}
                options={durations}
              />
              <TextField
                label="Details"
                id="details"
                name="details"
                value={info.details}
                onChange={handleChange}
                multiple
              />
            </div>
            <div className="flex gap-12">
              <Button
                color="warning"
                variant="outlined"
                fullWidth
                onClick={handleToggleEdit}
              >
                Cancel
              </Button>
              <Button color="warning" fullWidth onClick={handleToggleEdit}>
                Save
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrimaryGoal;
