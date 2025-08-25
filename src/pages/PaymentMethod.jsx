import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreditCard,
  ShoppingCart,
  ArrowLeft,
  ChevronLeft,
  Triangle,
} from "lucide-react";
// import { Button } from "@/components/ui/button";
function PaymentMethod() {
    const navigate=useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="p-2 md:p-4 md:pt-0 space-y-4 w-full">
      <div className="flex  py-3 md:p-3 md:pt-0">
        <div className="flex md:hidden">
          <button
            className=" active:rounded-xl active:text-white active:bg-[#FF735C] text-[#FF735C] bg-white"
            onClick={() => {
              navigate("/account");
            }}
          >
            {" "}
            <ChevronLeft
              className="flex justify-center items-center"
              size={30}
            />{" "}
          </button>
        </div>
        <div className="text-xl md:text-2xl font-semibold">My Payment Methods</div>
      </div>
      <div className="bg-white rounded-2xl p-8 md:p-5 w-full ">

        {/* Payment Options */}
        <div className="flex justify-between mb-8 gap-4">
          <div
            onClick={() => setPaymentMethod("card")}
            className={`flex-1 p-4 border rounded-xl cursor-pointer flex flex-col items-center transition-all duration-300 ${
              paymentMethod === "card"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            <CreditCard className="w-8 h-8 mb-2" />
            <span className="font-medium text-sm">Pay with Credit Card</span>
          </div>
          <div
            onClick={() => setPaymentMethod("paypal")}
            className={`flex-1 p-4 border rounded-xl cursor-pointer flex flex-col items-center transition-all duration-300 ${
              paymentMethod === "paypal"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            <div className="flex justify-between items-center mt-4 gap-2">
              {" "}
              <span className="font-medium text-sm">UPI</span>
              <div className="relative w-6 h- -rotate-75 ">
                {/* Main triangle */}
                <Triangle className="text-green-600 fill-green-600 w-6 h-6 rotate-45" />

                {/* Smaller overlay triangle to simulate layered effect */}
                <Triangle className=" absolute top-[-8px] left-[-2px] text-orange-600 fill-orange-600 w-6 h-6 rotate-45" />
              </div>
            </div>
          </div>
          <div
            onClick={() => setPaymentMethod("amazon")}
            className={`flex-1 p-4 border rounded-xl cursor-pointer flex flex-col items-center transition-all duration-300 ${
              paymentMethod === "amazon"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            <ShoppingCart className="w-8 h-8 mb-2" />
            <span className="font-medium text-sm">Amazon Payments</span>
          </div>
        </div>

        {/* Form */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Billing Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Billing Info
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Billing Address"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-1/2 px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="w-1/2 px-4 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Credit Card Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Credit Card Info
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Cardholder's Name"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Exp Month"
                  className="w-1/3 px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Exp Year"
                  className="w-1/3 px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-1/3 px-4 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 rounded-2xl py-1 text-white px-6">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
