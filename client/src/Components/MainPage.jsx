import React from "react";
import './CSS/Card.css';
import { NavLink } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="contain">
        <div className="card">
          <NavLink to="/pages/LoginDonar" style={{ textDecoration: 'none', color: 'black' }}>Donar</NavLink>
        </div>
        <div className="card">
          <NavLink to="/pages/LoginHospital" style={{ textDecoration: 'none', color: 'black' }}>Hospital</NavLink>
        </div>
        <div className="card">
          <NavLink to="/pages/LoginPatient" style={{ textDecoration: 'none', color: 'black' }}>Patient</NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
