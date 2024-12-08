import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { CiShare1 } from "react-icons/ci";
import Upcoming from "./Upcoming";
import { dataset1, dataset2 } from "../utils/constant";

const CalenderSection = () => {
  const [selected, setSelected] = useState();

  return (
    <>
      <div className="bg-white w-full mt-4 p-5 h-[50vh] rounded-xl">
        <div className="flex items-center justify-between">
          <h1>Calender</h1>
          <div className="flex items-center space-x-3">
            <button className="flex items-center border px-4  rounded-3xl ml-2">
              Monthly
            </button>
            <CiShare1 />
          </div>
        </div>
        <div className="flex space-x-5">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            today={new Date()}
            classNames={{
              today: "bg-blue-500 text-white rounded-full",
            }}
          />
          <div className="w-full h-[40vh] overflow-y-scroll">
            <Upcoming data={dataset1} />
            <Upcoming data={dataset2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalenderSection;
