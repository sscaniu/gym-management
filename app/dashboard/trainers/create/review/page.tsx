"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import WizardHeader from "@/app/components/shared/WizardHeader";
import Link from "next/link";

const ProfileReview = () => {
  const trainer = useSelector((state: any) => state.trainer);

  return (
    <div className="w-full max-w-7xl px-9 py-10 mx-auto">
      <div className="grid gap-10">
        <WizardHeader
          name="Trainer Profile Review"
          description="Review the trainer profile information below. If this is correct, click “finish”."
          buttonRightLabel="Finish"
          hrefLeft="./locations"
          hrefRight="/"
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-16">
          <div className="w-full max-w-[556px] bg-black shadow-sm rounded-sm p-6 pb-9">
            <div className="flex items-center justify-between pb-4 border-b border-b-white">
              <h2 className="font-rubik font-bold text-2xl">
                Trainer Contact Info
              </h2>
              <Link href="./contact">
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
                <span className="font-bold">First Name: </span>
                <span>{trainer.firstname}</span>
              </p>
              <p>
                <span className="font-bold">Last Name: </span>
                <span>{trainer.lastname}</span>
              </p>
              <p>
                <span className="font-bold">Email: </span>
                <span>{trainer.email}</span>
              </p>
              <p>
                <span className="font-bold">Phone: </span>
                <span>{trainer.phone}</span>
              </p>
              <p>
                <span className="font-bold">Address: </span>
                <span>{trainer.address}</span>
              </p>
            </div>
          </div>
          <div className="w-full max-w-[556px] bg-black shadow-sm rounded-sm p-6 pb-9">
            <div className="flex items-center justify-between pb-4 border-b border-b-white">
              <h2 className="font-rubik font-bold text-2xl">Work Location</h2>
              <Link href="./locations">
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
                <span className="font-bold">Primary: </span>
                <span>{trainer.locations && trainer.locations[0]?.name}</span>
              </p>
              <p>
                <span className="font-bold">Secondary: </span>
                <span>{trainer.locations && trainer.locations[1]?.name}</span>
              </p>
            </div>
          </div>
          <div className="w-full max-w-[556px] bg-black shadow-sm rounded-sm p-6 pb-9">
            <div className="flex items-center justify-between pb-4 border-b border-b-white">
              <h2 className="font-rubik font-bold text-2xl">
                Trainer Specialty
              </h2>
              <Link href="./specialty">
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
                <span className="font-bold">Primary: </span>
                <span>{trainer.specialty && trainer.specialty[0]?.name}</span>
              </p>
              <p>
                <span className="font-bold">Secondary: </span>
                <span>{trainer.specialty && trainer.specialty[1]?.name}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileReview;
