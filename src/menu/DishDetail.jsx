import React from "react";
import useFetchDishes from "../hooks/useFetchDishes";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaBagShopping,
  FaCircle,
  FaCircleUp,
  FaCrown,
  FaFire,
  FaHandHoldingHeart,
  FaHeart,
  FaMinus,
  FaPercent,
  FaPlus,
  FaUsers,
} from "react-icons/fa6";
import Button from "../ui/Button";
import NotFound from "../NotFound";

// Spicy level
const spicyLevels = [
  {
    id: 1,
    title: "Mild",
    text: "Alicha touch, fragrant cardamoms",
    rank: "1/3",
  },
  {
    id: 2,
    title: "Traditional",
    text: "Berbere warmth (Recommended)",
    rank: "2/3",
  },
  {
    id: 3,
    title: "Fiery Awaze",
    text: "Served with Awaze & Mitmita dip",
    rank: "3/3",
  },
];

// Side Accents
const sideAccents = [
  { id: 1, title: "Fresh Ayib", text: "Mild fresh cottage curd", tag: "Free" },
  {
    id: 2,
    title: "Stewed Gomen",
    text: "Garlic infused collard greens",
    tag: "Free",
  },
  {
    id: 3,
    title: "House Awaze Paste",
    text: "Aged tej and berbere sauce",
    tag: "Free",
  },
  {
    id: 4,
    title: "Extra Braised Egg",
    text: "Slow cooked in the wat broth",
    tag: "+ETB 40",
  },
];

const DishDetail = () => {
  const { dishes, loading, error } = useFetchDishes();
  const { slug } = useParams();
  const navigate = useNavigate();

  const selectedDish = dishes.find((dish) => dish.slug === slug);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // 404 for empty dish
  if (!selectedDish) return <NotFound type="dish" />;

  return (
    <main className="px-2 md:px-8 lg:px-18 mt-18">
      <section className="grid md:grid-cols-2 md:gap-6 lg:gap-12">
        {/* Left Content */}
        <div className="hidden md:block">
          {/* Big image */}
          <section>
            <img
              src="/src/assets/dish-images/doro-wet.jpg"
              alt=""
              className="rounded"
            />
          </section>
          {/* Small images */}
          <section className="flex items-center gap-4 mt-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-lg">
                <img
                  src="/src/assets/dish-images/doro-wet.jpg"
                  alt=""
                  className="rounded"
                />
              </div>
            ))}
          </section>
          {/* Text */}
          <section className="flex items-start gap-6 bg-light-red mt-8 px-4 py-8 rounded">
            <FaCrown className="text-brand text-xl" />
            <div className="flex-2">
              <p className="text-xs">
                <span className="text-dark-yellow">HERITAGE & LINEAGE . </span>
                <span className="text-gray-900">The Crown Jewel</span>
              </p>
              <h2 className="font-semibold text-xl">
                Royal Feast of the Highlands
              </h2>
              <p className="text-sm">
                Traditionally reserved for festive holidays such as Fasika and
                Enkutatash, Doro Wat is the ultimate test of culinary mastery.
                Each pot demands simmering over 3 kilograms of hand-chopped
                sweet red onions without a single drop of water, patiently
                reduced for half a day with our hand-milled berbere spice blend
                and nit'ir qibe (aromatic clarified butter).
              </p>
            </div>
          </section>
        </div>

        {/* Right content */}
        <div>
          {/* Image */}
          <section className="md:hidden">
            <img src="/src/assets/dish-images/doro-wet.jpg" alt="" />
          </section>

          {/*  */}
          <section>
            <h1 className="font-bold mt-2 flex flex-col md:flex-row md:items-baseline gap-x-2">
              <span className="text-xl md:text-2xl lg:text-4xl text-brand italic">
                {selectedDish?.nameEn}
              </span>
              <small className="text-dark-yellow lg:text-xl">
                {" "}
                ({selectedDish?.nameAm})
              </small>
            </h1>
            <p className="text-sm lg:text-base tracking-wide my-2">
              {selectedDish?.description}
            </p>
          </section>

          {/*  */}
          <section className="mt-4 flex flex-col md:flex-row md:items-center justify-center gap-x-4">
            <p className="flex items-center gap-1 text-amber-900 text-sm">
              <FaUsers />
              <span>{selectedDish?.servings}</span>
            </p>
            <p className="flex items-center gap-1 text text-gray-800 text-sm">
              <FaCircleUp />
              <span>Unlimited table Injera refill included</span>
            </p>
            <p className="flex items-center gap-1 text text-green-900 text-sm">
              <FaPercent />
              <span>Taxes included</span>
            </p>
          </section>

          {/* 1. Heat & Spicy Level */}
          <section className="mt-8">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <span>1. Heat & Spicy Level</span>
              <FaFire className="text-brand" />
            </h2>
            <div className="mt-2 flex flex-col md:flex-row md:items-center gap-2">
              {spicyLevels.map((level) => {
                const { id, title, text, rank } = level;
                return (
                  <div
                    key={id}
                    className={`px-4 py-2 rounded
                  ${selectedDish?.spiceLevel.includes(rank) ? "bg-brand text-light-red" : "bg-light-red text-gray-800"}`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{title}</p>
                      <p>{rank}</p>
                    </div>
                    <p className="text-xs lg:text-sm">{text}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 2. Traditional Injera base */}
          <section className="mt-8">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <span>2. Traditional Injera base</span>
              <FaCircle className="text-dark-yellow" />
            </h2>
            <div className="flex items-center justify-between bg-brand text-light-red px-4 py-2 rounded-xl mt-1">
              <div>
                <p className="font-semibold text-sm">
                  Standard Teff & Barley Blend
                </p>
                <p className="text-xs">
                  Spongy, tart sourdough, naturally soft (Traditional)
                </p>
              </div>
              <p className="text-sm">Included</p>
            </div>
            <div className="flex items-center justify-between bg-light-red text-gray-800 px-4 py-2 rounded-xl mt-1">
              <div>
                <p className="font-semibold text-sm">
                  100% Pure Organic Brown Teff
                </p>
                <p className="text-xs">
                  Naturally 100% Gluten-Free, iron-rich nutty grain
                </p>
              </div>
              <p className="text-sm">+ETB 60</p>
            </div>
          </section>

          {/* 3. Complimentary Side Accents */}
          <section className="mt-8">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              3. Complimentary Side Accents
            </h2>
            <p className="text-dark-red text-sm">
              Select up to 2 artisanal palate companions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              {sideAccents.map((accent) => {
                const { id, title, text, tag } = accent;
                return (
                  <div
                    key={id}
                    className="flex items-center justify-between px-2 py-4 rounded-xl bg-light-red"
                  >
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="accent-brand" />
                      <p>
                        <span className="block font-semibold">{title}</span>
                        <span>{text}</span>
                      </p>
                    </div>
                    <p>{tag}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Buttons */}
          <section className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-6 bg-light-red w-fit py-1 px-2 rounded">
              <button>
                <FaMinus />
              </button>
              <p className="font-semibold text-dark-red text-lg">1</p>
              <button>
                <FaPlus />
              </button>
            </div>
            <div>
              <Button color="brand">
                <FaBagShopping />
                <span>Add to Order . ETB 650</span>
              </Button>
            </div>
          </section>

          {/* Bottom */}
          <section className="flex items-center justify-between mt-10">
            <p className="flex items-center gap-1 text-sm text-gray-800">
              <FaHeart />
              <span>Save to Favorites</span>
            </p>
            <p className="flex items-center gap-1 text-sm text-dark-yellow">
              <FaUsers />
              <span>Order as Group Mesob Feast</span>
            </p>
          </section>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="px-2 md:px-8 lg:px-18 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between gap-4 bg-light-red px-8 py-4 rounded-xl">
          <div className="flex items-center gap-2">
            <FaHandHoldingHeart className="w-14 h-10 bg-light-yellow text-dark-yellow p-2 rounded-lg" />
            <div>
              <p className="font-semibold">The Spirit of Gursha</p>
              <p className="text-xs md:text-sm">
                Sharing a bite directly into a companion's mouth is an act of
                deep hospitality and bond. Ask your server for communal Mesob
                presentation.
              </p>
            </div>
          </div>
          <div>
            <Button color={"white"}>Explore Full Feast Menu</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DishDetail;
