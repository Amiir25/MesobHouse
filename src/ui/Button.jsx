import React from "react";

const Button = ({
  children,
  onClick,
  isActive = true,
  primary = false,
}) => {
  return (
    <button
      className={
        `py-[0.3em] px-[1em] m-2 rounded-lg text-lg hover:scale-110 active:scale-100 transition-scale duration-200
        flex items-center justify-center gap-1
        ${isActive ? "bg-[#9B2C16] text-white" : "bg-[#FCEAE4] text-[#58413D]"}
        ${primary && 'w-full'}`
      }
    >
      {children}
    </button>
  );
};

export default Button;
