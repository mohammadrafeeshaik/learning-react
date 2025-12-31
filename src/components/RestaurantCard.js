import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    costForTwo,
    areaName,
    cuisines,
    avgRating,
    sla,
  } = resData.info;
  return (
    <li className="restaurant-item">
      <div className="restaurant-img-wrapper">
        <img src={CDN_URL + cloudinaryImageId} alt="" />
      </div>
      <div className="restaurant-details">
        <h2>{name}</h2>
        <div>{avgRating} Ratings</div>
        <div>{costForTwo}</div>
        <div>{areaName}</div>
        <div>{cuisines.join(", ")}</div>
        <div>{sla?.slaString}</div>
      </div>
    </li>
  );
};

export default RestaurantCard;
