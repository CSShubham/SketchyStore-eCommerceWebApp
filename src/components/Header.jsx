import { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { fetchCategories } from "../slice/ProductAction";

function Header() {
  const [isOpen, setISOpen] = useState(false);
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.products);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    navigate(`/home/category/${category}`);
    setISOpen(false);
  };

  return (
    <header className="bg-white flex  justify-between items-center px-10 text-black py-6">
      <div className="text-2xl font-semibold tracking-wider text-[#ff735c]">SketchyStore</div>
      <nav className="flex gap-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 ${
              isActive ? "text-orange-700" : ""
            } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 ${
              isActive ? "text-orange-700" : ""
            } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          Shop
        </NavLink>
        <div className="relative  hover:text-orange-700 ">
          <button onClick={() => setISOpen(!isOpen)}>
             Categories &nbsp; {/*<span className="inline-block hover:rotate-90">&gt;</span>} */}

          </button>
          {isOpen && (
            <ul className="absolute z-2 top-full mt-2 h-50 overflow-auto bg-white text-black rounded-lg  w-48">
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
          )}
        </div>
        <div
          onClick={() => navigate("/home/cart")}
          className="cursor-pointer hover:text-orange-700 relative"
        >
          Cart
          {cartQuantity > 0 && (
        <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full px-2 text-xs">
          {cartQuantity}
        </span>
      )}
        </div>

        <NavLink
          to="/home/account"
          className={({ isActive }) =>
            `block py-2 pr-4  pl-3 ${
              isActive ? "text-orange-700" : ""
            } duration-200 border-1 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
