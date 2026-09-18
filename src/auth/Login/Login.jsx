import React from "react";
import { FaDotCircle } from "react-icons/fa";
import LoginLeftContent from "./LoginLeftContent";
import LoginRightContent from "./LoginRightContent";

const Login = () => {

  // Form validation
  const validForm = () => {
    let error = "";
    const phoneRegExp = /^(?:\+251|0)9\d{8}$/;
    const emailRegExp = /^\S+@\S+\.\S+$/;
    if (
      !formData.phone.trim() &&
      !formData.email.trim() &&
      !formData.password.trim()
    ) {
      error = "Fill out the form to login!";
    } else if (!formData.phone.trim() && !formData.email.trim()) {
      error = "Enter your phone number or email address!";
    } else if (!formData.password.trim()) {
      error = "Enter your password!";
    } else if (!formData.email.trim() && !phoneRegExp.test(formData.phone)) {
      error = "Enter a valid phone number. Use 09…, 07…, +2519… or +2517…";
    } else if (!formData.phone.trim() && !emailRegExp.test(formData.email)) {
      error = "Enter a valid email address.";
    } else if (formData.password.length < 8) {
      error = "Password must be at least 8 characters.";
    }

    if (error) {
      setErrorMsg(error);
      setShowErrorMsg(true);
      setTimeout(() => {
        setShowErrorMsg(false);
      }, 5000);

      return false;
    }

    return true;
  };


  return (
    <section className="bg-[#FFF1EB] md:px-8 lg:px-14 py-18">
      {/* Welcome Back */}
      <div className="flex items-center justify-center md:justify-end mb-8">
        <p
          className="bg-[#F0DFD8] text-dark-yellow flex items-center gap-2 text-[10px] lg:text-sm
            w-fit py-1 px-4 rounded-xl"
        >
          <FaDotCircle />
          <span>Welcome Back to Our Table</span>
        </p>
      </div>

      {/* ================== */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="hidden md:block">
          <LoginLeftContent />
        </div>

        {/* Right Content */}
        <LoginRightContent/>
      </div>
    </section>
  );
};

export default Login;
