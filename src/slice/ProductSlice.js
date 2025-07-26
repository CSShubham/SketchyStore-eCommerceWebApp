import { createSlice } from "@reduxjs/toolkit";



const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    categories:[],
    productByCategories:[],
    loading: false,
    error: null,
  },
  reducers: {
    startLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setProducts(state, action) {
      state.items = action.payload;
      state.loading = false;
    },
    setCategories(state, action) {
      state.categories = action.payload;
      // state.loading = false;
      // console.log(state.categories)
    },
    setProductByCategories(state,action){
      state.productByCategories=action.payload;
      console.log(state.productByCategories)
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, setProducts,setCategories,setProductByCategories, setError } = productsSlice.actions;
export default productsSlice.reducer;
