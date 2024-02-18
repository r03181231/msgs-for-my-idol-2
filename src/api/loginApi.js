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
    return Promise.reject(error);
  }
);

// // 응답
instanceLogin.interceptors.response.use(
  function (response) {
    const data = response.data;
    const status = response.status;
    const datas = { data, status };
    return datas;
  },

  function (error) {
    // error.response = {data.message, status : 401, statusText : "Unauthorized"}
    const errorStatus = error.response.status;
    const errorMessage = error.response.data.message;
    if (errorStatus === 401 || errorMessage) {
      window.alert(`${errorMessage}`);
      window.location.replace("/");
      return;
    }
    return Promise.reject(error);
  }
);
