import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SplashLoading from "../components/SplashLoading";
import FrontBelow from "../components/FrontBelow";
import HomeAnimation from "../components/HomeAnimation";
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
          <SplashLoading />
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
        
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
              <HomeAnimation />
            </div>
          </div>

          <FrontBelow />
        </div>
      )}
    </>
  );
}

export default Front;
