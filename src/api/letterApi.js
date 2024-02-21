// letterApi.js
// userAPI

import axios from "axios";

const letterURL = "http://localhost:5000";

const instanceLetter = axios.create({
  baseURL: letterURL,
});

// 사용 예시 : loginApi.postLogin(payload)
export const letterApi = {
  getLetters: () => instanceLetter.get("/letters?_sort=createdAt,+views"),
  postLetters: (payload) => instanceLetter.post("/letters", payload),
  patchLetters: (payload) => instanceLetter.patch("/letters", payload),
};

// 요청
instanceLetter.interceptors.request.use(
  function (config) {
    console.log("요청 성공", config);
    return config;
  },

  function (error) {
    console.log("요청 거부");
    return Promise.reject(error);
  }
);

// 응답
instanceLetter.interceptors.response.use(
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
    return Promise.reject(error);
  }
);
