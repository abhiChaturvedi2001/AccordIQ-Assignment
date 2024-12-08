import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Upcoming = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No upcoming expirations available.</p>;
  }

  return (
    <>
      <h1 className="font-semibold mt-2">Upcoming Expirations</h1>
      {data.map((items) => {
        return (
          <div
            key={items.id}
            className="bg-[#EEF7FF] flex rounded-xl mt-4 justify-between px-2 py-2"
          >
            <h4>
              {items.yearName} {items.year}
            </h4>
            <div className="flex items-center space-x-3">
              <span className="bg-[#045762] px-2 text-white rounded-full">
                {items.pending}
              </span>
              <MdArrowForwardIos />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Upcoming;
