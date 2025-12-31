import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.509078&lng=78.3001221&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <main>
      <div className="search-wrapper">
        <input
          type="text"
          className="search-box"
          placeholder="Search here..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="btn-search"
          onClick={() => {
            console.log(searchText);
            console.log(resList);
            setFilteredResList(
              resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          setFilteredResList(resList.filter((res) => res.info.avgRating > 4));
        }}
      >
        Top Rated Restaurants
      </button>
      <ul className="restaurant-list">
        {filteredResList.map((res) => (
          <RestaurantCard resData={res} key={res.info.id} />
        ))}
      </ul>
    </main>
  );
};

export default Body;
