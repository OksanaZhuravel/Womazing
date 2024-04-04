import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ModalState {
  isModalOpen: boolean
}
const initialState: ModalState = {
  isModalOpen: false,
}
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalOpen(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload
    },
  },
})

export const { setModalOpen } = modalSlice.actions

export default modalSlice.reducer
