import React from "react";
import RestrauntCard from "./ResCard";

function Shimmer() {
  return (
    <>
      <div className="body">
        <div className="search">
          <input
            className="search-inp"
            type="text"
            placeholder="What're you craving for ???"
          />

          <button className="search-btn ">search</button>
        </div>
        <div className="res">
          {Array(8)
            .fill("")
            .map((e, index) => {
              return (
                <>
                  {" "}
                  <div className="res-card " key={index}>
                    <img className="shimmer-img"></img>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Shimmer;
