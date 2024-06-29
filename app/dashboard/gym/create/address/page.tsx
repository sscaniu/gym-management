/*Interface to add a new Gym to an account*/
"use client";
import TextField from "@/app/components/shared/TextField";
import WizardHeader from "@/app/components/shared/WizardHeader";

const GymLocation = () => {
  return (
    <div className="grid gap-7">
      <WizardHeader
        name="Gym Location"
        description="Complete the fields below to add your gym profile"
        hrefLeft="/dashboard"
        hrefRight="./locationsize"
      />
      <div className="w-full max-w-[556px] shadow-sm rounded-sm bg-black">
        <div className="font-rubik text-[28px] leading-[48px] px-[46px] py-3.5 border-b border-b-white">
          New Gym Info
        </div>
        <div className="grid gap-6 px-6 py-4">
          <TextField label="Gym Name" id="name" name="name" />
          <TextField label="GYM Phone" id="phone" name="phone" />
          <TextField label="Street Address" id="address" name="address" />
          <TextField label="City" id="city" name="city" />
          <TextField label="state" id="state" name="state" />
          <TextField label="Zip code" id="zipcode" name="zipcode" />
        </div>
      </div>
    </div>
  );
}

export default GymLocation;