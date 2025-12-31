import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";

const Body = () => {
  const [resList, setResList] = useState(restaurantsList);
  return (
    <main>
      <button
        className="filter-btn"
        onClick={() => {
          setResList(resList.filter((res) => res.info.avgRating > 4.3));
        }}
      >
        Top Rated Restaurants
      </button>
      <ul className="restaurant-list">
        {resList.map((res) => (
          <RestaurantCard resData={res} key={res.info.id} />
        ))}
      </ul>
    </main>
  );
};

export default Body;
