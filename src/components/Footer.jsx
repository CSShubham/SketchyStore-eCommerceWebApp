import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Store, Package, CircleUserRound} from "lucide-react";
function Footer() {
  return (
    <footer className="sm:bg-gray-900 fixed  bg-white left-0 shadow-md bottom-0 sm:static sm:text-white text-center  py-0 sm:px-4 sm:py-4 text-sm sm:text-base w-full">
      <div className=" flex-col hidden md:flex md:flex-row justify-center gap-10 items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 My E-Commerce Store. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF735C] transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF735C] transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </div>
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
