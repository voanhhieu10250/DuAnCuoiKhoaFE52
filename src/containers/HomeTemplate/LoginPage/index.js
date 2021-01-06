import React from "react";
import { LoginBg, LoginForm, ToHome } from "./style";

const LoginPage = () => {
  return (
    <LoginBg>
      <LoginForm>
        <ToHome to="/">
          <img src="../../../img/loginLogo.png" />
        </ToHome>
        <div>
          Đăng nhập để được nhiều ưu đãi, mua vé <br />
          và bảo mật thông tin!
        </div>
        <form></form>
      </LoginForm>
    </LoginBg>
  );
};

export default LoginPage;
