import { createSlice } from '@reduxjs/toolkit';

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    }
  },
});

export const { setItems, setLoading, addProduct } = inventorySlice.actions;
export default inventorySlice.reducer;
