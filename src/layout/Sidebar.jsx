import React, { useState, useMemo } from "react";
import { Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import { IoIosWallet } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { SiSimpleanalytics } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Sidebar({ show }) {
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();

  const menuJson = useMemo(
    () => [
      {
        name: "Home",
        icon: <RxDashboard size={20} />,
      },
      {
        name: "Analytics",
        icon: <SiSimpleanalytics size={20} />,
      },
      {
        name: "Settings",
        icon: <IoSettingsOutline size={20} />,
      },
    ],
    []
  );

  const handleNavigation = (name) => {
    setActiveItem(name);
    navigate(`${typeof name === "string" ? name.toLowerCase() : "/"}`);
  };

  const renderTooltip = (e, name) =>
    show ? (
      <></>
    ) : (
      <Tooltip id="button-tooltip" {...e}>
        {name}
      </Tooltip>
    );

  const getItemClasses = (itemName) => `
    d-flex align-items-center gap-2 px-3 py-2 mx-2 rounded-3 mb-2 transition-all duration-300 cursor-pointer
    ${activeItem === itemName ? "bg-primary text-white fw-bold" : "text-dark"}
    ${show ? "justify-content-start" : "justify-content-center button-tooltip"}
  `;

  return (
    <div
      className="d-flex flex-column vh-100 bg-light"
      style={{
        width: show ? "180px" : "90px",
        transition: "width 0.3s",
        boxShadow: "0px 0 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <p
        className={`d-flex align-items-center gap-2 px-3 fs-5 my-3 cursor-pointer`}
        onClick={() => handleNavigation("Home")}
      >
        {show && <IoIosWallet size={20} />}
        <span className="fw-bold text-dark">Wallet</span>
      </p>
      <Nav as="ul" className="flex-column w-100">
        {menuJson &&
          Array.isArray(menuJson) &&
          menuJson?.length > 0 &&
          menuJson?.map((item, index) => (
            <OverlayTrigger
              key={index}
              placement="right"
              delay={{ show: 700, hide: 0 }}
              overlay={(e) => renderTooltip(e, item?.name)}
            >
              <Nav.Item
                as="li"
                className={getItemClasses(item?.name)}
                onClick={() => handleNavigation(item?.name)}
              >
                <span>{item?.icon}</span>
                {show && <span>{item?.name}</span>}
              </Nav.Item>
            </OverlayTrigger>
          ))}
      </Nav>
    </div>
  );
}

export default Sidebar;
