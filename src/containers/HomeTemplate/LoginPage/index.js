import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { actLoginApi } from "../../../redux/actions/actLoginApi";
import { InputField, LoginBg, LoginBtn, LoginForm, ToHome } from "./style";

const LoginPage = () => {
  const pathname = localStorage.getItem("location");
  const loading = useSelector((state) => state.userLoginReducer.loading);
  const err = useSelector((state) => state.userLoginReducer.err);
  const userExisted = localStorage.getItem("UserAccount");
  const taiKhoan = useRef();
  const matKhau = useRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      actLoginApi(
        {
          taiKhoan: taiKhoan.current.value.trim(),
          matKhau: matKhau.current.value.trim(),
        },
        history,
        pathname ? pathname : "/"
      )
    );
  };
  if (userExisted) return <Redirect to="/" />;
  return (
    <LoginBg>
      <LoginForm>
        <ToHome to="/">
          <img src="../../../img/loginLogo.png" alt="" />
        </ToHome>
        {err ? (
          <div className="mb-3 text-danger">{err.response.data}</div>
        ) : null}
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <InputField
              ref={taiKhoan}
              id="username"
              type="text"
              placeholder="Tài khoản"
            ></InputField>
          </div>
          <div className="mb-1">
            <InputField
              ref={matKhau}
              id="password"
              type="password"
              placeholder="Mật khẩu"
            ></InputField>
          </div>
          <div className="mb-3">
            <LoginBtn type="submit">
              {loading ? "Loading ..." : "Đăng nhập"}
            </LoginBtn>
          </div>
        </form>

        <div>
          Đăng nhập để được nhiều ưu đãi, mua vé <br />
          và bảo mật thông tin!
        </div>
      </LoginForm>
    </LoginBg>
  );
};

export default LoginPage;
