"use client";

import React, { useState } from "react";
import Button from "@/app/components/shared/Button";
import Image from "next/image";
import Tabs from "@/app/components/shared/Tabs";
import Profile from "@/app/components/containers/Clients/Profile";
import Goals from "@/app/components/containers/Clients/Goals";

const Client = () => {
  const [selectedTab, setSelectedTab] = useState<string | number>("profile");
  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "goals", label: "Goals" },
    { id: "messages", label: "Messages" },
    { id: "notes", label: "Notes" },
    { id: "calendar", label: "Client Calendar" },
  ];

  return (
    <div className="grid gap-8">
      <div className="grid gap-5">
        <div className="grid gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-rubik font-bold text-4xl">Alexander Doukas</h2>
            <Button color="danger" variant="link">
              <div className="flex items-center gap-2">
                <Image src="/trash.png" width={24} height={24} alt="Trash" />
                <span>Delete Client</span>
              </div>
            </Button>
          </div>
          <div className="grid gap-1 font-jost text-base text-white">
            <span>Member Since: 19 February 2023</span>
            <span>Customer Value: $2,000</span>
          </div>
        </div>
      </div>
      <div className="grid gap-10">
        <Tabs
          active={selectedTab}
          items={tabs}
          onChange={(tab: string | number) => setSelectedTab(tab)}
        />
        <div>
          {selectedTab === "profile" && <Profile />}
          {selectedTab === "goals" && <Goals />}
        </div>
      </div>
    </div>
  );
};

export default Client;
