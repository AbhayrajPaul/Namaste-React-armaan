import { useState, useEffect } from "react";
import RestrauntCard, { WithPromotedLabel } from "../body/ResCard";
import Shimmer from "./Shimmer";
import NotFound from "./NotFound";
import { filterData } from "../../utils/helper";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestraunts, setFilteredRestraunts] = useState([]); //default value is --> (all the restraunts)
  const [allRestraunts, setAllRestraunts] = useState([]);
console.log( "all : " +allRestraunts);
console.log( "fil : " +filteredRestraunts);
  const WithPromotedLabell = WithPromotedLabel(RestrauntCard);
  useEffect(() => {
    getRestraunt();
  }, []);

  async function getRestraunt() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
    );
    const dataJSON = await data.json();
    // console.log(dataJSON);
    setAllRestraunts(
      dataJSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestraunts(
      dataJSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(
      dataJSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return (
      <>
        <h1>Looks like you're offline...net check karo beyyy</h1>
      </>
    );
  }

  return allRestraunts?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body flex  flex-col w-[full] pt-[1rem] bg-[#dedbd2] ">
        <div className="search px-[5rem] text-white">
          <input
            className="search-inp px-[1rem] py-[.5rem] text-[1.5rem] w-[90%] text-black outline-none rounded-xl"
            type="text"
            placeholder="What're you craving for ???"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              // getRestraunt(); //used to reset the restraunts wheenver user edits the input field
              // if (e.target.value === "") setFilteredRestraunts(allRestraunts);
            }}
          />

          <button
            className="search-btn h-full text-[1.5rem] font-[900] w-[10%] text-[#4a5759] bg-[#edafb8] px-[1rem] py-[.5rem] rounded-xl capitalize"
            onClick={() => {
              // filter the data
              {
                console.log("click hua");
              }
              const data = filterData(searchInput, allRestraunts); //store the data returned by filterData //
              setFilteredRestraunts(data); //sets the new data
            }}
          >
            search
          </button>
        </div>
        <div className="res px-[5rem] grid grid-cols-4 gap-y-[1rem] py-[2rem] ">
          {filteredRestraunts.length === 0 ? (
            <>
              <NotFound />
            </>
          ) : (
            filteredRestraunts.map((card) => {
              return (
                <>
                  {card.info.id % 2 == 0 ? (
                    <WithPromotedLabell
                      key={card.info.id}
                      id={card.info.id}
                      cloudinaryImageId={card.info.cloudinaryImageId}
                      name={card.info.name}
                      avgRating={card.info.avgRating}
                      slaString={card.info.sla.slaString}
                      cuisines={card.info.cuisines.splice(0, 3).join(", ")}
                      location={card.info.locality}
                      areaName={card.info.areaName}
                      avaliable={card.info.isOpen}
                    />
                  ) : (
                    <RestrauntCard
                      key={card.info.id}
                      id={card.info.id}
                      cloudinaryImageId={card.info.cloudinaryImageId}
                      name={card.info.name}
                      avgRating={card.info.avgRating}
                      slaString={card.info.sla.slaString}
                      cuisines={card.info.cuisines.splice(0, 3).join(", ")}
                      location={card.info.locality}
                      areaName={card.info.areaName}
                      avaliable={card.info.isOpen}
                    />
                  )}
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
