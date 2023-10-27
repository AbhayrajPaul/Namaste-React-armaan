import React from "react";
import RestrauntCard from "./ResCard";

function Shimmer() {
  return (
    <>
      <div className="body flex  flex-col w-[full] pt-[1rem] bg-[#dedbd2] ">
        <div className="search px-[5rem] text-white">
          <input
            className="search-inp px-[1rem] py-[.5rem] text-[1.5rem] w-[90%] text-black outline-none rounded-xl"
            type="text"
            placeholder="What're you craving for ???"
          />

          <button className="search-btn h-full text-[1.5rem] font-[900] w-[10%] text-[#4a5759] bg-[#edafb8] px-[1rem] py-[.5rem] rounded-xl capitalize">
            search
          </button>
        </div>
        <div className="res px-[5rem] grid grid-cols-4 gap-y-[1rem] py-[2rem] ">
          {Array(8)
            .fill("")
            .map((e, index) => {
              return (
                <>
                  {" "}
                  <div
                    className="res-card h-[22.5rem] w-[15rem] bg-[#b0c4b1] flex flex-col rounded-xl overflow-hidden "
                    key={index}
                  >
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
