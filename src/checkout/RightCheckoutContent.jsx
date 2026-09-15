import React, { useState } from "react";
import CheckoutCartItems from "./CheckoutCartItems";
import { useNavigate } from "react-router-dom";
import { BiCheckShield } from "react-icons/bi";
import Button from "../ui/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useCart } from "../cart/CartContext";
import CheckoutMessage from "./CheckoutMessage";
import Spinner from "../ui/Spinner";

const RightCheckoutContent = () => {
  const { cart, onAddToCart, subtotal, total } = useCart();
  const navigate = useNavigate();

  //
  const [showSpinner, setShowSpinner] = useState(false);
  const [showCheckoutMsg, setShowCheckoutMsg] = useState(false);

  //   Handle Checkout
  const handleCheckout = () => {
    setShowSpinner(true);
    setTimeout(() => {
        setShowSpinner(false)
        setShowCheckoutMsg(true);
    }, 3000);
  }

  // Handle finishing
  const handleFinishing = () => {
    setShowSpinner(true);
    setTimeout(() => {
        setShowSpinner(false);
        onAddToCart("clear");
        navigate("/");
    }, 500);
  };

  // Loading Spinner
  if (showSpinner) {
    return <Spinner/>
  }

  // Checkout message
  if (showCheckoutMsg) {
    return <CheckoutMessage onFinish={handleFinishing}/>
  }

  return (
    <div className="bg-white px-2 py-8 rounded h-fit">
      {/* Title */}
      <section className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Order Summery</h2>
        <button
          className="text-dark-red px-2 py-1 rounded"
          onClick={() => navigate("/cart")}
        >
          Edit Cart
        </button>
      </section>

      {/* Cart items */}
      <CheckoutCartItems />

      {/* Price List */}
      <section>
        <p className="flex items-center justify-between text-sm my-1 text-gray-800">
          <span>Item Subtotal</span>
          <span className="px-2 py-1 rounded-2xl">ETB {subtotal}</span>
        </p>
        <p className="flex items-center justify-between text-sm my-1 text-gray-800">
          <span>Complimentary Injera (4 Rolls)</span>
          <span className="px-2 py-1 rounded-2xl">INCLUDED</span>
        </p>
        <p className="flex items-center justify-between text-sm my-1 text-gray-800">
          <span>Clay Stew Thermal Packaging</span>
          <span className="px-2 py-1 rounded-2xl">FREE</span>
        </p>
      </section>

      {/* Grand total */}
      <section className="mt-8 bg-light-red px-4 py-2 mx-2 rounded">
        <p className="text-xs flex items-center justify-between">
          <span className="text-gray-800">GRAND TOTAL</span>
          <span className="text-dark-yellow">Taxes included</span>
        </p>
        <h2 className="mt-2 text-3xl text-brand font-bold">ETB {total}</h2>
      </section>

      {/* More dishes */}
      <section className="text-sm flex items-center justify-center gap-2 mt-4">
        <BiCheckShield className="text-dark-yellow" />
        <p className="flex-2">
          Guaranteed steaming hot in woven sealed carriers or 100% remade.
        </p>
      </section>

      {/* Confirm button */}
      <section className="mt-8" onClick={handleCheckout}>
        <Button color="brand">
          Confirm Order . <span className="font-semibold">ETB {total}</span>
        </Button>
      </section>

      {/* Small buttons */}
      <section className="flex items-center justify-center gap-6 text-dark-red text-xs mt-4">
        <button
          className="flex items-center gap-2"
          onClick={() => navigate("/cart")}
        >
          <FaArrowLeft />
          <span>Return to Cart</span>
          <p></p>
        </button>
        <p className="font-black">.</p>
        <button onClick={() => navigate("/menu")}>Add More Dishes</button>
      </section>

      {/* Phone support */}
      <section className="bg-light-red px-2 py-4 rounded flex items-center justify-between mt-8">
        <div className="flex items-start gap-2">
          <FaPhoneAlt className="text-dark-yellow bg-light-yellow w-12 h-8 p-2 rounded-lg" />
          <p className="flex flex-col">
            <span className="text-sm font-semibold">Need Phone Support?</span>
            <span className="text-xs">
              Direct kitchen desk: +251 911 234 567
            </span>
          </p>
        </div>
        <button className="bg-white text-gray-800 px-4 py-2 rounded text-xs">
          Call Now
        </button>
      </section>
    </div>
  );
};

export default RightCheckoutContent;
