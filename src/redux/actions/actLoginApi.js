import {
  LOGIN_PAGE_FAILED,
  LOGIN_PAGE_REQUEST,
  LOGIN_PAGE_SUCCESS,
} from "../constants";
import { swaggerInstance } from "../../Axios";

export const actLoginApi = (user, history, pathname) => {
  return async (dispatch) => {
    try {
      dispatch(actLoginPageRequest());
      const res = await swaggerInstance({
        url: "/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: user,
      });
      dispatch(actLoginPageSuccess(res.data));
      if (res.data.maLoaiNguoiDung === "QuanTri") {
        localStorage.setItem("UserAdmin", JSON.stringify(res.data));
        swaggerInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.accessToken}`;
        const sidebarstate = JSON.parse(localStorage.getItem("sidebarstate"));
        if (!sidebarstate)
          localStorage.setItem("sidebarstate", JSON.stringify(true));
      }
      if (res.data.maLoaiNguoiDung !== "QuanTri" && pathname === "/dashboard") {
        alert("Không có quyền truy cập!");
        history.push("/");
      } else {
        localStorage.setItem("UserAccount", JSON.stringify(res.data));
        swaggerInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.accessToken}`;
        history.push(pathname);
      }
    } catch (err) {
      dispatch(actLoginPageFailed(err));
    }
  };
};

export const actLoginPageRequest = () => {
  return {
    type: LOGIN_PAGE_REQUEST,
  };
};
export const actLoginPageSuccess = (payload) => {
  return {
    type: LOGIN_PAGE_SUCCESS,
    payload,
  };
};
export const actLoginPageFailed = (payload) => {
  return {
    type: LOGIN_PAGE_FAILED,
    payload,
  };
};
