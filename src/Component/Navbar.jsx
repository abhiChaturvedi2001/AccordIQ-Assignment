import React from "react";
import appLogo from "/logo.png";
import profile from "/profile.png";
import { IoMdSearch } from "react-icons/io";
import { FaBell, FaPlus } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../utils/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.searchValue);
  const handleInputChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };
  return (
    <>
      <nav className="flex items-center  justify-between px-5 py-2 min-h-[9vh]">
        <div className="flex items-center space-x-4">
          <img className="w-[50px]" src={appLogo} alt="company logo" />
          <div className="relative">
            <input
              value={searchValue}
              onChange={handleInputChange}
              className="w-[20vw] shadow-sm bg-white rounded-3xl py-2 px-8 outline-none"
              type="text"
              placeholder="search name,status"
            />
            <IoMdSearch className="absolute top-2 left-1.5 text-2xl" />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center bg-[#0090FF] text-white py-2 px-4 rounded-3xl">
            {" "}
            <FaPlus className="mr-2" />
            Upload
          </button>
          <div className="px-2 py-2 bg-white rounded-full">
            <FaBell className="" />
          </div>
          <div className="px-2 py-2 bg-white rounded-full">
            <FaRegEdit />
          </div>
          <img src={profile} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
