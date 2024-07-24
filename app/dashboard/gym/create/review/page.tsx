"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import WizardHeader from "@/app/components/shared/WizardHeader";
import Link from "next/link";

const ProfileReview = () => {
  const gym = useSelector((state: any) => state.gym);

  return (
    <div className="w-full max-w-7xl px-9 py-10 mx-auto">
      <div className="grid gap-10">
        <WizardHeader
          name="Create Your Account"
          description="Review the gym profile information below. If this is correct, click “finish”."
          buttonRightLabel="Finish"
          hrefLeft="./specialty"
          hrefRight="/"
        />

        <div className="w-full max-w-[556px] bg-black shadow-sm rounded-sm p-6 pb-9">
          <div className="flex items-center justify-between pb-4 border-b border-b-white">
            <h2 className="font-rubik font-bold text-2xl">Gym Profile Info</h2>
            <Link href="./address">
              <Image
                src="/images/dashboard/pen.png"
                width={16}
                height={16}
                alt=""
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="grid gap-4 font-jost text-base pt-8">
            <p>
              <span className="font-bold">Gym Name: </span>
              <span>{gym.name}</span>
            </p>
            <p>
              <span className="font-bold">Gym phone: </span>
              <span>{gym.phone}</span>
            </p>
            <p>
              <span className="font-bold">Address: </span>
              <span>{gym.address}</span>
            </p>
            <p>
              <span className="font-bold">Location Size: </span>
              <span>{gym.locationSize?.name}</span>
            </p>
            <p>
              <span className="font-bold">Gym Specialties: </span>
              <span>
                {gym.specialty?.map((item: any) => item.name).join(", ")}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileReview;
