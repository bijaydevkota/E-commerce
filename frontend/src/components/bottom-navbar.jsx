import { LayoutDashboard } from "lucide-react";
import React from "react";

export default function BottomNavbar() {
  return (
    <div className=" flex items-center justify-between w-8/12 mx-auto mt-6">
      <div className="flex gap-6 items-center">
        <button className="flex gap-2 bg-green-500 px-4 py-2  text-white rounded-lg font-medium">
          <LayoutDashboard /> All Departments
        </button>
        <p>Home</p>
        <p>Shop</p>
        <p>Stores</p>
        <p>Mega Menu</p>
        <p>Pages</p>
        <p>Account</p>
        <p>Dashboard</p>
        <p>Docs</p>
      </div>

      <div></div>

     
    </div>
  );
}
