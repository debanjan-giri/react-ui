import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const [show, setShow] = useState(false);

  return (
    <div className="d-flex">
      <Sidebar show={show} setShow={setShow} />
      <div className="flex-grow-1">
        <TopNavbar show={show} setShow={setShow} />
        <div className="p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
