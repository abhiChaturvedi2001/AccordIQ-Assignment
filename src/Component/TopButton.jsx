import React from "react";
import { ButtonList } from "../utils/constant";
import checkList from "/checklist.png"; // Ensure this path is correct for your image

const TopButton = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          {ButtonList.map((item) => (
            <button
              className="flex items-center border px-4 py-2 rounded-3xl ml-2"
              key={item.id}
            >
              <img src={checkList} alt="" className="mr-2" /> {item.buttonName}
              <span className="bg-[#045762] px-2 text-white rounded-full ml-2">
                {item.value}
              </span>
            </button>
          ))}
        </div>
        <div className="flex">
          <button className="flex items-center border px-4 py-2 rounded-3xl ml-2">
            Filter
          </button>
          <button className="flex items-center border px-4 py-2 rounded-3xl ml-2">
            View
          </button>
        </div>
      </div>
    </>
  );
};

export default TopButton;
