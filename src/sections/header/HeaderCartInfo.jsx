import React from "react";
import { useCart } from "../../cart/CartContext";
import { useNavigate } from "react-router-dom";
import { GrCart } from "react-icons/gr";

const HeaderCartInfo = () => {
  const { cart, total } = useCart();
  const navigate = useNavigate();

  return (
    <>
      {cart.length !== 0 && (
        <section
          className="flex items-center gap-1"
          onClick={() => navigate("/cart")}
        >
          <div className="relative">
            <GrCart className="text-lg" />
            <small className="absolute -top-2 -right-1 bg-brand text-white font-semibold w-3 h-3 text-[10px] rounded-full flex items-center justify-center">
              {cart.length}
            </small>
          </div>
          <p className="text-xs text-dark-yellow">ETB {total}</p>
        </section>
      )}
    </>
  );
};

export default HeaderCartInfo;
