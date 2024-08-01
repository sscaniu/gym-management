"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/shared/Button";
import TextField from "@/app/components/shared/TextField";
import Select from "@/app/components/shared/Select";
import Checkbox from "@/app/components/shared/Checkbox";
import TextEditor from "@/app/components/shared/TextEditor";
import Dropdown from "@/app/components/shared/Dropdown";
import TimeSelector from "@/app/components/shared/TimeSelector";
import DatePicker from "@/app/components/shared/DatePicker";
import DeleteEventModal from "@/app/components/containers/Calendar/DeleteEventModal";
import DeleteClientAttendantModal from "@/app/components/containers/Calendar/DeleteClientAttendantModal";
import SendAttendantsModal from "@/app/components/containers/Calendar/SendAttendantsModal";
import ActionButton from "@/app/components/shared/ActionButton";

interface clientType {
  firstname: string;
  lastname: string;
  phone: string;
}

const EditCalendar = () => {
  const [title, setTitle] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [detail, setDetail] = useState<string>("");
  const [isOpenDeleteEventModal, setIsOpenDeleteEventModal] =
    useState<boolean>(false);
  const [
    isOpenDeleteClientAttendantModal,
    setIsOpenDeleteClientAttendantModal,
  ] = useState<boolean>(false);
  const [isSendAttendantsModal, setIsSendAttendantsModal] =
    useState<boolean>(false);
  const [clients, setClients] = useState<clientType[]>([
    {
      firstname: "Lance",
      lastname: "Goldberg",
      phone: "+1 (555) 555 - 5555",
    },
    {
      firstname: "AAron",
      lastname: "Franklin",
      phone: "+1 (555) 555 - 5555",
    },
    {
      firstname: "Ben",
      lastname: "KNight",
      phone: "+1 (555) 555 - 5555",
    },
    {
      firstname: "Gordan",
      lastname: "Anderson",
      phone: "+1 (555) 555 - 5555",
    },
    {
      firstname: "Sarai",
      lastname: "Moss",
      phone: "+1 (555) 555 - 5555",
    },
  ]);

  return (
    <>
      <div className="w-full max-w-7xl grid gap-4 px-9 py-10 mx-auto">
        <Link href="/dashboard/clients/1?tab=calendar">
          <button className="flex items-center gap-2 py-3 pr-10">
            <Image src="/back.png" width={24} height={24} alt="Back" />
            <span className="font-jost font-medium text-sm">Back</span>
          </button>
        </Link>
        <div className="flex gap-6 mb-2">
          <div className="w-full grid gap-6 bg-[#1F2437] shadow-center rounded-sm p-6">
            <TextField
              label="Title"
              value={title}
              size="lg"
              onChange={(e) => setTitle(e.target.value)}
              className="bg-table-odd"
            />
            <div className="flex items-end">
              <div className="flex-grow z-50">
                <DatePicker
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e)}
                  label="Date"
                  size="lg"
                  className="bg-table-odd"
                />
              </div>
              <span className="w-8 h-8 font-jost font-semibold text-base flex justify-center items-center mb-3">
                :
              </span>
              <div className="w-[188px]">
                <TimeSelector
                  label="Start Time"
                  size="lg"
                  className="!bg-table-odd"
                />
              </div>
              <span className="w-10 h-8 font-jost font-semibold text-base uppercase flex justify-center items-center mb-3">
                To
              </span>
              <div className="w-[188px]">
                <TimeSelector
                  label="End Time"
                  size="lg"
                  className="!bg-table-odd"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-full flex items-end gap-2">
                <div className="w-full max-w-[280px]">
                  <Select
                    label="Meeting frequency"
                    className="!bg-table-odd"
                    options={[{ value: 1, label: "Weekly on Fridays" }]}
                  />
                </div>
                <div className="px-3 py-4">
                  <Checkbox label="All day" />
                </div>
              </div>
              <div className="w-full flex-shrink-0 max-w-[280px]">
                <Select
                  label="Location (Optional)"
                  className="!bg-table-odd"
                  options={[{ value: 1, label: "Brooklyn Gym" }]}
                />
              </div>
            </div>
            <TextEditor
              label="Details"
              value={detail}
              onChange={(e) => setDetail(e)}
            />
            <div className="w-full max-w-[363px]">
              <Select
                label="Workout Type"
                className="!bg-table-odd"
                options={[{ value: 1, label: "Endurance" }]}
              />
            </div>
          </div>
          <div className="w-full max-w-[363px] flex flex-col justify-between flex-shrink-0 bg-[#1F2437] shadow-center rounded-sm p-6">
            <div className="grid gap-6">
              <Select
                label="Trainer"
                className="!bg-table-odd"
                options={[{ value: 1, label: "Parker Ko" }]}
              />
              <TextField
                label="Add Client"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="bg-table-odd"
              />
              <div>
                <p className="font-jost text-xs font-semibold uppercase mb-1.5">
                  [{clients.length}] Clients Attendant
                </p>
                <div>
                  {clients.map((client: clientType, i: number) => (
                    <div
                      key={i}
                      className="h-12 flex items-center gap-3 justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full font-ibm text-sm flex items-center justify-center bg-table-odd">
                          {client.firstname[0]}
                          {client.lastname[0]}
                        </div>
                        <div>
                          <p className="font-jost font-semibold text-xs uppercase">
                            {client.firstname} {client.lastname}
                          </p>
                          <p className="font-jost text-xs">{client.phone}</p>
                        </div>
                      </div>
                      <Dropdown
                        onDelete={() =>
                          setIsOpenDeleteClientAttendantModal(true)
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <ActionButton
                icon="/message.png"
                onClick={() => setIsSendAttendantsModal(true)}
              >
                Send Attendants
              </ActionButton>
            </div>
          </div>
        </div>
        <div className="flex justify-between bg-[#1F2437] shadow-center rounded-sm px-4 py-6">
          <Button
            className="flex items-center gap-2"
            variant="link"
            color="danger"
            onClick={() => setIsOpenDeleteEventModal(true)}
          >
            <Image src="/trash.png" width={24} height={24} alt="Delete" />
            Delete
          </Button>
          <div className="flex gap-4">
            <Button className="w-40" variant="outlined" color="white">
              Cancel
            </Button>
            <Button className="w-40" color="warning">
              Save
            </Button>
          </div>
        </div>
      </div>

      <DeleteEventModal
        open={isOpenDeleteEventModal}
        onClose={() => setIsOpenDeleteEventModal(false)}
      />
      <DeleteClientAttendantModal
        open={isOpenDeleteClientAttendantModal}
        onClose={() => setIsOpenDeleteClientAttendantModal(false)}
      />
      <SendAttendantsModal
        open={isSendAttendantsModal}
        onClose={() => setIsSendAttendantsModal(false)}
      />
    </>
  );
};

export default EditCalendar;
