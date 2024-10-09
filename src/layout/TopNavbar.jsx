import React from "react";
import { Navbar, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout, userDetails } from "../store/redux/authSlice";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

function TopNavbar({ show, setShow }) {
  const dispatch = useDispatch();
  const details = useSelector(userDetails);
  console.log(details);
  const handleToggle = () => setShow((prev) => !prev);

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Navbar
      expand="lg"
      className="bg-light px-2 d-flex justify-content-between"
      style={{ boxShadow: "10px 0 10px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="d-flex align-items-center">
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="cursor-pointer border-0 bg-transparent"
        >
          {show ? <RxCross2 size={40} /> : <HiOutlineMenuAlt2 size={40} />}
        </button>
      </div>
      <div className="d-flex gap-3 align-items-center">
        <div className="d-flex align-items-center gap-1">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            roundedCircle
            width={40}
            height={40}
            className="p-1 bg-white"
          />
          <span>{details?.userName}</span>
        </div>

        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </Navbar>
  );
}

export default TopNavbar;
