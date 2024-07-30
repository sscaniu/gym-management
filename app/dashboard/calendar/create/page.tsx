"use client";

import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/shared/Button";
import TextField from "@/app/components/shared/TextField";
import Tabs, { TabType } from "@/app/components/shared/Tabs";
import Select from "@/app/components/shared/Select";
import Checkbox from "@/app/components/shared/Checkbox";

const tabs: TabType[] = [
  { id: "detail", label: "Event Details" },
  { id: "find", label: "Find a time" },
];

interface GuestType {
  firstname: string;
  lastname: string;
  phone: string;
}

const guests: GuestType[] = [
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
];

const CreateCalendar = () => {
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<string | number>("detail");

  return (
    <div className="w-full max-w-7xl grid gap-8 px-9 py-10 mx-auto">
      <Link href="/dashboard/clients/1">
        <button className="flex items-center gap-2 py-3 pr-10">
          <Image src="/back.png" width={24} height={24} alt="Back" />
          <span className="font-jost font-medium text-sm">Back</span>
        </button>
      </Link>
      <div>
        <div className="flex gap-14 mb-3.5">
          <div className="w-full">
            <div className="pb-4 border-b border-b-white">
              <div className="w-full max-w-[285px]">
                <TextField
                  value={title}
                  onChange={(
                    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => setTitle(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-[384px] flex-shrink-0">
            <div className="flex gap-7 justify-end">
              <Button className="w-[150px]" color="warning">
                Save
              </Button>
              <Button className="w-[150px]">More actions</Button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 mb-4">
          <div className="flex items-center gap-3">
            <TextField className="w-[170px]" />
            <TextField className="w-24" />
            <span className="font-jost font-medium text-base">to</span>
            <TextField className="w-24" />
            <TextField className="w-[170px]" />
          </div>
          <p className="font-jost font-medium text-base">
            (GMT-04:00) Eastern Time - New York Time Zone
          </p>
        </div>
        <div className="flex gap-14 mb-12">
          <div className="w-full flex items-center gap-3">
            <div className="p-3">
              <Checkbox label="All day" />
            </div>
            <Select options={[{ value: 1, label: "Weekly on Friday" }]} />
          </div>
          <div className="w-full max-w-[384px] flex-shrink-0 flex gap-8 items-center">
            <Select options={[{ value: 1, label: "RSVP: Yes" }]} />
            <span className="font-jost font-medium text-base">
              Add note / guests
            </span>
          </div>
        </div>
        <div className="flex gap-14 mb-12">
          <div className="w-full grid gap-14">
            <Tabs
              items={tabs}
              active={selectedTab}
              onChange={(e: string | number) => setSelectedTab(e)}
            />
            <div>
              <div className="flex gap-10 mb-20">
                <Button>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/user-plus.png"
                      width={24}
                      height={24}
                      alt="Send Invite"
                    />
                    <span>Send Invite</span>
                  </div>
                </Button>
                <Button>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/message-dark.png"
                      width={24}
                      height={24}
                      alt="Message Attendees"
                    />
                    <span>Message Attendees</span>
                  </div>
                </Button>
              </div>
              <div className="grid gap-6 mb-10">
                <div className="relative">
                  <Image
                    src="/location_on.png"
                    width={24}
                    height={24}
                    alt="location"
                    className="absolute top-1/2 -translate-y-1/2 -left-2.5 -translate-x-full"
                  />
                  <TextField
                    value={location}
                    onChange={(
                      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                    ) => setLocation(e.target.value)}
                    placeholder="Add location"
                  />
                </div>
                <div className="flex items-center gap-5 relative">
                  <Image
                    src="/bell.png"
                    width={24}
                    height={24}
                    alt="Email"
                    className="absolute top-1/2 -translate-y-1/2 -left-2.5 -translate-x-full"
                  />
                  <div className="w-56">
                    <Select options={[{ value: "email", label: "Email" }]} />
                  </div>
                  <div className="w-20">
                    <TextField />
                  </div>
                  <div className="w-56">
                    <Select options={[{ value: "min", label: "minutes" }]} />
                  </div>
                  <Image
                    src="/close.png"
                    width={24}
                    height={24}
                    alt="Close"
                    className="invert"
                  />
                </div>
                <div className="flex items-center gap-5 relative">
                  <div className="w-56">
                    <Select
                      options={[
                        { value: "notification", label: "Notification" },
                      ]}
                    />
                  </div>
                  <div className="w-20">
                    <TextField />
                  </div>
                  <div className="w-56">
                    <Select options={[{ value: "min", label: "minutes" }]} />
                  </div>
                  <Image
                    src="/close.png"
                    width={24}
                    height={24}
                    alt="Close"
                    className="invert"
                  />
                </div>
              </div>
              <div className="grid gap-5 mb-8">
                <p className="font-jost font-medium text-base">
                  Add notification
                </p>
                <div className="flex gap-5 items-center relative">
                  <Image
                    src="/event.png"
                    width={24}
                    height={24}
                    alt="Event"
                    className="absolute top-1/2 -translate-y-1/2 -left-2.5 -translate-x-full"
                  />
                  <span className="font-jost font-medium text-base">
                    Lance Goldberg
                  </span>
                  <div className="w-56">
                    <Select
                      options={[{ value: 1, label: "Default visibility" }]}
                    />
                  </div>
                </div>
                <div className="flex gap-5 items-center relative">
                  <Image
                    src="/work.png"
                    width={24}
                    height={24}
                    alt="Work"
                    className="absolute top-1/2 -translate-y-1/2 -left-2.5 -translate-x-full"
                  />
                  <div className="w-56">
                    <Select options={[{ value: "busy", label: "Busy" }]} />
                  </div>
                  <div className="w-56">
                    <Select
                      options={[{ value: 1, label: "Default visibility" }]}
                    />
                  </div>
                  <Image src="/help.png" width={24} height={24} alt="Help" />
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/list.png"
                  width={24}
                  height={24}
                  alt="details"
                  className="absolute top-5 -left-2.5 -translate-x-full"
                />
                <TextField
                  label="Details"
                  value={detail}
                  onChange={(
                    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => setDetail(e.target.value)}
                  placeholder="Lose about 20 to 30 lbs"
                  multiple
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-[384px] flex-shrink-0">
            <div className="mb-10">
              <TextField placeholder="Add guests" />
            </div>
            <div className="grid gap-4 mb-20">
              <div className="flex items-center justify-between">
                <span className="font-jost font-medium text-base">
                  5 guests
                </span>
                <Image src="/mail.png" width={24} height={24} alt="Guests" />
              </div>
              <div>
                {guests.map((guest: GuestType, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-black border border-white rounded-sm px-5 py-3 relative"
                  >
                    <div className="w-9 h-9 rounded-full font-ibm text-sm flex items-center justify-center bg-gradient-to-br from-[#42BFDD] to-[#FFCDB2]">
                      {guest.firstname[0]}
                      {guest.lastname[0]}
                    </div>
                    <div>
                      <p className="font-jost font-semibold text-xs uppercase">
                        {guest.firstname} {guest.lastname}
                      </p>
                      <p className="font-jost text-xs">{guest.phone}</p>
                    </div>
                    <Image
                      src="/dots.png"
                      width={24}
                      height={24}
                      alt="More"
                      className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <p className="font-jost font-semibold text-base uppercase">
                Guest permissions
              </p>
              <div>
                <div className="h-12 flex items-center">
                  <Checkbox label="Modify event" />
                </div>
                <div className="h-12 flex items-center">
                  <Checkbox label="Invite others" />
                </div>
                <div className="h-12 flex items-center">
                  <Checkbox label="See guest list" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCalendar;
