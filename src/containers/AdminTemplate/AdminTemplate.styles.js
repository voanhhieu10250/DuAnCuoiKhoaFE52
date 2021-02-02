import styled, { css } from "styled-components";
import xController from "../../img/icons/xController.png";

export const App = styled.div`
  background-color: #ecf0f1;
  height: 100vh;
  display: flex;
`;

export const MainView = styled.div`
  position: relative;
  width: 95%;
  max-width: 1280px;
  padding: 80px 80px;
  text-align: center;
  overflow: hidden;
  overflow-y: scroll;
  background-color: #0ef7d729;
`;

// Modal
export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: ${(p) => (p.OpenModal ? 1 : 0)};
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: ${(p) => (p.OpenModal ? 10 : -2)};
  background-color: ${(p) => (p.bgNone ? "none" : "rgba(0, 0, 0, 0.5)")};
  overflow: hidden;
  overflow-y: scroll;
`;
export const Fade = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;
export const ModalBox = styled.div`
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 37%;
  min-width: 350px;
  min-height: 350px;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.45);
  text-align: center;
  padding: ${(p) => (p.p ? p.p : "35px 80px")};
  z-index: 2;
`;
export const ModalCloseBtn = styled.img.attrs(() => ({
  src: xController,
  alt: "close button",
}))`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
export const ModalTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 35px;
`;

// Special Hover Effect
export const SpecialBox = styled.div`
  position: relative;
  display: block;
  background-color: #9147ff;
  border-radius: ${(p) => (p.square ? "none" : "6px")};
  margin: ${(p) => (p.margin ? p.margin : 0)};
  ${(p) =>
    p.width &&
    css`
      width: ${p.width};
    `}
  &::after,
  &::before {
    content: "";
    display: block;
    background-color: ${(p) => (p.bgColor ? p.bgColor : "#9147ff")};
    position: absolute;
    transition: all 0.15s ease;
    ${(p) =>
      p.square &&
      css`
        width: 8px;
        height: 8px;
      `}
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
`;
export const speciaEffectBox = css`
  cursor: pointer;
  width: 100%;
  display: block;
  transform: translate(0, 0);
  transition: all 0.15s ease;
  position: relative;
  z-index: 10;
`;

export const boxShadow = css`
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
`;

// Regular button

export const Button = styled.button`
  border-radius: 6px;
  border: none;
  padding: ${(p) => (p.p ? p.p : "10px 27px")};
  margin: ${(p) => (p.m ? p.m : 0)};
  background-color: ${(p) => (p.Danger ? "#f14e5d" : "#36e65e")};
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(p) => (p.Danger ? "#ce4a56" : "#31d255")};
  }
`;

// Break
export const Break = styled.div`
  border: 1px solid ${(p) => (p.color ? p.color : "#80808059")};
  margin: ${(p) => (p.margin ? p.margin : "20px 0")};
`;
