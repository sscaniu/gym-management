"use client";

import { useState } from "react";
import { ButtonStyles } from "../components/shared/Buttons";
import { rubik } from "../components/shared/font";
import Card, { CardConfig } from "../components/shared/Card";


const statuses = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};

const cards: CardConfig[] = [
  {
    id: 1,
    name: "Step 1: Add Your Gym",
    description:
      '<p class="mb-4">Add your gym&apos;s details to complete account setup. This should only take a few minutes. To expedite this process, have the following details ready:<p><ul class="list-disc list-inside"><li>Gym Name, Address, Contact Info</li><li>Trainer Roster (optional)</li><li>Client Roster (optional)</li></ul>',
    buttons: [
      {
        id: 1,
        text: "+ Add Your Gym",
        style: ButtonStyles.Primary,
        href: "./dashboard/gym/create/address"
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
        text: "Import Trainers",
        style: ButtonStyles.Secondary,
        disabled: true,
        href: ""
      },
      {
        id: 2,
        text: "+ Add Trainers",
        style: ButtonStyles.Primary,
        disabled: false,
        href: "./dashboard/trainers"
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
        id: 2,
        text: "Import Clients",
        style: ButtonStyles.Primary,
        disabled: false,
        href: ""
      },
      {
        id: 1,
        text: "+ Add Clients",
        style: ButtonStyles.Secondary,
        disabled: true,
        href: "./dashboard/clients"
      }
    ],
  },
  {
    id: 4,
    name: "Step 4: Update your calendar",
    description:
      '<p class="mb-4">Update your calendar by scheduling appointments, classes, and events<p><ul class="list-disc list-inside"><li>Appointments - individual client sessions</li><li>Classes - sessions for for multiple clients</li><li>Events - holidays, extended hours, parties, etc</li></ul>',

    buttons: [
      {
        id: 1,
        text: "+ Add to Calendar",
        style: ButtonStyles.Primary,
        disabled: false,
        href: ""
      }
    ]
  },
  {
    id: 5,
    name: "Resources",
    description:
      '<p class="mb-4">Check out the following resources to help make your experience with GymBuddies a good one.<p><ul class="list-disc list-inside"><li>Gym Name, Address, Contact Info</li><li>Trainer Roster (optional)</li><li>Client Roster (optional)</li></ul>',
    links: [
      {
        text: "Video Tutorial - Getting Started",
        href: "http://google.com"
      },
      {
        text: "FAQ & Resource Center",
        href: "http://google.com"
      },
      {
        text: "Contact Customer Support",
        href: "http://google.com"
      }
    ],

  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>

      <article className="flex-1 z-10 bg-delft-blue">
        <div className={`${rubik.className} text-[40px] font-roboto font-normal text-left text-white mx-[56px] my-5`}>
          Scott&apos;s Dashboard
        </div>

        <div className="grid justify-items-center gap-4 grid-cols-2 mx-[56px] my-5 ">

          {cards.map((card) => (

            <div key={card.id} className="h-full w-full">

              <Card
                cardConfig={card}
              />

            </div>

          ))
          }

        </div>

      </article >





    </>
  );
}
