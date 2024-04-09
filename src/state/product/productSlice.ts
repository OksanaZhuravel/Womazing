import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Draft } from "immer"
import api from "../../api/apiShop"
import { defaultProducts } from "../../api/defolt"
import { ProductProps, ProductState, ResponseData } from "../../types/types"

const initialState: ProductState = {
  item: defaultProducts,
  status: "idle",
  error: undefined as string | undefined,
}
export const fetchProductsAll = createAsyncThunk(
  "all/fetchProductsAll",
  async () => {
    const responseData: ResponseData = await api.getAllProduct()
    const response = responseData.data.map(({ id, attributes }) => ({
      id,
      title: attributes.title,
      description: attributes.description,
      price: attributes.price,
      discord: attributes.discord,
      quantity: attributes.quantity,
      categories: attributes.categories.data.map(
        ({ attributes }) => attributes.name,
      ),
      images: attributes.images.data.map(({ attributes }) => attributes.url),
      sizes: attributes.sizes.data.map(({ attributes }) => attributes.name),
      colors: attributes.colors.data.map((color) => ({
        name: color.attributes.name,
        value: color.attributes.value,
      })),
      news:
        attributes.news.data.length > 0
          ? attributes.news.data[0].attributes.New
          : false,
    }))
    // console.log(response);
    return response as Draft<ProductProps>[]
  },
)
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAll.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProductsAll.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.item = action.payload
      })
      .addCase(fetchProductsAll.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error ? action.error.message : "Unknown error"
      })
  },
})

export default productSlice.reducer
