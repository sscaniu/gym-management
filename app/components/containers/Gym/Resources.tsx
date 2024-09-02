"use client";

import React from "react";
import Link from "next/link";

const Resources = () => {
  interface ResourceType {
    label: string;
    path: string;
  }

  const resources: ResourceType[] = [
    { label: "Video Tutorial - Getting Started", path: "/" },
    { label: "FAQ & Resource Center", path: "/" },
    { label: "Contact Customer Support", path: "/" },
  ];

  return (
    <div className="bg-black rounded-sm shadow-center p-6">
      <div className="font-rubik font-bold text-2xl pb-4 border-b border-b-white">
        Resources
      </div>
      <div className="grid py-6 font-jost text-base">
        <p className="mb-8">
          Check out the following resources to help make your experience with
          GymBuddies a good one.
        </p>
        <ul>
          {resources.map((resource: ResourceType, i: number) => (
            <li key={i}>
              <Link
                href={resource.path}
                className="flex items-center h-12 font-jost text-base text-warning underline"
              >
                {resource.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resources;
