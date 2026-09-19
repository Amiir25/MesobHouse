import React, { useState } from "react";
import Button from "../../ui/Button"
import LoginForm from "./LoginForm";
import { FaAngleRight, FaArrowRight, FaEnvelope, FaMobile } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";

const LoginRightContent = () => {
  // Phone vs Email options
  const [activeBtn, setActiveBtn] = useState("phone");

  return (
    <div className="bg-white py-20 px-2 lg:px-8 m-2 rounded-lg">
      <p className="text-xs lg:text-sm text-brand">Member Portal</p>
      <h2 className="text-2xl lg:text-5xl">Welcome to the Mesob Table</h2>
      <p className="text-xs lg:text-lg leading-tight mt-1 text-light-text font-light">
        Sign in to manage your feasts, Telebirr rewards, and reserved dining
        mesobs.
      </p>

      {/* Telebirr & Google */}
      <div className="mt-8 flex flex-col lg:flex-row justify-center lg:justify-start gap-2">
        <Button color="light-red">
          <img
            src="telebirr-logo.jpg"
            alt=""
            className="w-8 h-8 rounded-full"
          />
          <span className="flex flex-col items-start">
            <span className="block text-lg">Telebirr SuperApp</span>
            <small className="text-xs font-extralight">
              Scan or tap to Login
            </small>
          </span>
          <FaArrowRight />
        </Button>

        <Button color="light-red">
          <img src="google-logo.webp" alt="" className="w-8 h-8 rounded-full" />
          <span className="flex flex-col items-start">
            <span className="block text-lg">Google Sign-In</span>
            <small className="text-xs font-extralight">
              Continue with Google
            </small>
          </span>
          <FaArrowRight />
        </Button>
      </div>

      {/* Horizontal line */}
      <div className="flex items-center justify-center gap-4 mt-4 text-dark-text">
        <hr className="flex-1" />
        <p className="text-xs lg:text-sm tracking-wider">
          OR WITH PHONE / EMAIL
        </p>
        <hr className="flex-1" />
      </div>

      {/* Phone / Email Buttons */}
      <div className="mt-4 flex items-center justify-center gap-2 p-2 bg-light-red rounded-lg lg:text-2xl">
        <Button
          color={activeBtn === "phone" ? "white" : "light-red"}
          onClick={() => setActiveBtn("phone")}
        >
          <FaMobile className="text-xl" />
          <span className="text-sm text-left">Ethiopian Mobile (+251)</span>
        </Button>
        <Button
          color={activeBtn === "email" ? "white" : "light-red"}
          onClick={() => setActiveBtn("email")}
        >
          <FaEnvelope className="text-xl" />
          <span className="text-sm text-left">Email Address</span>
        </Button>
      </div>

      {/* Login form */}
      <LoginForm activeBtn={activeBtn} />

      <hr className="text-dark-red flex-1 my-8" />

      {/* Register */}
      <div className="flex flex-col lg:flex-row gap-y-4 items-start md: justify-between">
        <div className="flex-1 flex flex-col">
          <p>New to our dining family?</p>
          <Link
            to="/register"
            className="text-dark-red flex items-center gap-2"
          >
            <span>Register & Join the Mesob Table</span>
            <FaAngleRight />
          </Link>
        </div>

        {/* Continue as Guest */}
        <div className="text-dark-yellow flex-1 flex items-center justify-end gap-1">
          <FaBagShopping />
          <p>Continue as Guest</p>
        </div>
      </div>
    </div>
  );
};

export default LoginRightContent;
