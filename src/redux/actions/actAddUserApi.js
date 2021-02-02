import { swaggerInstance } from "../../Axios";
import {
  ADD_NEW_USER_FAILED,
  ADD_NEW_USER_REQUEST,
  ADD_NEW_USER_SUCCESS,
} from "../constants";

export const actPostNewUserAdminApi = (data) => async (dispatch) => {
  try {
    dispatch(actPostNewUserAdminRequest());
    const res = await swaggerInstance({
      url: "/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data,
    });

    dispatch(actPostNewUserAdminSuccess(res.data));
  } catch (error) {
    dispatch(actPostNewUserAdminFailed(error));
  }
};
export const actPostNewUserAdminRequest = () => ({
  type: ADD_NEW_USER_REQUEST,
});
export const actPostNewUserAdminSuccess = (payload) => ({
  type: ADD_NEW_USER_SUCCESS,
  payload,
});
export const actPostNewUserAdminFailed = (payload) => ({
  type: ADD_NEW_USER_FAILED,
  payload,
});
