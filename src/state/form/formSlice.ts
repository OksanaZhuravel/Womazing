import {  PayloadAction, createSlice } from "@reduxjs/toolkit";

interface VerificationState {
  isVerification: boolean;
  isPost: boolean;
  isFormSubmited:boolean;
}
const initialState: VerificationState = {
  isVerification: false,
  isPost: false,
  isFormSubmited: true,
};
const formSlice = createSlice({
  name: 'verification',
  initialState,
  reducers: {
    setVerification(state, action: PayloadAction<boolean>) {
      state.isVerification = action.payload;
    },
     setPost(state, action: PayloadAction<boolean>) {
      state.isPost = action.payload;
    },
    setFormSubmited(state, action: PayloadAction<boolean>) {
      state.isFormSubmited = action.payload;
    },
  },
});

export const { setVerification, setPost , setFormSubmited} = formSlice.actions;

export default formSlice.reducer;