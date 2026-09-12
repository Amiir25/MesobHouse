import React from "react";

const Button = ({
  children,
  onClick,
  color,
  primary,
  type
}) => {
  
  // Dynamic button decoration
  let btnDecore = "";
  switch(color) {
    case "white":
      btnDecore = "bg-white text-dark-red ";
      break;
    case "light-red":
      btnDecore = "bg-light-red text-dark-text";
      break;
    case "light-yellow":
      btnDecore = "bg-light-yellow text-light-text";
      break;
    case "brand":
      btnDecore = "bg-brand text-white w-full shadow-xl";
      break;
    default:
      return "Button color not provided"
  }

  return (
    <button
      type={type ? "submit" : "button"}
      onClick={onClick}
      className={
        `py-[0.3em] px-[1em] rounded-lg hover:scale-105 active:scale-100 transition-scale duration-200
        flex items-center gap-2 justify-center ${btnDecore} ${primary && 'w-full'} group`
      }
    >
      {children}
    </button>
  );
};

export default Button;
