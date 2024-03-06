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
      diccort: number | null | undefined;
      selectedSize: string;
      selectedColor: string;
      quantity: number;
      totalSave?: number | null;

    }>) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push(action.payload);
      }
    },

    updateCart: (state, action: PayloadAction<{ itemId: number; newQuantity: number; }>) => {
      const { itemId, newQuantity } = action.payload;
      const existingItem = state.cart.find(item => item.id === itemId);

      if (existingItem) {
        existingItem.quantity = newQuantity;
      }
    },

    deleteCart: (state, action: PayloadAction<{ itemId: number }>) => {
      const { itemId } = action.payload;
      state.cart = state.cart.filter(item => item.id !== itemId);
    },

    updateDiscountedPrice: (state, action: PayloadAction<{ itemId: number; totalSave: number }>) => {
      const { itemId, totalSave } = action.payload;
      const item = state.cart.find(item => item.id === itemId);
      if (item) {
        item.totalSave = totalSave;
      }
    },
    
    resetCart: (state) => {
      state.cart = [];
    },
  }
});

export const { addCart, updateCart, deleteCart, updateDiscountedPrice, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
