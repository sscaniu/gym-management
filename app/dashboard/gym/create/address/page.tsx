/*Interface to add a new Gym to an account*/
"use client";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "@/app/store/features/gym/gymSlice";
import TextField from "@/app/components/shared/TextField";
import WizardHeader from "@/app/components/shared/WizardHeader";

const GymLocation = () => {
  const dispatch = useDispatch();
  const gym = useSelector((state: any) => state.gym);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(change({ target: e.target.name, value: e.target.value }));
  };

  return (
    <div className="grid gap-7">
      <WizardHeader
        name="Gym Location"
        description="Complete the fields below to add your gym profile"
        hrefLeft="/dashboard"
        hrefRight="./locationsize"
        disableRight={gym.name === "" || gym.phone === "" || gym.address === ""}
      />
      <div className="w-full max-w-[556px] shadow-sm rounded-sm bg-black">
        <div className="font-rubik text-[28px] leading-[48px] px-[46px] py-3.5 border-b border-b-white">
          New Gym Info
        </div>
        <div className="grid gap-6 px-6 py-4">
          <TextField
            label="Gym Name"
            id="name"
            name="name"
            value={gym.name}
            onChange={handleChange}
          />
          <TextField
            label="GYM Phone"
            id="phone"
            name="phone"
            value={gym.phone}
            onChange={handleChange}
          />
          <TextField
            label="Street Address"
            id="address"
            name="address"
            value={gym.address}
            onChange={handleChange}
          />
          <TextField
            label="City"
            id="city"
            name="city"
            value={gym.city}
            onChange={handleChange}
          />
          <TextField
            label="state"
            id="state"
            name="state"
            value={gym.state}
            onChange={handleChange}
          />
          <TextField
            label="Zip code"
            id="zipcode"
            name="zipcode"
            value={gym.zipcode}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default GymLocation;
