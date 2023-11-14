import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state = { ...action.payload };
    },
  },
});

export const { setCurrentProduct } = productSlice.actions;

export default productSlice.reducer;
