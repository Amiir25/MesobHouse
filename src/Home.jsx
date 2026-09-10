import React from "react";
import useFetchSpecials from "./hooks/useFetchSpecials";

const Home = () => {
  const { specials, loading, error } = useFetchSpecials();

  if (loading) return <p>Loading Special Dishes...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h2>Today's Specials</h2>
      {specials.map((dish) => (
        <p key={dish.id}>{dish.nameEn}</p>
      ))}
    </div>
  );
};

export default Home;
