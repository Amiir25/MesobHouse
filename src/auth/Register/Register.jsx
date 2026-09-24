import React from "react";
import { FaDotCircle } from "react-icons/fa";
import RegisterLeftContent from "./RegisterLeftContent";
import RegisterRightContent from "./RegisterRightContent";

const Register = () => {
  return (
    <main className="bg-[#FFF1EB] md:px-8 lg:px-14 max-w-375 mx-auto">
      {/* Welcome Back */}
      <section className="flex items-center justify-center md:justify-end my-4">
        <p
          className="bg-[#F0DFD8] text-dark-yellow flex items-center gap-2 text-[10px] lg:text-sm
          w-fit py-1 px-4 rounded-xl"
        >
          <FaDotCircle />
          <span>Join The Mesob Family</span>
        </p>
      </section>

      {/* Main section */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="hidden md:block">
          <RegisterLeftContent />
        </div>

        {/* Right Content */}
        <RegisterRightContent />
      </section>
    </main>
  );
};

export default Register;
