import React, { useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import Button from "../../ui/Button";
import {
  FaArrowRight,
  FaArrowRightToBracket,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaUser,
} from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import RegisterLeftContent from "./RegisterLeftContent";

// Password & Confirm Password
const passes = [
  {
    type: "password",
    name: "Password",
    placeholder: "Minimum 8 characters",
  },
  {
    type: "confirmPassword",
    name: "Confirm Password",
    placeholder: "Repeat Password",
  },
];

// Preferences
const preferences = [
  { id: 1, text: "All Heritage Delicacies" },
  { id: 2, text: "Fasting & Vegan (Tsom)" },
  { id: 3, text: "Halal Certified Meat" },
  { id: 4, text: "100% Pure Teff (Gluten-Free)" },
];

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [selectedPreference, setSelectedPreference] = useState(1);

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
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.password
    ) {
      error = "Please fill all fields to register!";
    } else if (!formData.email && !phoneRegExp.test(formData.phone)) {
      error = "Enter a valid phone number. Use 09…, 07…, +2519… or +2517…";
    } else if (!formData.phone && !emailRegExp.test(formData.email)) {
      error = "Enter a valid email address.";
    } else if (formData.password.length < 8) {
      error = "Password must be at least 8 characters.";
    } else if (formData.password !== formData.confirmPassword) {
      error = "Passwords don't match";
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
          <span>Join The Mesob Family</span>
        </p>
      </div>

      {/* ================= */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="hidden md:block">
          <RegisterLeftContent/>
        </div>

        {/* Right Content */}
        <div className="bg-white py-20 px-2 lg:px-8 rounded-lg">
          <h2 className="text-2xl lg:text-5xl">
            Create Your Mesob House Account
          </h2>
          <p className="text-xs lg:text-lg leading-tight mt-1 text-light-text font-light">
            Join our culinary heritage circle in less than a minute.
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
              OR Register with Your Detail
            </p>
            <hr className="flex-1" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="my-8 flex flex-col gap-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-xs flex items-center justify-between"
              >
                Full Name
              </label>
              <div className="bg-light-red py-1 flex items-center gap-2 mt-1 rounded focus-within:ring-2 px-2">
                <FaUser className="text-dark-yellow" />
                <input
                  color="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex. Abebe Bekele "
                  className="px-2 border-none outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
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
            <div>
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
                  placeholder="gust@mesobhouse.com"
                  className="px-2 border-none outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="flex flex-col lg:flex-row md:items-center gap-2 gap-y-6">
              {passes.map((input) => (
                <div key={input.type}>
                  <label
                    htmlFor={input.type}
                    className="text-xs flex items-center justify-between"
                  >
                    {input.name}
                  </label>
                  <div className="bg-light-red py-1 flex items-center justify-between gap-2 mt-1 px-2 rounded focus-within:ring-2 pax-2">
                    <input
                      type={showPassword ? "text" : "password"}
                      id={input.type}
                      name={input.type}
                      value={
                        input.type === "password"
                          ? formData.password
                          : formData.confirmPassword
                      }
                      onChange={handleChange}
                      placeholder={input.placeholder}
                      className="px-2 border-none outline-none bg-transparent"
                    />
                    <div onClick={() => setShowPassword((prev) => !prev)}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dining Preferences */}
            <div>
              <h2 className="text-xl mt-2">
                Primary Dining Preference (Optional)
              </h2>
              <p className="text-xs tracking-wide">
                Helps our chefs customize your banquet platters and fasting
                recommendations.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                {preferences.map((p) => (
                  <Button
                    key={p.id}
                    color={selectedPreference === p.id ? "brand" : "light-red"}
                    onClick={() => setSelectedPreference(p.id)}
                  >
                    {p.text}
                  </Button>
                ))}
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 mt-8">
              <input type="checkbox" className="accent-brand" />
              <span className="text-sm">
                I agree to the Mesob House Hospitality Terms and Privacy
                Guidelines.
              </span>
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
                <span>Create Account & Receive Welcome Gursha</span>
                <FaArrowRightToBracket />
              </Button>
            </div>

            {/* Sign in */}
            <p className="text-sm text-center">
              Alreay part of our dining family?
              <span className="text-brand cursor-pointer"> Sign in here</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
