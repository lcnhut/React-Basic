import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { AppLayout } from "../../pages";

const ProtectedRoute = () => {
  const token = window.localStorage.getItem("userToken");
  if (!token) {
    return <Navigate to="/login" replace />;
  } else {
    return <AppLayout />;
  }
};

export default ProtectedRoute;
