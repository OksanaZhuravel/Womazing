import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../types/types";

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<{
      id: number;
      images?: string[];
      price: number;
      title: string;
      selectedSize: string;
      selectedColor: string;
      quantity: number;
    }>) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
  },
});

export const {  addCart } = cartSlice.actions;

export default cartSlice.reducer;

