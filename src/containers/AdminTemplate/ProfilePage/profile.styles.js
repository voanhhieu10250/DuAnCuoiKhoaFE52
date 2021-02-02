import styled, { css } from "styled-components";
import {
  ModalForm,
  ModalTitle,
  FormErr,
  Label,
  InputField,
  Box,
  SpecialBox,
  speciaEffectBox,
  customBox,
  radiusBox,
} from "../Admin/Admin.styles";

export const Container = styled.div``;

export const Form = styled(ModalForm)``;

export const Title = styled(ModalTitle)``;

export const FormError = styled(FormErr)`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const InputLabel = styled(Label)``;

export const Img = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
  border: 4px solid #94bd7e;
`;

export const InputBox = styled(Box)`
  ${(p) =>
    p.btnBox &&
    css`
      margin-bottom: 0;
      margin-top: 20px;
    `}
`;

export const InputTag = styled(InputField)`
  transition: 0.2s ease-in all;
  ${(p) =>
    p.readOnly &&
    css`
      border: none;
      color: gray;
    `}
`;

export const SpecialB = styled(SpecialBox)`
  display: inline-block;
`;

export const Button = styled.button.attrs(() => ({
  type: "button",
}))`
  ${speciaEffectBox}
  ${radiusBox}
  ${customBox}
  border: none;
  padding: ${(p) => (p.Danger ? "10px 44px" : "10px 27px")};
  background-color: ${(p) => (p.Danger ? "#f14e5d" : "#36e65e")};
  &:focus {
    outline: none;
  }
`;

export const FieldBox = styled.div`
  margin-bottom: 10px;
`;

export const Field = styled.div`
  width: 30%;
  text-align: left;
  display: inline-block;
`;

export const Span = styled.span`
  width: 70%;
  text-align: left;
  display: inline-block;
  font-weight: bold;
  font-size: 15px;
`;

export const Header = styled.h3`
  color: ${(p) => (p.success ? "#0cad20" : "#8e8e8e")};
  font-weight: ${(p) => p.success && "bold"};
  margin-bottom: 10px;
`;
