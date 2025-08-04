import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelorder } from "../slice/OrderSlice";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
              navigate('/account');
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
          <img
            src="/emptywishlist.PNG"
            alt="imageloading....."
            className="h-50 w-50 md:h-80 md:w-80 lg:h-120 lg:w-120"
          />
          <p className="text-lg md:text-xl lg:text-3xl text-[#FF735C] tracking-wider font-semibold ">
            Empty
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border rounded-xl shadow p-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center"
              >
                <div>
                  <p className="font-semibold">🛍️ {order.product.title}</p>
                  <p>
                    🆔 Order ID: <span className="font-mono">{order.id}</span>
                  </p>
                  <p>📦 Quantity: {order.count}</p>
                  <p>💰 Price per item: ₹{order.product.price}</p>
                  <p>
                    🗓️ Ordered At: {new Date(order.orderedAt).toLocaleString()}
                  </p>
                  <p>
                    📌 Status:{" "}
                    <span
                      className={`font-semibold ${
                        order.status === "cancelled"
                          ? "text-red-500"
                          : "text-green-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </p>
                </div>

                {order.status === "active" && (
                  <button
                    className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                    onClick={() => dispatch(cancelorder(order.id))}
                  >
                    Cancel Order
                  </button>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default OrdersPage;
