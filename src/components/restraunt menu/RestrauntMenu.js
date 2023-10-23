import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../body/Shimmer";
import { IMG_CDN_LINK } from "../constants";

const RestrauntMenu = () => {
  const params = useParams();
  const [restrauntInfo, setRestrautInfo] = useState(null);
  const [restrauntMenu, setRestrauntMenu] = useState(null);
  const [restrauntOffers, setRestrauntOffers] = useState(null);

  useEffect(() => {
    getRestrauntMenu();
  }, []);
  async function getRestrauntMenu() {
    const menu = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.390357109608406&lng=76.75831396132708&restaurantId=${params.resId}`
    );
    const json = await menu.json();
    console.log(json);
    setRestrautInfo(json.data?.cards[0]?.card?.card?.info);
    setRestrauntMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    setRestrauntOffers(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
  }
  console.log(restrauntOffers);
  console.log(restrauntMenu);
  return !restrauntInfo ? (
    <Shimmer />
  ) : (
    <>
      <div className=" px-[5rem]  bg-blue-900 flex flex-row  py-[5rem]  text-white justify-between">
        <div className="w-[50%]">
          <img
            className="w-[10rem]"
            src={IMG_CDN_LINK + restrauntInfo?.cloudinaryImageId}
          />
          <h1>{restrauntInfo?.name}</h1>
          <h1>{restrauntInfo?.city}</h1>
          <h1>{restrauntInfo?.avgRatingString}</h1>
          <h1>{restrauntInfo?.cuisines.join(" , ")}</h1>
        </div>
        <div className="w-[50%] ">
          <h1 className="text-3xl my-3">Offers </h1>
          {restrauntOffers.map((e) => {
            return (
              <h1>{e.info.header + `using code : ` + e.info.couponCode}</h1>
            );
          })}
          <h1 className="text-3xl my-3">Top Ordered Items :  </h1>
          {restrauntMenu.map((e) => {
            return (
              <>
                <h1> {e.card.info.name}</h1>
                {/* <p>{e.card.info.description}</p> */}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RestrauntMenu;
