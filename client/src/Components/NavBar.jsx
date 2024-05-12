import React, { useState } from "react";
import { Link } from "react-router-dom";
import ".NavBar.css";
import MainPage from "./MainPage";

const Navbar = () => {
  return (
    <div className="navbar">
      <MainPage />
    </div>
  );
};

export default Navbar;
