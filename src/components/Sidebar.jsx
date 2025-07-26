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
      <div className="h-screen w-80 border-r-3 border-[#FF735C] pt-1 px-3 flex flex-col ">
        <button
          onClick={() => navigate("/home")}
          className="bg-zinc-500 h-15 rounded-lg mb-2 text-white"
        >
          All Products
        </button>

        <h1 className="text-3xl pl-2 font-bold text-zinc-600 mb-1">
          All Categories
        </h1>

        <ul className=" mt-2 overflow-auto bg-white text-black rounded-lg">
          {categories.map((cat) => (
            <li
              key={cat}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
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
