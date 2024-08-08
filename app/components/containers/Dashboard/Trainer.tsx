"use client";

import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Button from "../../shared/Button";

const Trainer = () => {
  const gyms = useSelector((state: any) => state.gym.gyms);

  return (
    <div className="bg-black rounded-sm shadow-center p-6">
      <div className="font-rubik font-bold text-2xl pb-4 border-b border-b-white">
        Step 2: Add Trainer
      </div>
      <div className="grid py-6 font-jost text-base">
        <p className="mb-10">
          Add your trainers to pair up with your clients. Update your roster by
          adding individuals, or bulk-importing a CSV document with the
          following details:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>First and Last Name, Billing Address, Email, Phone Number</li>
          <li>Specialty (HIIT, yoga, strength training, etc.)</li>
        </ul>
        <div className="flex justify-center gap-14">
          <Button
            color="warning"
            variant="outlined"
            disabled={gyms.length === 0}
          >
            Import Trainers
          </Button>
          <Button
            color="warning"
            href="/dashboard/trainers/create/contact"
            disabled={gyms.length === 0}
          >
            <div className="flex items-center gap-2">
              <Image
                src="/plus-black.png"
                width={14}
                height={14}
                alt="Add Trainers"
              />
              <span>Add Trainers</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
