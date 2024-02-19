// thunk

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registApi } from "api/registerApi";

const initialState = {
  registData: {},
  isRegistSuccess: false,
  isRegistLoading: false,
  isRegistError: false,

  registErrorStatus: 0,
  registErrorMessage: "",
};

export const __setUserRegist = createAsyncThunk(
  "register/setUserRegist",
  async (userRegistIdPw, thunkAPI) => {
    try {
      const response = await registApi.postRegist(userRegistIdPw);
      return response;
    } catch (error) {
      const errorStatus = error?.response?.status;
      const errorMessage = error?.response?.data?.message;
      return thunkAPI.rejectWithValue({ errorStatus, errorMessage });
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
        state.isRegistLoading = false;
        state.isRegistError = false;
        state.isRegistSuccess = true;
        state.registData = { ...aciton.payload };
      })
      .addCase(__setUserRegist.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.isError = true;
        state.registErrorStatus = action.payload.errorStatus;
        state.registErrorMessage = action.payload.errorMessage;
      });
  },
});

export const { setUserRegist } = registSlice.actions;

export default registSlice.reducer;
