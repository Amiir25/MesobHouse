import React, { useEffect, useMemo, useState } from "react";
import useFetchDishes from "../hooks/useFetchDishes";
import useDebounce from "../hooks/useDebounce";

const Menu = () => {
  const { dishes, loading, error } = useFetchDishes();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedDishes, setSearchedDishes] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 200);

  const visibleDishes = useMemo(() => {
    if (!debouncedSearchTerm.trim()) return dishes;

    const term = debouncedSearchTerm.toLowerCase();
    return dishes.filter(
      (dish) =>
        dish.nameEn.toLowerCase().includes(term) ||
        dish.category.toLowerCase().includes(term),
    );
  }, [dishes, debouncedSearchTerm]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {(dishes.length > 0) && (visibleDishes.length === 0) ? (
        <p>No dish found</p>
      ) : (
        visibleDishes.map((dish) => <p key={dish.id}>{dish.nameEn}</p>)
      )}
    </div>
  );
};

export default Menu;
