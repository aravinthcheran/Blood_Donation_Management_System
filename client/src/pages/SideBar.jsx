import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about-donor">Profile</Link>
        </li>
        <li>
          <Link to="/pages/LoginDonar">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
