import React from "react";
import "./CSS/loader2.css";
import styled from "styled-components";

const LoadingContain = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  width: 80px;
  height: 80px;
`;

const Item = styled.div`
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fb4226;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
`;

export default function Loader2() {
  return (
    <LoadingContain className="lds-facebook">
      <Item />
      <Item />
      <Item />
    </LoadingContain>
  );
}
