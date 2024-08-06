"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/shared/Button";
import Modal from "@/app/components/shared/Modal";
import ActionButton from "@/app/components/shared/ActionButton";
import Checkbox from "@/app/components/shared/Checkbox";

interface Trainer {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  specialty: string;
  gym: string;
  clients: number;
}

const Trainers: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTrainerId, setSelectedTrainerId] = useState<number | null>(
    null
  );
  const [selectedTrainerIds, setSelectedTrainerIds] = useState<number[]>([]);
  const [trainers, setTrainers] = useState<Trainer[]>([
    {
      id: 1,
      firstname: "Emilia",
      lastname: "Rodriguez",
      email: "emilia.rodriguez@email.com",
      phone: "(903) 982 - 5962",
      address: "123 Main Street, Apt.3, Brooklyn, New York, 11217",
      specialty: "Crossfit",
      gym: "GYM NAME",
      clients: 3,
    },
    {
      id: 2,
      firstname: "Morocco",
      lastname: "Scott",
      email: "morocco.scott@email.com",
      phone: "(917) 855 - 2341",
      address: "123 Main Street, Apt.3, Brooklyn, New York, 11217",
      specialty: "Gymnastics",
      gym: "GYM NAME",
      clients: 4,
    },
    {
      id: 3,
      firstname: "Berh",
      lastname: "Hildegard",
      email: "behr.hildegard@email.com",
      phone: "(718) 267 - 9360",
      address: "34 5th Av., Apt.5, Brooklyn, New York, 11217 ",
      specialty: "Strength",
      gym: "GYM NAME",
      clients: 2,
    },
  ]);

  const handleCheck = (id: number) => {
    let clonedIds = [...selectedTrainerIds];
    const idx = clonedIds.indexOf(id);
    if (idx === -1) {
      clonedIds.push(id);
    } else {
      clonedIds.splice(idx, 1);
    }
    setSelectedTrainerIds([...clonedIds]);
  };

  const handleDelete = () => {
    let clonedTrainers: Trainer[] = [...trainers];
    if (selectedTrainerId) {
      setTrainers([
        ...clonedTrainers.filter(
          (trainer: Trainer) => trainer.id !== selectedTrainerId
        ),
      ]);
      setSelectedTrainerId(null);
    } else {
      setTrainers([
        ...clonedTrainers.filter(
          (trainer: Trainer) => !selectedTrainerIds.includes(trainer.id)
        ),
      ]);
      setSelectedTrainerIds([]);
    }
    handleClose();
  };
  const handleClose = () => setIsOpen(false);

  return (
    <div className="w-full max-w-7xl px-9 py-10 mx-auto">
      <div className="grid gap-12">
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-7">
            <h3 className="font-rubik font-bold text-[40px] leading-tight">
              Trainers
            </h3>
            <span className="font-jost font-semibold text-xl leading-9">
              3/12 Trainers
            </span>
          </div>
          <div className="flex gap-3.5">
            <ActionButton className="!h-12" icon="/sort.png">
              Sort
            </ActionButton>
            <ActionButton className="!h-12" icon="/filter-lg.png">
              Filter
            </ActionButton>
            <ActionButton
              className="!h-12"
              icon="/send-white.png"
              disabled={selectedTrainerIds.length === 0}
            >
              Group Message
            </ActionButton>
            <Button variant="outlined" color="warning">
              <div className="flex items-center gap-2">
                <Image
                  src="/plus-warning.png"
                  width={20}
                  height={20}
                  alt="Import Trainres"
                />
                <span>Import Trainers</span>
              </div>
            </Button>
            {selectedTrainerIds.length > 0 ? (
              <Button
                color="danger"
                variant="outlined"
                onClick={() => setIsOpen(true)}
              >
                <div className="flex items-center gap-2">
                  <Image src="/trash.png" width={24} height={24} alt="Trash" />
                  <span>Delete</span>
                </div>
              </Button>
            ) : (
              <Button color="warning" href="/dashboard/trainers/create/contact">
                <div className="flex items-center gap-2">
                  <Image
                    src="/plus-black.png"
                    width={14}
                    height={14}
                    alt="Import Trainres"
                  />
                  <span>Add Trainer</span>
                </div>
              </Button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-[50px]">
          {trainers.map((trainer: Trainer, i: number) => (
            <div
              key={i}
              className="grid gap-[22px] bg-[#1F2437] rounded-sm shadow-center p-7"
            >
              <div className="flex items-center justify-between border-b border-b-white">
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={selectedTrainerIds.includes(trainer.id)}
                    onChange={() => handleCheck(trainer.id)}
                  />
                  <span className="font-rubik font-bold text-2xl">
                    {trainer.firstname} {trainer.lastname}
                  </span>
                </div>
                <div className="flex">
                  <button className="w-12 h-12 flex items-center justify-center">
                    <Image src="/pen.png" width={24} height={24} alt="Edit" />
                  </button>
                  <button
                    className="w-12 h-12 flex items-center justify-center"
                    onClick={() => {
                      setSelectedTrainerId(trainer.id);
                      setIsOpen(true);
                    }}
                  >
                    <Image
                      src="/mdi_trash.png"
                      width={24}
                      height={24}
                      alt="Edit"
                    />
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src="/send-white.png"
                      width={24}
                      height={24}
                      alt="Send"
                    />
                  </button>
                </div>
              </div>
              <div className="grid gap-4">
                <p className="font-jost text-base">
                  <span className="font-bold">Email: </span>
                  <span>{trainer.email}</span>
                </p>
                <p className="font-jost text-base">
                  <span className="font-bold">Phone: </span>
                  <span>{trainer.phone}</span>
                </p>
                <p className="font-jost text-base">
                  <span className="font-bold">Address: </span>
                  <span>{trainer.address}</span>
                </p>
                <p className="font-jost text-base">
                  <span className="font-bold">Specialty: </span>
                  <span>{trainer.specialty}</span>
                </p>
                <p className="font-jost text-base">
                  <span className="font-bold">Gym: </span>
                  <span>{trainer.gym}</span>
                </p>
                <p className="font-jost text-base">
                  <span className="font-bold">Clients: </span>
                  <span>{trainer.clients}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        title="You are about to delete this trainers."
        open={isOpen}
        onClose={handleClose}
      >
        <div className="grid gap-10">
          <div className="font-rubik text-xl">
            By clicking “continue”, all data regarding this trainer’s account
            will be deleted permanently. Are you sure you want to continue?
          </div>
          <div className="flex justify-center gap-14">
            <Button
              className="w-[230px]"
              variant="outlined"
              color="white"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              className="w-[230px]"
              color="warning"
              onClick={handleDelete}
            >
              Yes, Continue
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Trainers;
