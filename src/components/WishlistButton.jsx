// src/components/WishlistButton.jsx
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../slice/Wishlist";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function WishlistButton({ product }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isInWishlist = wishlistItems.some((item) => item.id === product.id);
 const [animate, setAnimate] = useState(false);
  //   const handleClick = (e) => {
  //      e.stopPropagation();
  //     if (isInWishlist) {
  //       dispatch(removeFromWishlist(product.id));
  //     } else {
  //       dispatch(addToWishlist(product));
  //     }
  //   };

  return (
    <button
      className="w-6 h-6 flex items-center justify-center cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
          setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
        if (isInWishlist) {
          dispatch(removeFromWishlist(product.id));
        } else {
          dispatch(addToWishlist(product));
        }
      }}
    >
      <Heart
        size={18}
        className={` rounded text-black  ${
          isInWishlist ? "text-red-500 fill-current " : "text-gray-500"
        }  ${animate ? "scale-125" : "scale-100"}  transition-all duration-300`}
      />
    </button>
  );
}
