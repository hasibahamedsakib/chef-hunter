import { React, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../pages/Loader/Loading";

const PrivetRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(loading);
  if (loading) {
    return <Loading />;
  }
  if (users) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;
