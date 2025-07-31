import React from "react";
import { addToCart } from "../slice/CartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Heart } from 'lucide-react';
import WishlistButton from "./WishlistButton";
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
      className="border-1 p-2 sm:p-4  rounded-lg shadow  "
    >
      <div className="flex justify-between items-center">
      <p className="text-[10px] sm:text-sm text-gray-500 capitalize">{product.category}</p>
      <WishlistButton product={product} />
      </div>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-15 sm:h-30 md:h-35 object-contain"
      />

      <h3 className="text-[12px] sm:text-sm md:text-base font-semibold mt-2">{product.title}</h3>

      <span className="flex gap-2 items-center flex-wrap">
      <p className="text-green-600 font-semibold text-xs sm:text-md">&darr;{product.discountPercentage}%</p>
      <p className="line-through text-xs sm:text-base">${original.toFixed(0)}</p>
      <p className="text-black font-bold text-xs sm:text-sm md:text-lg">${product.price}</p>
      </span>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-2 mx-1 gap-1.5">
        <button
          className="border-1 bg-[#FF735C] text-white text-[10px] lg:text-sm active:bg-white active:text-[#FF735C] active:scale-95 transition rounded-lg px-0.5 py-1 sm:px-2 sm:py-2.5 cursor-pointer w-full lg:w-auto"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCart(product));
            toast.success(`${product.title} added to cart!`);
          }}
        >
          Add To Cart
        </button >
        <button className="border-1 rounded-lg text-[10px] lg:text-sm px-0.5 py-1 sm:px-2 sm:py-2.5 cursor-pointer w-full lg:w-auto">
          Buy Now <span className="text-[10px]">&#9889;</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
