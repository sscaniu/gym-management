"use client";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import moment from "moment";
import Toggle from "@/app/components/shared/Toggle";
import Image from "next/image";
import Search from "@/app/components/shared/Search";
import DataTable, { Col } from "@/app/components/shared/DataTable";
import Button from "@/app/components/shared/Button";
import ActionButton from "@/app/components/shared/ActionButton";

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  trainer: string | null;
  last_session: string;
}

const Clients = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const cols = [
    { id: "name", label: "Name", sortable: true },
    { id: "email", label: "Email", sortable: true },
    { id: "phone", label: "Phone number", sortable: true },
    { id: "location", label: "Location", searchable: true },
    { id: "trainer", label: "Trainer", searchable: true },
    { id: "last_session", label: "Last Session", sortable: true },
    { id: "action", label: "" },
  ];

  const rows: Client[] = [
    {
      id: 1,
      name: "Suji Muse",
      email: "smuse@gmail.com",
      phone: "+1(914) 222-1213",
      location: "Brooklyn’s Studio",
      trainer: null,
      last_session: "10/03/2023 11:30 AM",
    },
    {
      id: 2,
      name: "Amber McKee",
      email: "amkee@gmail.com",
      phone: "+1(929) 985-2322",
      location: "Brooklyn’s Studio",
      trainer: "Amanda Moore",
      last_session: "10/03/2023 09:30 AM",
    },
    {
      id: 3,
      name: "Brent  Coral",
      email: "br.coral@gmail.com",
      phone: "+1(646) 222-2622",
      location: "Queen’s Gym",
      trainer: "Amanda Moore",
      last_session: "10/04/2023 11:45 PM",
    },
    {
      id: 4,
      name: "Kelly Lee",
      email: "kelly.lee@gmail.com",
      phone: "+1(202) 222-2222",
      location: "Queen’s Gym",
      trainer: null,
      last_session: "10/05/2023 03:00 PM",
    },
    {
      id: 5,
      name: "June Parker",
      email: "june.walk@gmail.com",
      phone: "+1(916) 222-2222",
      location: "Brooklyn’s Studio",
      trainer: "Amanda Moore",
      last_session: "10/05/2023 11:43 AM",
    },
    {
      id: 6,
      name: "Tanner Miller",
      email: "t.miller@gmail.com",
      phone: "+1(916) 222-2222",
      location: "Queen’s Gym",
      trainer: "Kristi Bonds",
      last_session: "10/05/2023 04:43 PM",
    },
    {
      id: 7,
      name: "Von Smith",
      email: "v.smith@gmail.com",
      phone: "+1(916) 222-2222",
      location: "Queen’s Gym",
      trainer: null,
      last_session: "10/03/2023 05:00 PM",
    },
    {
      id: 8,
      name: "Sammy Ranger",
      email: "sammy0182@email.com",
      phone: "+1(916) 222-2222",
      location: "Brooklyn’s Studio",
      trainer: "Amanda Moore",
      last_session: "10/03/2023 05:00 PM",
    },
    {
      id: 9,
      name: "Walker Tejas",
      email: "walkertejas@email.com",
      phone: "+1(916) 222-2222",
      location: "Queen’s Gym",
      trainer: "Kristi Bonds",
      last_session: "10/06/2023 08:00 AM",
    },
    {
      id: 10,
      name: "Sammy Ranger",
      email: "sammy0182@email.com",
      phone: "+1(916) 222-2222",
      location: "Brooklyn’s Studio",
      trainer: "Amanda Moore",
      last_session: "10/03/2023 05:00 PM",
    },
    {
      id: 11,
      name: "Sammy Ranger",
      email: "sammy0182@email.com",
      phone: "+1(916) 222-2222",
      location: "Brooklyn’s Studio",
      trainer: "Amanda Moore",
      last_session: "10/03/2023 05:00 PM",
    },
    {
      id: 12,
      name: "Walker Tejas",
      email: "walkertejas@email.com",
      phone: "+1(916) 222-2222",
      location: "Queen’s Gym",
      trainer: "Kristi Bonds",
      last_session: "10/06/2023 08:00 AM",
    },
    {
      id: 13,
      name: "Sammy Ranger",
      email: "sammy0182@email.com",
      phone: "+1(916) 222-2222",
      location: "Brooklyn’s Studio",
      trainer: "Amanda Moore",
      last_session: "10/03/2023 05:00 PM",
    },
  ];

  const renderRow = (row: Client) => {
    return (
      <>
        <Col>{row.name}</Col>
        <Col>{row.email}</Col>
        <Col>{row.phone}</Col>
        <Col>{row.location}</Col>
        <Col>{row.trainer || "Unassigned"}</Col>
        <Col>
          <div className="grid">
            <span className="leading-none">
              {moment(row.last_session).format("MM/DD/YYYY")}
            </span>
            <span className="text-xs leading-none">
              {moment(row.last_session).format("hh:mm A")}
            </span>
          </div>
        </Col>
        <Col>
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="outlined"
              color="white"
              href={`/dashboard/clients/${row.id}`}
            >
              Profile
            </Button>
            <Image
              src="/dots.png"
              width={24}
              height={24}
              alt="More actions"
              className="cursor-pointer"
            />
          </div>
        </Col>
      </>
    );
  };

  return (
    <div className="w-full max-w-7xl px-9 py-10 mx-auto">
      <div className="grid gap-5">
        <div className="grid gap-4">
          <h2 className="font-rubik font-bold text-4xl">Manage Client</h2>
          <div className="flex items-center justify-between">
            <Toggle
              label="Show Unassigned Only"
              value={checked}
              onClick={() => setChecked(!checked)}
            />
            <div className="flex items-center gap-5">
              <div className="flex flex-shrink-0 gap-2.5">
                <ActionButton icon="/alternate.png">Send Email</ActionButton>
                <ActionButton icon="/phone.png">Send SMS</ActionButton>
                <ActionButton icon="/message.png">Send Slack</ActionButton>
                <ActionButton
                  icon="/plus.png"
                  onClick={() =>
                    router.push("/dashboard/clients/create/contact")
                  }
                >
                  Add client
                </ActionButton>
              </div>
              <Search
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <DataTable
          cols={cols}
          rows={rows.filter((row: Client) =>
            checked ? row.trainer === null : true
          )}
          renderRow={renderRow}
          pagination
        />
      </div>
    </div>
  );
};

export default Clients;
