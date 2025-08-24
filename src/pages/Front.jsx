import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SplashLoading from "../components/SplashLoading";
import FrontBelow from "../components/FrontBelow";
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
          <SplashLoading />
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
  {/* Background shape */}
  {/* <div className="absolute -top-20 -left-40 lg:-top-10 lg:-left-60 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-[#FF735C] rounded-full opacity-30 blur-3xl -z-10"></div> */}

  {/* Left content */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-center lg:text-left space-y-6">
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
      Welcome to Our Store
    </h1>
    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-600">
      Your One-Stop Shop for Everything You Need!
    </h2>
    <p className="text-base sm:text-lg text-gray-500">
      Find the best products here!
    </p>
    <button
      className="mt-4 border-2 border-black hover:border-[#FF735C] rounded-2xl py-3 px-6 font-medium text-black hover:bg-[#FF735C] hover:text-white transition"
      onClick={() => navigate("/home")}
    >
      Shop Now →
    </button>
  </div>


  <div className="w-full lg:w-1/2 flex justify-center">
    <img
      src="/21727022_6505894.jpg"
      alt="Hero"
      className="w-full h-auto max-h-[500px] object-contain"
      onLoad={() => setLoading(false)}
    />
  </div>
</div>

        {/* <div className="flex flex-col lg:flex-row sm:mb-18 w-full h-[700px]">
          <div className="absolute lg:block -translate-x-60 lg:-translate-x-150 translate-y-110 md:hidden lg:translate-y-10 -z-1 opacity-90 bg-[#FF735C] lg:h-140 lg:w-250 h-60 w-120 rounded-[80%]">
            
          </div>
          <div className=" w-full md:w-[40vw]  flex flex-col justify-center  items-start p-8 ">
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
            
          </div>
          <div className=" w-full lg:w-[60vw]">
            <img
              src="/21727022_6505894.jpg"
              alt="loading......"
              onLoad={() => setLoading(false)}
              className="w-full h-full object-contain "
            />
          </div>
          
        </div> */}
        <FrontBelow/>
        </div>
      )}
      
    </>
  );
}

export default Front;
