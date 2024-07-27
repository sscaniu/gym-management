import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import moment from "moment";
import Button from "@/app/components/shared/Button";
import Select, { SelectOption } from "@/app/components/shared/Select";
import TextField from "@/app/components/shared/TextField";
import DateRangePicker, {
  ValueProps,
} from "@/app/components/shared/DateRangePicker";

interface ContactType {
  type: SelectOption | null;
  meeting_frequency: SelectOption | null;
  program_duration: ValueProps;
  details: string;
}

const SecondaryGoal = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [info, setInfo] = useState<ContactType>({
    type: null,
    meeting_frequency: null,
    program_duration: {
      from: null,
      to: null,
    },
    details: "",
  });

  const handleSelect = (option: any, target: string) => {
    setInfo({ ...info, [target]: option });
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

  return (
    <div className="w-full bg-black shadow-sm rounded-sm p-6 pb-9">
      <div className="flex items-center justify-between pb-4 border-b border-b-white">
        <h2 className="font-rubik font-bold text-2xl">Secondary Goal</h2>
        {!editMode && (
          <Image
            src="/images/dashboard/pen.png"
            width={24}
            height={24}
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
              {info.type && <span>{info.type.label}</span>}
            </p>
            <p>
              <span className="font-bold">Meeting Frequency: </span>
              {info.meeting_frequency && (
                <span>{info.meeting_frequency.label}</span>
              )}
            </p>
            <p>
              <span className="font-bold">Duration: </span>
              <span>
                {info.program_duration.from && (
                  <span>
                    {moment(info.program_duration.from).format("MMMM DD, YYYY")}{" "}
                    -{" "}
                  </span>
                )}
                {info.program_duration.to && (
                  <span>
                    {moment(info.program_duration.to).format("MMMM DD, YYYY")}
                  </span>
                )}
              </span>
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
              <DateRangePicker
                label="Program Duration"
                onChange={(e: ValueProps) =>
                  setInfo({ ...info, program_duration: { ...e } })
                }
                value={info.program_duration}
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

export default SecondaryGoal;
