import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "../app/inventorySlice";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});
