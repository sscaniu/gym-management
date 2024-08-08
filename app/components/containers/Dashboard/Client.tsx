"use client";

import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Button from "../../shared/Button";

const Client = () => {
  const trainers = useSelector((state: any) => state.trainer.trainers);

  return (
    <div className="bg-black rounded-sm shadow-center p-6">
      <div className="font-rubik font-bold text-2xl pb-4 border-b border-b-white">
        Step 3: Add Clients
      </div>
      <div className="grid py-6 font-jost text-base">
        <p className="mb-10">
          Update your client roster by adding clients individually, or
          bulk-importing a CSV document with the following details:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>First and Last Name, Billing Address, Email, Phone Number</li>
          <li>Specialty (HIIT, yoga, strength training, etc.)</li>
        </ul>
        <div className="flex justify-center gap-14">
          <Button
            color="warning"
            variant="outlined"
            disabled={trainers.length === 0}
          >
            Import Clients
          </Button>
          <Button
            color="warning"
            disabled={trainers.length === 0}
            href="/dashboard/clients/create/contact"
          >
            <div className="flex items-center gap-2">
              <Image
                src="/plus-black.png"
                width={14}
                height={14}
                alt="Add Client"
              />
              <span>Add Client</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Client;
