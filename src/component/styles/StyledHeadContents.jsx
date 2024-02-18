import styled from "styled-components";

export const Header = styled.header`
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  padding: 30px;

  border: 1px solid gray;

  background-image: url("https://lh7-us.googleusercontent.com/oEaLirMozS3UxdsQGllaE5qf8kYvZklDDLMO58ANP3uRh2ZAy9FJNzIKQ4_FzIRhMzXovU4Wxx24RrZKvoGzQZiVbs-vptgfTBVtFirqWjMLgjk1EXt5l-EBCtyyFNH3FMDSgm3DoM3fAy2dCCFkAXE");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;

  gap: 20px;

  h1 {
    text-align: center;
  }
`;
