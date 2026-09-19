import React, { useState } from "react";
import { FaBars, FaCircleXmark } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useAuth } from "../../auth/AuthContext";

// Public nav links
const publicLinks = [
  { id: 1, text: "Home", to: "/" },
  { id: 2, text: "Menu", to: "/menu" },
];

// Protected nav links
const protectedLinks = [
  { id: 3, text: "Cart", to: "/cart" },
  { id: 4, text: "Checkout", to: "/checkout" },
];

const SmallScreenNavbar = () => {
  const { isAuthenticated } = useAuth();
  const [showLinks, setShowLinks] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="md:hidden">
      <FaBars className="text-xl" onClick={() => setShowLinks(true)} />
      <div
        className={`bg-white fixed top-0 ${showLinks ? "right-0" : "-right-full"} transition-all duration-300 ease-in-out
            w-screen h-screen flex flex-col items-center gap-4 pt-24 z-30`}
      >
        {/* Close icon */}
        <FaCircleXmark
          onClick={() => setShowLinks(false)}
          className="absolute top-4 right-4 text-2xl"
        />

        {/* Public Links */}
        {publicLinks.map((link) => {
          const { id, text, to } = link;

          return (
            <NavLink
              key={id}
              to={to}
              onClick={() => setShowLinks(false)}
              className={({ isActive }) =>
                isActive ? "text-brand font-black underline" : ""
              }
            >
              {text}
            </NavLink>
          );
        })}

        {/* Protected Links */}
        {isAuthenticated &&
          protectedLinks.map((link) => {
            const { id, text, to } = link;

            return (
              <NavLink
                key={id}
                to={to}
                onClick={() => setShowLinks(false)}
                className={({ isActive }) =>
                  isActive ? "text-brand font-black underline" : ""
                }
              >
                {text}
              </NavLink>
            );
          })}

        {/* Login & Register */}
        {!isAuthenticated && (
          <div className="mt-4 flex flex-col items-center">
            <Link to={"/login"} onClick={() => setShowLinks(false)}>
              <Button color="white">Login</Button>
            </Link>
            <Link to={"/register"} onClick={() => setShowLinks(false)}>
              <Button color="light-red">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SmallScreenNavbar;
