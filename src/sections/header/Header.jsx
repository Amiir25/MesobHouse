import React from "react";
import { useCart } from "../../cart/CartContext";
import { GiShoppingCart } from "react-icons/gi";
import { GrCart } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import SmallScreenNavbar from "./SmallScreenNavbar";
import LargeScreenNavbar from "./LargeScreenNavbar";
import HeaderCartInfo from "./HeaderCartInfo";
import UserProfile from "./UserProfile";
import { useAuth } from "../../auth/AuthContext";

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="px-2 md:px-8 lg:px-18 py-3 flex items-center justify-between max-w-375">
      {/* Logo */}
      <img src="mesob-house.png" alt="Logo" className="w-24 md:w-28 lg:w-40" />

      <section className="flex items-center gap-4">
        {/* Cart Data */}
        <HeaderCartInfo />

        {/* Navbar for small screens */}
        <SmallScreenNavbar/>

        {/* Navbar for large screens */}
        <LargeScreenNavbar />

        {/* Profile */}
        {isAuthenticated && <UserProfile />}
      </section>
    </header>
  );
};

export default Header;
