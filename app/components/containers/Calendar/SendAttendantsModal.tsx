import React, { FC, useState } from "react";
import Image from "next/image";
import Modal from "../../shared/Modal";
import Button from "../../shared/Button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const SendAttendantsModal: FC<ModalProps> = ({ open, onClose }) => {
  const [sent, setSent] = useState<boolean>(false);
  const handleSend = () => {
    setSent(true);
  };

  const handleClose = () => {
    setSent(false);
    onClose && onClose();
  };

  return (
    <Modal
      title={!sent ? `Send Attendants` : ``}
      open={open}
      onClose={handleClose}
    >
      {sent ? (
        <div className="font-rubik text-base text-center pb-10">
          The information has been successfully sent to all attendees.
        </div>
      ) : (
        <div className="grid gap-10">
          <div className="font-rubik text-base">
            Would you like to notify all attendees about this class?
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
            <Button className="w-[230px]" color="warning" onClick={handleSend}>
              <div className="flex justify-center items-center gap-2">
                Send
                <Image
                  src="/send.png"
                  width={24}
                  height={24}
                  alt="Sent Attendant"
                />
              </div>
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default SendAttendantsModal;
