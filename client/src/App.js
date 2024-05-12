import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginDonor from "./pages/LoginDonor"; // Updated import
import LoginHospital from "./pages/LoginHospital"; // Assuming you have a LoginHospital component
import SignUpDonar from "./pages/SignUpDonar";
import SignUpHospital from "./pages/SignUpHospital";
import SignUpPatient from "./pages/SignUpPatient";
import Patient from "./pages/Patient";
import Hospital from "./pages/Hospital";
import LoginPatient from "./pages/LoginPatient";
import Donar from "./pages/Donar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pages/LoginDonar" element={<LoginDonor />} />{" "}
        {/* Updated path */}
        <Route path="/pages/LoginHospital" element={<LoginHospital />} />{" "}
        {/* Assuming you have a LoginHospital component */}
        <Route path="/pages/SignUpDonar" element={<SignUpDonar />} />
        <Route path="/pages/SignUpHospital" element={<SignUpHospital />} />
        <Route path="/pages/SignUpPatient" element={<SignUpPatient />} />
        <Route path="/pages/Patient" element={<Patient />} />
        <Route path="/pages/Hospital" element={<Hospital />} />
        <Route path="/pages/LoginPatient" element={<LoginPatient />} />
        <Route path="/pages/Donar" element={<Donar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
