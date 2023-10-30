import { useEffect, useState } from "react";
import { IMG_CDN_LINK } from "../constants";

const RestrauntItems = ({ res }) => {
  const [showCategoryItems, setShowCategoryItems] = useState(false);
  useEffect(() => {
    if (res.card.card.title == "Recommended") {
      setShowCategoryItems(true);
      // console.log("reco");
    }
  }, []);
  return (
    <>
      {
        <>
          <div className="flex align-center justify-between w-full mb-3 border-b-2 border-primaryLight">
            <h1 className="text-3xl text-black font-[500]">
              {res.card.card.title +
                " (" +
                res.card.card.itemCards.length +
                ")"}
            </h1>
            <button onClick={() => setShowCategoryItems(!showCategoryItems)}>
              More
            </button>
          </div>{" "}
          {showCategoryItems &&
            res.card.card.itemCards.map((item) => {
              return (
                <>
                  {
                    <>
                      <div className="flex w-full px-[1rem]  justify-between mb-3 border-b-[1px] py-2 border-[#4B5759] rounded-sm">
                        <div className="w-[70%]">
                          <div className="flex items-center gap-3">
                            {item?.card?.info?.name}
                            {item.card.info.isVeg == 1 ? (
                              <>
                                <div className="h-[15px] w-[15px] flex justify-center items-center bg-white">
                                  <div className="h-[7px] w-[7px]  bg-[#228B22] rounded-[50%]"></div>
                                </div>
                              </>
                            ) : (
                              <>
                                {" "}
                                <div className="h-[15px] w-[15px] flex justify-center items-center bg-white">
                                  <div className="h-[7px] w-[7px] bg-[rgb(255,0,0)] rounded-[50%]"></div>
                                </div>
                              </>
                            )}
                          </div>

                          <p className="text-sm text-[rgb(116,132,122)]">
                            {item?.card?.info?.description}
                          </p>
                          <p className="text-sm my-2">
                            {item.card.info.ratings.aggregatedRating.rating +
                              " stars, " +
                              item.card.info.ratings.aggregatedRating
                                .ratingCount}
                          </p>
                          <p className="my-1">
                            ₹{Math.round(item?.card?.info?.price / 100)}
                            /-
                          </p>
                        </div>
                        <div className="h-[100px] w-[100px] rounded-lg overflow-hidden bg-yellow-400">
                          <img
                            src={IMG_CDN_LINK + item?.card?.info?.imageId}
                            className="h-[100%] w-[100%] object-fill"
                          ></img>
                        </div>
                      </div>
                    </>
                  }
                </>
              );
            })}
        </>
      }
    </>
  );
};

export default RestrauntItems;
