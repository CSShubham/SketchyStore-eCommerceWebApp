import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../slice/CartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ShoppingCart } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import WishlistButton from "../components/WishlistButton";
import Lottie from "lottie-react";
import emptyCartAnimation from "../assets/Empty Box.json";
function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="min-w-full min-h-screen">
      <h2 className="flex items-center justify-center text-3xl md:text-5xl  font-semibold p-3">
        <span className="flex items-center font-serif gap-1">
          My Cart
          <ShoppingCart className=" md:hidden pt-1" size={28} />{" "}
        </span>
      </h2>
      <div className="flex justify-between items-center px-5 py-4 ">
        <button
          className="px-0 py-1 md:px-0 pr-2 md:pr-3 md:py-2 border-1 rounded-xl flex items-center text-base md:text-lg text-white bg-[#FF735C] active:text-[#FF735C] active:bg-white"
          onClick={() => {
            navigate("/home");
          }}
        >
          {" "}
          <ChevronLeft
            className="flex justify-center items-center"
            size={30}
          />{" "}
          Continue Shopping{" "}
        </button>
        <div className=" text-lg md:text-xl font-semibold md:font-bold">
          Total Cart Items : {cartQuantity}
        </div>
      </div>
      {cartItems.length === 0 ? (
        <div className="flex  flex-col justify-center items-center lg:h-150">
          <Lottie animationData={emptyCartAnimation} loop={true} className="h-50 w-50 md:h-80 md:w-80 lg:h-110 lg:w-110" />
          <p className="text-xl md:text-3xl text-[#FF735C] tracking-wider font-semibold ">
            Your Cart is Empty
          </p>
        </div>
      ) : (
        <>
          <div className="container mx-auto p-4 px-10">
            <ul className="flex gap-5 flex-wrap">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="border p-2 px-3 rounded-xl shadow mb-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/home/${item.id}`);
                  }}
                >
                  <div className="flex justify-between px-1">
                    <p className="text-sm text-gray-500 capitalize">
                      {item.category}
                    </p>
                    <span>
                      <WishlistButton product={item} />
                    </span>
                  </div>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-40 object-contain"
                  />
                  <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${item.totalPrice.toFixed(2)}</p>
                  <div className="flex gap-3 items-center mt-2 mb-2 mx-1">
                    <button
                      className="border-1 rounded-lg text-sm px-2 py-2.5 bg-red-500 text-white active:bg-white active:text-red-500 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(removeFromCart(item.id));
                        toast.warn(`${item.title} removed from cart!!`);
                      }}
                    >
                      Remove
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/checkout/${item.id}`);
                      }}
                      className="border-1 rounded-lg text-sm px-2 py-2.5 cursor-pointer"
                    >
                      Place order <span className="text-xs">&#9889;</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
