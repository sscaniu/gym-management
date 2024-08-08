/*Interface to add a new trainer to an account*/
"use client";
import React, { ChangeEvent } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/app/store/features/trainer/trainerSlice";
import TextField from "@/app/components/shared/TextField";
import WizardHeader from "@/app/components/shared/WizardHeader";

const TrainerContact = () => {
  const dispatch = useDispatch();
  const trainer = useSelector((state: any) => state.trainer.trainer);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(change({ target: e.target.name, value: e.target.value }));
  };

  return (
    <div className="w-full max-w-7xl px-9 py-10 mx-auto">
      <div className="grid gap-7">
        <WizardHeader
          name="New Trainer Contact Info"
          description="Complete the fields below to add contact info"
          hrefLeft="/dashboard"
          hrefRight="./specialty"
          disableRight={
            trainer.firstname === "" ||
            trainer.lastname === "" ||
            trainer.email === ""
          }
        />
        <div className="w-full max-w-[556px] shadow-sm rounded-sm bg-black">
          <div className="font-rubik text-[28px] leading-[48px] px-[46px] py-3.5 border-b border-b-white">
            Trainer Contact Info
          </div>
          <div className="grid gap-6 px-6 py-4">
            <TextField
              label="First Name"
              id="firstname"
              name="firstname"
              value={trainer.firstname}
              onChange={handleChange}
            />
            <TextField
              label="Last name"
              id="lastname"
              name="lastname"
              value={trainer.lastname}
              onChange={handleChange}
            />
            <TextField
              type="email"
              label="Email"
              id="email"
              name="email"
              value={trainer.email}
              onChange={handleChange}
              startAdornment="@"
            />
            <TextField
              label="Phone"
              id="phone"
              name="phone"
              value={trainer.phone}
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
              value={trainer.address}
              onChange={handleChange}
            />
            <TextField
              label="city"
              id="city"
              name="city"
              value={trainer.city}
              onChange={handleChange}
            />
            <TextField
              label="State"
              id="state"
              name="state"
              value={trainer.state}
              onChange={handleChange}
            />
            <TextField
              label="Zip Code"
              id="zipcode"
              name="zipcode"
              value={trainer.zipcode}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerContact;
