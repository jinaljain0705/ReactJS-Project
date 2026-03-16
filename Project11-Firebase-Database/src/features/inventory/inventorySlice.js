import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProductsAPI,
  addProductAPI,
  updateProductAPI,
  deleteProductAPI,
} from "./inventoryThunks";

export const fetchProducts = createAsyncThunk(
  "inventory/fetchProducts",
  async () => {
    return await fetchProductsAPI();
  },
);

export const addProduct = createAsyncThunk(
  "inventory/addProduct",
  async (product) => {
    return await addProductAPI(product);
  },
);

export const updateProduct = createAsyncThunk(
  "inventory/updateProduct",
  async (product) => {
    return await updateProductAPI(product);
  },
);

export const deleteProduct = createAsyncThunk(
  "inventory/deleteProduct",
  async (id) => {
    return await deleteProductAPI(id);
  },
);

const inventorySlice = createSlice({
  name: "inventory",

  initialState: {
    products: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (p) => p.id === action.payload.id,
        );

        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
      });
  },
});

export default inventorySlice.reducer;
