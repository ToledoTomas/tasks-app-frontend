import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoutes = () => {
  const { user, isAuthenticated } = useAuth();
  const token = localStorage.getItem("token");
  if (token) {
    return <Outlet />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
