import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../Components/Shared/SideNav/SideNav";
import TopNav from "../Components/Shared/TopNav/TopNav";

const Main = () => {
  return (
    <div>
      <TopNav></TopNav>
      <div className="flex items-center justify-between">
        <SideNav></SideNav> <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
