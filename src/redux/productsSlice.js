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
          product = { ...product, ...action.payload };
        return product;
      });
    },
    addProduct: (state, action) => {
      action.payload.price = parseFloat(action.payload.price);
      action.payload.quantity = parseInt(action.payload.quantity);
      action.payload.id = Date.now();
      state.products = [...state.products, action.payload];
    },
  },
});

export const { createproducts, setCurrentProduct, updateProduct, addProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
