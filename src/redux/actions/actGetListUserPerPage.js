import { swaggerInstance } from "../../Axios";
import {
  LIST_USER_PER_PAGE_FAILED,
  LIST_USER_PER_PAGE_REQUEST,
  LIST_USER_PER_PAGE_SUCCESS,
} from "../constants";

export const getListUserPerPageApi = ({
  maNhom,
  tuKhoa = null,
  soTrang = 1,
  soPhanTuTrenTrang = 10,
}) => async (dispatch) => {
  try {
    dispatch(listUserPerPageRequest());
    const res = await swaggerInstance({
      url: `/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=${
        !maNhom ? "GP01" : maNhom
      }${
        tuKhoa ? `&tuKhoa=${tuKhoa}` : ""
      }&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`,
      method: "GET",
    });
    dispatch(listUserPerPageSuccess(res.data));
  } catch (error) {
    dispatch(listUserPerPageFailed(error));
  }
};

export const listUserPerPageRequest = () => ({
  type: LIST_USER_PER_PAGE_REQUEST,
});
export const listUserPerPageSuccess = (payload) => ({
  type: LIST_USER_PER_PAGE_SUCCESS,
  payload,
});
export const listUserPerPageFailed = (payload) => ({
  type: LIST_USER_PER_PAGE_FAILED,
  payload,
});
