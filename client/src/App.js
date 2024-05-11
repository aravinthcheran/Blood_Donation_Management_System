// App.js
import React from "react";
import { BrowserRouter, Route , Routes} from "react-router-dom";
import MainPage from "./Components/MainPage";
import Donar from "./Components/login/Donar";
import Hospital from "./Components/login/Hospital";
import Staff from "./Components/login/Staff";
import SignUp from "./Components/login/SignUp";

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login/Donar" element={<Donar/>} />
        <Route path="/login/Hospital" element={<Hospital/>} />
        <Route path="/login/Staff" element={<Staff/>} />
        <Route path='/login/SignUp' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
