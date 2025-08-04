import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Store, Package, CircleUserRound } from "lucide-react";
function Footer() {
  return (
    <footer className="sm:bg-gray-800 fixed  bg-white left-0 shadow-md bottom-0 sm:static sm:text-white text-center  py-0 sm:px-4 sm:py-4 text-sm sm:text-base w-full">
      <div className=" flex-col hidden sm:flex sm:flex-row justify-center items-center gap-2">
        <span>© 2025 My E-Commerce Store</span>
        {/* You can add more links or info here for desktop */}
      </div>
      <div className="flex sm:hidden justify-around items-center ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` py-2 px-2 flex flex-col items-center justify-center ${
              isActive ? "text-orange-700" : ""
            }`
          }
        >
          <Home size={24} />
          <span className="text-[10px] pt-1">Home</span>
        </NavLink>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `py-2 px-2 flex flex-col items-center justify-center ${
              isActive ? "text-orange-700" : ""
            }`
          }
        >
          <Store size={24} />
          <span className="text-[10px] pt-1">Store</span>
        </NavLink>
        <NavLink
          to="/account/myorder"
          className={({ isActive }) =>
            `py-2 px-2 flex flex-col items-center justify-center ${
              isActive ? "text-orange-700" : ""
            }`
          }
        >
          <Package size={24} />
          <span className="text-[10px] pt-1">Orders</span>
        </NavLink>
        <NavLink
          to="/account"
          className={({ isActive }) =>
            `py-2 px-2 flex flex-col items-center justify-center ${
              isActive ? "text-orange-700" : ""
            }`
          }
        >
          <CircleUserRound size={24} />
          <span className="text-[10px] pt-1">Account</span>
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
