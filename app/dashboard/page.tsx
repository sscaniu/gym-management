"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Button, ButtonStyles } from "../components/shared/Buttons";
import Image from "next/image";
import { rubik } from "../components/shared/font";


const statuses = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};

const cards = [
  {
    id: 1,
    name: "Step 1: Add Your Gym",
    description:
      '<p class="mb-4">Add your gym&apos;s details to complete account setup. This should only take a few minutes. To expedite this process, have the following details ready:<p><ul class="list-disc list-inside"><li>Gym Name, Address, Contact Info</li><li>Trainer Roster (optional)</li><li>Client Roster (optional)</li></ul>',
    buttons: [
      {
        id: 1,
        text: "Add your gym",
        icon: null,
        style: ButtonStyles.Primary,
      },
    ],
  },
  {
    id: 2,
    name: "Step 2: Add Trainers",
    description:
      '<p class="mb-4">Add trainers to pair up with your clients. Update your roster by adding individuals, or bulk-importing a CSV document with the following details:<p><ul class="list-disc list-inside"><li>First and Last Name, Billing Address, Email, Phone Number</li><li>Specialty (HIIT, yoga, strength training, etc.)</li></ul>',
    buttons: [
      {
        id: 1,
        text: "Import Clients",
        icon: null,
        style: ButtonStyles.Secondary,
        disabled: true,
      },
      {
        id: 2,
        text: "Add Client",
        icon: <FaPlus />,
        style: ButtonStyles.Primary,
        disabled: false,
      },
    ],
  },
  {
    id: 3,
    name: "Step 3: Add Clients",
    description:
      '<p class="mb-4">Update your client roster by adding clients individually, or bulk-importing a CSV document with the following details:<p><ul class="list-disc list-inside"><li>First and Last Name, Billing Address, Email, Phone Number</li><li>Personal Goal (weight loss, marathon training, etc.)</li></ul>',
    buttons: [
      {
        id: 1,
        text: "Add Clients",
        icon: null,
        style: ButtonStyles.Secondary,
        disabled: true,
      },
    ],
  },
  {
    id: 4,
    name: "Step 4: Update your calendar",
    description:
      '<p class="mb-4">Update your calendar by scheduling appointments, classes, and events<p><ul class="list-disc list-inside"><li>Appointments - individual client sessions</li><li>Classes - sessions for for multiple clients</li><li>Events - holidays, extended hours, parties, etc</li></ul>',
    button: "Add to Calendar",
    icon: <FaPlus />,
  },
  {
    id: 5,
    name: "Resources",
    description:
      '<p class="mb-4">Check out the following resources to help make your experience with GymBuddies a good one.<p><ul class="list-disc list-inside"><li>Gym Name, Address, Contact Info</li><li>Trainer Roster (optional)</li><li>Client Roster (optional)</li></ul>',
    button: "Add Your Gym",
    icon: <FaPlus />,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>




      <article className="flex-1 z-10 bg-gradient-to-b from-oxford-blue from-50% to-delft-blue to-50%">
        <div className="text-2xl font-roboto font-normal text-left text-white mx-[56px] my-5">
          Scott&apos;s Dashboard
        </div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 mx-[56px] my-5"
        >
          {cards.map((card) => (
            <li
              key={card.id}
              className={`${rubik.className} col-span-1 divide-y divide-gray-200 rounded-lg bg-card-blue-500 text-white opacity-70 drop-shadow-xl`}
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-2xl leading-6 border-b border-black-600 pb-5">
                  {card.name}
                </h3>
                <div
                  className="mt-7 mb-7 max-w-xl text-sm"
                  dangerouslySetInnerHTML={{
                    __html: card.description ? card.description : "",
                  }}
                />
                {card.buttons && (
                  <div className="mt-5 flex items-center justify-evenly">
                    {card.buttons.map((button) => (
                      <div key={button.id}>
                        <Button
                          icon={button.icon}
                          text={button.text}
                          style={button.style}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}

        </ul>

      </article>





    </>
  );
}
