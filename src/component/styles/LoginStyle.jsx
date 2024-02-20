import { Link } from "react-router-dom";
import styled from "styled-components";

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
