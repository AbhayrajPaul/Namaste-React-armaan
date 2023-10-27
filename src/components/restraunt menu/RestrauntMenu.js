import { useParams } from "react-router-dom";
import Shimmer from "../body/Shimmer";
import { IMG_CDN_LINK } from "../constants";
import useRestraunt from "../../utils/useRestraunt";
const RestrauntMenu = () => {
  const params = useParams();

  const { restrauntInfo, restrauntItems, restrauntOffers } = useRestraunt(
    params.resId
  );
  console.log(restrauntInfo);
  console.log(IMG_CDN_LINK + "rng/md/carousel/production/pkcgpsd4df6i5ud3eyuk");
  return !restrauntInfo ? (
    <Shimmer />
  ) : (
    <>
      <div className="container w-[100%] bg-pink-500 flex items-center justify-center py-[2rem]">
        <div className="w-[50%] bg-red-300 ">
          <div className="bg-blue-400 flex h-[13rem] gap-5  ">
            <div className="overflow-hidden h-full w-[40%]">
              <img
                className=" h-full w-full object-center rounded-xl"
                src={IMG_CDN_LINK + restrauntInfo?.cloudinaryImageId}
              />
            </div>
            <div className="py-[1rem]">
              <h1 className="text-4xl font-[700] text-nowrap">{restrauntInfo?.name}</h1>
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
                  restrauntInfo?.totalRatings}
              </h1>
              <h1>{restrauntInfo?.cuisines.join(" , ")}</h1>
            </div>
          </div>
          <div>
            <h1 className="text-3xl my-3">Offers </h1>
            {restrauntOffers.map((e) => {
              return (
                <h1>{e.info.header + `using code : ` + e.info.couponCode}</h1>
              );
            })}
            <h1 className="text-3xl my-3">Top Ordered Items : </h1>
            {restrauntItems.map((e) => {
              return (
                <>
                  <h1> {e.card.info.name}</h1>
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
