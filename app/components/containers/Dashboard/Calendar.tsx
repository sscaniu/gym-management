"use client";

import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Button from "../../shared/Button";

const Calendar = () => {
  const clients = useSelector((state: any) => state.client.clients);

  return (
    <div className="bg-black rounded-sm shadow-center p-6">
      <div className="font-rubik font-bold text-2xl pb-4 border-b border-b-white">
        Step 4: Update your calendar
      </div>
      <div className="grid py-6 font-jost text-base">
        <p className="mb-10">
          Update your calendar by scheduling appointments, classes, and events.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Appointments - individual client sessions</li>
          <li>Classes - sessions for multiple clients </li>
          <li>Events - holidays, extended hours, parties, etc.</li>
        </ul>
        <div className="flex justify-center">
          <Button color="warning" disabled={clients.length === 0} href="/dashboard/clients/1/calendar/create">
            <div className="flex items-center gap-2">
              <Image
                src="/plus-black.png"
                width={14}
                height={14}
                alt="Add to Calendar"
              />
              <span>Add to Calendar</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
