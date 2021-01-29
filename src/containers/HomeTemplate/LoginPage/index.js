import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "../../../functions/useForm";
import {
  actLoginApi,
  actLoginPageFailed,
} from "../../../redux/actions/actLoginApi";
import * as s from "./style";
// image
import loginLogo from "../../../img/loginLogo.png";
import xController from "../../../img/icons/xController.png";
import {
  actPostNewUserApi,
  actPostNewUserFailed,
  actPostNewUserSuccess,
} from "../../../redux/actions/actPostNewUser";

const LoginPage = () => {
  const pathname = localStorage.getItem("location");
  const loading = useSelector((state) => state.userLoginReducer.loading);
  const err = useSelector((state) => state.userLoginReducer.err);
  const loadingRegis = useSelector((state) => state.PostNewUserReducer.loading);
  const regisSuccess = useSelector((state) => state.PostNewUserReducer.data);
  const regisErr = useSelector((state) => state.PostNewUserReducer.err);
  const userExisted = localStorage.getItem("UserAccount");
  const [openRegis, setOpenRegis] = useState(false);
  const [inputErr, setInputErr] = useState(false);
  const [{ taiKhoan, matKhau }, setFormState, , resetLoginForm] = useForm({
    taiKhoan: "",
    matKhau: "",
  });
  const [
    { taiKhoanRegis, matKhauRegis, email, soDt, hoTen },
    setRegisForm,
    ,
    resetRegisForm,
  ] = useForm({
    taiKhoanRegis: "",
    matKhauRegis: "",
    email: "",
    soDt: "",
    hoTen: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(actLoginPageFailed(null));
    dispatch(actPostNewUserFailed(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openRegis]);

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
  const handlSubmitRegis = (e) => {
    e.preventDefault();
    if (loadingRegis) return;
    if (!taiKhoanRegis || !matKhauRegis || !hoTen || !email || !soDt) {
      setInputErr(true);
      return;
    }
    if (regisSuccess) {
      resetRegisForm();
      setOpenRegis(false);
      dispatch(actPostNewUserSuccess(null));
      return;
    }
    if (!regisSuccess)
      dispatch(
        actPostNewUserApi({
          taiKhoan: taiKhoanRegis,
          matKhau: matKhauRegis,
          email,
          soDt,
          maNhom: "GP10",
          maLoaiNguoiDung: "KhachHang",
          hoTen,
        })
      );
    setInputErr(false);
  };
  if (userExisted) return <Redirect to="/" />;
  return (
    <s.LoginBg>
      <s.FormGroups>
        <s.LoginForm hideTag={openRegis} onSubmit={handleSubmit}>
          <s.ToHome to="/">
            <img src={loginLogo} alt="" />
          </s.ToHome>
          <s.SubTitle hideTag={!err ? true : false}>
            {err && err.response.data}
          </s.SubTitle>
          <div className="mb-1">
            <s.InputField
              name="taiKhoan"
              value={taiKhoan}
              onChange={setFormState}
              id="username"
              type="text"
              placeholder="Tài khoản"
            ></s.InputField>
          </div>
          <div className="mb-1">
            <s.InputField
              name="matKhau"
              value={matKhau}
              onChange={setFormState}
              id="password"
              type="password"
              placeholder="Mật khẩu"
            ></s.InputField>
          </div>
          <div className="mb-3 mt-2">
            <s.SubmitBtn>{loading ? "Loading ..." : "Đăng nhập"}</s.SubmitBtn>
          </div>
          <div>
            Đăng nhập để được nhiều ưu đãi, mua vé <br />
            và bảo mật thông tin!
          </div>
          <s.AskForRegis>
            Chưa có tài khoản?{" "}
            <s.RegisLink
              onClick={() => {
                setOpenRegis(true);
                resetLoginForm();
              }}
            >
              Đăng ký
            </s.RegisLink>
          </s.AskForRegis>
        </s.LoginForm>
        <s.RegisForm openRegisForm={openRegis} onSubmit={handlSubmitRegis}>
          <s.CloseForm
            onClick={() => {
              setOpenRegis(false);
              resetRegisForm();
            }}
          >
            <img src={xController} alt="Close form button" />
          </s.CloseForm>
          <s.RegisTitle>Đăng ký</s.RegisTitle>
          <s.SubTitle hideTag={regisErr || inputErr ? true : false}>
            {regisSuccess ? "Đăng ký thành công!" : "Nhanh chóng và dễ dàng."}
          </s.SubTitle>
          <s.SubTitle hideTag={regisErr || inputErr ? false : true} formError>
            {regisErr && regisErr.response.data}
            {inputErr && "Vui lòng nhập đầy đủ thông tin."}
          </s.SubTitle>
          <s.RegisInput
            name="hoTen"
            value={hoTen}
            onChange={setRegisForm}
            type="text"
            placeholder="Họ tên"
          />
          <s.RegisInput
            name="taiKhoanRegis"
            value={taiKhoanRegis}
            onChange={setRegisForm}
            type="text"
            placeholder="Tài khoản"
          />
          <s.RegisInput
            name="matKhauRegis"
            value={matKhauRegis}
            onChange={setRegisForm}
            type="password"
            placeholder="Mật khẩu"
          />
          <s.RegisInput
            name="email"
            value={email}
            onChange={setRegisForm}
            type="text"
            placeholder="Email"
          />
          <s.RegisInput
            name="soDt"
            value={soDt}
            onChange={setRegisForm}
            type="text"
            placeholder="Số điện thoại"
          />
          {regisSuccess ? (
            <s.SubmitBtn>Bắt đầu đăng nhập!</s.SubmitBtn>
          ) : (
            <s.SubmitBtn className="mt-1">
              {loadingRegis ? "Loading ..." : "Đăng ký"}
            </s.SubmitBtn>
          )}
        </s.RegisForm>
      </s.FormGroups>
    </s.LoginBg>
  );
};

export default LoginPage;
