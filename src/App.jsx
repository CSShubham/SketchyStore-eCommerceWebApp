import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import Front from "./pages/Front";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileForm from "./components/ProfileForm";
import WishlistPage from "./pages/WishlistPage";
import CheckoutPage from "./pages/CheckoutPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Front />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/category/:category" element={<Product />} />
          <Route path="/home/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/:productId" element={<CheckoutPage/>} />
          <Route path="/account" element={<Account />}>
            <Route index element={<ProfileForm />} />
            <Route path="wishlist" element={<WishlistPage />} />
          </Route>
          <Route path="/account/mprofile" element={<ProfileForm />} />
          <Route path="/account/mwishlist" element={<WishlistPage />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default App;
