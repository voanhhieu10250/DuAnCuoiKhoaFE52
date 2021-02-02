import styled, { css } from "styled-components";

export const Title = styled.p`
  margin-bottom: 20px;
  font-size: 37px;
`;

export const Wrapper = styled.div`
  max-width: 80%;
  margin: 0px auto;
`;

export const SearchInput = styled.form`
  position: relative;
  background: #fff;
  width: 100%;
  border: 5px;
  box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.12);
`;

export const InputFeild = styled.input.attrs(() => ({
  autoFocus: true,
}))`
  height: 55px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0 60px 0 20px;
  font-size: 18px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

export const IconBox = styled.button`
  height: 55px;
  width: 55px;
  line-height: 55px;
  border: none;
  border-left: 1px solid #80808063;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;
  font-size: 20px;
  color: #0ef7d7c7;
  &:focus {
    outline: none;
  }
`;

export const AutocomBox = styled.div`
  max-height: 280px;
  overflow-y: auto;
  ${(p) =>
    p.activeBox
      ? css`
          opacity: 1;
          pointer-events: auto;
          padding: 10px 8px;
          li {
            display: block;
          }
        `
      : css`
          opacity: 0;
          pointer-events: none;
          padding: 0;
        `}
`;

export const Item = styled.li`
  list-style: none;
  padding: 8px 12px;
  width: 100%;
  cursor: default;
  border-radius: 3px;
  display: none;
  &:hover {
    background: #efefef;
  }
`;

export const ContainDetail = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 10px 0;
  justify-content: space-between;
`;

export const DetailBox = styled.div`
  width: max-content;
  margin: 3px;
`;

export const Label = styled.label`
  color: gray;
  font-size: 12px;
`;

export const Input = styled.input`
  border: none;
  padding: 3px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;
