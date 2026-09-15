import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useCart } from "./CartContext";
import { MdDeleteForever } from "react-icons/md";

const CartItem = () => {
  const { cart, onAddToCart } = useCart();

  return (
    <section className="mt-4 flex flex-col gap-8">
      {cart.map((item) => {
        const { id, nameEn, nameAm, description, priceETB, qty } = item;
        return (
          <div
            key={id}
            className="flex flex-col lg:flex-row items-center justify-between gap-y-2 bg-white p-4 rounded-xl"
          >
            {/* Left section */}
            <section className="flex flex-col lg:flex-row gap-4">
              <div className="h-30 lg:h-auto w-full lg:w-40">
                <img
                  src="/src/assets/dish-images/doro-wet.jpg"
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </div>
              <div className="lg:max-w-60">
                <div className="font-semibold">
                  <h2 className="text-xl inline mr-2">{nameEn}</h2>
                  <span className="text-base text-dark-yellow">({nameAm})</span>
                </div>
                <p className="text-sm mt-2">{description}</p>
              </div>
            </section>

            {/* Right Section */}
            <section className="flex lg:flex-col items-center lg:items-end justify-around gap-y-2">
              <p className="font-bold text-brand">ETB {priceETB}</p>
              <div className="flex items-center gap-6 bg-light-red w-fit py-1 px-2 rounded">
                <button
                  onClick={() => onAddToCart("sub", item)}
                  className="bg-white px-2 py-1 rounded"
                >
                  <FaMinus />
                </button>
                <p className="font-semibold text-dark-red text-lg">
                  {item.qty}
                </p>
                <button
                  onClick={() => onAddToCart("add", item)}
                  className="bg-white px-2 py-1 rounded"
                >
                  <FaPlus />
                </button>
              </div>
              <button onClick={() => onAddToCart("remove", item)}>
                <MdDeleteForever className="text-2xl text-rose-500" />
              </button>
            </section>
          </div>
        );
      })}
    </section>
  );
};

export default CartItem;
