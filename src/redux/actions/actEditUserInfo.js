import { swaggerInstance } from "../../Axios";
import {
  PUT_USER_INFO_FAILED,
  PUT_USER_INFO_REQUEST,
  PUT_USER_INFO_SUCCESS,
} from "../constants";

export const actPutUserInfoApi = (data) => async (dispatch) => {
  try {
    dispatch(actPutUserInfoRequest());
    const res = await swaggerInstance({
      url: "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data,
    });
    dispatch(actPutUserInfoSuccess(res.data));
  } catch (error) {
    dispatch(actPutUserInfoFailed(error));
  }
};

export const actPutUserInfoRequest = () => ({
  type: PUT_USER_INFO_REQUEST,
});
export const actPutUserInfoSuccess = (payload) => ({
  type: PUT_USER_INFO_SUCCESS,
  payload,
});
export const actPutUserInfoFailed = (payload) => ({
  type: PUT_USER_INFO_FAILED,
  payload,
});
