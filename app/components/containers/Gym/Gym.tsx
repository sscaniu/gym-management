"use client";

import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Button from "../../shared/Button";
import Link from "next/link";

const Gym = () => {
  const gyms = useSelector((state: any) => state.gym.gyms);

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex-grow h-full">
        {gyms.length > 0 ? (
          <div className="h-full bg-black rounded-sm shadow-center p-6">
            <div className="flex items-center justify-between pb-4 border-b border-b-white">
              <span className="font-rubik font-bold text-2xl">
                {gyms[0].name}
              </span>
              <Link
                className="flex items-center gap-2"
                href="/dashboard/gym/create/address"
              >
                <Image
                  src="/images/dashboard/pen.png"
                  width={24}
                  height={24}
                  alt="edit"
                />
                <span className="font-jost text-base">Edit Gym</span>
              </Link>
            </div>
            <div className="grid gap-[76px] py-6 font-jost text-base">
              <ul className="grid gap-4">
                <li className="flex items-center gap-2">
                  <Image src="/gym.png" width={24} height={24} alt="Trainers" />
                  <span>
                    {gyms[0].specialty
                      ?.map((item: any) => item.name)
                      .join(", ")}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="/gym-location.png"
                    width={24}
                    height={24}
                    alt="Trainers"
                  />
                  <span>{gyms[0].address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="/gym-trainer.png"
                    width={24}
                    height={24}
                    alt="Trainers"
                  />
                  <span>1/12 Trainers</span>
                </li>
              </ul>
              <div className="flex">
                <Button color="warning">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/plus-black.png"
                      width={14}
                      height={14}
                      alt="Add New Admin"
                    />
                    <span>Add New Admin</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full bg-black rounded-sm shadow-center p-6">
            <div className="font-rubik font-bold text-2xl pb-4 border-b border-b-white">
              Step 1: Add Your Gym
            </div>
            <div className="grid py-6 font-jost text-base">
              <p className="mb-10">
                Add your gym’s details to complete account setup. This should
                only take a few minutes. To expedite this process, have the
                following details ready.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>Gym Name, Address, Contact Info</li>
                <li>Trainer Roster (optional)</li>
                <li>Client Roster (optional)</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <Button
        color="warning"
        variant="outlined"
        className="bg-black flex-shrink-0"
        href="/dashboard/gym/create/address"
      >
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/plus-warning.png"
            width={24}
            height={24}
            alt="Add New Gym"
          />
          <span>Add New Gym</span>
        </div>
      </Button>
    </div>
  );
};

export default Gym;
