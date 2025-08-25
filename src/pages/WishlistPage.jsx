import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import ProductCard from "../components/ProductCard";
import GhostAnimation from "../assets/empty ghost.json"
import Lottie from "lottie-react";
function WishlistPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const WishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <div className="p-2 md:p-4 md:pt-0 space-y-4 w-full">
     <div className="flex  py-3 md:p-3 md:pt-0">
        <div className="flex md:hidden">
          <button
            className=" active:rounded-xl active:text-white active:bg-[#FF735C] text-[#FF735C] bg-white"
            onClick={() => {
              navigate(-1);
            }}
          >
            {" "}
            <ChevronLeft
              className="flex justify-center items-center"
              size={30}
            />{" "}
          </button>
        </div>
        <div className="text-xl md:text-2xl font-semibold">My Wishlist</div>
      </div>
      {WishlistItems.length === 0 ? (
        <div className="flex  flex-col justify-center items-center xl:h-120">
          {/* <img
            src="/emptywishlist.PNG"
            alt="imageloading....."
            className="h-50 w-50 md:h-80 md:w-80 lg:h-120 lg:w-120"
          /> */}
          <Lottie
            animationData={GhostAnimation}
            loop={true}
            className="h-50 w-50 md:h-80 md:w-80 lg:h-110 lg:w-110"
          />
          <p className="text-lg md:text-xl lg:text-3xl text-[#FF735C] tracking-wider font-semibold ">
            Your Wishlist is Empty
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-auto px-6 gap-6">
            {WishlistItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default WishlistPage;
