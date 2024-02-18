import styled, { css } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const UlArtistName = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;

  max-width: 20rem;

  padding: 10px;

  border: 1px solid gray;
  border-radius: 1rem;

  gap: 10px;
  /* 가수이름 */
`;

export const Li = styled.li`
  /* background-color: #333; */
  padding: 10px;

  border-radius: 0.6rem;
  color: ${({ $isactive, id }) => ($isactive === id ? "#333" : "#fff")};
  background-color: ${({ $isactive, id }) =>
    $isactive === id ? "#f5f593" : "#333"};

  &:hover {
    background-color: #f5f593;
    color: #333;
  }
  /* &:active {
    background-color: #f5f593;
  } */
`;
