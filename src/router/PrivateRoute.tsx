import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { home, login } from "./routePaths";

export default function PrivateRoute({ isAuthenticated }: any) {
  return isAuthenticated ? <Outlet /> : <Navigate to={login} />;
}
