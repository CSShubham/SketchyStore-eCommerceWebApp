import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import Front from "./pages/Front";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Front/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/home/category/:category" element={<Product />} />
        <Route path='/home/:productId' element={<ProductPage />} />
        <Route path="/home/cart" element={<Cart />} />
        {/* Add more routes as needed */}
      </Route>
      <Route path="/home/account" element={<Account />} />
    </Routes>
  );
}

export default App;
