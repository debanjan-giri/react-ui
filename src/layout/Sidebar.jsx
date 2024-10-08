import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { IoIosWallet } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { SiSimpleanalytics } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Sidebar({ show, setShow }) {
  const [activeItem, setActiveItem] = useState("Home"); // Tracks active menu item
  const navigate = useNavigate();
  const menu = ["Home", "Analytics", "Settings"];

  const icon = {
    Home: (
      <RxDashboard size={20} color={activeItem === "Home" ? "white" : "blue"} />
    ),
    Analytics: (
      <SiSimpleanalytics
        size={20}
        color={activeItem === "Analytics" ? "white" : "blue"}
      />
    ),
    Settings: (
      <IoSettingsOutline
        size={20}
        color={activeItem === "Settings" ? "white" : "blue"}
      />
    ),
  };

  return (
    <div
      className="d-flex flex-column vh-100 bg-light"
      style={{
        width: show ? "180px" : "90px",
        transition: "width 0.3s",
        // boxShadow: "5px 0 10px rgba(0, 0, 0, 0.2)", // Subtle shadow
      }}
    >
      {
        <p className={`d-flex align-items-center gap-2 px-3 fs-5 my-3`}>
          {show && <IoIosWallet size={20} />}
          <span className="fw-bold text-warning">Wallet</span>
        </p>
      }
      <Nav as="ul" className="flex-column w-100">
        {menu.map((item, index) => (
          <Nav.Item
            as="li"
            key={index}
            className={`d-flex align-items-center gap-2 px-3 py-2 mx-2 rounded-3 mb-2 
              ${
                activeItem === item
                  ? "bg-primary text-white fw-bold"
                  : "text-dark"
              }
              ${show ? "justify-content-start" : "justify-content-center"}
              transition-all duration-300`}
            onClick={() => {
              setActiveItem(item);
              navigate(`/${item.toLowerCase()}`);
            }}
            style={{ cursor: "pointer" }}
          >
            <span>{icon[item]}</span>
            {show && <span>{item}</span>}
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

export default Sidebar;
