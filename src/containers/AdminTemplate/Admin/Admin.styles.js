import styled, { css } from "styled-components";

export const speciaEffectBox = css`
  cursor: pointer;
  width: 100%;
  display: block;
  transform: translate(0, 0);
  transition: all 0.15s ease;
  position: relative;
  z-index: 10;
`;
export const customBox = css`
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
`;
export const radiusBox = css`
  border-radius: 6px;
`;

export const Container = styled.div``;

export const ContainTop = styled.div`
  display: flex;
  height: 30%;
  width: 100%;
  justify-content: center;
`;

export const InfoBox = styled.div`
  background-color: blue;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  background-image: linear-gradient(
    315deg,
    rgba(11, 171, 100, 0.8) 0%,
    rgba(59, 183, 143, 0.8) 74%
  );
  &::after {
    content: "";
    display: table;
    clear: both;
  }
  ${speciaEffectBox}
`;

export const SpecialBox = styled.div`
  position: relative;
  display: block;
  background-color: #9147ff;
  border-radius: 6px;
  &::after,
  &::before {
    content: "";
    display: block;
    background-color: #9147ff;
    /* width: 8px;
    height: 8px; */
    position: absolute;
    transition: all 0.15s ease;
  }
  &::before {
    top: 0;
    left: 0;
    transform-origin: top left;
    transform: rotate(-45deg) scale(0);
  }
  &::after {
    right: 0;
    bottom: 0;
    transform-origin: bottom right;
    transform: rotate(45deg) scale(0);
  }
  &:hover > * {
    transform: translate(6px, -6px);
  }
  &:hover::before {
    transform: rotate(-45deg) scale(1);
  }
  &:hover::after {
    transform: rotate(45deg) scale(1);
  }
  margin: ${(p) => (p.margin ? p.margin : 0)};
  ${(p) =>
    p.width &&
    css`
      width: ${p.width};
    `}
`;

export const Image = styled.img`
  float: left;
  border-radius: 50%;
`;

export const ListInfo = styled.ul`
  list-style: none;
  display: inline-block;
  margin: 0 20px;
`;

export const ListItem = styled.li`
  text-align: left;
  color: #fff;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: bold;
  & span {
    color: yellow;
    font-size: 16px;
  }
`;

export const BoxBtn = styled.div`
  ${radiusBox};
  margin-left: 50px;
  padding: 20px;
  background-image: linear-gradient(
    315deg,
    rgba(11, 171, 100, 1) 0%,
    rgba(59, 183, 143, 1) 74%
  );
`;

export const Button = styled.button`
  ${speciaEffectBox};
  ${radiusBox};
  ${customBox};
  background-color: ${(p) => (p.btnColor ? p.btnColor : "Green")};
  padding: 10px;
  font-size: 15px;
  color: ${(p) => (p.color ? p.color : "#fff")};
  font-weight: bold;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const Break = styled.div`
  border: 1px solid ${(p) => (p.color ? p.color : "#80808059")};
  margin: ${(p) => (p.margin ? p.margin : "20px 0")};
`;

export const ContainBottom = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TaskBox = styled.div`
  ${customBox}
  ${radiusBox}
  ${speciaEffectBox}
  text-align: left;
  background-image: linear-gradient(
    316deg,
    rgba(252, 82, 150, 1) 10%,
    rgba(246, 112, 98, 1) 74%
  );
  padding: 20px;
`;

export const TaskTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 35px;
  letter-spacing: 2px;
  font-weight: bold;
  color: #fff;
`;

export const TaskList = styled.ul`
  /* list-style: none; */
  margin-bottom: 0;
  padding: 0 20px;
`;

export const TaskItem = styled.li`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${(p) => (p.Link ? "yellow" : "rgba(22,46,39)")};
  ${(p) =>
    p.Link &&
    css`
      list-style: none;
    `}
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: ${(p) => (p.openModal ? 1 : 0)};
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: ${(p) => (p.openModal ? 10 : -1)};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalForm = styled.form`
  ${radiusBox}
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 37%;
  min-width: 400px;
  min-height: 340px;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.45);
  text-align: center;
  padding: 35px 80px;
  z-index: 2;
`;

export const ModalTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 35px;
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

export const SubmitBtn = styled.button.attrs((props) => ({
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
  display: ${(p) => (p.hideTag ? "none" : "block")};
`;

export const CloseModalBtn = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const FadeDiv = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;
