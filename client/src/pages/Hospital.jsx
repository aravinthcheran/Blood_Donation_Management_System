import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Hospital = () => {
  const [menu, setMenu] = useState("SignUp");
  return (
    <div className="navbar">
      <div className="nav-log">
        <p>Blood Donation Management System</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("MainPage");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            MainPage{menu === "MainPage" ? <hr /> : null}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("SignUp");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/signup">
            SignUp{menu === "SignUp" ? <hr /> : null}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/pages/LoginHospital">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Hospital;
