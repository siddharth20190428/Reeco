import { createSlice } from "@reduxjs/toolkit";
import { products } from "../utils";

const initialState = {
  currentProduct: null,
  products,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    updateProduct: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id)
          product = { ...product, status: action.payload.status };
        return product;
      });
    },
  },
});

export const { createproducts, setCurrentProduct, updateProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
