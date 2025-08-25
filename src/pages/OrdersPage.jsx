import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelorder } from "../slice/OrderSlice";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import OrderAnimation from "../assets/No Item In Box.json";
import Lottie from "lottie-react";
function OrdersPage() {
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        <div className="text-xl md:text-2xl font-semibold">My Orders</div>
      </div>
      {orders.length === 0 ? (
        <div className="flex  flex-col justify-center items-center xl:h-120">
          {/* <img
            src="/emptywishlist.PNG"
            alt="imageloading....."
            className="h-50 w-50 md:h-80 md:w-80 lg:h-120 lg:w-120"
          /> */}
          <Lottie
            animationData={OrderAnimation}
            loop={true}
            className="h-50 w-50 md:h-80 md:w-80 lg:h-120 lg:w-120"
          />
          <button
            onClick={() => navigate("/home")}
            className="bg-white text-[#FF735C] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#FF735C] hover:text-white border-2 transition-colors duration-300 inline-flex items-center gap-2"
          >
            Start Shopping Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border-2 border-gray-300 rounded-2xl shadow px-6 py-6 flex flex-col sm:flex-row sm:justify-between w-full items-start sm:items-center"
              >
                <div className="flex flex-col w-full gap-4">
                  <div className=" flex flex-col md:flex-row justify-between items-center border-b-2 pt-3 pb-5 border-zinc-300">
                    <div className="font-semibold text-gray-500 text-base md:text-xl ">
                      Order ID :{" "}
                      <span className="text-black font-mono">{order.id}</span>
                    </div>
                    <div className="font-semibold text-gray-500 hidden md:block text-base md:text-xl ">
                      Order Date :{" "}
                      <span className="text-black font-mono">
                        {new Date(order.orderedAt).toLocaleString()}
                      </span>
                    </div>
                    <div className="font-semibold text-gray-500 hidden md:block  text-base md:text-xl ">
                      Order Status :{" "}
                      <span
                        className={`font-semibold md:border-2 rounded-lg px-2 py-1 text-center ${
                          order.status === "cancelled"
                            ? "text-red-500"
                            : "text-green-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-2 md:p-4 flex  flex-col md:flex-row w-full gap-5 ">
                    <div className="flex gap-3 ">
                      <img
                        className="border-1 border-zinc-400 rounded-lg w-30 h-30 md:h-40 md:w-40"
                        src={order.product.thumbnail}
                        alt="something went wrong"
                      />

                      <div className=" py-2 md:py-5 md:px-4 flex flex-col ">
                        <div className="text-lg md:text-xl font-semibold">
                          {order.product.title}
                        </div>
                        <div className="text-base md:text-lg text-gray-500 font-bold">
                          Qty : {order.count}
                        </div>
                        <div className="text-lg md:text-2xl font-bold md:mt-2">
                          ${order.product.price}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm  text-gray-600 mt-4 space-y-2 md:border-l-2 px-7">
                      <div className="text-xl text-center font-semibold text-zinc-600 mb-4">
                        Order Summary
                      </div>
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>
                          ${(order.count * order.product.price).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>$5.00</span>
                      </div>
                      <div>---------------------------------</div>

                      <div className="flex justify-between font-semibold text-black mt-2">
                        <span>Total</span>
                        <span>
                          $
                          {(
                            order.count * order.product.price.toFixed(2) +
                            5
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  {order.status === "active" && (
                    <div className="flex gap-5 justify-end">
                      <button
                        className="mt-4 sm:mt-0 bg-[#ff375c] hover:bg-red-600 text-white px-4 py-2 rounded-md"
                        onClick={() => dispatch(cancelorder(order.id))}
                      >
                        Cancel Order
                      </button>
                      <button
                        className="mt-4 sm:mt-0 border-blue-400 text-black hover:bg-blue-600 hover:text-white font-semibold border-2 px-4 py-2 rounded-md"
                        onClick={() => navigate(`/home/${order.product.id}`)}
                      >
                        View Product
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default OrdersPage;
