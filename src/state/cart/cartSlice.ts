import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../types/types";

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Partial<CartItem>>) => {
      const { id, selectedSize, selectedColor, quantity } = action.payload;
      if (quantity !== undefined) {
        const existingItemIndex = state.cart.findIndex(item =>
          item.id === id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
        );

        if (existingItemIndex !== -1) {
          state.cart[existingItemIndex].quantity += quantity;
        } else {
          const key = `${id}-${selectedSize}-${selectedColor}`;
          state.cart.push({ ...(action.payload as CartItem), key });
        }
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