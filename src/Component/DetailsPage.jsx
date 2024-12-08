import React, { useEffect, useState } from "react";
import useDocumentData from "../utils/useDocumentData";
import { useSelector } from "react-redux";
import TopButton from "./TopButton";
import ellipse1 from "/Ellipse.png";
import ellipse2 from "/Ellipseblue.png";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router";

const DetailsPage = () => {
  useDocumentData(); // custome hook
  const docsData = useSelector((store) => store.docsData); // fetching the data from the store
  const [filterData, setFilterData] = useState([]);
  const searchValue = useSelector((state) => state.search.searchValue);

  useEffect(() => {
    setFilterData(docsData);

    // when you type in the search by name and status it filters the data
    const filter = docsData.filter((items) => {
      if (
        items.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        items.status.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return items;
      }
    });
    setFilterData(filter);
  }, [searchValue, docsData]);

  return (
    <>
      <div className="h-[50vh]  p-5 overflow-scroll">
        <TopButton />
        <div className="mt-5 py-5">
          {filterData && filterData.length > 0 ? (
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="w-[30%] px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Assigned</th>
                  <th className="px-4 py-2 text-left">Uploaded</th>
                  <th className="px-4 py-2 text-left">Activity</th>
                  <th className="px-4 py-2 text-left">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((item, index) => (
                  <tr className="hover:bg-[#EEF7FF]" key={index}>
                    {/* Wrapping only the name cell with Link to keep table structure intact */}
                    <td className="w-[30%] px-4 py-2 text-left">
                      <Link
                        to={`/${item.id}`}
                        className="hover:underline hover:text-[#93cdf6] hover:cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="px-4 py-2 text-left flex items-center">
                      {item.status === "reviewed" ? (
                        <img src={ellipse2} alt="Ellipse" className="mr-2" />
                      ) : (
                        <img src={ellipse1} alt="Ellipse" className="mr-2" />
                      )}
                      {item.status}
                    </td>
                    <td className="px-4 py-2 text-left">{item.assigned}</td>
                    <td className="px-4 py-2 text-left">{item.uploaded}</td>
                    <td className="px-4 py-2 text-left">{item.activity}</td>
                    <td className="px-4 py-2 text-left flex items-center">
                      {item.lastupdated} <MdArrowForwardIos className="ml-8" />{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
