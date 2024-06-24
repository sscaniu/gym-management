"use client";

import { useState } from "react";
import { Dialog, Listbox, Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { rubik } from "./font";

const navigation = [
  { name: "Gym", href: "/login" },
  { name: "Trainers", href: "/dashboard/messages" },
  { name: "Clients", href: "/dashboard/clients" },
  { name: "Classes", href: "/dashboard/messages" },
  { name: "Billing", href: "/dashboard/clients" },
  { name: "Admin", href: "/dashboard/messages" },
  { name: "Support", href: "/dashboard/messages" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex inset-x-0 top-0 z-50 h-16 border-b border-gray-900/10 bg-oxford-blue p-4 text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center gap-x-6">
          <button
            type="button"
            className="-m-3 p-3 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
          </button>
          <h1 className={`${rubik.className} inline-flex w-full items-center text-left text-base font-bold leading-[48px] tracking-wider`}>Gym Buddies</h1>
        </div>
        <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-white">
          {navigation.map((item, itemIdx) => (
            <a key={itemIdx} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-x-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your profile</span>
            <Image
              className="h-8 w-8 rounded-full bg-gray-800"
              src="/images/dashboard/user.png"
              alt="profile pic"
              width={0}
              height={0}
              sizes="100vw"
            />
          </a>
        </div>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="-ml-0.5 flex h-16 items-center gap-x-6">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="-ml-0.5">
              <a href="#" className="-m-1.5 block p-1.5">
                <span className="sr-only">Your Company</span>
                <h1>Gym Buddies</h1>
              </a>
            </div>
          </div>
          <div className="mt-2 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
