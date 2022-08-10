import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    switchLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
