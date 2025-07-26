import React from "react";
import { addToCart } from "../slice/CartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  // Correct formula: original = discountedPrice / (1 - discountPercentage/100)
  let originalPrice = (discountedPrice, discountPercentage) => {
    const df = 1 - discountPercentage / 100;
    if (df <= 0) {
      throw new Error("out of stock");
    }
    return discountedPrice / df;
  };

  const original = originalPrice(product.price, product.discountPercentage);
    // console.log(product)
  return (
    <div
      //   key={product.id}
      onClick={() => navigate(`/home/${product.id}`)}
      className="border-0 p-2 rounded shadow"
    >
      <div className="flex justify-between">
      <p className="text-sm text-gray-500 capitalize">{product.category}</p>
      <span className="pr-5 text-xl">&#9825;</span>
      </div>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-contain"
      />

      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>

      <span className="flex gap-2 items-center">
      <p className="text-green-600 font-semibold text-md">&darr;{product.discountPercentage}%</p>
      <p className="line-through">${original.toFixed(0)}</p>
      <p className="text-black font-bold">${product.price}</p>
      </span>
      <div className="flex justify-between items-center mt-2 mx-1">
        <button
          className="border-1 bg-[#FF735C] text-white text-sm active:bg-white active:text-[#FF735C] active:scale-95 transition rounded-lg px-2 py-2.5 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCart(product));
            toast.success(`${product.title} added to cart!`);
          }}
        >
          Add To Cart
        </button >
        <button className="border-1 rounded-lg text-sm px-2 py-2.5 cursor-pointer">
          Buy Now <span className="text-xs">&#9889;</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
