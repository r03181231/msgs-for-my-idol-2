// 중앙 데이터 관리소(store)를 설정하는 부분
import { configureStore } from "@reduxjs/toolkit";
import users from "../modules/authSlice";
import letter from "../modules/letterSlice";

const store = configureStore({
  reducer: {
    users,
    letter,
  },
});

export default store;
