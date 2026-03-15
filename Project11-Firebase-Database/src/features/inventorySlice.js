import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase/firebaseConfig";
import { ref, push, set, get, update, remove } from "firebase/database";

const initialState = {
  products: [],
  loading: false,
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const snapshot = await get(ref(db, "products"));

  if (!snapshot.exists()) return [];

  const data = snapshot.val();

  return Object.keys(data).map((id) => ({
    id,
    ...data[id],
  }));
});

export const addProduct = createAsyncThunk("products/add", async (product) => {
  const newRef = push(ref(db, "products"));

  await set(newRef, product);

  return { id: newRef.key, ...product };
});

export const updateProduct = createAsyncThunk(
  "products/update",
  async ({ id, data }) => {
    await update(ref(db, "products/" + id), data);

    return { id, ...data };
  },
);

export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
  await remove(ref(db, "products/" + id));

  return id;
});

const inventorySlice = createSlice({
  name: "inventory",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });

    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);

      if (index !== -1) {
        state.products[index] = action.payload;
      }
    });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    });
  },
});

export default inventorySlice.reducer;
