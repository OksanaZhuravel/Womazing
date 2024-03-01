
import {   createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  {Draft}  from "immer";
import api from "../../api/apiShop";
import { CategoryProps, CategoryResponseData, CategoryState } from "../../types/types";

const initialState: CategoryState = {
	categories: [],
	status: 'idle',
	error: undefined as string | undefined,
};
export const fetchCategoriesAll = createAsyncThunk('categories/fetchCategoriesAll', async () => {
	try {
		const responseData: CategoryResponseData = await api.getAllCategories();
		// console.log(responseData)
		return responseData as unknown as Draft<CategoryProps>[]
	} catch (error) {
		throw error;
	}
});
export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategoriesAll.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchCategoriesAll.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.categories = action.payload;
			})
			.addCase(fetchCategoriesAll.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error ? action.error.message : 'Unknown error';
			});
	},
});

export default categoriesSlice.reducer;