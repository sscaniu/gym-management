"use client";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import moment from "moment";
import WizardHeader from "@/app/components/shared/WizardHeader";
import { create } from "@/app/store/features/client/clientSlice";

const ProfileReview = () => {
  const dispatch = useDispatch();
  const client = useSelector((state: any) => state.client.client);
  const handleSave = () => {
    dispatch(create(client));
  };

  return (
    <div className="w-full max-w-7xl px-9 py-10 mx-auto">
      <div className="grid gap-10">
        <WizardHeader
          name="Client Profile Review"
          description="Review the client profile information below. If this is correct, click “finish”."
          buttonRightLabel="Finish"
          hrefLeft="./trainer"
          hrefRight="/"
          onFinish={handleSave}
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-16">
          <div className="w-full max-w-[556px] bg-black shadow-sm rounded-sm p-6 pb-9">
            <div className="flex items-center justify-between pb-4 border-b border-b-white">
              <h2 className="font-rubik font-bold text-2xl">
                Client Contact Info
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
                <span>{client.firstname}</span>
              </p>
              <p>
                <span className="font-bold">Last Name: </span>
                <span>{client.lastname}</span>
              </p>
              <p>
                <span className="font-bold">Email: </span>
                <span>{client.email}</span>
              </p>
              <p>
                <span className="font-bold">Phone: </span>
                <span>{client.phone}</span>
              </p>
              <p>
                <span className="font-bold">Address: </span>
                <span>{client.address}</span>
              </p>
            </div>
          </div>
          <div className="w-full max-w-[556px] bg-black shadow-sm rounded-sm p-6 pb-9">
            <div className="flex items-center justify-between pb-4 border-b border-b-white">
              <h2 className="font-rubik font-bold text-2xl">Gym Location</h2>
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
                <span>{client.locations && client.locations[0]?.name}</span>
              </p>
              <p>
                <span className="font-bold">Secondary: </span>
                <span>{client.locations && client.locations[1]?.name}</span>
              </p>
            </div>
          </div>
          <div className="w-full max-w-[556px] bg-black shadow-sm rounded-sm p-6 pb-9">
            <div className="flex items-center justify-between pb-4 border-b border-b-white">
              <h2 className="font-rubik font-bold text-2xl">Goal</h2>
              <Link href="./goals">
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
                <span className="font-bold">Type: </span>
                <span>{client.primary_goal_type}</span>
              </p>
              <p>
                <span className="font-bold">Meeting Frequency: </span>
                <span>{client.primary_goal_meeting_frequency}</span>
              </p>
              <p>
                <span className="font-bold">Duration: </span>
                <span>
                  {client.primary_goal_program_duration.from && (
                    <>
                      <span>
                        {moment(
                          client.primary_goal_program_duration.from
                        ).format("MMMM DD, YYYY")}
                      </span>
                      <span>{` - `}</span>
                    </>
                  )}
                  {client.primary_goal_program_duration.to && (
                    <span>
                      {moment(client.primary_goal_program_duration.to).format(
                        "MMMM DD, YYYY"
                      )}
                    </span>
                  )}
                </span>
              </p>
              <p>
                <span className="font-bold">Details: </span>
                <span>{client.primary_goal_details}</span>
              </p>
            </div>
          </div>
          <div className="w-full max-w-[556px] bg-black shadow-sm rounded-sm p-6 pb-9">
            <div className="flex items-center justify-between pb-4 border-b border-b-white">
              <h2 className="font-rubik font-bold text-2xl">Trainer</h2>
              <Link href="./trainer">
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
                <span className="font-bold">Trainer Name: </span>
                <span>{client.trainer?.name}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileReview;
