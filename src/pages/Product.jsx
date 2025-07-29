import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsByCategory } from "../slice/ProductAction";
import ProductCard from "../components/ProductCard";
function Product() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("---Sort by---");
  const [sortBy, setsortBy] = useState("");
  const [order, setOrder] = useState("asc");
  const options = [
    { value: "", label: "--Select---" },
    { value: "price", label: "Sort by Price (low to high)" },
    { value: "title", label: "Sort by Title" },
    { value: "discountPercentage", label: "Sort by Discount(low to high)" },
  ];
  const handleSelect = (option) => {
    setSelected(option.label);
    setsortBy(option.value);
    setIsOpen(false);
    // console.log("Sorting by:", option.value ,option.label);
    // You can call a sort function or set a parent state here
  };

  const dispatch = useDispatch();
  const { category } = useParams();
  // console.log(category);
  const { productByCategories } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProductsByCategory(category, sortBy, order));
  }, [dispatch, category, sortBy]);

  return (
    <>
      <div className="flex min-h-screen w-full px-0 ">
        <Sidebar />
        <div className="w-full h-screen px-2 py-4 sm:px-4 md:px-10 overflow-y-auto">
          {/* <Sidebar /> */}
          <div className="flex justify-between sm:items-center mb-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold md:font-bold mb-4 capitalize">
              {category}
            </h2>
            <div className="relative inline-block w-45 sm:w-64 md:w-70 lg:w-76">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left rounded-xl border border-gray-300 bg-white px-4 py-2 shadow-sm text-sm md:text-base font-medium text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {selected}
              </button>
              {isOpen && (
                <div className="absolute z-1 mt-2 w-full rounded-xl border-1 bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelect(option)}
                        className="w-full text-left block px-4 py-2 text-[12px] md:text-base text-gray-700 hover:bg-gray-100"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productByCategories.length === 0 ? (
              <p>No products found in this category.</p>
            ) : (
              productByCategories.map((product) => (
                // <div key={product.id} className=" p-2 rounded shadow">
                //   <img
                //     src={product.thumbnail}
                //     alt={product.title}
                //     className="w-full h-40 object-contain"
                //   />
                //   <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                //   <p className="text-green-600 font-bold">${product.price}</p>
                //   <button
                //     className="border-1 px-2 py-1 cursor-pointer"
                //     onClick={() => dispatch(addToCart(product))}
                //   >
                //     Add To Cart
                //   </button>
                // </div>
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
