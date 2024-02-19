// userAPI

import axios from "axios";

const registerURL = `${process.env.REACT_APP_API_URL}`;

const instanceRegister = axios.create({
  baseURL: registerURL,
});

// 사용예시 registApi.postRegist(payload)
export const registApi = {
  postRegist: (payload) => instanceRegister.post("/register", payload),
};

// 요청
instanceRegister.interceptors.request.use(
  function (config) {
    console.log("요청 완료", config);

    return config;
  },

  function (error) {
    console.log("요청이 거절됐습니다.", error);
    return Promise.reject(error);
  }
);

// 응답
instanceRegister.interceptors.response.use(
  function (response) {
    console.log("응답 완료", response);
    const data = response.data;
    const status = response.status;
    const statusText = response.statusText;
    const datas = { data, status, statusText };
    return datas;
  },

  function (error) {
    console.log("요청이 거절됐습니다.", error);

    return Promise.reject(error);
  }
);
