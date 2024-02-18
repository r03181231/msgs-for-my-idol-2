import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useInputs from "component/common/useInputs";
import styled from "styled-components";

const Register = () => {
  const navigator = useNavigate();
  const [registValue, setRegistValue, onChange, reset] = useInputs({
    registId: "",
    registPw: "",
    registNickname: "",
  });
  const userId = registValue.registId;
  const userPw = registValue.registPw;
  const userNickname = registValue.registNickname;
  const onRegisterSubmit = (e) => {
    e.preventDefault();
    navigator("/login");
  };
  return (
    <div>
      <FormWrapper>
        <Form onSubmit={onRegisterSubmit}>
          <div>
            <label htmlFor="userId"> 아이디 </label>
            <input
              type="text"
              id="userId"
              name="registId"
              value={userId}
              onChange={onChange}
              placeholder="아이디(4~10글자)"
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input
              type="text"
              id="password"
              name="registPw"
              value={userPw}
              onChange={onChange}
              placeholder="비밀번호(4~15글자)"
            />
          </div>
          <div>
            <label htmlFor="nickname">닉네임</label>
            <input
              type="text"
              id="nickname"
              name="registNickname"
              value={userNickname}
              onChange={onChange}
              placeholder="닉네임(1~10글자)"
            />
          </div>
          <button
            disabled={
              userId.length < 4 || userPw.length < 4 || userNickname.length < 1
                ? true
                : false
            }
          >
            회원가입
          </button>
        </Form>
        <LoginDiv>
          <LoginNavLink to="/login">
            <span>로그인</span>
          </LoginNavLink>
        </LoginDiv>
      </FormWrapper>
    </div>
  );
};

export default Register;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
      border: none;
    }
  }
  > button {
    padding: 0.8rem;
    border: none;
    border-radius: 1rem;

    font-size: 1rem;
    cursor: pointer;
    &:hover {
      background-color: antiquewhite;
    }
  }
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  gap: 1rem;
`;

export const LoginNavLink = styled(Link)`
  width: 100%;
  padding: 1rem 8rem;
  border-radius: 1rem;

  font-size: 1rem;
  &:hover {
    background-color: antiquewhite;
  }
`;
