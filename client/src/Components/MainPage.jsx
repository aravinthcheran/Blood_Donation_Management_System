import React from "react";
import "./MainPage.css";
import { NavLink } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="header">
        <NavLink
          to="/login/user"
          style={{ textDecoration: "none", color: "black" }}
        >
          Login
        </NavLink>
      </div>

      <div className="contain">
        <div className="card">
          <NavLink
            to="/pages/LoginDonar"
            style={{ textDecoration: "none", color: "black" }}
          >
            Donar
          </NavLink>
        </div>
        <div className="card">
          <NavLink
            to="/pages/LoginHospital"
            style={{ textDecoration: "none", color: "black" }}
          >
            Hospital
          </NavLink>
        </div>
        <div className="card">
          <NavLink
            to="/pages/LoginPatient"
            style={{ textDecoration: "none", color: "black" }}
          >
            Patient
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
