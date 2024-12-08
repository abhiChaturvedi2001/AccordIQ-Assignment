import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { ticketData } from "../utils/constant";

const TaskLog = () => {
  return (
    <>
      <div className="bg-white h-[50vh] xl:w-[20vw]  md:w-full rounded-xl mt-4 p-4 shadow-md">
        <h1 className="text-lg font-semibold mb-4">Task Log</h1>
        <div className="h-[40vh] overflow-scroll">
          {ticketData.map((items) => {
            return (
              <div className="p-4 bg-[#d8eefe] my-2 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3
                      className={`text-md font-medium   ${
                        items.style ? items.style : ""
                      }`}
                    >
                      {items.title}
                    </h3>
                    <p className="text-sm text-gray-700">{items.subtitle}</p>
                  </div>
                  <MdOutlineDone className="text-green-600 text-2xl" />
                </div>
                <hr className="border-gray-300" />
                <p className="text-sm text-gray-600 mt-2">
                  {items.date} {items.time}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TaskLog;
