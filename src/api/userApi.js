// userAPI

const userURL = `${process.env.REACT_APP_API_URL}`;

const instanceUser = axios.create({
  baseURL: registerURL,
});

export const userApi = {};

// 요청
loginApi.interceptors.request.use(
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
loginApi.interceptors.reponse.use(
  function (response) {
    console.log("응답 완료");
    return response.data;
  },

  function (error) {
    console.log("요청이 거절됐습니다.");
    return Promise.reject(error);
  }
);
