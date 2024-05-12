import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginUser from "./pages/LoginUser"; // Corrected import
import SignUpUser from "./pages/SignUpUser";
import LoginDonor from "./pages/LoginDonor"; // Updated import
import LoginHospital from "./pages/LoginHospital"; // Assuming you have a LoginHospital component
import SignUpDonar from "./pages/SignUpDonar";
import SignUpHospital from "./pages/SignUpHospital";
import SignUpPatient from "./pages/SignUpPatient";
import Patient from "./pages/Patient";
import Hospital from "./pages/Hospital";
import Donar from "./pages/Donar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login/user" element={<Login />} />
        <Route path="/signup/user" element={<SignUp />} />
        <Route path="/pages/Patient" element={<Patient />} />
        <Route path="/pages/Hospital" element={<Hospital />} />
        <Route path="/pages/Donar" element={<Donar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
