import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "../../../functions/useForm";
import { actLoginApi } from "../../../redux/actions/actLoginApi";
import { InputField, LoginBg, LoginBtn, LoginForm, ToHome } from "./style";
// image
import loginLogo from "../../../img/loginLogo.png";

const LoginPage = () => {
  const pathname = localStorage.getItem("location");
  const loading = useSelector((state) => state.userLoginReducer.loading);
  const err = useSelector((state) => state.userLoginReducer.err);
  const userExisted = localStorage.getItem("UserAccount");
  const [{ taiKhoan, matKhau }, setFormState] = useForm({
    taiKhoan: "",
    matKhau: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      actLoginApi(
        {
          taiKhoan,
          matKhau,
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
          <img src={loginLogo} alt="" />
        </ToHome>
        {err && <div className="mb-3 text-danger">{err.response.data}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <InputField
              name="taiKhoan"
              value={taiKhoan}
              onChange={setFormState}
              id="username"
              type="text"
              placeholder="Tài khoản"
            ></InputField>
          </div>
          <div className="mb-1">
            <InputField
              name="matKhau"
              value={matKhau}
              onChange={setFormState}
              id="password"
              type="password"
              placeholder="Mật khẩu"
            ></InputField>
          </div>
          <div className="mb-3 mt-2">
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
