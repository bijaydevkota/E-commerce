import { LayoutDashboard, Menu } from "lucide-react";
import { NavLink } from "react-router";


export default function BottomNavbar() {
  return (
    <div className="w-11/12  md:w-8/12 mx-auto flex items-center justify-between mt-6">
      <div className="flex items-center gap-8">
        <button className="whitespace-nowrap flex items-center gap-2 bg-green-500 px-4 py-2 text-white rounded-md font-medium ">
          {" "}
          <LayoutDashboard size={16} /> All Departments
        </button>
        <div className=" hidden lg:block">
          <div className=" flex items-center gap-8  ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/stores" >Stores</NavLink>
            <NavLink to="mega-menu" className=" whitespace-nowrap">Mega Menu</NavLink>
            <NavLink to="blogs">Blogs</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/docs" >Docs</NavLink>

            <NavLink to="/signin" className="bg-green-500 px-2 py-1 rounded text-white hover:bg-green-400">Sign in</NavLink>
            <NavLink to="/signup"  className="border px-2 py-1 rounded text-green-500 hover:bg-green-400 hover:text-white">Sign up</NavLink>
          </div>
        </div>
      </div>

        <Menu className="block lg:hidden" />
      
    </div>
  );
}