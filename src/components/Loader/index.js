import React from "react";
import styled, { keyframes } from "styled-components";
import webLogo from "../../img/icons/web-logo.png";

const shaking = keyframes`
  0% {
    transform: rotate(5deg);
  }
  25% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(5deg);
  }
`;

const Loading = styled.div`
  background-image: url(${webLogo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 120px;
  height: 120px;
  position: absolute;
  top: 47%;
  left: 47%;
  right: 53%;
  bottom: 53%;
  transition: all 1s;
  transform: scale(1.3);
  animation: ${shaking} 0.5s linear infinite;
`;

export default function Loader() {
  return <Loading />;
}
