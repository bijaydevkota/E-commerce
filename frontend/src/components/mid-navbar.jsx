import React from 'react'
import { Heart, MapPin } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import myLogo from "../../public/logo.svg";

export default function MidNavbar() {
  return (
    <div className="flex justify-between w-8/12 mx-auto mt-6">
        <div>
          <img
            src={myLogo}
            alt="logo"
          />
        </div>
        <div className="flex space-x-8">
          <input className=" border border-green-500 rounded-md w-96 pl-2 "  type="text" placeholder="Search Location" />
          <button className="flex items-center border border-green-500 px-4 rounded-md hover:bg-gray-300 hover:border-none cursor-pointer gap-1"> <MapPin size={16} /> Location</button>
        </div>

        <div className="flex gap-4">
          <Heart  />
          <User />
          <ShoppingBag />
        </div>
      </div>
  )
}
