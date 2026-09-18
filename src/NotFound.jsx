import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { MdOutlineMenuBook } from "react-icons/md";
import { SlBag, SlCalender } from "react-icons/sl";
import Button from "./ui/Button";
import { Link, useNavigate } from "react-router-dom";
import useFetchSpecials from "./hooks/useFetchSpecials";
import { FaCartPlus, FaPlus } from "react-icons/fa6";
import { TbViewfinderOff } from "react-icons/tb";

// Custome configuration
const configs = {
  page: {
    icon: "🗺️",
    title: "PAGE NOT FOUND",
    subtitle:
      "Looks like this path has strayed off the market trail or vanished from the map!",
    hightlight:
      "Even the most seasoned travelers lose their footing on the Addis streets!",
    description:
      "Don’t wander empty-handed — follow the aroma back to our main table for hot clay pot wats and freshly rolled teff injera.",
  },
  dish: {
    icon: "🍳",
    title: "DISH NOT FOUND",
    subtitle:
      "Looks like this dish has already been enjoyed or never made it to the kitchen!",
    hightlight: "Even the best Gursha sometimes slips!",
    description:
      "Don't let your appetite wait — our Addis kitchen has hot clay pot wats and freshly rolled teff injera ready for your table right now.",
  },
};

// Buttons
const buttons = [
  { id: 1, icon: GiKnifeFork, name: "Return to Today's Specials", link: "/" },
  { id: 2, icon: MdOutlineMenuBook, name: "Explore Full Menu", link: "/menu" },
  { id: 3, icon: SlBag, name: "Check Current Order", link: "/checkout" },
];

const NotFound = ({ type }) => {
  const navigate = useNavigate();
  const { specials, loading, error } = useFetchSpecials();
  const current = configs[type] || configs.dish;

  return (
    <div className="px-2 md:px-8 lg:px-18 mt-4">
      {/* Hero */}
      <header className="flex flex-col items-center text-center mb-18">
        {/* Icon */}
        <div className="bg-gray-100 px-8 py-4 rounded-xl relative mt-2">
          <div className="text-7xl lg:text-8xl">{current.icon}</div>
          <p className="absolute inset-x-4 md:inset-x-7 -bottom-2 bg-dark-yellow text-white px-1 py-0.5 rounded text-[10px]">
            Empty Mesob
          </p>
        </div>

        {/* 404 */}
        <div className="mt-2 text-center">
          <h1 className="text-8xl lg:text-9xl text-amber-500 font-serif">
            404
          </h1>
          <p className="text-brand font-semibold">{current.title}</p>
        </div>

        {/* Subtitle */}
        <p className="mt-2 text-sm">{current.subtitle}</p>

        {/* Description */}
        <div className="mt-8 text-sm md:text-base max-w-140">
          <span className="text-brand">{current.hightlight} </span>
          <span>{current.description}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-2 mt-8">
          {buttons.map((btn) => {
            const { id, icon: Icon, name, link } = btn;
            return (
              <div key={id}>
                <Button
                  color={id === 1 ? "brand" : "light-red"}
                  onClick={() => navigate(link)}
                >
                  <Icon />
                  {name}
                </Button>
              </div>
            );
          })}
        </div>
      </header>

      {/* Specials */}
      {loading ? (
        <p className="border-t-4 border--4 border-gray-800 text-gray-800 text-center gap-2 mx-4 rounded-2xl p-2">
          Loading today's special dishes...
        </p>
      ) : (
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-4">
          {specials.slice(0, 3).map((dish) => {
            const { slug, nameEn, priceETB, description } = dish;
            return (
              <div className="border border-light-yellow py-2 px-4 lg:p-8 rounded-xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">{nameEn}</h2>
                  <p className="text-dark-red font-bold">ETB {priceETB}</p>
                </div>
                <p className="text-sm mt-2">{description}</p>
                <div className="flex items-center justify-between mt-4">
                  <Link to={`/menu/${slug}`} className="text-dark-yellow">
                    View Details
                  </Link>
                  <div>
                    <Button
                      color={"light-red"}
                      onClick={() => navigate("/menu")}
                    >
                      Order Now
                      <FaPlus />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Bottom */}
      <section className="bg-light-red px-2 py-4 rounded flex flex-col md:flex-row items-center justify-between gap-y-4 mt-8">
        <div className="flex items-start gap-2">
          <TbViewfinderOff className="text-light-red bg-dark-red w-12 h-8 p-2 rounded-lg" />
          <p className="flex flex-col">
            <span className="text-sm font-semibold">
              Lost your table or need personalized dietary recommendations?
            </span>
            <span className="text-xs">
              Our concierge in Bole Medhanialem is delighted to prepare your
              banquet.
            </span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <button className="bg-white text-gray-800 px-4 py-2 rounded text-xs">
            +251911234567
          </button>
          <Button color="brand">
            <SlCalender/>
            Reserve
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
