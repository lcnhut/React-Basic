import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";
export default function Navbar() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
    window.localStorage.clear();
  };

  const role = window.localStorage.getItem("userRole");

  return (
    <div className="navbar__wrapper">
      <ul className="navbar__list">
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
        {role === "admin" && (
          <li>
            <NavLink to="setting">Setting</NavLink>
          </li>
        )}
      </ul>

      <div className="button__wrapper">
        <button onClick={handleOnClick} className="button__item">
          Logout
        </button>
      </div>
    </div>
  );
}
