
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/apiShop";
import { ProductState } from "../../types/types";

const initialState: ProductState = {
  item: [],
  status: 'idle',
  error: undefined as string | undefined,
};
export const fetchProductsAll = createAsyncThunk('all/fetchProductsAll', async () => {
  try {
    const response = await api.getAllProduct();
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
});
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAll.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsAll.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.item = action.payload;
      })
      .addCase(fetchProductsAll.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error ? action.error.message : 'Unknown error';
      });
  },
});

export default productSlice.reducer;