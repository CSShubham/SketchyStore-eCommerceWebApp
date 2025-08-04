import { NavLink, useNavigate } from "react-router-dom";
import { User, ShoppingBag, Heart, CreditCard, LogOut } from "lucide-react";
import { doSignOut } from "../firebase/auth";
import { useAuth } from "../contexts/AuthContext";
export default function Sidebar() {
  const navigate = useNavigate();
  const { currentUser, userData } = useAuth();
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const handleLogout = async () => {
    await doSignOut();
    navigate("/login");
  };
  return (
    <div className="block bg-white  p-4">
      {/* Profile avatar/info */}
      <div className="flex items-center gap-4 mb-6">
        <span className="w-16 h-16 bg-gray-400 justify-center items-center flex rounded-full">
          {currentUser?.photoURL ? (
            <img
              src={currentUser.photoURL}
              alt="Profile"
              className=" rounded-full"
            />
          ) : (
            <span className=" bg-gray-400 flex justify-center items-center rounded-full text-white text-xl">
              {userData.username[0]||"U"}
            </span>
          )}
        </span>
        <div>
          <h2 className="text-xl font-bold">{userData?.username}</h2>
          <p className="text-gray-500 text-base">{userData.email}</p>
        </div>
      </div>

      {/* Navigation items using NavLink */}
      <nav className="space-y-2 text-lg">
        <NavLink
          to={isMobile ? "/account/mprofile" : "/account"}
          end
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <User size={18} /> Profile
        </NavLink>

        <NavLink
          to={isMobile ? "/account/myorder" : "myorders"}
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <ShoppingBag size={18} /> My Orders
        </NavLink>

        <NavLink
          to={isMobile ? "/account/mwishlist" : "wishlist"}
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <Heart size={18} /> Wishlist
        </NavLink>

        <NavLink
          to="/account/payment"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded ${
              isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <CreditCard size={18} /> Payment Method
        </NavLink>

        <button
          onClick={handleLogout}
          className="flex items-center  gap-2 p-2 text-red-500 hover:bg-gray-100 rounded"
        >
          <LogOut size={18} /> Logout
        </button>
      </nav>
    </div>
  );
}
