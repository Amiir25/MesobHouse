import React from "react";
import Button from "../../ui/Button";
import { FaCartPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../cart/CartContext";

const DishCard = ({ dish, onDishClick }) => {
  const { slug, nameEn, priceETB, description, imagePath } = dish;
  const { onAddToCart } = useCart();
  const navigate = useNavigate();

  // Add to cart
  const handleQuickAdd = (dish, e) => {
    e.stopPropagation();
    onAddToCart("add", dish);
  };

  return (
    <section
      className="border border-light-yellow rounded-xl overflow-hidden"
      onClick={() => navigate(`/menu/${slug}`)}
    >
      <img
        src={`${imagePath}/image-main.png`}
        alt={nameEn}
        className="rounded-xl lg:hover:scale-110 transition-scale duration-200"
      />
      <div className="py-2 px-2 lg:p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{nameEn}</h2>
        </div>
        <p className="text-sm mt-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-dark-red font-bold">ETB {priceETB}</p>
          <div>
            <Button color={"brand"} onClick={(e) => handleQuickAdd(dish, e)}>
              <FaCartPlus />
              Quick Add
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DishCard;
