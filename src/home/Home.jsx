import React from "react";
import useFetchSpecials from "../hooks/useFetchSpecials";
import {
  FaArrowDown,
  FaBarsStaggered,
  FaCartPlus,
  FaCircleCheck,
  FaCircleDot,
  FaExclamation,
  FaMugSaucer,
  FaPlus,
  FaStar,
  FaUtensils,
  FaYelp,
} from "react-icons/fa6";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeHero from "./HomeHero";
import SpecialDishes from "./SpecialDishes";
import GurshaSpirit from "./GurshaSpirit";
import Reflections from "./Reflections";
import CTA from "./CTA";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="px-2 md:px-8 lg:px-18 mt-8">
      {/* Top text */}
      <section className="mx-2 flex items-center justify-center lg:justify-between gap-4 text-xs lg:text-sm mt-4 bg-light-red p-2 rounded-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center gap-x-4">
          <FaCircleCheck className="text-dark-yellow mx-12" />
          <p className="text-dark-red">100% PURE TEFF</p>
          <p className="text-dark-yellow">Slow-Cooked Daily</p>
          <p>Heritage grains sourced direct fro</p>
        </div>
        <p className="bg-green-200 text-green-800 w-fit px-4 py-1 rounded-2xl">
          Gluten Free
        </p>
      </section>

      {/* Hero */}
      <HomeHero/>

      {/* Specials */}
      <SpecialDishes/>

      {/* Gursha Spirit */}
      <GurshaSpirit/>

      {/* Reflections section */}
      <Reflections/>

      {/* Call To Action */}
      <CTA/>
    </main>
  );
};

export default Home;
