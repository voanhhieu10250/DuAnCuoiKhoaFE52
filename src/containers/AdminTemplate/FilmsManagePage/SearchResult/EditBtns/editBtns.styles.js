import styled from "styled-components";

export const FilmBtn = styled.button`
  margin: 25px auto;
  border: none;
  border-radius: 4px;
  padding: 10px;
  background-color: ${(p) => (p.bgEven ? "#8dcacaa6" : "#fff")};
`;
export const DivBtns = styled.div`
  float: left;
  width: 10%;
  & button {
    display: block;
  }
`;

export const FormContent = styled.div`
  text-align: left;
`;

export const Box = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  border-radius: 5px;
  padding: 7px;
  width: ${(p) => (p.type === "radio" ? "auto" : "100%")};
  border: ${(p) => (p.disabled ? "none" : "1px solid rgba(8, 22, 48, 0.9)")};
  &:focus {
    border-color: #1877f2;
    box-shadow: 0 0 0 2px #e7f3ff;
    outline: none;
  }
`;

export const Label = styled.label`
  display: ${(p) => (p.htmlFor ? "inline-block" : "block")};
  margin: ${(p) => (p.htmlFor ? "0px 15px 0px 6px" : "5px 0 3px 0")};
  font-size: 14px;
`;

export const Textaria = styled.textarea`
  padding: 3px 7px;
  border-radius: 5px;
  width: 100%;
  height: 100px;
  resize: none;
  border: 1px solid rgba(8, 22, 48, 0.9);
  &:focus {
    border-color: #1877f2;
    box-shadow: 0 0 0 2px #e7f3ff;
    outline: none;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.12);
  background-color: #36e65e;
  font-weight: bold;
  color: #000;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #2ca046;
  }
`;

export const Success = styled.h2`
  color: #38c358;
`;
export const Err = styled.h2`
  color: red;
`;
