import React from "react";
import { contractList } from "../utils/constant";

const Cards = () => {
  return (
    <>
      <div className=" md:w-full">
        {contractList &&
          contractList.map((items) => {
            return (
              <div
                key={items.id}
                className="bg-white mt-4 px-2 py-2 rounded-xl h-[15.4vh] text-center"
              >
                <h4>{items.heading}</h4>
                <h1 className="text-4xl">{items.amount}</h1>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Cards;
