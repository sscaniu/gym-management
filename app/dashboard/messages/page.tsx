"use client";
import { rubik } from "@/app/components/shared/font";
import { sendMessage } from "@/app/lib/actions";
import Image from 'next/image';
import { useState } from 'react';
import { ChatMessage, Message, ChatStyle } from '@/app/components/shared/ChatMessage'

interface Tab {
  name: string,
  href: string,
  current: boolean
}

const tabs: Tab[] = [
  { name: 'Profile', href: '#', current: false },
  { name: 'Goals', href: '#', current: false },
  { name: 'Messages', href: '#', current: true },
  { name: 'Notes', href: '#', current: false },
  { name: 'Client Calender', href: '#', current: false },
]



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Messages() {
  //State for messages
  const [messages, setMessages] = useState<Message[]>([]);

  //Wrapper that calls the sendMessage function and then updates the state of the UI
  async function sendWithUpdate(formData: FormData) {

    sendMessage(formData);

    //Update the UI
    var newMessage: Message = {
      id: "1",
      speaker: "SH",
      message: String(formData.get('message')),
      time: "8:00 PM",
      style: ChatStyle.Trainer
    }
    var newMessages = [...messages];
    newMessages.push(newMessage);

    setMessages(newMessages);

  }

  return (
    // Header
    <>
      <div className="bg-oxford-blue">
        <div className="mx-[56px] mt-5 ">
          <div className={`${rubik.className} text-white `}>
            <div className="text-[48px] font-bold">Alexander Wittenhaus</div>
            <div className="text-base">Member Since: 19 February 2023</div>
            <div className="text-base">Customer Value: $12,674</div>
          </div>
        </div>
      </div>


      {/* Tabs */}

      <div className="px-[56px] pt-5 bg-oxford-blue">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={tabs.find((tab) => tab.current)?.name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Tab content         */}
      <div className="flex-1 flex flex-column bg-delft-blue justify-center">

        <div className="flex flex-col bg-oxford-blue w-1/2 my-10">

          {/* Header */}
          <div className="h-[50px] border-b-2 border-white m-5 flex flex-row items-center">

            <div className="flex-1 text-white font-bold text-2xl">SMS Chat</div>
            <div className="text-white flex-1 text-right flex justify-end"><Image src="/images/icons/SearchGlass.png" alt={"Search"} width={24} height={24} /></div>

          </div>


          {/* Messages  */}
          <div className="h-full">
            <ul>
              {messages.map((message) => (
                <li key={message.id}>
                  <div className="flex flex-col place-items-end mr-5 mb-5">
                    <ChatMessage id={message.id} speaker={message.speaker} message={message.message} time={message.time} style={ChatStyle.Trainer} />
                  </div>
                </li>
              ))}


            </ul>

          </div>



          {/* Input field */}
          <form action={sendWithUpdate} className="h-[80px] border-2 border-white m-5 flex flex-row flex-wrap shadow-md bg-black space-x-0">


            <div className="flex-grow">
              <input
                type="text"
                name="message"
                className="w-full h-[75px] bg-black text-white focus:outline-none hover:outline-none border-0"
              />
            </div>
            <div className="flex-none flex flex-row justify-center items-center p-2">
              <button type="submit" className="w-[48px] h-[48px] bg-button-1-bg flex flex-col justify-center items-center">
                <Image
                  src="/images/icons/right-chev.png"
                  alt="Send message"
                  width={18}
                  height={18.02}
                />

              </button>
            </div>

            <div className="w-[30px]">
              <input
                type="text"
                name="to"
                placeholder="+1123456789"
                className="bg-black  focus:outline-none text-white"
              />
            </div>

          </form>

        </div>

      </div>





    </>
  );

}
