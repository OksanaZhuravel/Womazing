import { configureStore } from "@reduxjs/toolkit"
import productReduser from "./product/productSlice"
import counterReducer from "./cart/cartSlice"
import categoriesSlice from "./categories/categoriesSlice"
import modalSlice from "./modal/modalSlice"
import formSlice from "./form/formSlice"

export const store = configureStore({
  reducer: {
    products: productReduser,
    carts: counterReducer,
    categories: categoriesSlice,
    modals: modalSlice,
    form: formSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
