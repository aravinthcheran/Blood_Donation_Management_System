import React from "react";
import './CSS/Card.css';
import { NavLink } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="MainPage">

      <div className="contain">
        <div className="card">
          <NavLink to="/login/Donar" style={{ textDecoration: 'none', color: 'black' }}>Donar</NavLink>
        </div>
        <div className="card">
          <NavLink to="/login/Hospital" style={{ textDecoration: 'none', color: 'black' }}>Hospital</NavLink>
        </div>
        <div className="card">
          <NavLink to="/login/Staff" style={{ textDecoration: 'none', color: 'black' }}>Staff</NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
