import React from "react";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import RightBar from "./Component/RightBar";
import DetailsPage from "./Component/DetailsPage";
import BlurComponent from "./Component/BlurComponent";
import { createBrowserRouter } from "react-router";

const App = () => {
  return (
    <div className="main-app bg-[#F2F2F2] min-h-screen h-auto overflow-scroll w-full">
      <Navbar />
      <div className="flex h-[55vh]">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col  w-[80%] m space-y-4">
          <div className="flex-1 ">
            <RightBar />
          </div>
          <div className="w-[93vw] bg-white rounded-2xl">
            <DetailsPage />
          </div>
        </div>
      </div>
      <BlurComponent />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:id",
        element: <BlurComponent />,
      },
    ],
  },
]);

export default App;
