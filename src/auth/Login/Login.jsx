import React, { useState } from "react";
import { FaDotCircle, FaLock } from "react-icons/fa";
import Button from "../../ui/Button";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import {
  FaAngleRight,
  FaArrowRight,
  FaArrowRightToBracket,
  FaBagShopping,
  FaCircleCheck,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaMobile,
  FaTriangleExclamation,
} from "react-icons/fa6";
import LoginLeft from "./LoginLeftContent";

const Login = () => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
  });
  const [activeBtn, setActiveBtn] = useState("phone");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/menu";

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((form) => ({ ...form, [name]: value }));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validForm()) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate(from, { replace: true });
    }

    return;
  };

  return (
    <section className="bg-[#FFF1EB] md:px-8 lg:px-14">
      {/* Welcome Back */}
      <div className="flex items-center justify-center md:justify-end my-4">
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
          <LoginLeft />
        </div>

        {/* Right Content */}
        <div className="bg-white py-20 px-2 lg:px-8 rounded-lg">
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
              <img
                src="google-logo.webp"
                alt=""
                className="w-8 h-8 rounded-full"
              />
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

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="my-8">
            {/* Phone */}
            <div className={`${activeBtn !== "phone" && "hidden"} `}>
              <label
                htmlFor="phone"
                className="text-xs flex items-center justify-between"
              >
                <span>Mobile Number</span>
                <span className="text-dark-yellow">
                  Ethio Telecom / Safaricom
                </span>
              </label>
              <div className="bg-light-red py-1 flex items-center gap-2 mt-1 rounded focus-within:ring-2 px-2">
                <div className="flex items-center gap-1">
                  <img src="eth-flag.webp" alt="" className="w-6" />
                  <span>+251</span>
                </div>
                <input
                  color="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0912345678"
                  className="px-2 border-none outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Email */}
            <div className={`mt-4 ${activeBtn !== "email" && "hidden"} `}>
              <label
                htmlFor="email"
                className="text-xs flex items-center justify-between"
              >
                <span>Email</span>
              </label>
              <div className="bg-light-red py-1 flex items-center gap-2 mt-1 rounded focus-within:ring-2 px-2">
                <FaEnvelope className="text-dark-yellow" />
                <input
                  color="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="customer@mesobhouse.com"
                  className="px-2 border-none outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mt-4">
              <label
                htmlFor="password"
                className="text-xs flex items-center justify-between"
              >
                <span>Password</span>
                <button className="text-brand">Forgot Password?</button>
              </label>
              <div className="bg-light-red py-1 flex items-center justify-between gap-2 mt-1 px-2 rounded focus-within:ring-2 pax-2">
                <div className="flex items-center gap-2">
                  <FaLock className="text-dark-yellow" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="0912345678"
                    className="px-2 border-none outline-none bg-transparent"
                  />
                </div>
                <div onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 mt-8">
              <input type="checkbox" className="accent-brand" />
              <span className="text-sm">Remeber me on this device</span>
            </div>

            {/* Error message */}
            <div
              className={`fixed inset-x-0 ${showErrorMsg ? "top-0" : "-top-30"} bg-red-200 text-red-800 border-l-12 border-red-500
            flex items-center gap-4 p-4 text-lg tracking-wider transition-all duration-200`}
            >
              {/* <FaTriangleExclamation className="text-red-500"/> */}
              {errorMsg}
            </div>

            {/* Submit */}
            <div className="mt-2">
              <Button color="brand" type="submit">
                <span>Sign In to Mesob House</span>
                <FaArrowRightToBracket />
              </Button>
            </div>
          </form>

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
      </div>
    </section>
  );
};

export default Login;
