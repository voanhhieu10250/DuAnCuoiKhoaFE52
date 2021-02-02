import { swaggerInstance } from "../../Axios";
import {
  GET_LIST_USER_FAILED,
  GET_LIST_USER_REQUEST,
  GET_LIST_USER_SUCCESS,
} from "../constants";

export const actGetListUserApi = (maNhom = "GP01") => async (dispatch) => {
  try {
    dispatch(actGetListUserRequest());
    const res = await swaggerInstance({
      url: `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`,
      method: "GET",
    });
    dispatch(actGetListUserSuccess(res.data));
  } catch (error) {
    dispatch(actGetListUserFailed(error));
  }
};

export const actGetListUserRequest = () => ({
  type: GET_LIST_USER_REQUEST,
});
export const actGetListUserSuccess = (payload) => ({
  type: GET_LIST_USER_SUCCESS,
  payload,
});
export const actGetListUserFailed = (payload) => ({
  type: GET_LIST_USER_FAILED,
  payload,
});
