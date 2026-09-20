import React from "react";
import useFetchSpecials from "../hooks/useFetchSpecials";
import { FaCartPlus, FaUtensils } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const SpecialDishes = () => {
  const navigate = useNavigate();
  let { specials, loading, error } = useFetchSpecials();

  return (
    <section id="specials" className="mt-24">
      <div className="lg:max-w-200">
        <p className="text-dark-red text-[10px] md:text-sm flex items-center gap-2">
          <FaUtensils />
          <span>FROM THE CLAY POTS</span>
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold mt-2">
          Today's Curated Chef Specials
        </h1>
        <p className="text-sm lg:text-base tracking-wide my-4">
          Carefully balanced stews prepared at dawn using our matriarch's
          40-spice blend, served piping hot on hand-stretched injera.
        </p>
      </div>

      {loading && (
        <div className="text-gray-500 mb-20">
          <span>Loading Special Dishes</span>
          <div className="space-y-2 mt-2">
            <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-[80%] bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-[90%] bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      )}
      {error ? (
        <p className="border-t-4 border--4 border-red-500 text-red-500 text-center gap-2 mx-4 rounded-2xl p-2">
          Unable to load special dishes at the moment! Try again later.
        </p>
      ) : (
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-4">
          {specials.slice(0, 3).map((dish) => {
            const { slug, nameEn, priceETB, description, imagePath } = dish;
            return (
              <div
                key={slug}
                className="border border-light-yellow rounded-xl overflow-hidden"
                onClick={() => navigate(`/menu/${slug}`)}
              >
                <img
                  src={`${imagePath}/image-main.png`}
                  alt={nameEn}
                  className="rounded-xl lg:hover:scale-105 transition-scale duration-500"
                />
                <div className="py-2 px-2 lg:p-4">
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
                      <Button color={"brand"} onClick={() => navigate("/cart")}>
                        <FaCartPlus />
                        Quick Add
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default SpecialDishes;
