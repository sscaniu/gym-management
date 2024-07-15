import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/shared/Button";
import Select from "@/app/components/shared/Select";
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

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleToggleEdit = () => setEditMode(!editMode);

  return (
    <div className="w-full bg-black shadow-sm rounded-sm p-6 pb-9">
      <div className="flex items-center justify-between pb-4 border-b border-b-white">
        <h2 className="font-rubik font-bold text-2xl">
          Secondary Goal
        </h2>
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
                id="type"
                name="type"
                value={info.type}
                onChange={handleChange}
                options={["Active", "In Active"]}
                size="md"
              />
              <Select
                label="Meeting Frequency"
                id="meeting_frequency"
                name="meeting_frequency"
                value={info.meeting_frequency}
                onChange={handleChange}
                options={["Queens Location", "Queens Location 1"]}
                size="md"
              />
              <Select
                label="Program Duration"
                id="program_duration"
                name="program_duration"
                value={info.program_duration}
                onChange={handleChange}
                options={["Amanda Moore", "Billy Smith"]}
                size="md"
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
