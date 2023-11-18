import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const payment = window.localStorage.getItem("transid");
  const payment2 = JSON.parse(payment);
  console.log(payment2);
  return payment2 ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
