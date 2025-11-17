import React from "react";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";
import Navber from "../Pages/Shared/Navber/Navber";

const RootLayouts = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayouts;
