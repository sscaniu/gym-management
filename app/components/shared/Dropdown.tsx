import React, { FC, useState } from "react";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";

interface DropdownProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

const Dropdown: FC<DropdownProps> = ({ onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleEdit = () => {
    setIsOpen(false);
    onEdit && onEdit();
  };

  const handleDelete = () => {
    setIsOpen(false);
    onDelete && onDelete();
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div className="relative flex">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-6 h-6 rounded-full ${
            isOpen ? `bg-dark` : `bg-transparent`
          } hover:bg-dark focus-visible:bg-dark focus-visible:outline focus-visible:outline-1 focus-visible:-outline-offset-1 focus-visible:outline-info`}
        >
          <Image src="/dots.png" width={24} height={24} alt="Menu" />
        </button>
        {isOpen && (
          <div className="absolute right-0 w-[180px] grid gap-[1px] -bottom-1 translate-y-full shadow-center">
            <button
              className="bg-dark hover:bg-[#313B5B] cursor-pointer focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-info focus-visible:bg-[#313B5B] px-2 py-3 flex items-center gap-2 rounded-t-lg"
              onClick={handleEdit}
            >
              <Image src="/edit.png" width={24} height={24} alt="Edit" />
              <span className="font-jost font-semibold text-base">Edit</span>
            </button>
            <button
              className="bg-dark hover:bg-[#313B5B] cursor-pointer focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-info focus-visible:bg-[#313B5B] px-2 py-3 flex items-center gap-2 rounded-b-lg"
              onClick={handleDelete}
            >
              <Image src="/trash.png" width={24} height={24} alt="Delete" />
              <span className="font-jost font-semibold text-base text-danger">
                Delete
              </span>
            </button>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default Dropdown;
