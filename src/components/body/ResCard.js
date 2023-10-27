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
  avaliable,
  areaName,
}) => {
  return (
    <div className="res-card h-[22.5rem] w-[15rem] bg-[#b0c4b1] flex flex-col rounded-xl overflow-hidden ">
      <div className="w-full  h-[50%] overflow-hidden ">
        <img
          alt="card-img"
          src={IMG_CDN_LINK + cloudinaryImageId}
          className=" h-full w-full rounded-xl  hover:scale-[1.2] duration-100 object-cover"
        />
      </div>

      <div className="px-[1rem] text-left whitespace-nowrap ">
        <Link
          to={`/restraunt/${id}`}
          className="text-2xl font-[500] h-[75%] text-center"
        >
          <>{name}</>
        </Link>
        <h2 className="">
          {id} <br></br>
          <span className="font-[700]">{avgRating}</span> star rating
        </h2>
        <h2>
          {location} , {areaName}
        </h2>
        <h2>{cuisines}</h2>

        <h2>
          {avaliable ? (
            <h2>Opened , {slaString}</h2>
          ) : (
            <h2>Closed, {slaString}</h2>
          )}{" "}
          {}
        </h2>
      </div>
    </div>
  );
};

export const WithPromotedLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <>
        <div className="relative">
          <label className="absolute bg-gray-400 text-white z-[100]  px-5 rounded-md">
            Even
          </label>
          <RestrauntCard {...props} />
        </div>
      </>
    );
  };
};

export default RestrauntCard;
