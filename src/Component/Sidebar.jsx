import React from "react";
import { SidebarDataSet } from "../utils/constant";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col h-screen px-6 w-[5rem]">
        <div>
          {SidebarDataSet.map((items) => {
            return (
              <img className="mt-6" key={items.id} src={items.image} alt="" />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
