import React, { FC } from "react";

const TotalMembers: FC = () => {
  return (
    <div className="w-full max-w-[363px] flex-shrink-0 font-jost grid gap-6 bg-black rounded-sm shadow-lg p-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-base">Total Members</span>
        <span className="font-rubik font-bold text-[32px]">6,208</span>
      </div>
      <span className="w-full h-[1px] bg-white"></span>
      <div className="flex flex-col items-center gap-1">
        <span className="text-base">Payments: Jan 1, 2024 - Mar 31, 2024</span>
        <span className="font-rubik font-bold text-[32px] text-danger">
          $114,907.33
        </span>
      </div>
    </div>
  );
};

export default TotalMembers;
