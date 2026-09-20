import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Popup from "../ui/Popup";

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <>
        <Navigate
          to="/login"
          state={{
            from: location.pathname,
            message: "Login to access this page",
          }}
          replace
        />
      </>
    );
  }

  return children;
};

export default RequireAuth;
