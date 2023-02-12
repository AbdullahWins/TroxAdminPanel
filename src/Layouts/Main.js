import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../Components/Shared/SideNav/SideNav";
import TopNav from "../Components/Shared/TopNav/TopNav";

const Main = () => {
  return (
    <div className="bg-whiteMid">
      <TopNav></TopNav>
      <div className="flex gap-4">
        <SideNav></SideNav> <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
