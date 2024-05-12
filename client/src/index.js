import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Patient from "./pages/Patient";
import Hospital from "./pages/Hospital";
import Donar from "./pages/Donar";
import "bootstrap/dist/css/bootstrap.min.css";

const mainRoutes = [
  // {
  //   path: "/",
  //   component: MainPage,
  // },
  {
    path: "/login/user",
    component: Login,
  },
  {
    path: "/signup/user",
    component: SignUp,
  },
  {
    path: "/pages/Patient",
    component: Patient,
  },
  {
    path: "/pages/Hospital",
    component: Hospital,
  },
  {
    path: "/pages/Donar",
    component: Donar,
  },
];

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {mainRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
      <Route path="*" element={<Navigate to="/login/user" />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
