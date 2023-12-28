// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import api from '../api/apiShop';

// export const fetchAllProducts = createAsyncThunk('allProduct/fetchAllProducts', async () => {
//   try {
//     const response = await api.getAll(1, 3);
// 	// console.log(response);
	
//     return response;
//   } catch (error) {
//     throw error;
//   }
// });

// export const productSlice = createSlice({
//   name: 'products',
//   initialState: {
//     items: [],
//     status: 'idle',
//     error: undefined as string | undefined,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllProducts.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchAllProducts.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchAllProducts.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error ? action.error.message : 'Unknown error';
//       });
//   },
// });

// export const selectProduct = (state: { allProduct: { items: any } }) => state.allProduct.items;
// export const selectStatus = (state: { allProduct: { status: any } }) => state.allProduct.status;
// export const selectError = (state: { allProduct: { error: any } }) => state.allProduct.error;

// export default productSlice.reducer;