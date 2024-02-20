import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getUserInfo, __setUserLogin } from "../redux/modules/authSlice";
import { gettingLocal, settingLocal } from "component/common/localStorage";
import useInputs from "component/hook/useInputs";
import Register from "./Register";
import * as L from "component/styles/LoginStyle";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, status } = useSelector((store) => store.users.userData);
  const userInfo = {
    id: data.userId,
    nickname: data.nickname,
    avatar: data.avatar,
    success: data.success,
  };
  console.log(data);
  const { errorStatus, errorMessage } = useSelector((store) => store.users);
  // const { error } = useSelector((store) => store.users);
  const isLoading = useSelector((store) => store.users.isLoading);
  const [loginToggle, setLoginToggle] = useState(false);
  const [loginValue, setLoginValue, onChange, reset] = useInputs({
    id: "",
    password: "",
  });
  const token = data?.accessToken || "";
  const userId = loginValue.id;
  const userPw = loginValue.password;

  if (isLoading) <div>로딩 중입니다...</div>;

  const onSubmitToggle = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(__setUserLogin({ id: userId, password: userPw }));

    if (data) {
      settingLocal("token", token);
      if (gettingLocal("token")) {
        dispatch(__getUserInfo());

        settingLocal("user", userInfo);
        alert("로그인 되셨습니다!");
        navigate("/home", { replace: true });
      }
    }

    if (errorStatus) {
      alert(errorMessage);
      reset();
      navigate("/", { replace: true });
      return;
    }
  };

  return (
    <L.FormWrapper>
      {!loginToggle ? (
        <L.Form>
          <div>
            <label htmlFor="id"> 아이디 </label>
            <input
              type="text"
              id="id"
              name="id"
              value={userId}
              onChange={onChange}
              placeholder="아이디(4~10글자)"
              minLength={4}
              maxLength={10}
            />
          </div>
          <div>
            <label htmlFor="password"> 비밀번호 </label>
            <input
              type="text"
              id="password"
              name="password"
              value={userPw}
              onChange={onChange}
              placeholder="비밀번호(4~15글자)"
              minLength={4}
              maxLength={15}
            />
          </div>

          <button
            disabled={userId.length < 4 || userPw.length < 4 ? true : false}
            onClick={onSubmitToggle}
          >
            로그인
          </button>
          <L.RegisterDiv>
            <p>
              <span>처음 방문하셨나요? </span>
            </p>
            <L.RegistNavLink to="/register">
              <span>회원가입</span>
            </L.RegistNavLink>
          </L.RegisterDiv>
        </L.Form>
      ) : (
        <Register
          setLoginToggle={setLoginToggle}
          data={data}
          errorStatus={errorStatus}
          errorMessage={errorMessage}
        />
      )}
    </L.FormWrapper>
  );
};

export default Login;

// useEffect(() => {
//   console.log(errorMessage);
//   if (errorMessage.length > 0) {
//     // if (isLoading === false) {
//     alert(errorMessage);
//   }
// }, [errorMessage]);

// if (isError === true && errorMessage) {
//   // if (errorMessage.length > 0) {
//   alert(errorMessage);
//   reset();
//   return;
// }

// if (isError === true) {
//   // if (errorMessage.length > 0) {
//   alert(errorMessage);
//   reset();
// }

// const errorHandler = () => {
//   if (isError === true && errorMessage.length > 0) {
//     // if (errorMessage.length > 0) {
//     alert(errorSave);
//     reset();
//     // return;
//   }
// };

// useEffect(() => {
//   console.log(errorMessage);
//   if (errorMessage.length > 0) {
//     alert(errorMessage);
//     reset();
//   }
// }, [errorMessage]);

// useEffect(() => {
//   if (isSuccess === true) {
//     settingLocal("token", token);
//     dispatch(__getUserInfo());
//   }
// }, [isSuccess]);

// useEffect(() => {
//   if (error) {
//     alert(errorMessage);
//     reset();
//     return;
//   }
// }, [errorMessage]);
