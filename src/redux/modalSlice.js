import { createSlice } from "@reduxjs/toolkit"; // benim

const initialState = {
  modal: false,
};

export const modalSlice = createSlice({
  // benim
  name: "modal",
  initialState,
  reducers: {
    modalFunc: (state) => {
      state.modal = !state.modal;
    },
  },
});

// Action creators are generated for each case reducer function
export const { modalFunc } = modalSlice.actions;

export default modalSlice.reducer;
