import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #5b5bea;
`;

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  min-width: 400px;
  min-height: 300px;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.45);
  border-radius: 8px;
  text-align: center;
  padding: 35px 80px;
`;

export const FormTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const FormErr = styled.p`
  color: red;
  display: ${(props) => (props.hideTag ? "none" : "block")};
`;

export const Box = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  text-align: start;
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin: 0;
`;

export const InputField = styled.input`
  border-radius: 6px;
  padding: 8px 12px;
  border: 1px solid rgba(8, 22, 48, 0.9);
  width: 100%;
  &:focus {
    border-color: #1877f2;
    box-shadow: 0 0 0 2px #e7f3ff;
    outline: none;
  }
`;

export const LoginBtn = styled.button.attrs(() => ({
  type: "submit",
}))`
  width: 100%;
  border: none;
  outline: none;
  height: 37px;
  background-color: #1c74d2;
  color: #fff;
  border-radius: 6px;
  margin: 10px 0;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #0b58ab;
  }
`;
