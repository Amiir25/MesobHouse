import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return;

  return (
    <section
      onClick={onClose}
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center
      bg-black/80"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="border w-75 h-60 relative bg-white rounded"
      >
        {/* Close Icon */}
        <IoIosCloseCircleOutline
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl cursor-pointer"
        />

        {/* Dynamic content */}
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Modal;
