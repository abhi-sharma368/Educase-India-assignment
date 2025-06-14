import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingScreen from "./pages/LandingScreen";
import Login from "./pages/Login";
import SignUp from "./pages/signUp";
import Profile from "./pages/profile";

const App = () => {
  return (
    <div className="w-screen h-screen bg-white grid place-items-center">
      <div className="max-w-65  w-full h-140 bg-slate-50 border-2 border-slate-200 relative">
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
