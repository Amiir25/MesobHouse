import React from "react";
import { FaDotCircle } from "react-icons/fa";
import LoginLeftContent from "./LoginLeftContent";
import LoginRightContent from "./LoginRightContent";

const Login = () => {
  return (
    <main className="bg-[#FFF1EB] px-2 py-4 md:px-8 lg:p-18">
      {/* Welcome Back */}
      <section className="flex items-center justify-center md:justify-end mb-4">
        <p
          className="bg-[#F0DFD8] text-dark-yellow flex items-center gap-2 text-[10px] lg:text-sm
            w-fit py-1 px-4 rounded-xl"
        >
          <FaDotCircle />
          <span>Welcome Back to Our Table</span>
        </p>
      </section>

      {/* ================== */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="hidden md:block">
          <LoginLeftContent />
        </div>

        {/* Right Content */}
        <LoginRightContent/>
      </section>
    </main>
  );
};

export default Login;
