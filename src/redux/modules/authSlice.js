// thunk

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "api/loginApi";
import { userApi } from "api/userApi";

const initialState = {
  userData: {},
  userInfo: {
    id: "",
    nickname: "",
    avatar: "",
    success: false,
  },
  error: null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorStatus: 0,
  errorMessage: "",
};

export const __getUserInfo = createAsyncThunk(
  "auth/getUserInfo",
  async (_, thunkAPI) => {
    try {
      const response = await userApi.getUserInfo();
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __setUserLogin = createAsyncThunk(
  "auth/setUserLogin",
  async (userLoginIdPw, thunkAPI) => {
    try {
      const response = await loginApi.postLogin(userLoginIdPw);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
        console.log(action.payload);
        const errorStatus = action.payload.response.status;
        const errorMessage = action.payload.response.data.message;
        state.isLoading = false;
        state.isError = true;

        state.error = action.payload;
        state.errorStatus = errorStatus;
        state.errorMessage = errorMessage;
      });
    //userInfo
    builder
      .addCase(__getUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getUserInfo.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = true;
        state.userInfo = action.payload;
      })
      .addCase(__getUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        const errorStatus = action.payload.response.status;
        const errorMessage = action.payload.response.data.message;

        state.error = action.payload;
        state.errorStatus = errorStatus;
        state.errorMessage = errorMessage;
      });
  },
});

export const { setUserLogin, setUserRegist } = authSlice.actions;

export default authSlice.reducer;

// const errorStatus = action.payload.errorStatus;
// const errorMessage = action.payload.errorMessage;
