"use client";

import { useState } from "react";
import { Dialog, Listbox, Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Gym", href: "/login" },
  { name: "Trainers", href: "/dashboard/messages" },
  { name: "Clients", href: "/dashboard/clients" },
  { name: "Calendar", href: "/dashboard/calendar" },
  { name: "Billing", href: "/dashboard/billing" },
  { name: "Admin", href: "/dashboard/admin" },
  { name: "Support", href: "/dashboard/support" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="flex inset-x-0 top-0 z-50 bg-black text-white font-jost font-medium text-sm">
      <div className="mx-auto flex w-full max-w-7xl h-[56px] items-center justify-between px-4 sm:px-6 lg:px-14">
        <div className="flex flex-1 items-center gap-x-6">
          <button
            type="button"
            className="-m-3 p-3 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
          </button>
          <Image src="/logo.png" width={104} height={29} alt="Gym Buddies" />
        </div>
        <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-white">
          {navigation.map((item) => {
            const active: boolean = pathname.indexOf(item.href) === 0;

            return (
              <div className="flex relative" key={item.name}>
                <Link
                  href={item.href}
                  className={`text-sm leading-5 ${
                    active ? `font-bold text-warning` : ``
                  }`}
                >
                  {item.name}
                </Link>
                {active && (
                  <Image
                    src="/heart.png"
                    width={7.4}
                    height={6}
                    alt="Active Link"
                    className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 translate-y-full"
                  />
                )}
              </div>
            );
          })}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-x-8">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/images/dashboard/user.png"
              alt="profile pic"
              width={24}
              height={24}
            />
            <span>Hi, Alexander</span>
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
