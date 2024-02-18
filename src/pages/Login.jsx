import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Register from "./Register";
import useInputs from "component/hook/useInputs";

const Login = () => {
  const navigator = useNavigate();
  const [loginToggle, setLoginToggle] = useState(false);
  const [loginValue, setLoginValue, onChange, reset] = useInputs({
    userId: "",
    password: "",
  });
  const userId = loginValue.userId;
  const userPw = loginValue.password;
  const onSubmitToggle = (e) => {
    e.preventDefault();
    navigator("/");
    setLoginToggle(true);
  };
  return (
    <FormWrapper>
      {!loginToggle ? (
        <Form onSubmit={onSubmitToggle}>
          <div>
            <label htmlFor="userId"> 아이디 </label>
            <input
              type="text"
              id="userId"
              name="userId"
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
          >
            로그인
          </button>
          <RegisterDiv>
            <p>
              <span>처음 방문하셨나요?</span>
            </p>
            <RegistNavLink to="/register">
              <span>회원가입</span>
            </RegistNavLink>
          </RegisterDiv>
        </Form>
      ) : (
        <Register />
      )}
    </FormWrapper>
  );
};

export default Login;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RegisterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  padding-top: 20px;
  gap: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  gap: 0.8rem;
  > div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  label {
    display: flex;
    align-items: center;
  }
  input {
    background-color: rgba(128, 128, 128, 0.2);
    padding: 0.8rem;
    border: none;
    border-radius: 1rem;
    font-size: 1rem;
    &:focus {
      background-color: antiquewhite;
    }
  }
  > button {
    padding: 0.8rem;
    border: none;
    border-radius: 1rem;

    cursor: pointer;
    &:hover {
      background-color: antiquewhite;
    }
  }
`;

export const RegistNavLink = styled(Link)`
  /* width: 100%; */
  /* padding: 1rem rem; */
  /* border-radius: 1rem; */

  font-size: 1rem;
  &:hover {
    background-color: antiquewhite;
  }
`;
