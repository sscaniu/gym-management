import React, { FC } from "react";
import Image from "next/image";

interface ModalProps {
  children?: React.ReactNode;
  title?: string;
  open: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ open, title, onClose, children }) => {
  if (!open) return;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-screen bg-black/50"
        onClick={onClose}
      />
      <div className="max-w-[645px] bg-black relative z-50 shadow-sm rounded-sm border border-dark">
        <div
          className={`px-8 pt-7 pb-4 flex items-center ${
            title ? `border-b border-b-dark` : ``
          }`}
        >
          {title && <h3 className="font-rubik text-xl">{title}</h3>}
          <button className="invert absolute top-8 right-8" onClick={onClose}>
            <Image src="/close.png" width={24} height={24} alt="Close" />
          </button>
        </div>
        <div className="p-8 pt-10">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
