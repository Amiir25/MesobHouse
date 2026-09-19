import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { emailLoginSchema, phoneLoginSchema } from "../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Popup from "../../ui/Popup";
import { BsPatchCheck } from "react-icons/bs";
import Spinner from "../../ui/Spinner";
import { usePopup } from "../../ui/PopupContext";
import { useAuth } from "../AuthContext";

const LoginForm = ({ activeBtn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const { handlePopup } = usePopup();
  const { handlePhoneLogin, handleEmailLogin } = useAuth();

  // Routing states
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/menu";

  // Conditional login schema
  const schema = activeBtn === "phone" ? phoneLoginSchema : emailLoginSchema;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const success =
      activeBtn === "phone"
        ? handlePhoneLogin(data)
        : handleEmailLogin(data);

    if (!success) return;
    
    setShowSpinner(true);

    setTimeout(() => {
      handlePopup("success", "Login Successfull!");
    }, 500);

    setTimeout(() => {
      setShowSpinner(false);
      navigate(from, { replace: true });
    }, 2000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="my-8">
        {/* Phone */}
        <section className={`${activeBtn !== "phone" && "hidden"} `}>
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
                type="tel"
                id="phone"
                {...register("phone")}
                placeholder="0912345678"
                className="px-2 border-none outline-none bg-transparent"
                aria-describedby="phone-error"
              />
            </div>
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
        <section className={`mt-4 ${activeBtn !== "email" && "hidden"} `}>
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
                type="email"
                id="email"
                {...register("email")}
                placeholder="customer@mesobhouse.com"
                className="px-2 border-none outline-none bg-transparent"
                aria-describedby="email-error"
              />
            </div>
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
          <div className="mt-4">
            <label
              htmlFor="password"
              className="text-xs flex items-center justify-between"
            >
              <span>Password</span>
              <button type="button" className="text-brand">
                Forgot Password?
              </button>
            </label>
            <div className="bg-light-red py-1 flex items-center justify-between gap-2 mt-1 px-2 rounded focus-within:ring-2 pax-2">
              <div className="flex items-center gap-2">
                <FaLock className="text-dark-yellow" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password")}
                  placeholder="..."
                  className="px-2 border-none outline-none bg-transparent"
                  aria-describedby="password-error"
                />
              </div>
              <div onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
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

        {/* Checkbox */}
        <label htmlFor="remember" className="flex items-center gap-2 mt-8">
          <input type="checkbox" id="remember" className="accent-brand" />
          <span className="text-sm">Remeber me on this device</span>
        </label>

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
                <span>Sign In to Mesob House</span>
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

export default LoginForm;
