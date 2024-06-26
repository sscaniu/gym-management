"use client";
import Link from "next/link";
import Button from "../components/shared/Button";
import TextField from "../components/shared/TextField";

const Success = () => {
  return (
    <div className="flex-1">
      <div className="w-full min-h-[56px] bg-success/50 font-jost font-semibold text-base text-center py-4">
        Success! Account created.
      </div>
      <div className="bg-vectorcurve bg-no-repeat px-14 py-8">
        <div className="w-full h-full grid gap-5 justify-items-center">
          <div className="font-rubik font-bold text-[40px] leading-8">
            Welcome to Gym Buddies
          </div>

          <div className="w-full max-w-[556px] flex flex-col items-center bg-[#00000040] backdrop-blur-xl shadow-sm rounded-sm pt-8 px-6 pb-5">
            <p className="font-jost font-semibold text-base text-center mb-8">
              Thanks for joining! Your account has been successfully created. A
              verification link has been sent to your email.
            </p>
            <h2 className="font-rubik text-3xl leading-relaxed mb-12">
              Your Next Steps
            </h2>
            <div className="w-full grid gap-3.5 mb-12">
              <div className="grid gap-2">
                <h3 className="font-jost font-semibold text-2xl">
                  1. Verify Your Account
                </h3>
                <p className="font-jost text-base pl-6 pb-10">
                  Open your email and click the verification link. <br />
                  Not seeing anything? Click here to resend.
                  <br />
                  Still not seeing anything? Click here for support.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="font-jost font-semibold text-2xl">
                  2. Add Your Gym
                </h3>
              </div>
              <div className="grid gap-2">
                <h3 className="font-jost font-semibold text-2xl">
                  3. Add Your Trainers
                </h3>
              </div>
              <div className="grid gap-2">
                <h3 className="font-jost font-semibold text-2xl">
                  4. Add Your Clients
                </h3>
              </div>
            </div>
            <p className="font-jost text-base leading-10">
              Click here for{" "}
              <Link href="/" className="underline">
                support
              </Link>{" "}
              and{" "}
              <Link href="/" className="underline">
                FAQ’s
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
