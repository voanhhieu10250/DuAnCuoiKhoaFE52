import {
  LOGIN_PAGE_FAILED,
  LOGIN_PAGE_REQUEST,
  LOGIN_PAGE_SUCCESS,
} from "../constants";
import Axios from "axios";

export const actLoginApi = (user, history) => {
  return async (dispatch) => {
    try {
      dispatch(actLoginPageRequest());
      const res = await Axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: user,
      });
      dispatch(actLoginPageSuccess(res.data));
      localStorage.setItem("UserAccount", JSON.stringify(res.data));
      history.back();
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
