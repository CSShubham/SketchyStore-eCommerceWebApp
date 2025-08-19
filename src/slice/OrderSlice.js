import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    placeOrder: (state, action) => {
      const { product, count } = action.payload;
      const newOrder = {
        id: nanoid(), // unique ID
        product,
        count,
        status: "active", // default status
        orderedAt: new Date().toISOString(),
      };
      state.orders.unshift(newOrder);
    },
    cancelorder: (state, action) => {
      const orderId = action.payload;
      state.orders = state.orders.map((order) =>
        order.id === orderId ? { ...order, status: "cancelled" } : order
      );
    },
  },
});
export const { placeOrder, cancelorder } = orderSlice.actions;
export default orderSlice.reducer;
