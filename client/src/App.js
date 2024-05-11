import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import LoginDonor from "./Components/pages/LoginDonor"; // Updated import
import LoginHospital from "./Components/pages/LoginHospital"; // Assuming you have a LoginHospital component
import SignUpDonar from "./Components/pages/SignUpDonar";
import SignUpHospital from "./Components/pages/SignUpHospital";
import SignUpPatient from "./Components/pages/SignUpPatient";
import Patient from "./Components/pages/Patient";
import Hospital from "./Components/pages/Hospital";
import LoginPatient from "./Components/pages/LoginPatient";
import Donar from "./Components/pages/Donar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pages/LoginDonar" element={<LoginDonor />} /> {/* Updated path */}
        <Route path="/pages/LoginHospital" element={<LoginHospital />} /> {/* Assuming you have a LoginHospital component */}
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
