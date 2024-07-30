"use client";

import React, { useState } from "react";
import Button from "@/app/components/shared/Button";
import Image from "next/image";
import Tabs from "@/app/components/shared/Tabs";
import Profile from "@/app/components/containers/Clients/Profile";
import Goals from "@/app/components/containers/Clients/Goals";
import Messages from "@/app/components/containers/Clients/Messages";

import Modal from "@/app/components/shared/Modal";
import Notes from "@/app/components/containers/Clients/Notes";
import Calendar from "@/app/components/containers/Clients/Calendar";

const Client = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string | number>("profile");
  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "goals", label: "Goals" },
    { id: "messages", label: "Messages" },
    { id: "notes", label: "Notes" },
    { id: "calendar", label: "Client Calendar" },
  ];

  const handleClose = () => setIsOpen(false);

  return (
    <div className="w-full max-w-7xl px-9 py-10 mx-auto">
      <div className="grid gap-8">
        <div className="grid gap-5">
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <h2 className="font-rubik font-bold text-4xl">
                Alexander Doukas
              </h2>
              <Button
                color="danger"
                variant="link"
                onClick={() => setIsOpen(true)}
              >
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
            {selectedTab === "messages" && <Messages />}
            {selectedTab === "notes" && <Notes />}
            {selectedTab === "calendar" && <Calendar />}
          </div>
        </div>

        <Modal
          title="You are about to delete this account."
          open={isOpen}
          onClose={handleClose}
        >
          <div className="grid gap-10">
            <div className="font-rubik text-xl">
              By clicking “continue”, all data regarding this client’s account
              will be deleted permanently. Are you sure you want to continue?
            </div>
            <div className="flex justify-center gap-14">
              <Button
                className="w-[230px]"
                variant="outlined"
                color="white"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                className="w-[230px]"
                color="warning"
                onClick={handleClose}
              >
                Yes, Continue
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Client;
