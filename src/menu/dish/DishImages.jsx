import React from "react";
import useFetchDishes from "../../hooks/useFetchDishes";
import { useParams } from "react-router-dom";

const DishImages = ({ selectedDish }) => {
  const { slug } = useParams();

  return (
    <section className="mb-8 w-86 lg:w-full mx-auto">
      {/* Big image */}
      <img
        src={`${selectedDish?.imagePath}/image-main.png`}
        alt=""
        className="rounded"
      />

      {/* Small images */}
      <div className="flex items-center gap-4 mt-2 flex-nowrap overflow-x-auto scrollbar-thin">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <img
            key={n}
            src={`${selectedDish?.imagePath}/image-${n}.png`}
            alt=""
            className="rounded shrink-0 w-30"
          />
        ))}
      </div>
    </section>
  );
};

export default DishImages;
