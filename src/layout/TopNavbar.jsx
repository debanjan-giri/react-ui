import { Button } from "react-bootstrap";
import React from "react";
import { Navbar } from "react-bootstrap";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

function TopNavbar({ show, setShow }) {
  return (
    <Navbar
      expand="lg"
      className="bg-light px-2 d-flex justify-content-between"
    >
      <div className="d-flex align-items-center">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShow(!show)}
          
        >
          {show ? (
            <MdOutlineArrowForwardIos size={20} color="black" />
          ) : (
            <MdOutlineArrowBackIosNew size={20} color="black" />
          )}
        </div>
      </div>
      <Button variant="warning" className="p-1 fw-bold">
        Logout
      </Button>
    </Navbar>
  );
}

export default TopNavbar;
