import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../slice/ProductAction";

function Sidebar() {
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    navigate(`/home/category/${category}`);
  };
  return (
    <>
      <div className="h-screen w-22 sm:w-35 md:w-55 lg:w-60 border-r-2 border-[#FF735C] pt-1 px-0.5 sm:px-3 flex flex-col ">
        <button
          onClick={() => navigate("/home")}
          className="bg-zinc-500 w-20 sm:w-30 md:w-full h-8 sm:h-15 rounded-lg mb-1  text-[10px] sm:text-sm text-white hover:bg-zinc-600"
        >
          All Products
        </button>

        <h1 className=" sm:text-xl md:text-2xl lg:text-3xl md:px-4 font-bold text-[12px] text-zinc-600 mt-1">
          All Categories
        </h1>

        <ul className=" mt-2 overflow-y-auto bg-white text-black rounded-lg">
          {categories.map((cat) => (
            <li
              key={cat}
              className="px-0.5 py-2 sm:px-2 text-[9px] md:text-lg hover:bg-gray-200 cursor-pointer"
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
