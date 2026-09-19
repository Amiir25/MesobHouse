import React, { useState } from "react";

const Popup = ({ showPopup, type, message }) => {

  const popupStyle =
    type === "success"
      ? "bg-green-100 text-green-800 border border-green-300 border-l-15 border-green-500"
      : "bg-red-100 text-red-600 border border-red-300 border-l-15 border-l-red-500";

  return (
    <div
      className={`fixed w-full max-w-100 left-0 md:left-1/2 md:transform md:-translate-x-1/2 px-4 py-2 text-sm md:text-base tracking-wider transition-all duration-200 rounded z-40
        ${showPopup ? "opacity-100 top-0" : "opacity-0 -top-30"}
        ${popupStyle}`}
    >
      {message}
    </div>
  );
};

export default Popup;
