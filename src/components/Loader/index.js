import React from "react";
import styled from "styled-components";
import "./CSS/loader.css";

const Loading = styled.div`
  background-image: url("../../img/web-logo.png");
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
  animation: shaking 0.5s linear infinite;
`;

export default function Loader() {
  return <Loading />;
}
