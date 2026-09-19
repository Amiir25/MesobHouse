import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { registerSchema } from "../schema";
import Button from "../../ui/Button";
import { useAuth } from "../AuthContext";
import { usePopup } from "../../ui/PopupContext";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";

// Preferences
const preferences = [
  { id: 1, text: "All Heritage Delicacies" },
  { id: 2, text: "Fasting & Vegan (Tsom)" },
  { id: 3, text: "Halal Certified Meat" },
  { id: 4, text: "100% Pure Teff (Gluten-Free)" },
];

const RegisterationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedPreference, setSelectedPreference] = useState(1);

  const [showSpinner, setShowSpinner] = useState(false);
  const { handleRegister, isAuthenticated } = useAuth();
  const { handlePopup } = usePopup();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/menu";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    handleRegister(data);
    if (isAuthenticated) return;

    setShowSpinner(true);

    setTimeout(() => {
      handlePopup("success", "Registeration Successfull!");
    }, 500);

    setTimeout(() => {
      setShowSpinner(false);
      navigate(from, { replace: true });
    }, 2000);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-8 flex flex-col gap-4"
      >
        {/* Name */}
        <section>
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
              {...register("name")}
              placeholder="Ex. Abebe Bekele "
              className="px-2 border-none outline-none bg-transparent"
              aria-describedby="name-error"
            />
          </div>
          {errors.name && (
            <small
              id="name-error"
              role="alert"
              className="text-xs text-red-500 tracking-wider"
            >
              {errors.name.message}
            </small>
          )}
        </section>

        {/* Phone */}
        <section>
          <label
            htmlFor="phone"
            className="text-xs flex items-center justify-between"
          >
            <span>Mobile Number</span>
            <span className="text-dark-yellow">Ethio Telecom / Safaricom</span>
          </label>
          <div className="bg-light-red py-1 flex items-center gap-2 mt-1 rounded focus-within:ring-2 px-2">
            <div className="flex items-center gap-1">
              <img src="eth-flag.webp" alt="" className="w-6" />
              <span>+251</span>
            </div>
            <input
              color="tel"
              id="phone"
              {...register("phone")}
              placeholder="0912345678"
              className="px-2 border-none outline-none bg-transparent"
              aria-describedby="phone-error"
            />
          </div>
          {errors.phone && (
            <small
              id="phone-error"
              role="alert"
              className="text-xs text-red-500 tracking-wider"
            >
              {errors.phone.message}
            </small>
          )}
        </section>

        {/* Email */}
        <section>
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
              {...register("email")}
              placeholder="guest@mesobhouse.com"
              className="px-2 border-none outline-none bg-transparent"
              aria-describedby="email-error"
            />
          </div>
          {errors.email && (
            <small
              id="email-error"
              role="alert"
              className="text-xs text-red-500 tracking-wider"
            >
              {errors.email.message}
            </small>
          )}
        </section>

        {/* Password */}
        <section>
          <label
            htmlFor="password"
            className="text-xs flex items-center justify-between"
          >
            Password
          </label>
          <div className="bg-light-red py-1 flex items-center justify-between gap-2 mt-1 px-2 rounded focus-within:ring-2 pax-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
              placeholder="..."
              className="px-2 border-none outline-none bg-transparent"
              aria-describedby="password-error"
            />
            <div onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          {errors.password && (
            <small
              id="password-error"
              role="alert"
              className="text-xs text-red-500 tracking-wider"
            >
              {errors.password.message}
            </small>
          )}
        </section>

        {/* Confirm Password */}
        <section>
          <label
            htmlFor="confirm-password"
            className="text-xs flex items-center justify-between"
          >
            Confirm Password
          </label>
          <div className="bg-light-red py-1 flex items-center justify-between gap-2 mt-1 px-2 rounded focus-within:ring-2 pax-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              {...register("confirmPassword")}
              placeholder="..."
              className="px-2 border-none outline-none bg-transparent"
              aria-describedby="password-error"
            />
            <div onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          {errors.confirmPassword && (
            <small
              id="confirm-password-error"
              role="alert"
              className="text-xs text-red-500 tracking-wider"
            >
              {errors.confirmPassword.message}
            </small>
          )}
        </section>

        {/* Dining Preferences */}
        <div>
          <h2 className="text-xl mt-2">Primary Dining Preference (Optional)</h2>
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
            I agree to the Mesob House Hospitality Terms and Privacy Guidelines.
          </span>
        </div>

        {/* Submit */}
        <div className="mt-2">
          <Button color="brand" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <div className="flex items-center gap-4">
                <span>Submitting...</span>
                <div className="w-4 h-4 border border-white rounded-full border-t-transparent animate-spin"></div>
              </div>
            ) : (
              <>
                <span>Create Account & Receive Welcome Gursha</span>
                <FaArrowRightToBracket />
              </>
            )}
          </Button>
        </div>
      </form>

      {/* Spinner */}
      {showSpinner && <Spinner />}
    </div>
  );
};

export default RegisterationForm;
