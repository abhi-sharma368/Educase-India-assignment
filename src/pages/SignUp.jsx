import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3">
      <h1 className="text-xl font-bold mt-3">
        Create your
        <br />
        PopX account
      </h1>
      <form onSubmit={() => navigate("/login")}>
        <div className="relative mt-4">
          <label
            className="text-xs absolute top-0 left-2 bg-slate-50 pr-3 pl-1 text-[#A67EFD] font-semibold"
            htmlFor="name"
          >
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            className="mt-2 w-full border-2 border-gray-300 rounded-sm text-[10px] font-semibold text-gray-600 p-2 outline-[#6C25FF]"
            placeholder="Marry Doe"
            type="text"
            id="name"
            required
          />
        </div>
        <div className="relative mt-2">
          <label
            className="text-xs absolute top-0 left-2 bg-slate-50 pr-3 pl-1 text-[#A67EFD]  font-semibold"
            htmlFor="number"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            className="mt-2 w-full border-2 border-gray-300 rounded-sm text-[10px] font-semibold text-gray-600 p-2 outline-[#6C25FF] "
            placeholder="+91 0000000000"
            type="number"
            id="number"
            required
          />
        </div>
        <div className="relative mt-2">
          <label
            className="text-xs absolute top-0 left-2 bg-slate-50 pr-3 pl-1 text-[#A67EFD] font-semibold"
            htmlFor="email"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            className="mt-2 w-full border-2 border-gray-300 rounded-sm text-[10px] text-gray-600 font-semibold p-2 outline-[#6C25FF] "
            placeholder="Enter email address"
            type="email"
            id="email"
            required
          />
        </div>
        <div className="relative mt-2">
          <label
            className="text-xs absolute top-0 left-2 bg-slate-50 pr-3 pl-1 text-[#A67EFD] font-semibold"
            htmlFor="password"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            className="mt-2 w-full border-2 border-gray-300 rounded-sm text-[10px] text-gray-600 font-semibold p-2 outline-[#6C25FF] "
            placeholder="********"
            type="password"
            id="password"
            required
          />
        </div>
        <div className="relative mt-2">
          <label
            className="text-xs absolute top-0 left-2 bg-slate-50 pr-3 pl-1 text-[#A67EFD] font-semibold"
            htmlFor="c-name"
          >
            Company Name
          </label>
          <input
            className="mt-2 w-full border-2 border-gray-300 rounded-sm text-[10px] text-gray-600 font-semibold p-2 outline-[#6C25FF]"
            placeholder="XYZ"
            type="text"
            id="c-name"
          />
        </div>

        <div className="mt-2">
          <h2 className="text-xs font-semibold">
            Are you an Agency? <span className="text-red-500">*</span>
          </h2>
          <div className="flex gap-3 mt-1">
            <div className="flex items-center gap-2">
              <input type="radio" name="agency" id="yes" value="true" required />
              <label className="text-xs text-gray-500 font-semibold" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="agency" id="no" value="false" required />
              <label className="text-xs text-gray-500 font-semibold" htmlFor="no">
                No
              </label>
            </div>
          </div>
        </div>

        <button
          className="mt-30 left-0 w-full bg-[#6C25FF] text-white py-2 text-xs font-semibold rounded-sm cursor-pointer"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUp;
