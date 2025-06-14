import React from "react";
import { Link } from "react-router-dom";

const LandingScreen = () => {
  return (
    <div className="p-3 absolute bottom-6 left-0">
      <h1 className="text-xl font-bold">Welcome to PopX</h1>
      <p className="text-xs font-semibold mt-1 text-gray-400 w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <Link
        className="text-center block bg-[#6C25FF] text-white py-2 mt-4 text-xs font-semibold rounded-sm cursor-pointer"
        to="/signUp"
      >
        Create Account
      </Link>

      <Link
        className="text-center block bg-[#CEBAFB] text-black py-2 mt-1 text-xs font-semibold rounded-sm cursor-pointer"
        to="/login"
      >
        Already Registered? Login
      </Link>
    </div>
  );
};

export default LandingScreen;
