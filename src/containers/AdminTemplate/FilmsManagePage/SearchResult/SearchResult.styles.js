import styled, { css } from "styled-components";

export const BtnContainer = styled.div`
  text-align: right;
  width: 80%;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
`;

export const FeatButton = styled.button`
  margin: ${(p) => (p.m ? p.m : 0)};
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.12);
  background-color: ${(p) => (p.color ? p.color : "#0ef7d7a3")};
  font-weight: bold;
  color: #585555;
  &:focus {
    outline: none;
  }
  &:hover {
    ${(p) =>
      !p.disabled &&
      css`
        background-color: #10c7aea3;
      `}
  }
`;

export const Container = styled.div`
  position: relative;
  max-width: 80%;
  margin: 5px auto;
  background-color: #fff;
  border-radius: 5px;
  min-height: 178px;
  box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.12);
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Block = styled.div`
  padding: 10px;
  text-align: left;
  background-color: ${(p) => (p.bgEven ? "#8dcacaa6" : "#fff")};
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const ImgDiv = styled.div`
  float: left;
  width: 15%;
  height: 100%;
  ${(p) =>
    p.user &&
    css`
      width: 20%;
    `}
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  min-height: 150px;
  max-height: 153px;
  border-radius: 5px;
  background-color: #cecececc;
  ${(p) =>
    p.userlogo &&
    css`
      min-height: 146.5px;
      min-width: 146.5px;
      border-radius: 50%;
      margin-top: 10px;
    `}
`;

export const DivInfo = styled.div`
  float: left;
  padding: 4px 0 0 8px;
  width: 75%;
  & p {
    margin: 0;
  }
  ${(p) =>
    p.user &&
    css`
      width: 70%;
      padding: 4px 0 0 25px;
    `}
`;

export const Span = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #3c3737;
`;

export const InfoItem = styled.p`
  font-size: 15px;
  width: 100%;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  color: gray;
`;

export const UnfoundedFilm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  font-weight: bold;
  color: gray;
`;
