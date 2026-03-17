import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref as dbRef, push, set, get, remove } from "firebase/database";
import { db } from "../firebase/firebaseConfig";

// Upload
export const addDocument = createAsyncThunk(
  "documents/addDocument",
  async ({ metadata, base64 }, { rejectWithValue }) => {
    try {
      const newRef = push(dbRef(db, "documents"));

      const payload = {
        ...metadata,
        content: base64,
      };

      await set(newRef, payload);

      return { id: newRef.key, ...payload };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Fetch
export const loadDocuments = createAsyncThunk(
  "documents/loadDocuments",
  async (_, { rejectWithValue }) => {
    try {
      const snapshot = await get(dbRef(db, "documents"));

      if (!snapshot.exists()) return [];

      const data = snapshot.val();

      return Object.entries(data).map(([id, value]) => ({
        id,
        ...value,
      }));
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Delete
export const removeDocument = createAsyncThunk(
  "documents/removeDocument",
  async (id, { rejectWithValue }) => {
    try {
      await remove(dbRef(db, `documents/${id}`));
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const fileSlice = createSlice({
  name: "documents",
  initialState: {
    documents: [],
    isLoading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addDocument.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDocument.fulfilled, (state, action) => {
        state.isLoading = false;
        state.documents.unshift(action.payload);
      })
      .addCase(addDocument.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(loadDocuments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadDocuments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.documents = action.payload;
      })

      .addCase(removeDocument.fulfilled, (state, action) => {
        state.documents = state.documents.filter(
          (doc) => doc.id !== action.payload
        );
      });
  },
});

export default fileSlice.reducer;
