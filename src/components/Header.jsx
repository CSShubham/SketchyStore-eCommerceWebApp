import { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { fetchCategories } from "../slice/ProductAction";
import { CircleUserRound,ShoppingCart } from "lucide-react";
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
    <header className=" flex  justify-between bg-[#ff735c] md:bg-white items-center px-4 lg:px-10 shadow-md sm:shadow-none text-black py-3 sm:py-6">
      <NavLink to='/' className=" text-lg md:text-xl lg:text-2xl font-semibold  tracking-wider text-white md:text-[#ff735c]">SketchyStore</NavLink>
      <nav className="flex gap-4 lg:gap-10 md:w-auto items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hidden md:block py-2 pr-4 pl-3 ${
              isActive ? "text-orange-700" : ""
            } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `hidden md:block py-2 pr-4 pl-3 ${
              isActive ? "text-orange-700" : ""
            } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          Shop
        </NavLink>
        <div className="relative hidden md:block  hover:text-orange-700 ">
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
        <NavLink
          to="/cart"
          className={({ isActive }) =>`${
              isActive ? " md:text-orange-700" : ""
            } cursor-pointer hover:text-orange-700 py-2 pl-3 relative`}
        >
          <ShoppingCart size={24} />
          {cartQuantity > 0 && (
        <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full px-2 text-xs">
          {cartQuantity}
        </span>
      )}
        </NavLink>

        <NavLink
          to="/account"
          className={({ isActive }) =>
            `block py-2 pr-2  pl-3 ${
              isActive ? "md:text-orange-700" : ""
            } duration-200  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          <CircleUserRound  size={24} />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
