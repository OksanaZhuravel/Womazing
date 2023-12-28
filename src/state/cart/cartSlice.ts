import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: Array<{
    id: number;
    images?: string[];
    price: number;
    title: string;
    selectedSize: string;
    selectedColor: string;
    quantity: number;
  }>;
}

const initialState: CartState = {
  items: [],
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
      state.items.push(action.payload);
    },
  },
});


export const {  addCart } = cartSlice.actions;

export default cartSlice.reducer;

