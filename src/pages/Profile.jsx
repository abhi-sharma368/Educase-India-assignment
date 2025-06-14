import React from "react";
import pic from "../assets/pic.jpg";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  return (
    <div>
      <h1 className="bg-white text-sm font-medium pl-3 py-4">Account Settings</h1>
      <div className="p-4 flex">
        <div className="relative ">
          <img className=" aspect-square w-14 rounded-full" src={pic} alt="" />
          <div className="absolute  bottom-0.5 right-[-8px] bg-violet-600 p-1.5 rounded-full">
            <FaCamera className=" text-white  text-[10px] " />
          </div>
        </div>
        <div className="ml-3">
          <h1 className="text-xs font-bold">Marry Doe</h1>
          <p className="text-xs font-semibold mt-1">marry@gmail.com</p>
        </div>
      </div>
      <p className="text-[10px] px-4 font-semibold py-1.5 text-gray-600 border-b-2 border-dashed pb-5 border-gray-200">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, porro vel. Facere, animi eligendi dolorem fuga dolore sapiente.
      </p>
      <div className="border-b-2 border-dashed pb-5 border-gray-200 absolute bottom-5 left-0 w-full"></div>
    </div>
  );
};

export default Profile;
