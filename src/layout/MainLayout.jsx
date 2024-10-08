import React, { useEffect, useState } from "react";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function MainLayout() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  

  useEffect(() => {
    if (location.pathname === "/") {
      return navigate("/home");
    }
  }, [location.pathname]);

  return (
    <div className="d-flex">
      <Sidebar show={show} />
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
