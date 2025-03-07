import { createSlice } from "@reduxjs/toolkit"; // benim

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter((dt) => dt.id != action.payload)];
    },
    updateDataFunc: (state, action) => {
      state.data = state.data.map((dt) =>
        dt.id == action.payload.id ? { ...dt, ...action.payload } : dt
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createDataFunc,
  deleteDataFunc,
  uptadeDataFunc,
  buttonUpdateFonc,
} = dataSlice.actions;

export default dataSlice.reducer;
