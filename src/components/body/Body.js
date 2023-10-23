import { useState, useEffect } from "react";
import RestrauntCard from "../body/ResCard";
import { resData } from "../config";
import Shimmer from "./Shimmer";
import NotFound from "./NotFound";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant?.info?.name
      ?.toLowerCase()
      ?.includes(searchText.toLowerCase());

    // restraunts ke upar filter lagaya
    //it will search in each restraunt(card) jokin yaha pr restraunt se represented hai
    //we are returning only that restraunt card jiske info ke andar name ke andar include  ho searchText
    // where searchText is the input provided by the user
  });
  return filteredData;
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestraunts, setFilteredRestraunts] = useState([]); //default value is --> (all the restraunts)
  const [allRestraunts, setAllRestraunts] = useState([]);

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
  }

  //early rendering //

  return allRestraunts?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search">
          <input
            className="search-inp"
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
            className="search-btn "
            onClick={() => {
              // filter the data
              const data = filterData(searchInput, allRestraunts); //store the data returned by filterData //
              setFilteredRestraunts(data); //sets the new data
            }}
          >
            search
          </button>
        </div>
        <div className="res">
          {filteredRestraunts.length === 0 ? (
            <>
              <NotFound />
            </>
          ) : (
            filteredRestraunts.map((card) => {
              return (
                <>
                  <RestrauntCard
                    key={card.info.id}
                    id={card.info.id}
                    cloudinaryImageId={card.info.cloudinaryImageId}
                    name={card.info.name}
                    avgRating={card.info.avgRating}
                    slaString={card.info.sla.slaString}
                    cuisines={card.info.cuisines.splice(0, 3).join(", ")}
                    location={card.info.locality}
                  />
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
