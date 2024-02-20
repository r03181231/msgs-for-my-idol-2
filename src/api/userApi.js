import axios from "axios";
import { gettingLocal } from "component/common/localStorage";

// userAPI
const token = gettingLocal("token");
const userURL = process.env.REACT_APP_API_URL;

const instanceUser = axios.create({
  baseURL: userURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const userApi = {
  getUserInfo: () => instanceUser.get("/user"),
};

// 요청
instanceUser.interceptors.request.use(
  function (config) {
    console.log("요청 완료", config);
    const token = gettingLocal("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },

  function (error) {
    console.log("요청이 거절됐습니다.");
    return Promise.reject(error);
  }
);

// 응답
instanceUser.interceptors.response.use(
  function (response) {
    console.log("응답 완료", response);
    return response.data;
  },

  function (error) {
    console.log("요청이 거절됐습니다.");
    return Promise.reject(error);
  }
);
