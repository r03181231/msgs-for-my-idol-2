import axios from "axios";
import { gettingLocal } from "component/common/localStorage";

// userAPI
const token = gettingLocal("token");
const userURL = process.env.REACT_APP_API_URL;

const instanceProfile = axios.create({
  baseURL: userURL,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
});

// 사용 예시 : loginApi.postLogin(payload)
export const ProfileApi = {
  patchProfile: (payload) => instanceProfile.patch("/profile", payload),
  // instanceLogin.post("/login", payload, { withCredentials: true }),
};

// 요청
instanceProfile.interceptors.request.use(
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
instanceProfile.interceptors.response.use(
  function (response) {
    console.log("응답 완료", response);
    return response.data;
  },

  function (error) {
    console.log("요청이 거절됐습니다.");
    return Promise.reject(error);
  }
);
