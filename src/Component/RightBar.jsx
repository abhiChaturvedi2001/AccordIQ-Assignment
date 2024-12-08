import React from "react";
import Cards from "./Cards";
import TaskLog from "./TaskLog";
import CalenderSection from "./CalenderSection";

const RightBar = () => {
  return (
    <>
      <div className="flex flex-wrap w-[93vw] space-x-5 md:space-x-0  lg:space-x-0 md:p-2">
        <div className="flex-1 lg:flex-[2] p-2">
          <Cards />
        </div>

        <div className="flex-1 lg:flex-[2] p-2">
          <TaskLog />
        </div>
        <div className="flex-1 lg:flex-[6] p-2">
          <CalenderSection />
        </div>
      </div>
    </>
  );
};

export default RightBar;
