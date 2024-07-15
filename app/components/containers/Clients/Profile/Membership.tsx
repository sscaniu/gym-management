import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/shared/Button";
import Select from "@/app/components/shared/Select";

interface ContactType {
  status: string;
  gym: string;
  trainer: string;
  contact_method: string;
}

const Membership = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [info, setInfo] = useState<ContactType>({
    status: "",
    gym: "",
    trainer: "",
    contact_method: "",
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
          Membership Information
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
              <span className="font-bold">Status: </span>
              <span>{info.status}</span>
            </p>
            <p>
              <span className="font-bold">Preferred Gym: </span>
              <span>{info.gym}</span>
            </p>
            <p>
              <span className="font-bold">Trainer: </span>
              <span>{info.trainer}</span>
            </p>
            <p>
              <span className="font-bold">Preferred Contact Method: </span>
              <span>{info.contact_method}</span>
            </p>
          </>
        ) : (
          <div className="grid gap-12">
            <div className="grid gap-4">
              <Select
                label="Status"
                id="status"
                name="status"
                value={info.status}
                onChange={handleChange}
                options={["Active", "In Active"]}
                size="md"
              />
              <Select
                label="Preferred GYM"
                id="gym"
                name="gym"
                value={info.gym}
                onChange={handleChange}
                options={["Queens Location", "Queens Location 1"]}
                size="md"
              />
              <Select
                label="Trainer(s)"
                id="trainer"
                name="trainer"
                value={info.trainer}
                onChange={handleChange}
                options={["Amanda Moore", "Billy Smith"]}
                size="md"
              />
              <Select
                label="preferred contact method"
                id="contact_method"
                name="contact_method"
                value={info.contact_method}
                onChange={handleChange}
                options={["SMS", "Slack", "Whatsapp"]}
                size="md"
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

export default Membership;
