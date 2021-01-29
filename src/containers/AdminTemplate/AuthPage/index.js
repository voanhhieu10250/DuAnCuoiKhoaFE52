import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "../../../functions/useForm";
import {
  actLoginApi,
  actLoginPageFailed,
} from "../../../redux/actions/actLoginApi";
import * as s from "./AuthPage.styles";

export default function AuthPage() {
  const history = useHistory();
  const loadingLogin = useSelector((state) => state.userLoginReducer.loading);
  const loginErr = useSelector((state) => state.userLoginReducer.err);
  const [errInput, setErrInput] = useState(false);
  const [{ taiKhoan, matKhau }, setFormState] = useForm({
    taiKhoan: "",
    matKhau: "",
  });
  const userAdmin = JSON.parse(localStorage.getItem("UserAdmin"));
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(actLoginPageFailed(null));
    if (!taiKhoan || !matKhau) {
      setErrInput(true);
      return;
    }
    setErrInput(false);
    dispatch(actLoginApi({ taiKhoan, matKhau }, history, "/dashboard"));
  };

  if (userAdmin) return <Redirect to="/dashboard" />;

  return (
    <s.Background>
      <s.Form onSubmit={handleOnSubmit}>
        <s.FormTitle>Sign in</s.FormTitle>
        <s.FormErr hideTag={errInput || loginErr ? false : true}>
          {errInput && "Vui lòng nhập đầy đủ thông tin."}
          {loginErr && loginErr.response.data}
        </s.FormErr>
        <s.Box>
          <s.Label htmlFor="taiKhoan">Tài khoản</s.Label>
          <s.InputField
            id="taiKhoan"
            name="taiKhoan"
            value={taiKhoan}
            onChange={setFormState}
            placeholder="Tài khoản"
          />
        </s.Box>
        <s.Box>
          <s.Label htmlFor="matKhau">Mật khẩu</s.Label>
          <s.InputField
            type="password"
            name="matKhau"
            value={matKhau}
            onChange={setFormState}
            id="matKhau"
            placeholder="Mật khẩu"
          />
        </s.Box>
        <s.LoginBtn>{loadingLogin ? "Loading..." : "Submit"}</s.LoginBtn>
      </s.Form>
    </s.Background>
  );
}
