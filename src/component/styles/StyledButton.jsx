import styled from "styled-components";

/* 필요한 props : bgc, pd, bRadius, color, fSize */
export const NormalButton = styled.button`
  background-color: ${(style) => style.bgc || "#333"};
  padding: ${(style) =>
    style.pd
      ? style.pd
          .split(", ")
          .map((value) => `${value}rem`)
          .join(" ")
      : "0.4rem 1rem"};
  /* 기본 padding: 0.4rem 1rem;
   props 입력 형식 : pd={0.4, 1} */

  border: none;
  border-radius: ${(style) =>
    style.bRadius && style.bRadius.includes("rem")
      ? style.radius
      : style.radius
      ? style.radius + "rem"
      : "0.8rem"};

  color: ${(style) => style.color || "white"};
  font-size: ${(style) => style.fSize || "1.2rem"};

  cursor: pointer;
`;
