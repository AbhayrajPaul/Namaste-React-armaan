import { useParams } from "react-router-dom";
import Shimmer from "../body/Shimmer";
import { IMG_CDN_LINK } from "../constants";
import useRestraunt from "../../utils/useRestraunt";
import React from "react";
import RestrauntItems from "./RestrauntItems";
// import { Swiper, SwiperSlide } from "swiper/react";

// register();
const RestrauntMenu = () => {
  const params = useParams();

  const { restrauntInfo, restrauntItems, restrauntOffers } = useRestraunt(
    params.resId
  );

  // console.log(restrauntOffers);
  // console.log(restrauntItems);
  // console.log(restrauntItems);
  // console.log(IMG_CDN_LINK + "rng/md/carousel/production/pkcgpsd4df6i5ud3eyuk");
  return !restrauntInfo ? (
    <Shimmer />
  ) : (
    <>
      <div className="container w-[100%] flex items-center justify-center py-[2rem] bg-[#DDDBD2]">
        <div className="w-[50%]  ">
          <div className="  flex h-[13rem] gap-5  ">
            <div className="overflow-hidden h-full w-[40%]">
              <img
                className=" h-full w-full object-center rounded-xl"
                src={IMG_CDN_LINK + restrauntInfo?.cloudinaryImageId}
              />
            </div>
            <div className="py-[1rem]">
              <h1 className="text-4xl font-[700] text-nowrap">
                {restrauntInfo?.name}
              </h1>
              <h1>
                {restrauntInfo?.availability?.opened ? (
                  <h1>Opened</h1>
                ) : (
                  <h1>Closed</h1>
                )}
              </h1>
              <h1>{restrauntInfo?.locality + ", " + restrauntInfo?.city}</h1>
              <h1>
                {restrauntInfo?.avgRatingString +
                  " Stars from " +
                  restrauntInfo?.totalRatings / 1000 +
                  "k+ ratings"}
              </h1>
              <h1>{restrauntInfo?.cuisines.join(" , ")}</h1>
            </div>
          </div>
          <div className="w-[100%] bg-[#4B5759] h-[2px] my-[1rem]"></div>
          <div></div>
          <div>
            {restrauntItems.map((res, index) => {
              return (
                <>
                  <RestrauntItems res={res} key={index} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestrauntMenu;
