import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ImageCarousel from "../components/ImageCarousel";
import Loading from "../components/Loading";
import { addToCart } from "../slice/CartSlice";
import { useNavigate } from "react-router-dom";
function ProductPage() {
  const { productId } = useParams();
  const { items } = useSelector((state) => state.products);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <div className="h-full w-full py-1 px-10">
     
      <div className="flex gap-4">
        {" "}
        {/* both horizontal div container image and the details*/}
         <div className=" w-20">
        <button
          className="px-3 py-2 border-1 rounded-xl flex items-center text-white bg-[#FF735C] active:text-[#FF735C] active:bg-white"
          onClick={() => {
            navigate(-1);
          }}
        >
          {" "}
          &larr; Back{" "}
        </button>
      </div>
        <div className=" border-0 ">
          {" "}
          {/*div container image and buttons*/}
          <div className="min-w-120 h-110 border-0">
            <ImageCarousel images={product.images} />
          </div>
          <div className="flex p-2 border-0 justify-between items-center mt-2 ">
            <button
              className="border-1 h-15 w-55 bg-[#FF735C] text-white text-sm font-semibold  active:bg-white active:text-[#FF735C] active:scale-95 transition rounded-lg px-2 py-2.5 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart(product));
              }}
            >
              Add To Cart
            </button>
            <button className="border-1 h-15 w-55 rounded-lg font-semibold  text-sm px-2 py-2.3 cursor-pointer">
              Buy Now <span className="text-xs">&#9889;</span>
            </button>
          </div>
        </div>
        <div className="border-0 w-full flex flex-col gap-2 py-6 px-6">
          {" "}
          {/*div container details*/}
          <div className="flex justify-between">
            <h1 className="text-xl font-bold text-gray-400">{product.brand}</h1>
            <h2 className="text-xl text-zinc-400">{product.category}</h2>
          </div>
          <h1 className="text-4xl font-semibold">{product.title}</h1>
          <p className="text-green-600 font-semibold text-lg">Special Price</p>
          <div className="flex  items-baseline gap-3">
            <p className="text-black font-bold text-2xl">${product.price}</p>
            <p className="line-through text-gray-500">${original.toFixed(0)}</p>
            <p className="text-green-600 font-semibold text-md">
              {product.discountPercentage}% off
            </p>
          </div>
          <span className=" text-center text-white font-semibold rounded-2xl py-0.3 border-2 w-15 bg-green-600">
            {product.rating}&#9734;
          </span>
          <div className="text-xl font-medium text-zinc-700 tracking-wide">
            {product.description}
          </div>
          <div className="flex gap-2 items-baseline mt-3">
            <span className="text-xl w-5  opacity-85">&#128204;</span>
            <span className="text-2xl font-semibold text-zinc-700">
              {product.shippingInformation}
            </span>
          </div>
          <div className=" flex *:rounded-md h-30 mt-3 *:border-2 *:w-50 gap-10 *:flex *:flex-col *:p-3 *:justify-center *:border-green-600 *:items-center">
            <div>
              <span className="text-xl mb-2">&#x1F4E6;</span>
              {product.returnPolicy}
            </div>
            <div>
              <span className="text-2xl mb-2">&#128184;</span> Cash on Delivery
            </div>
            <div>
              <span className="text-xl mb-2">&#128272;</span>
              {product.warrantyInformation}
            </div>
          </div>
        </div>
      </div>
      {/* product Details & reviews */}
      <div className="border-0 mt-3 flex  *:w-170 *:flex *:flex-col *:p-5">
        <div>
          <h1 className="text-center text-4xl text-zinc-700 tracking-normal">
            Reviews
          </h1>
          <div className="flex px-5 mt-5 gap-5 justify-center items-center">
            {product.reviews.map((review) => {
              return (
                <>
                  <div className=" border-2 rounded-xl h-50 flex flex-col justify-center items-center py-5 px-1 w-full">
                    <div className="border-0 flex justify-center items-center rounded-[50%] mb-1 font-bold bg-zinc-400 h-10 w-10">
                      {review.reviewerName.charAt(0)}
                    </div>
                    <span>{review.reviewerName}</span>
                    <p className="text-xs">{review.reviewerEmail}</p>
                    <span className=" text-center w-10 text-white font-semibold rounded-2xl py-0.3 border-2  bg-green-600">
                      {review.rating}&#9734;
                    </span>
                    <p>{review.comment}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="flex items-center ">
          <h1 className="text-center text-4xl text-zinc-700 tracking-normal">
            Product Details
          </h1>
          <div className="border-0 w-150 flex flex-col mt-2 gap-3">
            <div className="flex justify-around items-center">
              <p className="text-xl text-zinc-500">Category</p>

              <p className="text-xl font-semibold">{product.category}</p>
            </div>
            <div className="flex justify-around items-center">
              <p className="text-xl text-zinc-500">Availability</p>

              <p className="text-xl font-semibold">
                {product.availabilityStatus}
              </p>
            </div>
            <div className="flex justify-around items-center">
              <p className="text-xl text-zinc-500">Brand</p>

              <p className="text-xl font-semibold">{product.brand}</p>
            </div>
            <div className="flex justify-around items-center">
              <p className="text-xl text-zinc-500">Items left</p>

              <p className="text-xl font-semibold">{product.stock}</p>
            </div>
            <div className="flex justify-around items-center">
              <p className="text-xl text-zinc-500">Warranty</p>

              <p className="text-xl font-semibold">
                {product.warrantyInformation}
              </p>
            </div>
            <div className="flex justify-around items-center">
              <p className="text-xl text-zinc-500">Min order Quantity</p>

              <p className="text-xl font-semibold">
                {product.minimumOrderQuantity}
              </p>
            </div>
            <div className="flex justify-around items-center">
              <p className="text-xl text-zinc-500">Dimensions</p>

              <p className="text-lg font-semibold">
                {product.dimensions.height} X {product.dimensions.width} X{" "}
                {product.dimensions.depth}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
