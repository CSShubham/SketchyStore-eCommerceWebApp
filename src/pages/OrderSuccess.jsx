import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TickAnimation from "../assets/Successfully done.json"
import Lottie from 'lottie-react';
function OrderSuccess() {
 const navigate = useNavigate();
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  useEffect(() => {
    // Redirect after 3 seconds
    const timer = setTimeout(() => {
     {isMobile ? navigate("/account/myorder") : navigate("/account/myorders")};// Or any page like home, orders etc.
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-green-100 to-blue-100 p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center animate-fadeSlideIn">

        <Lottie
          animationData={TickAnimation}
          loop={false}
          className="h-30 w-30 mx-auto"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-2 animate-fadeIn delay-100">
          🎉 Order Confirmed!
        </h1>
        <p className="text-gray-600 text-base mb-6 animate-fadeIn delay-200">
          Thanks for shopping with us. Your order is being prepared. You'll be redirected in a moment.
        </p>
        <div className="relative h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600 animate-progressBar" />
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess
