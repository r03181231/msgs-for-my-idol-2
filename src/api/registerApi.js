// userAPI

const registerURL = `${process.env.REACT_APP_API_URL}`;

const instanceRegister = axios.create({
  baseURL: registerURL,
});

// 사용예시 registApi.postRegist(payload)
export const registApi = {
  postRegist: (payload) => instanceRegister.post("/register", payload),
};

// 요청
registerApi.interceptors.request.use(
  function (config) {
    console.log("요청 완료");
    return config;
  },

  function (error) {
    console.log("요청이 거절됐습니다.");
    return Promise.reject(error);
  }
);

// 응답
registerApi.interceptors.reponse.use(
  function (response) {
    console.log("응답 완료");
    return response.data;
  },

  function (error) {
    console.log("요청이 거절됐습니다.");
    return Promise.reject(error);
  }
);
