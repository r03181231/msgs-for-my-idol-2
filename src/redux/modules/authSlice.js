// thunk

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "api/loginApi";

const initialState = {
  userData: {},
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorStatus: 0,
  errorMessage: "",
};

export const __setUserLogin = createAsyncThunk(
  "auth/setUserLogin",
  async (userLoginIdPw, thunkAPI) => {
    try {
      const response = await loginApi.postLogin(userLoginIdPw);
      return response;
    } catch (error) {
      const errorStatus = error?.response?.status;
      const errorMessage = error?.response?.data?.message;
      return thunkAPI.rejectWithValue({ errorStatus, errorMessage });
    }
  }
);

const authSlice = createSlice({
  name: "users",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(__setUserLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__setUserLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.userData = { ...action.payload };
      })
      .addCase(__setUserLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorStatus = action.payload.errorStatus;
        state.errorMessage = action.payload.errorMessage;
      });
  },
});

export const { setUserLogin, setUserRegist } = authSlice.actions;

export default authSlice.reducer;
