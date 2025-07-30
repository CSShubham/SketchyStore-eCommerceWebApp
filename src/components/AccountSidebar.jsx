import { NavLink } from "react-router-dom";
import { User, ShoppingBag, Heart, CreditCard, LogOut } from "lucide-react";

export default function Sidebar() {
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
 
  return (
    <div className="block bg-white p-4">
      {/* Profile avatar/info */}
      <div className="flex items-center gap-4 mb-6">
        <span className="w-16 h-16 bg-gray-400 justify-center items-center flex rounded-full">
          J
        </span>
        <div>
          <h2 className="text-lg font-bold">John Doe</h2>
          <p className="text-gray-500 text-sm">johndoe@example.com</p>
        </div>
      </div>

      {/* Navigation items using NavLink */}
      <nav className="space-y-2">
        <NavLink
          to={isMobile ? "/home/account/mprofile" : "/home/account"}
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <User size={18} /> Profile
        </NavLink>

        <NavLink
          to="/home/account/orders"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <ShoppingBag size={18} /> My Orders
        </NavLink>

        <NavLink
          to="/home/account/wishlist"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <Heart size={18} /> Wishlist
        </NavLink>

        <NavLink
          to="/home/account/payment"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <CreditCard size={18} /> Payment Method
        </NavLink>

        <button className="flex items-center gap-2 p-2 text-red-500 hover:bg-gray-100 rounded">
          <LogOut size={18} /> Logout
        </button>
      </nav>
    </div>
  );
}
