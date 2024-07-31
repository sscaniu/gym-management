import React, { FC, useState } from "react";
import Calendar from "@/app/components/shared/Calendar";
import Checkbox from "@/app/components/shared/Checkbox";
import Image from "next/image";
import Button from "@/app/components/shared/Button";
import Dropdown from "@/app/components/shared/Dropdown";
import moment from "moment";

interface Workout {
  id: number;
  title: string;
  description: string;
  start: string;
  end: string;
}

const workouts: Workout[] = [
  {
    id: 1,
    title: "Upper Body Workout",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu ultricies viverra dictumst sed ornare. Nibh magna nulla sed eu amet pharetra. Sit in duis vestibulum arcu congue in neque egestas at. Aenean mi porttitor.",
    start: "2025-07-25 12:00",
    end: "2025-07-25 13:30",
  },
  {
    id: 2,
    title: "Upper Body Workout",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu ultricies viverra dictumst sed ornare. Nibh magna nulla sed eu amet pharetra. Sit in duis vestibulum arcu congue in neque egestas at. Aenean mi porttitor.",
    start: "2025-07-27 12:00",
    end: "2025-07-27 13:30",
  },
  {
    id: 3,
    title: "Upper Body Workout",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu ultricies viverra dictumst sed ornare. Nibh magna nulla sed eu amet pharetra. Sit in duis vestibulum arcu congue in neque egestas at. Aenean mi porttitor.",
    start: "2025-07-29 12:00",
    end: "2025-07-29 13:30",
  },
  {
    id: 4,
    title: "Upper Body Workout",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu ultricies viverra dictumst sed ornare. Nibh magna nulla sed eu amet pharetra. Sit in duis vestibulum arcu congue in neque egestas at. Aenean mi porttitor.",
    start: "2025-08-01 12:00",
    end: "2025-08-01 13:30",
  },
  {
    id: 5,
    title: "Upper Body Workout",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu ultricies viverra dictumst sed ornare. Nibh magna nulla sed eu amet pharetra. Sit in duis vestibulum arcu congue in neque egestas at. Aenean mi porttitor.",
    start: "2025-08-03 12:00",
    end: "2025-08-03 13:30",
  },
];

const ClientCalendar: FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedWorkoutTypes, setSelectedWOrkoutTypes] = useState<string[]>(
    []
  );

  const handleChangeWorkoutTypes = (value: string) => {
    const index = selectedWorkoutTypes.indexOf(value);
    if (index === -1) {
      setSelectedWOrkoutTypes([...selectedWorkoutTypes, value]);
    } else {
      let clonedSelectedWorkoutTypes = [...selectedWorkoutTypes];
      clonedSelectedWorkoutTypes.splice(index, 1);
      console.log(clonedSelectedWorkoutTypes);
      setSelectedWOrkoutTypes([...clonedSelectedWorkoutTypes]);
    }
  };

  const groupByMonth = (workouts: Workout[]) => {
    return workouts.reduce((acc: any, workout) => {
      const monthYear = moment(workout.start).format("YYYY-MM");

      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }

      acc[monthYear].push(workout);
      return acc;
    }, {});
  };

  return (
    <div className="flex items-start gap-8 font-jost">
      <div className="w-full max-w-[308px] flex-shrink-0 grid gap-10">
        <Calendar
          value={selectedDate}
          onChange={(date: Date) => setSelectedDate(date)}
          selectedDates={[new Date("2024-07-12"), new Date("2024-07-23")]}
        />
        <div>
          <h3 className="font-rubik font-bold text-2xl text-white border-b border-b-white pb-4">
            Filter Workout Types
          </h3>
          <div className="py-4">
            <div className="h-12 px-4 py-3.5">
              <Checkbox
                label="Endurance"
                checked={selectedWorkoutTypes.includes("endurance")}
                onChange={() => handleChangeWorkoutTypes("endurance")}
              />
            </div>
            <div className="h-12 px-4 py-3.5">
              <Checkbox
                label="Resistance"
                checked={selectedWorkoutTypes.includes("resistance")}
                onChange={() => handleChangeWorkoutTypes("resistance")}
              />
            </div>
            <div className="h-12 px-4 py-3.5">
              <Checkbox
                label="Weight"
                checked={selectedWorkoutTypes.includes("weight")}
                onChange={() => handleChangeWorkoutTypes("weight")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#1F2437] p-6 pt-4 rounded-sm shadow-lg">
        <div className="flex items-center justify-between pb-2 border-b border-b-white mb-10">
          <h3 className="font-rubik font-bold text-2xl">Client Calendar</h3>
          <Button
            color="warning"
            className="w-full max-w-[234px]"
            href="/dashboard/calendar/create"
          >
            + Add New Event
          </Button>
        </div>
        <div className="grid gap-6">
          {Object.keys(groupByMonth(workouts)).map((key: string) => (
            <div key={key} className="grid gap-3">
              <div className="flex items-center gap-2 pl-14">
                <span className="font-bold text-xs leading-8">
                  {moment(key).format("MMMM YYYY")}
                </span>
                <div className="flex-grow h-[1px] bg-white" />
              </div>
              <div className="grid gap-6">
                {groupByMonth(workouts)[key].map((workout: Workout) => (
                  <div key={workout.id} className="flex gap-2">
                    <div className="flex flex-col items-center flex-shrink-0 w-12 font-roboto">
                      <span className="text-xs uppercase">
                        {moment(workout.start).format("ddd")}
                      </span>
                      <span className="font-bold">
                        {moment(workout.start).format("D")}
                      </span>
                    </div>
                    <div className="w-full bg-table-odd p-4 rounded-sm shadow-lg relative">
                      <div className="absolute top-4 right-4">
                        <Dropdown />
                      </div>
                      <p className="text-base mb-1">{workout.title}</p>
                      <p className="font-rubik font-semibold text-xs mb-2 opacity-70">
                        {moment(workout.start).format("h:mm A")}
                        {" - "}
                        {moment(workout.end).format("h:mm A")}
                      </p>
                      <p className="text-base mb-4">{workout.description}</p>
                      <div className="flex flex-wrap gap-4">
                        <div className="h-8 rounded-sm px-2 bg-info flex items-center gap-2">
                          <Image
                            src="/location-dark.png"
                            width={24}
                            height={24}
                            alt="Queen’s Gym"
                          />
                          <span className="font-jost font-bold text-xs text-black uppercase">
                            Queen’s Gym
                          </span>
                        </div>
                        <div className="h-8 rounded-sm px-2 bg-info flex items-center gap-2">
                          <Image
                            src="/user.png"
                            width={24}
                            height={24}
                            alt="Jason Moore"
                          />
                          <span className="font-jost font-bold text-xs text-black uppercase">
                            Jason Moore
                          </span>
                        </div>
                        <div className="h-8 rounded-sm px-2 bg-info flex items-center gap-2">
                          <Image
                            src="/man-dark.png"
                            width={24}
                            height={24}
                            alt="Endurance"
                          />
                          <span className="font-jost font-bold text-xs text-black uppercase">
                            Endurance
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCalendar;
