/*Interface to add a new trainer to an account*/
"use client";
import React, { ChangeEvent } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/app/store/features/client/clientSlice";
import TextField from "@/app/components/shared/TextField";
import Select, { SelectOption } from "@/app/components/shared/Select";
import WizardHeader from "@/app/components/shared/WizardHeader";

const ClientContact = () => {
  const dispatch = useDispatch();
  const client = useSelector((state: any) => state.client);

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(change({ target: e.target.name, value: e.target.value }));
  };

  const handleSelect = (option: any, target: string) => {
    dispatch(change({ target: [target], value: option.value }));
  };

  const contactOptions: SelectOption[] = [
    { value: 1, label: "SMS" },
    { value: 2, label: "Email" },
    { value: 3, label: "Slack" },
    { value: 4, label: "Whatsapp" },
  ];

  return (
    <div className="w-full max-w-7xl px-9 py-10 mx-auto">
      <div className="grid gap-7">
        <WizardHeader
          name="New Client Contact Info"
          description="Complete the fields below to add contact info"
          hrefLeft="/dashboard/clients"
          hrefRight="./goals"
          disableRight={
            client.firstname === "" ||
            client.lastname === "" ||
            client.email === ""
          }
        />
        <div className="grid grid-cols-2 gap-11 items-start">
          <div className="w-full shadow-sm rounded-sm bg-black">
            <div className="font-rubik text-[28px] leading-[48px] px-[46px] py-3.5 border-b border-b-white">
              Client Contact Info
            </div>
            <div className="grid gap-6 px-6 py-4">
              <TextField
                label="First Name"
                id="firstname"
                name="firstname"
                value={client.firstname}
                onChange={handleChange}
              />
              <TextField
                label="Last name"
                id="lastname"
                name="lastname"
                value={client.lastname}
                onChange={handleChange}
              />
              <TextField
                type="email"
                label="Email"
                id="email"
                name="email"
                value={client.email}
                onChange={handleChange}
                startAdornment="@"
              />
              <TextField
                label="Phone"
                id="phone"
                name="phone"
                value={client.phone}
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
                label="street address"
                id="address"
                name="address"
                value={client.address}
                onChange={handleChange}
              />
              <TextField
                label="city"
                id="city"
                name="city"
                value={client.city}
                onChange={handleChange}
              />
              <TextField
                label="State"
                id="state"
                name="state"
                value={client.state}
                onChange={handleChange}
              />
              <TextField
                label="Zip Code"
                id="zipcode"
                name="zipcode"
                value={client.zipcode}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full shadow-sm rounded-sm bg-black">
            <div className="font-rubik text-[28px] leading-[48px] px-[46px] py-3.5 border-b border-b-white">
              Contact Method Preference
            </div>
            <div className="grid gap-6 px-6 py-4">
              <Select
                label="preferred contact method"
                value={client.method}
                onChange={(e: SelectOption) => handleSelect(e, "method")}
                options={contactOptions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientContact;
