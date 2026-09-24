import RegisterationForm from "./RegisterationForm";
import Button from "../../ui/Button";
import { FaArrowRight } from "react-icons/fa";

const RegisterRightContent = () => {
  return (
    <div className="bg-white py-20 px-2 lg:px-8 rounded-lg max-w-125 mx-auto">
      {/* Title */}
      <section>
        <h2 className="text-2xl lg:text-5xl">
          Create Your Mesob House Account
        </h2>
        <p className="text-xs lg:text-lg leading-tight mt-1 text-light-text font-light">
          Join our culinary heritage circle in less than a minute.
        </p>
      </section>

      {/* Telebirr & Google */}
      <section className="mt-8 flex flex-col lg:flex-row justify-center lg:justify-start gap-2">
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
      </section>

      {/* Horizontal line */}
      <section className="flex items-center justify-center gap-4 mt-4 text-dark-text">
        <hr className="flex-1" />
        <p className="text-xs lg:text-sm tracking-wider">
          OR Register with Your Detail
        </p>
        <hr className="flex-1" />
      </section>

      {/* Form */}
      <RegisterationForm />

      {/* Sign in */}
      <p className="text-sm text-center">
        Alreay part of our dining family?
        <span className="text-brand cursor-pointer"> Sign in here</span>
      </p>
    </div>
  );
};

export default RegisterRightContent;
