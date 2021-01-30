import { swaggerInstance } from "../../Axios";
import {
  POST_NEW_USER_FAILED,
  POST_NEW_USER_REQUEST,
  POST_NEW_USER_SUCCESS,
} from "../constants";

export const actPostNewUserApi = (data) => async (dispatch) => {
  try {
    dispatch(actPostNewUserRequest());
    const res = await swaggerInstance({
      url: "/QuanLyNguoiDung/DangKy",
      method: "POST",
      data,
    });
    dispatch(actPostNewUserSuccess(res.data));
  } catch (err) {
    dispatch(actPostNewUserFailed(err));
  }
};

export const actPostNewUserRequest = () => ({
  type: POST_NEW_USER_REQUEST,
});
export const actPostNewUserSuccess = (payload) => ({
  type: POST_NEW_USER_SUCCESS,
  payload,
});
export const actPostNewUserFailed = (payload) => ({
  type: POST_NEW_USER_FAILED,
  payload,
});
