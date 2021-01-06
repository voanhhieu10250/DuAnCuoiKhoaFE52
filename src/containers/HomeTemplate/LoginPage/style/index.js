import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginBg = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-image: url(../../../../img/loginBg.jpg);
  background-size: contain;
  background-position: center;
  float: left;
  padding: 0 calc(50% - 430px);
`;

export const LoginForm = styled.div`
  max-width: 360px;
  padding: 40px 32px 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(
    to bottom,
    rgba(20, 50, 93, 0.9),
    rgba(8, 22, 48, 0.9)
  );
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.45);
  text-align: center;
  color: #fff;
  border-radius: 6px;
`;

export const ToHome = styled(Link)`
  display: block;
  & img {
    width: 209px;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

export const InputField = styled.input`
  border-radius: 6px;
  width: 90%;
  padding: 8px 12px;
  border: 1px solid rgba(8, 22, 48, 0.9);
  &:focus {
    border-color: #1877f2;
    box-shadow: 0 0 0 2px #e7f3ff;
    outline: none;
  }
`;

export const LoginBtn = styled.button`
  width: 90%;
  padding: 8px 12px;
  background-color: rgb(20, 50, 93);
  color: #fff;
  border-radius: 6px;
  border: none;
  font-size: 17px;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgb(15 42 82);
  }
`;
