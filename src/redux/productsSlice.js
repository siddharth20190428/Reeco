import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentProduct: null,
  products: [
    {
      id: 1,
      img: "/Avocado Hass.jpg",
      name: "Chicken Breast Fillets, Boneless matuuma Marinated 6 Ounce Raw Invivid",
      brand: "Hormel Black Labelmany",
      price: "60.67",
      quantity: "15",
      status: 6,
    },
  ],
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
