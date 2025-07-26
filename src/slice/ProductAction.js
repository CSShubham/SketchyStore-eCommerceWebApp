// src/features/products/productsActions.js
import { startLoading, setProducts, setCategories, setError, setProductByCategories } from "./ProductSlice";
import Loading from "../components/Loading";
export const fetchAllProducts = () => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await fetch("https://dummyjson.com/products?limit=15&&skip=20");
    const data = await response.json();
    dispatch(setProducts(data.products));
  } catch (err) {
    dispatch(setError(err.message));
  }
};

export const fetchProductsByCategory = (category,sortBy,order) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const response = await fetch(`https://dummyjson.com/products/category/${category}?sortBy=${sortBy}&order=${order}`);
    const data = await response.json();
    dispatch(setProductByCategories(data.products));
  } catch (err) {
    dispatch(setError(err.message));
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await fetch("https://dummyjson.com/products/category-list");
    const data = await response.json();
    dispatch(setCategories(data));
  } catch (err) {
    dispatch(setError(err.message));
  }
};
