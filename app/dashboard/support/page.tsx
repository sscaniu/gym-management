"use client";
import React, { ChangeEvent, FC, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/shared/Button";
import TextField from "@/app/components/shared/TextField";
import Link from "next/link";

const Support: FC = () => {
  interface SupportMessageType {
    subject: string;
    name: string;
    email: string;
    phone?: string;
    message: string;
  }

  const [info, setInfo] = useState<SupportMessageType>({
    subject: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

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
    <div className="w-full max-w-7xl px-9 py-10 mx-auto">
      <div className="grid gap-12">
        <div className="grid gap-3">
          <h2 className="font-rubik font-bold text-[40px]">Support</h2>
          <p className="font-jost font-semibold text-base">
            Gym Buddies support hours are from 8:00 AM - 8:00 PM EST
          </p>
        </div>
        <div className="grid grid-cols-2 gap-11 items-start">
          <div className="w-full shadow-sm rounded-sm bg-black">
            <div className="font-rubik text-[28px] leading-[48px] px-10 py-3.5 border-b border-b-white">
              Contact Customer Support
            </div>
            <div className="grid gap-6 px-6 py-4">
              <TextField
                label="Subject"
                id="subject"
                name="subject"
                value={info.subject}
                onChange={handleChange}
              />
              <TextField
                label="Name"
                id="name"
                name="name"
                value={info.name}
                onChange={handleChange}
              />
              <TextField
                type="email"
                label="Email"
                id="email"
                name="email"
                value={info.email}
                onChange={handleChange}
                startAdornment="@"
              />
              <TextField
                label="Phone (Optional)"
                id="phone"
                name="phone"
                value={info.phone}
                onChange={handleChange}
                startAdornment={
                  <Image
                    src="/images/icons/phone.png"
                    width={24}
                    height={24}
                    alt="phone"
                  />
                }
              />
              <TextField
                label="Message"
                id="message"
                name="message"
                value={info.message}
                onChange={handleChange}
                multiple
              />
              <div className="flex justify-end">
                <Button color="warning">
                  <div className="flex items-center justify-center gap-4">
                    <span>Send Message</span>
                    <Image src="/send.png" width={24} height={24} alt="Send" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full shadow-sm rounded-sm bg-black">
            <div className="font-rubik text-[28px] leading-[48px] px-10 py-3.5 border-b border-b-white">
              Resources
            </div>
            <div className="grid gap-4 px-10 py-4">
              <p className="font-jost text-base">
                Check out the following resources to help make your experience
                with GymBuddies a good one.
              </p>
              <ul>
                {resources.map((resource: ResourceType, i: number) => (
                  <li key={i}>
                    <Link
                      href={resource.path}
                      className="flex items-center h-12 font-jost text-base text-warning hover:underline"
                    >
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
