import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Plus, Minus, ShieldCheck, ChevronLeft } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel";
import Loading from "../components/Loading";
import { useAuth } from "../contexts/AuthContext";
import { placeOrder } from "../slice/OrderSlice";
function CheckoutPage() {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const { productId } = useParams();
  const { items } = useSelector((state) => state.products);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {userData}=useAuth();

  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  useEffect(() => {
    const found = items.find((p) => p.id === Number(productId));
    if (found) {
      setProduct(found);
    } else {
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then(setProduct)
        .catch(() => setProduct(undefined));
    }
  }, [items, productId]);
  // console.log("product is",product);
  if (product === undefined) {
    return <div className="text-4xl">Product Not Found!!!</div>;
  }
  if (!product) {
    return <Loading />;
  }
  let originalPrice = (discountedPrice, discountPercentage) => {
    const df = 1 - discountPercentage / 100;
    if (df <= 0) {
      throw new Error("out of stock");
    }
    return discountedPrice / df;
  };

  const original = originalPrice(product.price, product.discountPercentage);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(placeOrder({ product, count }));
    // {isMobile ? navigate("/account/myorder") : navigate("/account/myorders")};
    navigate('/order-success')
  };

  return (
    <div className="w-full mb-5 md:mb-0">
      <form onSubmit={handleSubmit}>
        <div className="min-h-screen bg-gray-100 p-4 md:p-10">
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex md:space-x-8 p-6 md:p-10">
            {/* Left Side - Shipping Info */}
            <div className="w-full md:w-2/3">
              <h1 className="text-2xl flex items-center font-semibold mb-4">
                <div className="flex ">
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
                Shipping Information
              </h1>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Full name *</label>
                  <input
                    type="text"
                    value={userData.username}
                    required
                    disabled
                    className="w-full p-2 mt-1 border bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Email address *</label>
                  <input
                    type="email"
                    value={userData.email}
                    required
                    disabled
                    className="w-full p-2 mt-1 border rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Phone number *</label>
                  <input
                    type="tel"
                    value={userData.phoneNumber}
                    required
                    disabled
                    className="w-full p-2 mt-1 border bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Country *</label>
                  <select
                    required
                    disabled
                    className=" w-full *:text-xs md:*text-lg p-2 mt-1 border bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 rounded"
                  >
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>

                <div className="flex flex-col md:flex-row  md:space-x-4">
                  <div className="flex-1">
                    <label className="text-sm font-medium">City</label>
                    <input
                      type="text"
                      value={userData.address.city}
                      required
                      disabled
                      className="w-full p-2 mt-1 border rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
                      placeholder="Enter city"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium">State</label>
                    <input
                      type="text"
                      value={userData.address.state}
                      required
                      disabled
                      className="w-full p-2 mt-1 border rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
                      placeholder="Enter state"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium">ZIP Code</label>
                    <input
                      type="text"
                      value={userData.address.postalCode}
                      required
                      disabled
                      className="w-full p-2 mt-1 border rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
                      placeholder="Enter ZIP code"
                    />
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <input type="checkbox" required className="mr-2 " />
                  <span className="text-sm ">
                    I have read and agree to the Terms and Conditions.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Cart Summary */}
            <div className="w-full md:w-1/2 mt-10 md:mt-0">
              <h2 className="text-xl font-semibold mb-4">
                Review your Product
              </h2>

              {/* {images} */}
              <div className="flex gap-2  md:gap-5">
                <div className="">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-25 md:w-30 h-30 sm:h-30 md:border-3 rounded-2xl border-gray-300 md:h-35 object-contain"
                  />
                </div>
                <div className=" flex flex-col">
                  <span className="text-sm md:text-xl">{product.title}</span>
                  <div className="flex flex-col items-baseline">
                    <div className="flex gap-2">
                      <p className="line-through text-base text-gray-500">
                        ${original.toFixed(0)}
                      </p>
                      <p className="text-green-600 font-semibold text-sm sm:text-base">
                        {product.discountPercentage}% off
                      </p>
                    </div>
                    <p className="text-black font-bold text-lg md:text-xl">
                      ${product.price}
                    </p>
                  </div>
                  <div className="flex  items-center text-lg mt-1 gap-2 md:gap-6">
                    <div
                      onClick={decrement}
                      className="text-black active:scale-90 transition-transform  p-3 rounded-full shadow-md"
                    >
                      <Minus size={12} />
                    </div>
                    {count}
                    <div
                      onClick={increment}
                      className=" text-black  active:scale-90 transition-transform  p-3 rounded-full shadow-md"
                    >
                      <Plus size={12} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium">Discount code</label>
                <div className="flex mt-1">
                  <input
                    type="text"
                    className="flex-1 p-2 border rounded-l"
                    placeholder="Enter code"
                  />
                  <div className="px-4 flex justify-center items-center bg-gray-200 border hover:bg-gray-400 border-l-0 rounded-r">
                    Apply
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-600 mt-4 space-y-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${(count * product.price).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                {/* <div className="flex justify-between">
                  <span>Discount</span>
                  <span>-$10.00</span>
                </div> */}
                <div className="flex justify-between font-semibold text-black mt-2">
                  <span>Total</span>
                  <span>${(count * product.price.toFixed(2) + 5).toFixed(2)}</span>
                </div>
              </div>

              <button

                type="submit"
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
              >
                Pay Now
              </button>

              <div className="mt-3 flex items-center justify-center gap-1 text-xs text-gray-500 text-center">
                <ShieldCheck />
                Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
