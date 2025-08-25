import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Sidebar from "../components/AccountSidebar";
import { ChevronLeft } from "lucide-react";

function Account() {
  // const location = useLocation();
  const navigate = useNavigate();
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;

  return (
    <div className="flex-col w-full">
      <div className="flex  p-3 ">
        <div className="pt-1 items-center">
          <button
            className=" active:rounded-xl active:text-white active:bg-[#FF735C] text-[#FF735C] bg-white"
            onClick={() => {
              navigate("/home");
            }}
          >
            {" "}
            <ChevronLeft className="flex justify-center items-center" size={30} />{" "}
          </button>
          </div>
          <div className="font-semibold text-xl pt-1 md:pt-0 md:ml-1 justify-start md:text-3xl">
          My Account
        </div>
      </div>
      <div className="min-h-screen flex flex-col md:flex-row w-full">
        <Sidebar />
        {isDesktop && (
          <div className="flex-1 hidden md:block w-full p-5">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
