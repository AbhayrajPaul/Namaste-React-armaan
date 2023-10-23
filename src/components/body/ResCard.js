import { Link } from "react-router-dom";
import { IMG_CDN_LINK } from "../constants";

const RestrauntCard = ({
  cloudinaryImageId,
  id,
  name,
  avgRating,
  slaString,
  cuisines,
  location,
}) => {
  return (
    <div className="res-card">
      <img alt="card-img" src={IMG_CDN_LINK + cloudinaryImageId} />
      <Link to={`/restraunt/${id}`} className="text-2xl font-[700] ">
        <h2>{name}</h2>
      </Link>
      <h2>
        <span>{avgRating}</span> star rating <span>{slaString}</span>
      </h2>
      <h2>{cuisines}</h2>
      <h2>{location}</h2>
    </div>
  );
};

export default RestrauntCard;
