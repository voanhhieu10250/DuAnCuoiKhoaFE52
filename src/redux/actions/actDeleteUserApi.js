import { swaggerInstance } from "../../Axios";
import {
  DELETE_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from "../constants";

export const actDeleteUserApi = (taiKhoan) => async (dispatch) => {
  try {
    dispatch(actDeleteUserRequest());
    const res = await swaggerInstance({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
    });
    dispatch(actDeleteUserSuccess(res));
  } catch (error) {
    dispatch(actDeleteUserFailed(error));
  }
};

export const actDeleteUserRequest = () => ({
  type: DELETE_USER_REQUEST,
});
export const actDeleteUserSuccess = (payload) => ({
  type: DELETE_USER_SUCCESS,
  payload,
});
export const actDeleteUserFailed = (payload) => ({
  type: DELETE_USER_FAILED,
  payload,
});
