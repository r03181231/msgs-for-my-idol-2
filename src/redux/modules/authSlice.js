// thunk

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "api/loginApi";
import { ProfileApi } from "api/profileApi";
import { userApi } from "api/userApi";
import defaultImage from "assets/images/user-defult-avatar.png";

const initialState = {
  userData: {},
  userInfo: {
    id: "",
    nickname: "",
    avatar: defaultImage,
    success: false,
  },
  selectFile: defaultImage,
  thumnailImg: defaultImage,
  error: {},
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

export const __patchProfile = createAsyncThunk(
  "auth/patchProfile",
  async (formData, thunkAPI) => {
    try {
      const response = await ProfileApi.patchProfile(formData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const newData = action.payload;
      state.userInfo = newData;
    },
    setSelectFile: (state, action) => {
      console.log(state);
      state.selectFile = action.payload;
    },
    setThumnailImg: (state, action) => {
      state.thumnailImg = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__setUserLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__setUserLogin.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.userData = action.payload;
      })
      .addCase(__setUserLogin.rejected, (state, action) => {
        console.log(action.payload);
        if (action.payload && action.payload.response) {
          const errorStatus = action.payload.response.status;
          const errorMessage = action.payload.response.data.message;
          state.isLoading = false;
          state.isError = true;

          state.error = action.payload;
          state.errorStatus = errorStatus;
          state.errorMessage = errorMessage;
        } else {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload;
        }
      });
    //userInfo
    builder
      .addCase(__getUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getUserInfo.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
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
    // profile image
    builder
      .addCase(__patchProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__patchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(__patchProfile.rejected, (state, action) => {
        if (action.payload && action.payload.response) {
          const errorStatus = action.payload.response.status;
          const errorMessage = action.payload.response.data.message;
          state.isLoading = false;
          state.isError = true;

          state.error = action.payload;
          state.errorStatus = errorStatus;
          state.errorMessage = errorMessage;
        } else {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload;
        }
      });
  },
});

export const { setUserInfo, setSelectFile, setThumnailImg } = authSlice.actions;

export default authSlice.reducer;

// const errorStatus = action.payload.errorStatus;
// const errorMessage = action.payload.errorMessage;
