// userAPI

import axios from "axios";

const loginURL = `${process.env.REACT_APP_API_URL}`;

const instanceLogin = axios.create({
  baseURL: loginURL,
});

// 사용 예시 : loginApi.postLogin(payload)
export const loginApi = {
  postLogin: (payload) => instanceLogin.post("/login", payload),
  // instanceLogin.post("/login", payload, { withCredentials: true }),
};

// 요청
instanceLogin.interceptors.request.use(
  function (config) {
    return config;
  },

  function (error) {
    console.log("요청 거부");
    return Promise.reject(error);
  }
);

// 응답
instanceLogin.interceptors.response.use(
  function (response) {
    console.log("응답 완료");
    const data = response.data;
    const status = response.status;
    const statusText = response.statusText;
    const datas = { data, status, statusText };
    return datas;
  },

  function (error) {
    console.log("응답 거절");
    // error.response = {data.message, status : 401, statusText : "Unauthorized"}

    return Promise.reject(error);
  }
);
