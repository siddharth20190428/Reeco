import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: (state, action) => {},
  },
});

export const { createOrder } = orderSlice.actions;

export default orderSlice.reducer;
