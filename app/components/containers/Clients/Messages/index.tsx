import React, { ChangeEvent, FC, MouseEvent, useState } from "react";
import Image from "next/image";
import moment from "moment";

interface Message {
  message: string;
  time: string;
  isSent?: boolean;
  isNotification?: boolean;
  name?: string;
}

const Messages: FC = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
      time: "2024-07-16 21:42:00",
      isSent: true,
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Dolor sit amet, consectetur adipiscing elit ut miquam, purus sit amet luctus venenatis.",
      time: "2024-07-16 21:42:00",
      name: "EJ",
    },
    {
      message: "Your appointment is in 2 hours. Are you still going?",
      time: "2024-07-16 21:42:00",
      isNotification: true,
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
      time: "2024-07-16 21:42:00",
      isSent: true,
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Dolor sit amet, consectetur adipiscing elit ut miquam, purus sit amet luctus venenatis.",
      time: "2024-07-16 21:42:00",
      name: "EJ",
    },
  ]);

  const handleSend = () => {
    setMessages([
      ...messages,
      {
        message,
        time: moment().toString(),
        isSent: true,
      },
    ]);
    setMessage("");
  };

  const handleSubmit = (e: any) => {
    if (e.code === "Enter") handleSend();
  };

  return (
    <div className="w-full max-w-[750px] bg-black shadow-sm rounded-sm p-6 mx-auto">
      <div className="pt-1 pb-[18px] border-b border-b-white">
        <h3 className="font-rubik text-2xl font-bold text-white">
          SMS Chat with Alexander
        </h3>
      </div>
      <div className="flex flex-col gap-4 pt-6 pb-12">
        {messages.map((message: Message, index: number) => (
          <div
            key={index}
            className={`flex items-end gap-1.5 ${
              message.isSent ? `self-end` : `self-start`
            }`}
          >
            {!message.isSent && (
              <div>
                {message.isNotification ? (
                  <Image src="/bot.png" width={32} height={30} alt="bot" />
                ) : (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#42BFDD] to-[#ECCCB7] font-jost text-xs text-black">
                    {message.name}
                  </div>
                )}
              </div>
            )}
            <div
              className={`w-[464px] grid gap-2 p-3 rounded-lg font-jost ${
                message.isSent
                  ? `bg-warning text-black`
                  : message.isNotification
                  ? `bg-info text-black`
                  : `bg-grey text-white`
              }`}
            >
              <p className="text-xs">{message.message}</p>
              <span className="font-medium text-xxs">
                {moment(message.time).format("hh:mm A")}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full h-[72px] border-2 border-white rounded-sm px-3.5 py-2.5 flex gap-4"
        onKeyDown={handleSubmit}
      >
        <input
          type="text"
          value={message}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setMessage(e.target.value)
          }
          placeholder="Message here"
          className="w-full h-full font-jost font-semibold text-base bg-transparent outline-none border-0 focus:ring-0 p-0 placeholder:text-white"
        />
        <button
          className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center shrink-0"
          onClick={handleSend}
        >
          <Image src="/send.png" width={24} height={24} alt="Send" />
        </button>
      </div>
    </div>
  );
};

export default Messages;
