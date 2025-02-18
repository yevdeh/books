import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isOpened: false,
  },
  reducers: {
    popupClosed: (state) => {
      state.isOpened = false;
    },
    popupOpened: (state) => {
      state.isOpened = true;
    },
  },
});

export const { popupClosed, popupOpened } = popupSlice.actions;
export default popupSlice.reducer;
