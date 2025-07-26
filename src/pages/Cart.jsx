import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../slice/CartSlice";
import { useNavigate } from "react-router-dom";
function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="min-w-full min-h-screen">
      <h2 className="text-center text-5xl font-roboto font-semibold border-b-2 p-3">
        Cart
      </h2>
      <div className="flex justify-between items-center px-5 py-4 ">
        <button
          className="px-3 py-2 border-1 rounded-xl flex items-center text-white bg-[#FF735C] active:text-[#FF735C] active:bg-white"
          onClick={() => {
            navigate(-1);
          }}
        >
          {" "}
          &larr; Back{" "}
        </button>
        <div className=" text-xl font-bold">
          Total Cart Items : {cartQuantity}
        </div>
      </div>
      {cartItems.length === 0 ? (
        <div className="flex  flex-col justify-center items-center h-150">
          <img
            src="/emptyCart.jpg"
            alt="imageloading....."
            className="h-120 w-120"
          />
          <p className="text-3xl text-[#FF735C] tracking-wider font-semibold ">
            Your Cart is Empty
          </p>
        </div>
      ) : (
        <>
          <div className="container mx-auto p-4 px-10">
            <ul className="flex gap-5 flex-wrap">
              {cartItems.map((item) => (
                <li key={item.id} className="border p-2 px-3 rounded-xl shadow mb-4">
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500 capitalize">
                      {item.category}
                    </p>
                    <span className="pr-5 text-xl">&#9825;</span>
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
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                  <button className="border-1 rounded-lg text-sm px-2 py-2.5 cursor-pointer">
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
