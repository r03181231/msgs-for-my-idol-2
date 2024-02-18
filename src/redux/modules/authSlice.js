// thunk

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  userPw: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "users",
  initialState,
  reducer: {
    addNumber: (state, action) => {
      //state변경하는 로직
      state.number = state.number + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNumber.pending, (state) => {})
      .addCase(addNumber.fulfilled, (state, action) => {
        // state.entities.push(action.payload);
      })
      .addCase(addNumber.rejected, (state) => {});
  },
});

export const { addNumber } = authSlice.actions;

export default authSlice.reducer;
