import React, { FC } from "react";

const TotalTrainers: FC = () => {
  return (
    <div className="w-full max-w-[363px] flex-shrink-0 font-jost grid gap-6 bg-black rounded-sm shadow-lg p-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-base">Total Trainers</span>
        <span className="font-rubik font-bold text-[32px]">8</span>
      </div>
      <span className="w-full h-[1px] bg-white"></span>
      <div className="flex flex-col items-center gap-1">
        <span className="text-base">Total Trainer Expenses 2024</span>
        <span className="font-rubik font-bold text-[32px] text-[#A1EDB0]">
          $392,209.92
        </span>
      </div>
    </div>
  );
};

export default TotalTrainers;
