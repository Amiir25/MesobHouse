import React, { useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";

const UserProfile = () => {
  const { currentUser, logout } = useAuth();
  const { name, phone, email } = currentUser;
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  //   Handle Logout
  const handleLogout = () => {
    setShowSpinner(true);

    navigate("/", { replace: true });

    setTimeout(() => {
      logout();
      setShowSpinner(false);
    }, 2000);
  };

  if (showSpinner) return <Spinner />;

  return (
    <section className="relative cursor-pointer">
      {/* Profile Image */}
      <p
        onClick={() => setShowDropdown((prev) => !prev)}
        className="bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center"
      >
        {name[0].toUpperCase()}
      </p>

      {/* Dropdown */}
      <div
        className={`absolute right-0 opacity-0 bg-light-yellow w-32 md:w-38 py-4 px-2 shadow-2xl rounded-xl text-xs md:text-sm
            ${showDropdown && "opacity-100 top-full right-0 lg:right-1/2 lg:transform lg:translate-x-1/2"} transition-all duration-200`}
      >
        <div className="text-gray-900 font-semibold tracking-wider">
          <p>{name}</p>
          <p>{email}</p>
        </div>
        <hr className="my-4 text-gray-400" />
        <Button color="light-red" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </section>
  );
};

export default UserProfile;
