import React, { FC, useState } from "react";
import Image from "next/image";
import Modal from "../../shared/Modal";
import Button from "../../shared/Button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const DeleteClientAttendantModal: FC<ModalProps> = ({ open, onClose }) => {
  const [deleted, setDeleted] = useState<boolean>(false);
  const handleDelete = () => {
    setDeleted(true);
  };

  const handleClose = () => {
    setDeleted(false);
    onClose && onClose();
  };

  return (
    <Modal
      title={!deleted ? `Delete Client Attendant` : ``}
      open={open}
      onClose={handleClose}
    >
      {deleted ? (
        <div className="font-rubik text-base text-center pb-10">
          The client has been successfully deleted from the class.
        </div>
      ) : (
        <div className="grid gap-10">
          <div className="font-rubik text-base">
            Are you sure you want to{" "}
            <span className="text-danger uppercase">DELETE</span> this client
            from Clients Attendant list?
            <br />
            Click Delete to confirm, or Cancel to keep it in your class.
          </div>
          <div className="flex justify-center gap-14">
            <Button
              color="white"
              variant="outlined"
              className="w-[230px]"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              className="w-[230px]"
              color="warning"
              onClick={handleDelete}
            >
              <div className="flex justify-center items-center gap-2">
                Delete
                <Image
                  src="/trash-white.png"
                  width={24}
                  height={24}
                  alt="Delete Client Attendant"
                  className="invert"
                />
              </div>
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default DeleteClientAttendantModal;
