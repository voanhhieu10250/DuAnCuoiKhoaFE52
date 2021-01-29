import styled from "styled-components";
import { Link } from "react-router-dom";
// image
import loginBg from "../../../../img/loginBg.jpg";

export const LoginBg = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-image: url(${loginBg});
  background-size: contain;
  background-position: center;
  float: left;
  padding: 0 calc(50% - 430px);
`;

export const FormGroups = styled.div`
  max-width: 324.66px;
  max-height: 467px;
  min-height: 432px;
  width: 100%;
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
  overflow: hidden;
`;

export const LoginForm = styled.form`
  opacity: ${(props) => (props.hideTag ? 0 : 1)};
  transition: 0.2s ease all;
  /* display: ${(props) => (props.hideTag ? "none" : "block")}; */
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

export const AskForRegis = styled.div`
  padding-top: 15px;
  margin-top: 20px;
  border-top: 1px solid #495057;
  color: #9b9b9b;
`;

export const RegisLink = styled.button.attrs(() => ({
  type: "button",
}))`
  text-decoration: underline;
  border: none;
  background-color: transparent;
  color: #ffc107b8;
  transition: 0.1s ease-in all;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fb4226;
  }
`;

export const SubmitBtn = styled.button.attrs((props) => ({
  type: props.typeBtn ? "button" : "submit",
}))`
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

export const RegisForm = styled.form`
  position: absolute;
  padding: inherit;
  top: 0;
  opacity: ${(props) => (props.openRegisForm ? 1 : 0)};
  left: ${(props) => (props.openRegisForm ? 0 : "-100%")};
  transition: 0.3s ease-in all;
  width: 100%;
`;

export const RegisTitle = styled.h1`
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  color: ${(props) => (props.formError ? "#dc3545" : "#fb4226")};
  margin-bottom: 1rem;
  display: ${(props) => (props.hideTag ? "none" : "block")};
`;

export const RegisInput = styled(InputField)`
  margin-bottom: 0.3rem;
`;

export const CloseForm = styled.button.attrs(() => ({
  type: "button",
}))`
  position: absolute;
  top: 35px;
  right: 30px;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;
