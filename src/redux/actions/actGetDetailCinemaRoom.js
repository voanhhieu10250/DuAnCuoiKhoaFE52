import { swaggerInstance } from "../../Axios";
import {
  CINEMA_ROOM_DETAILS_FAILED,
  CINEMA_ROOM_DETAILS_REQUEST,
  CINEMA_ROOM_DETAILS_SUCCESS,
} from "../constants";

export const actGetDetailCinemaRoom = (maLichChieu) => {
  return (dispatch) => {
    dispatch(actGetDetailCinemaRoomRequest());
    swaggerInstance({
      url: `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    })
      .then((res) => {
        dispatch(actGetDetailCinemaRoomSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actGetDetailCinemaRoomFailed(err));
      });
  };
};

export const actGetDetailCinemaRoomRequest = () => ({
  type: CINEMA_ROOM_DETAILS_REQUEST,
});

export const actGetDetailCinemaRoomSuccess = (payload) => ({
  type: CINEMA_ROOM_DETAILS_SUCCESS,
  payload,
});

export const actGetDetailCinemaRoomFailed = (payload) => ({
  type: CINEMA_ROOM_DETAILS_FAILED,
  payload,
});
