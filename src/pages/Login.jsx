import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate('/profile')
  };
  return (
    <div className="p-3">
      <h1 className="text-xl font-bold mt-3">
        Singin to your
        <br />
        PopX account
      </h1>
      <p className="text-xs font-semibold mt-1 text-gray-400 w-3/4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <form onSubmit={handleOnSubmit}>
        <div className="relative mt-5">
          <label
            className="text-xs absolute top-0 left-2 bg-slate-50 pr-3 pl-1 text-[#A67EFD] font-semibold"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="mt-2 w-full border-2 border-gray-300 rounded-sm text-xs font-semibold text-gray-600 p-2 outline-[#6C25FF] "
            placeholder="Enter email address"
            type="email"
            id="email"
            required
          />
        </div>
        <div className="relative mt-1">
          <label
            className="text-xs absolute top-0 left-2 bg-slate-50 pr-3 pl-1 text-[#A67EFD] font-semibold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="mt-2 w-full border-2 border-gray-300 rounded-sm text-xs outline-[#6C25FF] text-gray-600 font-semibold p-2 "
            type="password"
            id="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button
          className="hover:bg-[#6C25FF] hover:text-white w-full bg-[#CBCBCB] text-black py-2 mt-2 text-xs font-semibold rounded-sm cursor-pointer"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
