import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const fetchProducts = createAsyncThunk(
  "inventory/fetchProducts",
  async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    let products = [];

    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });

    return products;
  },
);

export const addProduct = createAsyncThunk(
  "inventory/addProduct",
  async (product) => {
    const docRef = await addDoc(collection(db, "products"), product);
    return { id: docRef.id, ...product };
  },
);

export const deleteProduct = createAsyncThunk(
  "inventory/deleteProduct",
  async (id) => {
    await deleteDoc(doc(db, "products", id));
    return id;
  },
);

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    });
  },
});

export default inventorySlice.reducer;
