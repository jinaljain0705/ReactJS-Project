import { configureStore } from "@reduxjs/toolkit";
import documentReducer from "../feature/FileSlice";

export const store = configureStore({
  reducer: {
    documents: documentReducer,
  },
});
