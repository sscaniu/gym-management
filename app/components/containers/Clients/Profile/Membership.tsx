import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/shared/Button";
import Select, { SelectOption } from "@/app/components/shared/Select";

interface ContactType {
  status: SelectOption | null;
  gym: SelectOption | null;
  trainer: SelectOption[] | null;
  contact_method: SelectOption | null;
}

const Membership = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [info, setInfo] = useState<ContactType>({
    status: null,
    gym: null,
    trainer: null,
    contact_method: null,
  });

  const handleSelect = (option: any, target: string) => {
    setInfo({ ...info, [target]: option });
  };

  const handleToggleEdit = () => setEditMode(!editMode);

  const states: SelectOption[] = [
    { value: 1, label: "Active" },
    { value: 2, label: "In Active" },
  ];

  const gyms: SelectOption[] = [
    { value: 1, label: "Queens Location" },
    { value: 2, label: "Queens Location1" },
  ];

  const trainers: SelectOption[] = [
    { value: 1, label: "Amanda Moore" },
    { value: 2, label: "Billy Smith" },
  ];

  const contactMethods: SelectOption[] = [
    { value: 1, label: "SMS" },
    { value: 2, label: "Slack" },
    { value: 3, label: "Whatsapp" },
  ];

  return (
    <div className="w-full bg-black shadow-sm rounded-sm p-6 pb-9">
      <div className="flex items-center justify-between pb-4 border-b border-b-white">
        <h2 className="font-rubik font-bold text-2xl">
          Membership Information
        </h2>
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
              <span className="font-bold">Status: </span>
              {info.status && <span>{info.status.label}</span>}
            </p>
            <p>
              <span className="font-bold">Preferred Gym: </span>
              {info.gym && <span>{info.gym.label}</span>}
            </p>
            <p>
              <span className="font-bold">Trainer: </span>
              {info.trainer && (
                <span>
                  {info.trainer.map((trainer) => trainer.label).join(", ")}
                </span>
              )}
            </p>
            <p>
              <span className="font-bold">Preferred Contact Method: </span>
              {info.contact_method && <span>{info.contact_method.label}</span>}
            </p>
          </>
        ) : (
          <div className="grid gap-12">
            <div className="grid gap-4">
              <Select
                label="Status"
                value={info.status}
                onChange={(e: SelectOption) => handleSelect(e, "status")}
                options={states}
              />
              <Select
                label="Preferred GYM"
                value={info.gym}
                onChange={(e: SelectOption) => handleSelect(e, "gym")}
                options={gyms}
              />
              <Select
                label="Trainer(s)"
                value={info.trainer}
                onChange={(e: SelectOption) => handleSelect(e, "trainer")}
                options={trainers}
                multiple
              />
              <Select
                label="preferred contact method"
                value={info.contact_method}
                onChange={(e: SelectOption) =>
                  handleSelect(e, "contact_method")
                }
                options={contactMethods}
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
