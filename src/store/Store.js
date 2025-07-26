import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slice/ProductSlice";
import cartReducer from "../slice/CartSlice";
export const store = configureStore({
  reducer: { products: productsReducer, cart: cartReducer },
});
