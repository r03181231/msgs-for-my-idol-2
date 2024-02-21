// thunk

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registApi } from "api/registerApi";

const initialState = {
  registData: {},
  isSuccess: false,
  isLoading: false,
  isError: false,
  error: null,
  errorStatus: 0,
  errorMessage: null,
};

export const __setUserRegist = createAsyncThunk(
  "register/setUserRegist",
  async (userRegistIdPw, thunkAPI) => {
    try {
      const response = await registApi.postRegist(userRegistIdPw);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const registSlice = createSlice({
  name: "register",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(__setUserRegist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__setUserRegist.fulfilled, (state, aciton) => {
        state.isLoading = false;
        state.error = false;
        state.isSuccess = aciton.payload.data.success;
        state.registData = aciton.payload;
      })
      .addCase(__setUserRegist.rejected, (state, action) => {
        const errorStatus = action.payload.response.status;
        const errorMessage = action.payload.response.data.message;
        state.isLoading = false;
        state.isError = true;

        state.error = action.payload;
        state.errorStatus = errorStatus;
        state.errorMessage = errorMessage;
      });
  },
});

export const {} = registSlice.actions;

export default registSlice.reducer;
