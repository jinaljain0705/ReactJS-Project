import { createSlice } from "@reduxjs/toolkit";
import { ref, push, set, remove, update, onValue } from "firebase/database";
import { db } from "../firebase/firebaseConfig";

const slice = createSlice({
  name: "inventory",

  initialState: {
    products: [],
  },

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = slice.actions;

export const listenProducts = () => (dispatch) => {
  const productRef = ref(db, "products");

  onValue(productRef, (snapshot) => {
    const data = snapshot.val();

    if (!data) {
      dispatch(setProducts([]));
      return;
    }

    const list = Object.keys(data).map((id) => ({
      id,
      ...data[id],
    }));

    dispatch(setProducts(list));
  });
};

export const addProduct = (product) => async () => {
  const newRef = push(ref(db, "products"));

  await set(newRef, product);
};

export const updateProduct = (product) => async () => {
  await update(ref(db, "products/" + product.id), product);
};

export const deleteProduct = (id) => async () => {
  await remove(ref(db, "products/" + id));
};

export default slice.reducer;
