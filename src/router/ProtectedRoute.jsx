import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userDetails } from "../store/redux/authSlice";

const ProtectedRoute = ({ element }) => {
  const isAuth = useSelector(userDetails)?.isAuthenticated;

  return <>{isAuth ? element : <Navigate to="/register" />}</>;
};

export default ProtectedRoute;
