import styled from "styled-components";
import { speciaEffectBox } from "../AdminTemplate.styles";
import { Link } from "react-router-dom";

export const TaskContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const Box = styled.div`
  ${speciaEffectBox}
  background-color: pink;
  height: 100%;
`;

export const SpecialBoxItem = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const CustomLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: block;
  padding: 30px;
`;

export const Title = styled.h1`
  color: #000;
`;
