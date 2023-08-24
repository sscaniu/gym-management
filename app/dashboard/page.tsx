"use client";

import { useState } from "react";

const statuses = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};

const steps = [
  {
    id: 1,
    name: "Add Your Gym",
    button: "Add Your Gym",
  },
  {
    id: 2,
    name: "Add Your Gym",
    button: "Add Your Gym",
  },
  {
    id: 3,
    name: "Add Your Gym",
    button: "Add Your Gym",
  },
  {
    id: 4,
    name: "Add Your Gym",
    button: "Add Your Gym",
  },
  {
    id: 5,
    name: "Add Your Gym",
    button: "Add Your Gym",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <main>
        <div className="space-y-16 py-16 xl:space-y-20">
          {/* Recent client list*/}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="flex items-center justify-between  mt-6">
                <h2 className="text-3xl font-semibold leading-7 text-gray-900">
                  Travis Dashboard
                </h2>
              </div>
              <ul
                role="list"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {steps.map((step) => (
                  <li
                    key={step.id}
                    className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                  >
                    <div className="bg-white shadow sm:rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">
                          Manage subscription
                        </h3>
                        <div className="mt-2 max-w-xl text-sm text-gray-500">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Recusandae voluptatibus corrupti atque
                            repudiandae nam.
                          </p>
                        </div>
                        <div className="mt-5">
                          <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                          >
                            Change plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
