import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SplashLoading from "../components/SplashLoading";
function Front() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Hide splash after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      console.log("loading completed");
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {loading ? (
        <div className="min-h-screen w-full">
          {/* Splash content, e.g. logo or spinner */}
          <SplashLoading/>
        </div>
      ) : (
    <div className="flex flex-col lg:flex-row sm:mb-18 w-full h-[700px]">
      <div className="absolute lg:block -translate-x-60 lg:-translate-x-150 translate-y-110 md:hidden lg:translate-y-10 -z-1 opacity-90 bg-[#FF735C] lg:h-140 lg:w-250 h-60 w-120 rounded-[80%]">
        {/* orange box */}
      </div>
      <div className=" w-full md:w-[40vw]  flex flex-col justify-center font-roboto items-start p-8 ">
        <h1 className="lg:text-8xl text-4xl sm:text-6xl md:absolute font-bold text-gray-800 tracking-wide top-20 text-center lg:top-20 lg:left-50 mb-4">
          Welcome to Our Store
        </h1>
        <div className="absolute md:static translate-y-130 sm:translate-y-150 md:translate-y-15 lg:translate-0">
          <h2 className="text-lg lg:text-3xl -translate-y-10 font-semibold text-gray-600 mb-2">
            Your One-Stop Shop for Everything You Need!
          </h2>
          <p className=" text-base lg:text-lg -translate-y-10 text-zinc-600 mb-1 ">
            Find the best products here!
          </p>
          <button
            className="border-2 rounded-2xl py-3 px-5 font-medium hover:bg-white hover:text-black -translate-y-8"
            onClick={() => navigate("/home")}
          >
            Shop Now &#8594;{" "}
          </button>
        </div>
        {/* Add more styled text/buttons as needed */}
      </div>
      <div className=" w-full lg:w-[60vw]">
        <img
          src="/21727022_6505894.jpg"
          alt="loading......"
          onLoad={() => setLoading(false)}
          className="w-full h-full object-contain "
        />
      </div>
    </div>
    )}
    </>
  );
}

export default Front;
