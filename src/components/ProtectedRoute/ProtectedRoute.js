import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const ProtectedRoute = () => {
  const token = window.localStorage.getItem("userToken");
  if (!token) {
    return <Navigate to="/login" replace />;
  } else {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }
};

export default ProtectedRoute;
