"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Button from "../../shared/Button";

const Calendar = () => {
  const data = [
    {
      id: 1,
      name: "Cycling",
      author: "Jason Moore",
      time: "12:30 PM - 1:30 PM",
    },
    {
      id: 2,
      name: "Hot Yoga",
      author: "Amanda Moore",
      time: "2:00 PM - 4:30 PM",
    },
    {
      id: 3,
      name: "Boxing",
      author: "Parker Ko",
      time: "6:00 PM - 7:00 PM",
    },
  ];

  return (
    <div className="grid gap-4">
      <div className="bg-black rounded-sm shadow-center p-6">
        <div className="flex items-center justify-between pb-4 border-b border-b-white">
          <span className="font-rubik font-bold text-2xl">
            27 July, 2023 Schedule
          </span>
          <Link
            className="flex items-center gap-2"
            href="/dashboard/clients/1/calendar/create"
          >
            <Image
              src="/plus.png"
              width={24}
              height={24}
              alt="Add to Calendar"
            />
            <span className="font-jost text-base">Add to Calendar</span>
          </Link>
        </div>
        <div className="grid pt-6 gap-4 font-jost text-base">
          {data.map((item) => (
            <div
              key={item.id}
              className="grid gap-2 relative bg-dark shadow-center rounded-sm px-4 py-3"
            >
              <p className="font-jost text-base leading-none">{item.name}</p>
              <p className="font-jost font-semibold text-xs leading-none">
                {item.author}
              </p>
              <p className="font-jost font-semibold text-xs leading-none">
                {item.time}
              </p>
              <Image
                src="/information.png"
                width={24}
                height={24}
                alt="Information"
                className="absolute top-3 right-3 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        color="warning"
        variant="outlined"
        className="bg-black"
        href="/dashboard/clients/1?tab=calendar"
      >
        <div className="flex items-center justify-center gap-2">
          <span>View Calendar</span>
          <Image src="/right.png" width={20} height={20} alt="View Calendar" />
        </div>
      </Button>
    </div>
  );
};

export default Calendar;
